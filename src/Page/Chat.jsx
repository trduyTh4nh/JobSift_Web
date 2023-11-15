import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom';
// import dataUserChat from '../assets/dummy-data/dataUserChat';
import InfiniteScroll from 'react-infinite-scroll-component';
import dataUserChat from '../assets/dummy-data/dataUserChat';
import 'remixicon/fonts/remixicon.css'
import { API_URL } from '../ipConfig';
import './Chat.css'
import axios from 'axios';
import { socket } from '../io/socket';
const Chat = () => {
  const [data, setData] = useState(dataUserChat)
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')))
  const [selectedID, setID] = useState(-1)
  useEffect(() => {
    socket.on('newMsg', (e) => {
      if(e.body.id_user == user.id_user){
          axios.post(`http://${API_URL}:3001/chat`, {
          "id_ntd": user.id_ntd
        }).then(e => {
          setData(e.data)
        }).catch(e => {
          alert('Lỗi: ' + e)
        })
      }
    })
    console.log(user)
    axios.post(`http://${API_URL}:3001/chat`, {
        "id_ntd": user.id_ntd
      }).then(e => {
        console.log(e.data)
        setData(e.data)
      }).catch(e => {
        alert('Lỗi: ' + e)
      })
  }, [])

  const handleClick = (index, id) => {
    const temp = data.map((d, i) => {
      if(d.selected && i != index){
        return {
          ...d,
          selected: false
        }
      }
      if(i == index){
        return {
          ...d,
          selected: true
        }
      }
      return d
    })
    setData(temp)
    console.log(`id: ${id}`)
    setID(id)
  }
  return (
    <div className='main__layout-mini-ListPost'>
      <div className="package__chat">
        <div className='package__chat_listUser'>
          <div className='package__chat_listUser_top'>
            <div className='edit__seach__box_chat'>
              <input className='seach__input' type="text" placeholder='Search' />
              <i class="ri-search-line icon-remix"></i>
            </div>

            <button>
              <i class="ri-add-circle-line icon-remix"></i>
            </button>
          </div>

          <InfiniteScroll height={0} className='wrap__messages_list' dataLength={dataUserChat.length} loader={<p>đợi chút =))...</p>}>
            <ul>
              {data.map((user, index) => (
                <ContactComponent onClick={() => handleClick(index, user.id)} user={user}/>
              ))}
            </ul>
          </InfiniteScroll>

        </div>
        <MessengerComponent id={selectedID}/>
      </div>
    </div>
  )
}
const ChatBubble = ({key, chat, message, isSelf, uploaded, user}) => {
    useEffect(() => {
      console.log(`i am here`)
    }, [])
    const [msgUploaded, setUploaded] = useState(uploaded)
    return (
      <div className={isSelf ? msgUploaded ? 'bubble__wrapper self' : 'bubble__wrapper self not_uploaded' : 'bubble__wrapper'}>
        <div className='bubble_chat'>
          <p>{message}</p>
        </div>
      </div>
    )
}
const MessengerComponent = ({id}) => {
  const [chatData, setData] = useState([])
  const [idChat, setID] = useState(id)
  const [msgData, setMsgData] = useState([])
  const [msg, setmsg] = useState('')
  const ref = useRef(null)
  const user = JSON.parse(localStorage.getItem('user'))
  useEffect(() => {
    socket.on('newMsg', (e) => {
        console.log(msgData)
        if(e.body.id_chat == id){
          axios.post(`http://${API_URL}:3001/getmsg`, {
            "id_chat": id,
            "ntd": 1
          }).then(e => {
            console.log(e.data)
            const temp = e.data.map((data) => {
              return {message: data.content ? data.content : data.sendlast, id: data.id, isSelf: data.id_user == user.id_user, uploaded: true}
            })
            console.log(temp)
            setMsgData(temp)
          })
        }
    })
    console.log('idChat changed: ' + id)
    axios.post(`http://${API_URL}:3001/getmsg`, {
      "id_chat": id,
      "ntd": 1
    }).then(e => {
      console.log(e.data)
      const temp = e.data.map((data) => {
        return {message: data.content ? data.content : data.sendlast, id: data.id, isSelf: data.id_user == user.id_user, uploaded: true}
      })
      console.log(temp)
      setMsgData(temp)
    })
  }, [id])
  useEffect(() => {
    if(ref.current){
      ref.current.scrollTop = ref.current.scrollHeight
    }
  }, [msgData])
  if(id < 0){
    return (
      <div className='package_messenger'>
        <div className='no_msg'>
          <h1>Vui lòng chọn đoạn chat</h1>
          <p>Hãy chọn đoạn chat ở thanh bên</p>
          <i class="ri-arrow-left-line"></i>
        </div>
      </div>
    )
  }

  const handleChange = (content) => {
    setmsg(content.target.value)
  }
  const handlePost = () => {
    console.log(id)
    axios.post(`http://${API_URL}:3001/postmsg`, {
      "content": msg,
      "id_user": user.id_user,
      "id_chat": id,
      "time": (new Date()),
    }).then(e => {
      setMsgData([ ...msgData, {message: msg, isSelf: true, uploaded: true, id: id} ])
      socket.emit('newMsg', {content: msg, id_chat: id, id_user: user.id_user})
    }).catch(e => {
      alert('error: ' + e)
    })
    
  }
  
  return (
    <div className='package_messenger'>
      <div className='messenger__header'>
        <div className='wrap__title'>
          <div className='circle__thingy'></div>
          <h2>{msgData[0] ? msgData[0].username : ''}</h2>
        </div>
      </div>
      <div ref={ref} className='messenger__body'>
        <div className='messenger__bubbles'>
          {msgData.length > 0 ? msgData.map((e) => (
            <ChatBubble chat={e.id} user={user} uploaded={e.uploaded} message={e.message} isSelf={e.isSelf}/>
          )) : ''}
        </div>
      </div>
      <div className='messenger__footer'>
        <input onChange={(e) => {handleChange(e)}} className='input_chat' placeholder='Chat ở đây'/>
        <div className='btn_wrap'>
          <button className='send_btn' onClick={handlePost}>
            <i class="ri-send-plane-2-fill"></i>
          </button>
        </div>
      </div>
    </div>
  )
}
const ContactComponent = ({user, onClick, selectClass}) => {
  
 return (
    <li onClick={onClick} key={user.id}>

      <div className={`Single_user_messege ${user.selected ? 'selected' : ''}`}>
        <div className='avt_user_chat'>
          <img width={64} height={64} src={user.avtuser} alt="" className='img_user' />
        </div>
        <div className='info_mess'>
          <span>{user.username}</span>
          <p>{user.sendlast}</p>
        </div>
      </div>

    </li>
 )
}
export default Chat
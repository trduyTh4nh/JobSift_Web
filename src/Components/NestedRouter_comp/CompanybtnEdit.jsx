import React, { useEffect } from 'react'
import LogoCompanyImg from '../../assets/images/logo_company.svg';
import { useState } from 'react';
import axios from 'axios';
import { API_URL } from '../../ipConfig';
import layerMan from '../../assets/layerman.svg'
import layerWoman from '../../assets/layerwomen.svg'
import layer from '../../assets/layer3.svg'
import { storage } from '../../firebase';
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';

const Company = {
  logo_comp: LogoCompanyImg,
  email_doanh_nghiep: 'email@gmail.com',
  name_comp: 'Tập đoàn Công nghệ – Viễn thông Quân đội',
  dia_chi: 'Lô D26, Khu Đô Thị Mới, Cầu Giấy, Hà Nội, Việt Nam',
  toa_do: '21.0253178,105.7785518,16',
  mo_ta: 'Lorem ipsum dolor sit amet consectetur. Odio nullam elit feugiat vitae fermentum eget suspendisse id at. Donec imperdiet dui arcu ultrices condimentum tincidunt pellentesque suspendisse. Elit suspendisse purus tortor aliquam sit integer morbi neque nibh. Sed in sit in egestas massa ac neque. Sollicitudin at integer ipsum bibendum donec aliquet rhoncus commodo tellus. Praesent suspendisse diam faucibus consequat sit purus. In nibh vitae elit vestibulum eu amet. Proin scelerisque tristique tellus at metus.',
}

const CompanybtnEdit = () => {

  const [fromData, setFormData] = useState({})

  const [enterprise, setEnterprise] = useState({})

  const [logoCurrent, setLogoCurrent] = useState()

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'))

    if (user !== null) {
      axios.post(`http://${API_URL}:3001/getdnofntd/${user.id_dn}`)
        .then((respone) => {
          setEnterprise(respone.data.enterprise)
          console.log(respone.data.enterprise)
        })
        .catch((error) => {
          console.log(error)
        })
    }
  }, [])


  const handleEditInfo = () => {
    console.log(fromData)

    // axios.post(`http://${API_URL}:3001/signupntd`, fromData, {
    //   headers: {
    //     'Content-Type': 'application/json'
    //   }
    // }).then((result) => {


    // }).catch((error) => {
    //   alert("Email của bạn hoặc của doanh nghiệp đã tồn tại")
    //   console.error(error)
    // })

  }


  const [logo, setLogo] = useState('')

  const handleImageChange = (event) => {

    const file = event.target.files[0]

    if (file) {
      const reader = new FileReader();

      reader.onloadend = () => {
        setLogo(reader.result)
      }

      reader.readAsDataURL(file)
    }

    setLogoCurrent(file)


    if (logoCurrent) {
      const storageRef = ref(storage, `images_nha_tuyen_dung/${logoCurrent.name}`);

      const uploadTask = uploadBytesResumable(storageRef, logoCurrent);

      uploadTask.on('state_changed',
        (snapshot) => {
          const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log('Upload is ' + progress + '% done');
          // eslint-disable-next-line default-case
          switch (snapshot.state) {
            case 'paused':
              console.log('Upload is paused');
              break;
            case 'running':
              console.log('Upload is running');
              break;
          }
        },
        (error) => {
          console.log(error)
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setFormData({
              ...fromData,
              imglogo_firebase: downloadURL
            })
            console.log('File available at', downloadURL);
          });
        }
      );

    } else {
      console.log('No image selected');
    }

  }



  return (
    <div className='main__layout-mini-myCompany'>
      <div className="company__header">
        <div className="company__header-face">
          <img className='company__logo-main' src={enterprise ? enterprise.logo_dn : ""} alt="" />
          <span className='company__name-comp'>{enterprise ? enterprise.name_dn : ""}</span>
        </div>
        <div className="profile__header-btn">
          <button className='profile__btn-cancel'>Cancel</button>
          <button className='profile__btn-save' onClick={handleEditInfo}>Save</button>
        </div>

      </div>

      <div className="wrap-company">
        <div className="company__body-face">
          <div className="company__body-info-user">
            <span>Name</span>
            <input
              type="text"
              value={enterprise ? enterprise.name_dn : fromData.namedn}
              onChange={(event) => {
                enterprise.name_dn = event.target.value
                setFormData({
                  ...fromData,
                  namedn: event.target.value
                });

              }}
              placeholder='Full name'
            />

          </div>

          <div className="company__body-info-user1">
            <span>Logo</span>
            <input type="file" onChange={handleImageChange} placeholder='' />
          </div>

          <div className="company__body-info-user1">
            <img src={logo} style={{ width: 100, height: 100, borderRadius: 20, borderWidth: 2, borderColor: "#000" }} alt="" />
          </div>

          <div className="company__body-info-user">
            <span>Address</span>
            <input type="ptext" onChange={(text) => {
              enterprise.address = text.target.value
              setFormData({
                ...fromData,
                address: text.target.value
              })
            }} value={enterprise ? enterprise.address : ""} placeholder='Full name' />
          </div>

          <div className="company__body-info-user">
            <span>Email</span>
            <input type="text" onChange={(text) => {
              enterprise.email_dn = text.target.value
              setFormData(
                {
                  ...fromData,
                  emaildn: text.target.value
                }
              )
            }} value={enterprise ? enterprise.email_dn : ""} placeholder='Full name' />
          </div>
        </div>
      </div>

      <div className='company__body-description'>
        <span>Description</span>
        <div className='company__body-info-user'>
          <input type="text" value={enterprise ? enterprise.description : ""}  onChange={(text) => {
            enterprise.description = text.target.value
            setFormData({
              ...fromData,
              description: text.target.value
            })
          }} placeholder='Description' />
        </div>
      </div>


      <div className="wrap-footer">
        <div className='wrap-img-footer'>
          <div className="layerman">
            <img src={layerMan}></img>
          </div>
          <div className="layerwoman">
            <img src={layerWoman}></img>
          </div>
        </div>
      </div>
      <div className="layerman-1">
        <img src={layer}></img>
      </div>
    </div>
  )
}

export default CompanybtnEdit
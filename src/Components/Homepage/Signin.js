import React, { useState } from "react";
import "./Signin.css";


export default function Modal() {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  if(modal) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }

  return (
    <>
      <button onClick={toggleModal} className="btn-modal" >
        Sign in
      </button>

      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            <h2 className="signin" >Sign in</h2>                        
            <button className="close-modal" onClick={toggleModal} style={{marginTop:12,marginRight:5}}>
              X
            </button>
            <div className="content"> 
              <div>
                <a style={{fontSize:20}}>Email</a>
                <div>
                  <input type="text"/>
                </div>
              </div>
              <div style={{marginTop:8}}>
                <a style={{fontSize:20,marginTop:10}} >Password</a>
                <div>
                  <input type="text"/>
                </div>
              </div>    
            <div style={{fontSize:20,marginTop:20}}>
              <a>
              Don’t have an account?
              </a>
              <a style={{marginLeft:10,}}>Sign up</a>
              <button className="btn_signin" style={{fontSize:20,marginLeft:15,paddingInline:15,paddingBlock:8,}}>Sign in</button>
            </div>
          </div>
          </div>
        </div>
      )}
      
    </>
  );
}
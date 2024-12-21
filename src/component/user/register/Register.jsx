import React, { useState } from "react";
import { apiClient } from "../../../api";
import { toast } from "react-toastify";
import axios from "axios";

function Register() {
    const [inputValue, setInputValue] = useState({username:'',name: '', avatar_url:''})
    
    const inputChangeHandeler = (e)=>{
        const {name,value} = e.target;
         setInputValue(prev => ({...prev, [name]:value}))
    }
    const formHandler = (e) => {
        e.preventDefault() 
        apiClient.post('/users/adduser',inputValue)
        .then(res => {            
            toast.success(res.data.msg)
            setInputValue({username:'',name: '', avatar_url:''})
        })
        .catch((err) =>{
        console.log(err);
        
            
            toast.error('registration unsuccessful')
        })
    }

  return (
    <section className="vh-100" style={{ "background-color": "#eee" }}>
      <div className="container h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-lg-12 col-xl-11">
            <div
              className="card text-black"
              style={{ "border-radius": "25px" }}
            >
              <div className="card-body p-md-5">
                <div className="row justify-content-center">
                  <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                    <img
                      src="/register.png"
                      alt=""
                      height={120}
                      className="register mb-4"
                    />

                    <form className="mx-1 mx-md-4" onSubmit={formHandler}>
                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                        <div
                          data-mdb-input-init
                          className="form-outline flex-fill mb-0"
                        >
                          <input
                            type="text"
                            id="form3Example1c"
                            className="form-control"
                            name="username"
                            value={inputValue.username}
                            onChange={inputChangeHandeler}
                          />
                          <label className="form-label" for="form3Example1c">
                            User Name
                          </label>
                        </div>
                      </div>

                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                        <div
                          data-mdb-input-init
                          className="form-outline flex-fill mb-0"
                        >
                          <input
                            type="text"
                            id="form3Example3c"
                            className="form-control"
                            name="name"
                            value={inputValue.name}
                            onChange={inputChangeHandeler}
                          />
                          <label className="form-label" for="form3Example3c">
                            Name
                          </label>
                        </div>
                      </div>

                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                        <div
                          data-mdb-input-init
                          className="form-outline flex-fill mb-0"
                        >
                          <input
                            type="text"
                            id="form3Example4c"
                            className="form-control"
                            name="avatar_url"
                            value={inputValue.avatar_url}
                            onChange={inputChangeHandeler}
                          />
                          <label className="form-label" for="form3Example4c">
                            avatar_url
                          </label>
                        </div>
                      </div>

                      <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                        <button
                          type="submit"
                          data-mdb-button-init
                          data-mdb-ripple-init
                          className="btn btn-primary btn-lg"
                        >
                          Register
                        </button>
                      </div>
                    </form>
                  </div>
                  <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                    <img
                      src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                      className="img-fluid"
                      alt="Sample image"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Register;

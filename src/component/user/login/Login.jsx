import React, { useState } from "react";
import { apiClient } from "../../../api";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";


function Login() {
  const [input, setInput] = useState({ username: "", password: "" });
  const navigation = useNavigate()
  const inputHandler = (e) => {
    const {name,value} = e.target
    setInput(prev => ({...prev, [name]:value}))
  }
const sendLoginForm = (e)=>{
e.preventDefault()
apiClient.post('/users/login',input)
.then(res =>{
  if(res.data.success){
     toast.success(res.data.msg)
     navigation('/user/profile')
  }
})
.catch(err => {
  console.log(err);
if(!err.response.data.success){
  toast.error(err.data.msg)
}
})
}

  return (
    <div
      className="container d-flex justify-content-center align-items-center flex-column"
      style={{ height: "60vh" }}
    >
      <h1>User Login</h1>
      <form className="form w-50 border border-dark-subtle p-3 rounded-4" onSubmit={sendLoginForm}>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">
            user name
          </label>
          <input
            type="text"
            class="form-control"
            name="username"
            value={input.username}
            onChange={inputHandler}
            aria-describedby="emailHelp"
          />
          <div id="emailHelp" class="form-text">
            We'll never share your username with anyone else.
          </div>
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">
            Password
          </label>
          <input
            type="password"
            class="form-control"
           name="password"
           value={input.password}
           onChange={inputHandler}
          />
        </div>
        <div class="mb-3 form-check">
          <input type="checkbox" class="form-check-input" id="exampleCheck1" />
          <label class="form-check-label" for="exampleCheck1">
            Check me out
          </label>
        </div>
        <button type="submit" class="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Login;

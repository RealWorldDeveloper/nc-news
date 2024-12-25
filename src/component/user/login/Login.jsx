import React, { useState } from "react";
import { apiClient } from "../../../api";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useUser } from "../../../UserContext";
import Cookies from "js-cookie";

function Login() {
  const [input, setInput] = useState({ username: "", password: "" });
  const { setActive, setToken} = useUser();
  const navigation = useNavigate();
  const inputHandler = (e) => {
    const { name, value } = e.target;
    setInput((prev) => ({ ...prev, [name]: value }));
  };
  const sendLoginForm = (e) => {
    e.preventDefault();
    apiClient
      .post("/users/login", input)
      .then((res) => {
        
        if (res.data.success) {
          const token = res.data.token
          setToken(token);
          setActive(true);
          toast.success(res.data.msg);
          navigation("/user/profile");
        }
      })
      .catch((err) => {
        if (err) {
          toast.error(err.response.data.msg);
        }
      });
  };

  return (
    <div
      className="container d-flex justify-content-center align-items-center flex-column"
      style={{ height: "60vh" }}
    >
      <h1>User Login</h1>
      <form
        className="form w-50 border border-dark-subtle p-3 rounded-4"
        onSubmit={sendLoginForm}
      >
        <div className="mb-3">
          <label className="form-label">user name</label>
          <input
            type="text"
            className="form-control"
            name="username"
            value={input.username}
            onChange={inputHandler}
            aria-describedby="emailHelp"
            required
          />
          <div id="emailHelp" className="form-text">
            We'll never share your username with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label for="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            name="password"
            value={input.password}
            onChange={inputHandler}
            required
          />
        </div>
        <div className="mb-3 form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
          />
          <label className="form-check-label" for="exampleCheck1">
            Check me out
          </label>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Login;

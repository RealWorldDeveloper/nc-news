import { React, useState } from "react";
import Header from "./component/header/Header";
import Home from "./component/homepage/Home";
import Login from "./component/user/login/Login";
import Register from "./component/user/register/Register";
import Topic from "./component/topics/Topic";
import Footer from "./component/footer/Footer";
import ArticleCardBody from "./component/homepage/articles/SingleArticleCard";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import User from "./component/user/User";
import Profile from "./component/user/profile/Profile";

function App() {
  return (
    <>
      <BrowserRouter>

        <Header />
        
        <Routes>
         <Route path="/" element = {<Home />}/>
         <Route path="/:article_id" element= {<ArticleCardBody/>} />
         <Route path="/users" element= {<User/>} />
         <Route path="/user/login" element= {<Login/>} />
         <Route path="/user/register" element= {<Register/>} />
         <Route path="/user/profile" element= {<Profile/>} />
         <Route path="/topics" element= {<Topic/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

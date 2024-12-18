import { React, useState } from "react";
import Header from "./component/header/Header";
import Home from "./component/homepage/Home";
import User from "./component/user/User";
import Topic from "./component/topics/Topic";
import Footer from "./component/footer/Footer";
import Article_Card_id from "./component/homepage/articles/ArticleCardId";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";



function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        
        <Routes>
         <Route path="/" element = {<Home />}/>
         <Route path="/:article_id" element= {<Article_Card_id/>} />
         <Route path="/users" element= {<User/>} />
         <Route path="/topics" element= {<Topic/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

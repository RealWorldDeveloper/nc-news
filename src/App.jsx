import { React, useState } from "react";
import Header from "./component/header/Header";
import Home from "./component/homepage/Home";
import User from "./component/user/User";
import Footer from "./component/footer/Footer";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Article_Card_id from "./component/homepage/articles/ArticleCardId";


function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        
        <Routes>
         <Route path="/" element = {<Home />}/>
         <Route path="/:article_id" element= {<Article_Card_id/>} />
         <Route path="/users" element= {<User/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

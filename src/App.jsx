import { React, useState } from "react";
import Header from "./component/header/Header";
import Home from "./component/homepage/Home";
import Footer from "./component/footer/Footer";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <Home />
      <Footer />
    </>
  );
}

export default App;

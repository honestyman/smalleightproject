import React from "react";
import { useState, useEffect } from "react";
import Header from "../component/Header";

import { useNavigate } from "react-router-dom";
import Footer from "../component/Footer";
import NewsContent from "../component/news/NewsContent";

const News=()=>{
  const [name, setName]=useState("")
  const [password, setPassword]=useState("")

  const navigate= useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return(
    <div className="w-100">
      <Header/>
      <div className="w-full">
        <NewsContent/> 
      </div>
      {/* <TopService/>
      <TopColumn/> */}
      <Footer/>
    </div>
  );
  
};
export default News;
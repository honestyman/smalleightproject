import React from "react";
import { useState, useEffect } from "react";
import Header from "../component/Header";

import { useNavigate } from "react-router-dom";
import Footer from "../component/Footer";
import NewsContent from "../component/news/NewsContent";
import ColumnContent from "../component/column/ColumnContent";

const Column=()=>{
  const [name, setName]=useState("")
  const [password, setPassword]=useState("")

  const navigate= useNavigate();


  return(
    <div className="w-100">
      <Header/>
      {/* <NewsContent/>  */}
      <div className="w-full bg-gradient-to-br from-[#FB2407] to-[#B40100]">
        <ColumnContent/>
      </div>
      <Footer/>
    </div>
  );
  
};
export default Column;
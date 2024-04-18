import React from "react";
import { useState, useEffect } from "react";
import Header from "../component/Header";

import { Outlet, useNavigate } from "react-router-dom";
import Footer from "../component/Footer";
import ToolsContent from "../component/tools/ToolsContent";
import ToolsNav from "../component/tools/ToolNav";

const Tools=()=>{
  const [name, setName]=useState("")
  const [password, setPassword]=useState("")

  const navigate= useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return(
    <div className="w-100">
      <Header/>
      <div className="w-full flex">
        <ToolsNav/>
        <Outlet/> 
      </div>
      <Footer/>
    </div>
  );
  
};
export default Tools;
import React from "react";
import { useState, useEffect } from "react";
import Header from "../component/Header";

import { useNavigate } from "react-router-dom";
import GrowingText from "../component/GrowingText";
import TopNews from "../component/top/TopNews";
import TopService from "../component/top/TopService";
import TopColumn from "../component/top/TopColumn";
import Footer from "../component/Footer";
import 'intersection-observer';


const Top=()=>{
  const [name, setName]=useState("")
  const [password, setPassword]=useState("")

  const navigate= useNavigate();


  return(
    <div className="w-100">
      <Header/>
      <div className="w-full h-[900px] sp:h-[600px] bg-gradient-to-br from-[#FB2407] to-[#FD6E6A] rounded-sm">
        <div className="w-full h-full flex justify-center items-center bg-gradient-to-t from-[#FD6E6A] to-red-700">
          <GrowingText/>
        </div>
      </div>
      {/* <TopNews/>  */}
      <TopService/>
      {/* <TopColumn/> */}
      <Footer/>
    </div>
  );
  
};
export default Top;
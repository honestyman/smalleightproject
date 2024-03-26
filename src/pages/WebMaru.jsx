import React from "react";
import { useState, useEffect } from "react";
import Header from "../component/Header";

import { useNavigate } from "react-router-dom";

import Footer from "../component/Footer";
import 'intersection-observer';
import WebMaruTop from "../component/webmaru/WebMaruTop";
import WebMaruContnet from "../component/webmaru/WebMaruContent";


const WebMaru=()=>{

  const navigate= useNavigate();


  return(
    <div className="w-100">
      <Header/>
      <div className="w-full h-[700px] bg-gradient-to-br from-[#FB2407] to-[#FD6E6A] rounded-sm">
        <div className="w-full h-full bg-gradient-to-t from-[#FD6E6A] to-red-700">
          <WebMaruTop/>
        </div>
      </div>
      <WebMaruContnet/>
      <Footer/>
    </div>
  );
  
};
export default WebMaru;
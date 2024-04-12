import React from "react";
import { useState, useEffect } from "react";
import Header from "../component/Header";

import { useNavigate } from "react-router-dom";
import Footer from "../component/Footer";
import PolicyContent from "../component/policy/PolicyContent";

const Policy=()=>{

  const navigate= useNavigate();

  return(
    <div className="w-100">
      <Header/>
      <div className="w-full bg-[#f4f8f9]">
        <PolicyContent/>
      </div>
      <Footer/>
    </div>
  );
  
};
export default Policy;
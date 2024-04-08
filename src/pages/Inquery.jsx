import React from "react";
import { useState, useEffect } from "react";
import Header from "../component/Header";

import { useNavigate } from "react-router-dom";
import Footer from "../component/Footer";
import InqueryContent from "../component/inquery/InqueryContent";

const Inquery=()=>{

  const navigate= useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return(
    <div className="w-100">
      <Header/>
      <div className="w-full bg-gradient-to-br from-[#FB2407] to-[#B40100]">
        <InqueryContent/>
      </div>
      <Footer/>
    </div>
  );
  
};
export default Inquery;
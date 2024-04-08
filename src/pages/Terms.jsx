import React from "react";
import { useState, useEffect } from "react";
import Header from "../component/Header";

import { useNavigate } from "react-router-dom";
import Footer from "../component/Footer";
import TermsContent from "../component/terms/TermsContent";

const Terms=()=>{

  const navigate= useNavigate();

  return(
    <div className="w-100">
      <Header/>
      <div className="w-full bg-gradient-to-br from-[#FB2407] to-[#B40100]">
        <TermsContent/>
      </div>
      <Footer/>
    </div>
  );
  
};
export default Terms;
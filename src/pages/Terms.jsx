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
      <TermsContent/>
      <Footer/>
    </div>
  );
  
};
export default Terms;
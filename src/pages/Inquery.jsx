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
      <div className="w-full">
        <InqueryContent/>
      </div>
      <Footer/>
    </div>
  );
  
};
export default Inquery;
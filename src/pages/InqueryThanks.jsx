import React from "react";
import { useState, useEffect } from "react";
import Header from "../component/Header";

import { useNavigate } from "react-router-dom";
import Footer from "../component/Footer";
import InqueryThanksContent from "../component/inquery/InqueryThanksContent";

const InqueryThanks=()=>{

  const navigate= useNavigate();

  return(
    <div className="w-100">
      <Header/>
      <InqueryThanksContent/>
      <Footer/>
    </div>
  );
  
};
export default InqueryThanks;
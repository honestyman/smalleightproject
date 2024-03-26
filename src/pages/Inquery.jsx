import React from "react";
import { useState, useEffect } from "react";
import Header from "../component/Header";

import { useNavigate } from "react-router-dom";
import Footer from "../component/Footer";
import InqueryContent from "../component/inquery/InqueryContent";

const Inquery=()=>{

  const navigate= useNavigate();

  return(
    <div className="w-100">
      <Header/>
      <InqueryContent/>
      <Footer/>
    </div>
  );
  
};
export default Inquery;
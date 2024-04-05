import React from "react";
import { useState, useEffect } from "react";
import Header from "../component/Header";

import { useNavigate } from "react-router-dom";
import Footer from "../component/Footer";
import MitsukePartnerThanksContent from "../component/mitsukepartner/MitsukePartnerThanksContent";

const MitsukePartnerThanks=()=>{

  const navigate= useNavigate();

  return(
    <div className="w-100">
      <Header/>
      <MitsukePartnerThanksContent/>
      <Footer/>
    </div>
  );
  
};
export default MitsukePartnerThanks;
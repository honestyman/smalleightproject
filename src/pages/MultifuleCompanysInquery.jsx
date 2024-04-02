import React from "react";
import { useState, useEffect } from "react";
import Header from "../component/Header";

import { useNavigate, useParams } from "react-router-dom";
import Footer from "../component/Footer";
import MultifulCompanysInqueryContent from "../component/inquery/MultifulCompanysInqueryContent";

const MultifuleCompanysInquery=()=>{
  const Ids=useParams().ids;
  console.log(Ids)
  const navigate= useNavigate();

  return(
    <div className="w-100">
      <Header/>
      <MultifulCompanysInqueryContent companyIds={Ids}/>
      <Footer/>
    </div>
  );
  
};
export default MultifuleCompanysInquery;
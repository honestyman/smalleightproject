import React from "react";
import { useState, useEffect } from "react";
import Header from "../component/Header";

import { useNavigate, useParams } from "react-router-dom";
import Footer from "../component/Footer";
import CompanyInqueryContent from "../component/inquery/CompanyInqueryContent";

const CompanyInquery=()=>{
  const Id=useParams().id;
  
  const navigate= useNavigate();

  return(
    <div className="w-100">
      <Header/>
      <CompanyInqueryContent companyId={Id}/>
      <Footer/>
    </div>
  );
  
};
export default CompanyInquery;
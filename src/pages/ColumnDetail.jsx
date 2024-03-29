import React from "react";
import { useState, useEffect } from "react";

import { useNavigate, useParams } from "react-router-dom";

import Header from "../component/Header";
import Footer from "../component/Footer";
import ColumnDetailContent from "../component/column/ColumnDetailContent";

const ColumnDetail=()=>{
  const Id=useParams().id;

  return(
    <div className="w-100">
      <Header/>
      <ColumnDetailContent columnId={Id}/>
      <Footer/>
    </div>
  );
  
};
export default ColumnDetail;
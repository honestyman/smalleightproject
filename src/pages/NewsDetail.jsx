import React from "react";
import { useState, useEffect } from "react";

import { useNavigate, useParams } from "react-router-dom";

import Header from "../component/Header";
import Footer from "../component/Footer";
import NewsDetailContent from "../component/news/NewsDetailContent";

const NewsDetail=()=>{
  const Id=useParams().id;

  return(
    <div className="w-100">
      <Header/>
      <NewsDetailContent newsId={Id}/>
      <Footer/>
    </div>
  );
  
};
export default NewsDetail;
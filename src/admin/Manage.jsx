import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import Header from "../../component/Header";

import { Outlet, useNavigate } from "react-router-dom";
import 'intersection-observer';
import AdminHeader from "./admincomponent/AdminHeader";
import AdminNav from "./admincomponent/AdminNav";
// import HeaderDashBoard from "../HeaderDashBoard";
// import { getCompanyList } from "../../redux/slice/companySlice";


const Manage=()=>{
  
  const dispatch = useDispatch();
  const navigate= useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if(!token){
      navigate("/admin");
    }
  }, []);

  return(
    <div className="w-full bg-gray-200">
      <AdminHeader/>
      <div className="w-full flex pt-24">
        <AdminNav/>
        <div className="w-full"> 
          <Outlet/> 
        </div>
      </div>
         
      
    </div>
  );
  
};
export default Manage;
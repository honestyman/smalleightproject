import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "../component/Header";
import logo from '../img/logo.png';
import message from '../img/unnamed.webp';

import { useNavigate } from "react-router-dom";
import 'intersection-observer';
import HeaderDashBoard from "./HeaderDashBoard";
import { getCompanyList } from "../redux/slice/companySlice";


const DashBoard=()=>{

  const navigate= useNavigate();
  const dispatch = useDispatch();
  const {allCompanyList} = useSelector(state => state.companies);
  useEffect(() => {
    dispatch(getCompanyList());
  }, []);
  useEffect(() => {
    console.log(allCompanyList);
  }, [allCompanyList]);

  return(
    <div className="w-100">
      <HeaderDashBoard/>
      <div className="w-full text-white h-[953px] bg-white rounded-sm relative">
        <div className="w-full pt-28 shadow border-b border-gray-300">
            <p className="text-5xl mt-10 font-bold [text-shadow:1px_1px_2px_var(--tw-shadow-color)] shadow-gray-600"><span className="text-6xl text-red-500  
            font-sans">Welcome,</span> <span className="bg-black py-2 px-5 rounded-2xl">poonhaorui</span></p>
            <p className="text-3xl text-left mx-10 font-bold text-black my-5">Your Servers</p>
        </div>
        <div className="w-full flex flex-wrap py-5 px-10">
          <div className="flex flex-col justify-center items-center shadow-xl border w-[350px] py-[40px] m-[10px] bg-white rounded-xl">
            <img src={logo} className="w-[100px] rounded-full" />        
            <p className="text-black text-3xl font-bold mt-2">cloven</p>        
          </div>
        </div>
        <div className="fixed bottom-0 right-0 z-30 m-5">
          <img src={message} className="w-16 h-16 rounded-full" />
        </div> 
       </div>
    </div>
  );
  
};
export default DashBoard;
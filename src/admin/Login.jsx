import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import logo from '../img/black_logo.png';

// import Header from "../../component/Header";

import { useNavigate } from "react-router-dom";
import 'intersection-observer';
import { SlLogin } from "react-icons/sl";
import { getAuth } from "../redux/slice/authSlice";

// import HeaderDashBoard from "../HeaderDashBoard";


const Login=()=>{

  const navigate= useNavigate();
  const dispatch = useDispatch();

  const [disabled, setDisabled]=useState(true);
  const [adminName, setAdminName]=useState("");
  const [password, setPassword]=useState("");
  const {authtoken} = useSelector(state => state.auth);

  useEffect( () => {
    const token = localStorage.getItem('token');
    if(token){
      navigate("/manage");
    }
  }, []);
  // useEffect(() => {
    
  // }, [authtoken]);
  
  useEffect(() => {
      if(adminName && password){
        setDisabled(false);
      }else{
        setDisabled(true);
      }
    }, [adminName, password]);
  const handleClick=()=>{
    console.log(adminName, password);
    const payload={
      adminName: adminName,
      password: password
    }
    dispatch(getAuth(payload));
    if(authtoken.token){
      localStorage.setItem('token', authtoken.token);
      navigate("/manage");
    }else{
      alert("管理者名とパスワードを正確に入力してください。")
    }
  }

  return(
    <div className="w-full h-full flex flex-col items-content">
      <div className="w-[600px] rounded-xl pt-10 mx-auto my-40">
        <img src={logo} className="w-[50%] mx-auto"  />
        <div className="w-full px-20 py-20">
          <div className="w-full mb-10">
            <div className='w-full flex justify-between'>
              <label>管理者名</label>
              <label className='bg-[#FB2407] text-white rounded px-1 mx-1'>必須</label>
            </div>
            <input className="shadow appearance-none border border-red-500 rounded w-full mt-1 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" value={adminName} id="name" type="text" onChange={(e)=>setAdminName(e.target.value)}/>
          </div>
          <div className="w-full mb-10">
            <div className='w-full flex justify-between'>
              <label>パスワード</label>
              <label className='bg-[#FB2407] text-white rounded px-1 mx-1'>必須</label>
            </div>
            <input className="shadow appearance-none border border-red-500 rounded w-full mt-1 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" value={password} id="password" type="password" onChange={(e)=>setPassword(e.target.value)}/>
          </div>
          <div className="w-full flex justify-center pt-5">
            <button disabled={disabled} className={`flex items-center text-white border-2 rounded-md px-10 mx-10 lg:mx-2 lg:px-2 sp:mx-2 sp:px-2 py-1 ${!disabled ? 'bg-[#FD6E6A] hover:bg-white hover:text-[#FD6E6A]' : 'bg-gray-300'} ` } onClick={handleClick}><SlLogin className="mx-1"/>ログイン</button>
          </div>
        </div>

      </div>
    </div>
  );
  
};
export default Login;
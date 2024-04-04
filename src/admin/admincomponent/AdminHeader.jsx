import logo from '../../img/black_logo.webp';
import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { SlLogout } from "react-icons/sl";

const AdminHeader=()=>{
  const navigate= useNavigate();

  const [changeColor, setChangeColor] = useState(false);

  const clickLogOut = () => {
    localStorage.removeItem('token');
    navigate("/admin");
  }

  return(
    <div className={`w-full h-24 bg-white shadow items-center fixed py-2 z-10`}>
      <div className="w-full h-full flex flex-row justify-between py-2">
        <img src={logo} className=" border border-white rounded-md ml-10" />        
        <div className="text-center text-black font-bold text-xl flex my-auto mr-10">
          <button onClick={clickLogOut} className="mx-2 py-2 px-3 flex items-center text-red-500 hover:rounded-md hover:bg-red-500 hover:text-white"><SlLogout className='mx-1'/>Logout</button>
        </div>
      </div>
    </div>
  );
  
};
export default AdminHeader;
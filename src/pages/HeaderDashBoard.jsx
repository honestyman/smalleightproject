import logo from '../img/logo.png';
import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const HeaderDashBoard=()=>{
  const [changeColor, setChangeColor] = useState(false);

  return(
    <div className={`w-full h-24 bg-white shadow-xl items-center fixed py-5 z-10`}>
      <div className="w-full h-full flex flex-row justify-between">
        <img src={logo} className="w-[60px] border border-white rounded-md ml-10" />        
        <div className="text-center text-black font-bold text-xl flex my-auto mr-10">
          <Link className="mx-2 py-2 px-3 hover:rounded-md hover:bg-black hover:text-white">Home</Link>
          <Link className="mx-2 py-2 px-3 hover:rounded-md hover:bg-black hover:text-white">About</Link>
          <Link className="mx-2 py-2 px-3 hover:rounded-md hover:bg-black hover:text-white">Contact</Link>
          <Link className="mx-2 py-2 px-3 text-red-500 hover:rounded-md hover:bg-red-500 hover:text-white">Logout</Link>
          
        </div>
      </div>
    </div>
  );
  
};
export default HeaderDashBoard;
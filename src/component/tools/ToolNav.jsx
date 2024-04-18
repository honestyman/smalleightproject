
import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { IoMdCode} from "react-icons/io";
import { IoShareSocialOutline } from "react-icons/io5";
import { PiTreeStructure } from "react-icons/pi";

const ToolsNav=()=>{
  const navigate= useNavigate();

  const [change, setChange] = useState("");
  const [style, setStyle] = useState("");
  
  useEffect(() => {
    // var url = window.location.href;
    var pathname = window.location.pathname;
    setStyle(pathname);
    console.log(pathname);
  }, [change]);
  
  // const changeNewsBlock = () =>{
  //   setNewsBlock(newsblock=="block"?"hidden":"block");
  // }
  return(
    <div className="min-w-[300px] h-[1000px] flex flex-col bg-[#191F4D] border-r text-white text-base items-start py-20 sp:hidden">
      <Link to={"/tools"} className={`w-full flex items-center px-5 py-3 rounded hover:bg-white hover:text-[#191F4D]`}>スモハチツール</Link>
      <Link to="create_param" className={`w-full flex items-center px-5 py-3 rounded hover:bg-white hover:text-[#191F4D] `}><span className="text-xl mr-2">{`{#}`}</span>UTMパラメータ生成</Link>
      <Link className={`w-full flex items-center px-5 py-3 rounded hover:bg-white hover:text-[#191F4D] `}><IoMdCode className="text-2xl mr-2"/>見出し(hタグ)確認</Link>
      <Link className='w-full flex items-center px-5 py-3 rounded hover:bg-white hover:text-[#191F4D]'><IoShareSocialOutline className="text-2xl mr-2"/>OGPタグ確認</Link>
      <Link className='w-full flex items-center px-5 py-3 rounded hover:bg-white hover:text-[#191F4D]'><PiTreeStructure className="text-2xl mr-2"/>構造化データ生成</Link>
    </div>
  );
  
};
export default ToolsNav;
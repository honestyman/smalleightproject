
import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { SlArrowDown } from "react-icons/sl";
import { TfiMenu } from "react-icons/tfi";
import whiteLogo from '../img/white_logo.webp';
import blackLogo from '../img/black_logo.webp';
import Nav from "./Nav";


const Header=()=>{
  const [changeColor, setChangeColor] = useState(false);
  const [block, setBlock] = useState("hidden");
  const [textColor, setTextColor] = useState('white');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 100) {
        setChangeColor(true);
        setTextColor('black');
      } else {
        setChangeColor(false);
        setTextColor('white');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  const showNav=()=>{
    setBlock(block==="hidden"?"block":"hidden");
  }

  return(
    <div className={`w-full h-24 pt-10 fixed pb-10 z-30 ${changeColor?'drop-shadow bg-white':'none'} `}>
      <div className="w-full flex flex-row justify-between">
        <img src={changeColor?blackLogo:whiteLogo} className="w-[300px] -mt-5 ml-10 sp:w-[200px] sp:ml-5"/>        
        <Link onClick={showNav}><TfiMenu className="mb-2 mr-5 text-3xl hidden lg:block sp:block" style={{ color: textColor }}/></Link>
        <Nav/>
      </div>
      <div className={`w-full text-center flex flex-col fixed bg-white shadow-md ${block}`}>
          <Link to={"/"} className="py-3 hover:text-[#B40100] hover:transition-colors hover:bg-[#B40100] hover:text-white hover:px-2">サービス</Link>
          <Link to={"/mitsuke"} className="py-3 hover:text-[#B40100] hover:transition-colors hover:bg-[#B40100] hover:text-white hover:px-2">ウェブマる!</Link>
          <Link to={"/news"} className="py-3 hover:text-[#B40100] hover:transition-colors hover:bg-[#B40100] hover:text-white hover:px-2">ニュース</Link>
          <Link to={"/column"} className="py-3 hover:text-[#B40100] hover:transition-colors hover:bg-[#B40100] hover:text-white hover:px-2">コラム</Link>
          <Link to={"/business"} className="py-3 hover:text-[#B40100] hover:transition-colors hover:bg-[#B40100] hover:text-white hover:px-2">事業概要</Link>
          <Link to={"/policy"} className="py-3 hover:text-[#B40100] hover:transition-colors hover:bg-[#B40100] hover:text-white hover:px-2">プライバシーポリシー</Link>
          <Link to={"/terms"} className="py-3 hover:text-[#B40100] hover:transition-colors hover:bg-[#B40100] hover:text-white hover:px-2">利用規約</Link>
          <Link to={"/inquery"} className="py-3 hover:text-[#B40100] hover:transition-colors hover:bg-[#B40100] hover:text-white hover:px-2"> お問い合わせ</Link>
        </div>
    </div>
  );
  
};
export default Header;
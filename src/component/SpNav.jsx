import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect,useRef } from "react";

const Nav=()=>{
  // const [textColor, setTextColor] = useState('white');
  // useEffect(() => {
  //   const handleScroll = () => {
  //     const scrollPosition = window.scrollY;
  //     if (scrollPosition > 100) {
  //       setTextColor('black');
  //     } else {
  //       setTextColor('white');
  //     }
  //   };

  //   window.addEventListener('scroll', handleScroll);

  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //   };
  // }, []);
  return(
    <div className="h-full text-center flex my-auto mr-10" style={{ color: textColor }}>
      <Link to={"/"} className="mx-3 hover:text-[#B40100] hover:transition-colors hover:bg-white hover:px-2 hover:rounded">サービス</Link>
      <Link to={"/Mitsuke"} className="mx-3 hover:text-[#B40100] hover:transition-colors hover:bg-white hover:px-2 hover:rounded">ウェブマる!</Link>
      <Link to={"/news"} className="mx-3 hover:text-[#B40100] hover:transition-colors hover:bg-white hover:px-2 hover:rounded">ニュース</Link>
      <Link to={"/column"} className="mx-3 hover:text-[#B40100] hover:transition-colors hover:bg-white hover:px-2 hover:rounded">コラム</Link>
      <Link to={"/business"} className="mx-3 hover:text-[#B40100] hover:transition-colors hover:bg-white hover:px-2 hover:rounded">事業概要</Link>
      <Link to={"/policy"} className="mx-3 hover:text-[#B40100] hover:transition-colors hover:bg-white hover:px-2 hover:rounded">プライバシーポリシー</Link>
      <Link to={"/terms"} className="mx-3 hover:text-[#B40100] hover:transition-colors hover:bg-white hover:px-2 hover:rounded">利用規約</Link>
      <Link to={"/inquery"} className="mx-3 hover:text-[#B40100] hover:transition-colors hover:bg-white hover:px-2 hover:rounded"> お問い合わせ</Link>
    </div>
  );
  
};
export default Nav;
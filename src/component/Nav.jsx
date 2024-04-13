import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";

const Nav = () => {
  const [textColor, setTextColor] = useState('white');
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 100) {
        setTextColor('black');
      } else {
        setTextColor('white');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <div className="h-full text-center text-[14px] text-[#191F4D] flex my-auto mr-5 lg:hidden sp:hidden">
      <Link to={"/service"} className="mx-3 hover:font-bold">サービス</Link>
      {/* <Link to={"/mitsuke"} className="mx-2 hover:font-bold">Mitsuke</Link> */}
      <Link to={"/tools"} className="mx-3 hover:font-bold">スモハチツール</Link>
      <Link to={"/news"} className="mx-3 hover:font-bold">ニュース</Link>
      <Link to={"/column"} className="mx-3 hover:font-bold">コラム</Link>
      <Link to={"/business"} className="mx-3 hover:font-bold">事業概要</Link>
      {/* <Link to={"/policy"} className="mx-3 hover:font-bold">プライバシーポリシー</Link> */}
      {/* <Link to={"/terms"} className="mx-3 hover:font-bold">利用規約</Link> */}
      <Link to={"/inquery"} className="mx-3 hover:font-bold"> お問い合わせ</Link>
    </div>
  );

};
export default Nav;
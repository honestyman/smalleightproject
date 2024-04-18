import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
// import blackLogo from '../img/black_logo.webp';
import blackLogo from '../img/white_logo.png';
import title from '../img/title.png';

const Footer = () => {
  
  const goTop=()=>{
    window.scrollTo(0, 0)
  }

  return (
    <div className='w-full border-t'>
      <div className='w-full bg-[#f4f8f9] flex flex-col justify-center items-center pb-10 sp:px-3'>
        <div className='w-full flex justify-center items-center py-10 sp:py-5'>
          <div className='w-[70%] flex flex-col justify-center items-center pl-20 sp:pl-0'>
            <div className='w-full flex flex-col items-center pt-20'>
              <div className='w-[50%] sp:w-[90%] flex flex-col items-start'>
                <img src={title} className="w-full -mt-10" alt="title" />
                <p className='text-[#B40100] text-xl py-5 sp:text-sm'>小さいことの積み重ね。 末広がる。</p>
              </div>
            </div>
            <Link onClick={goTop}><img src={blackLogo} className='w-[200px] my-10 sp:w-[150px] sp:my-5'/></Link>
            <div className='w-full flex justify-center items-center'>
              <p className='mx-5 sp:mx-2'>アイコン1</p>
              <p className='mx-5 sp:mx-2'>アイコン2</p>
              <p className='mx-5 sp:mx-2'>アイコン3</p>
            </div>
          </div>
          <div className='w-[30%]'>
            <div className='flex flex-col float-left text-[#191F4D] sp:text-sm'>
              <Link to={"/service"} className="my-2 hover:font-bold sp:my-1">サービス</Link>
              {/* <Link className="my-2 hover:font-bold">Mitsuke</Link>
               */}
              <Link to={"/tools"} className="my-2 hover:font-bold sp:my-1">スモハチツール</Link>
              <Link to={"/news"} className="my-2 hover:font-bold sp:my-1">ニュース</Link>
              <Link to={"/column"} className="my-2 hover:font-bold sp:my-1">コラム</Link>
              <Link to={"/business"} className="my-2 hover:font-bold sp:my-1">事業概要</Link>
              <Link to={"/policy"} className="my-2 hover:font-bold sp:my-1">プライバシーポリシー</Link>
              <Link to={"/terms"} className="my-2 hover:font-bold sp:my-1">利用規約</Link>
              <Link to={"/inquery"} className="my-2 hover:font-bold sp:my-1">お問い合わせ</Link>
            </div>
          </div>
        </div>
        <p className='sp:text-sm'>© 2024 SmallEight. All Rights Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
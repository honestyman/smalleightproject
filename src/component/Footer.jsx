import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import blackLogo from '../img/black_logo.webp';

const Footer = () => {
  
  return (
    <div className='w-full bg-[#B40100]'>
      <div className='w-full bg-[#f4f8f9] flex flex-col justify-center items-center pb-10'>
        <div className='w-full flex justify-center items-center py-10 sp:py-5'>
          <div className='w-[70%] flex flex-col justify-center items-center'>
            <div className='text-left'>
              <p className='text-[#FB2407] font-bold text-6xl py-10 sp:py-5 sp:px-5 sp:text-3xl'>Buildup of little thing.</p>
              <p className='text-black text-4xl sp:text-xl sp:px-5'>小さいことの積み重ね。 末広がる。</p>
            </div>
            <img src={blackLogo} className='w-[200px] my-10 sp:w-[150px] sp:my-5'/>
            <div className='w-full flex justify-center items-center'>
              <p className='mx-5 sp:mx-2'>アイコン1</p>
              <p className='mx-5 sp:mx-2'>アイコン2</p>
              <p className='mx-5 sp:mx-2'>アイコン3</p>
            </div>
          </div>
          <div className='w-[30%]'>
            <div className='flex flex-col float-left text-black sp:text-sm'>
              <Link className="my-3 hover:text-[#B40100] hover:transition-colors">サービス</Link>
              <Link className="my-3 hover:text-[#B40100] hover:transition-colors">Mitsuke</Link>
              <Link className="my-3 hover:text-[#B40100] hover:transition-colors">ニュース</Link>
              <Link className="my-3 hover:text-[#B40100] hover:transition-colors">コラム</Link>
              <Link className="my-3 hover:text-[#B40100] hover:transition-colors">事業概要</Link>
              <Link className="my-3 hover:text-[#B40100] hover:transition-colors">お問い合わせ</Link>
            </div>
          </div>
        </div>
        <p>© 2024 SmallEight. All Rights Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
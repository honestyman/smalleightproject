import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import GrowingText from '../GrowingText';
import WOW from 'wow.js';
import 'animate.css';

const BusinessContent = () => {
  const ref = useRef(null);
  useEffect(() => {
    const wow = new WOW({
      offset: 50,
      mobile: false,
      duration: 3000,
    });
    wow.init();

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('wow', 'animate__animated', 'animate__fadeIn');
        } else {
          entry.target.classList.remove('wow', 'animate__animated', 'animate__fadeIn');
        }
      });
    });

    observer.observe(ref.current);

    // return () => {
    //   observer.unobserve(ref.current);
    // };
  }, []);

  return (
    <div className='w-full bg-[#f4f8f9] pt-40 sp:pt-10'>
      <div className='w-full bg-white flex flex-col justify-center items-center pb-20 sp:pb-10'>
          <div className='w-full pt-10 pb-20 bg-[#f4f8f9]'>
           <GrowingText /> 
          </div>
          <div ref={ref} className='w-full flex flex-col items-center pt-10 sp:pt-0'>
            <h1 className='text-4xl sp:text-2xl font-bold mt-20 mb-10 text-[#B40100]'>事業概要</h1>
            <Link className='w-full px-5 flex flex-col items-center'>
              <div className='w-[900px] sp:w-full flex flex-row justify-center border-b border-black mb-10 py-5'>
                <div className='w-[50%] text-left px-20 sp:px-0 sp:text-center'>
                  <p className='mx-10 text-xl sp:text-base sp:mx-0'>屋号</p>
                </div>
                <div className='w-[50%] text-left'>
                  <p className='text-xl sp:text-base'>SmallEight</p>
                </div>
              </div>
            </Link>
            <Link className='w-full px-5 flex flex-col items-center'>
              <div className='w-[900px] sp:w-full flex flex-row justify-center border-b border-black mb-10 py-5'>
                <div className='w-[50%] text-left px-20 sp:px-0 sp:text-center'>
                  <p className='mx-10 text-xl sp:text-base sp:mx-0'>創業</p>
                </div>
                <div className='w-[50%] text-left'>
                  <p className='text-xl sp:text-base'>2024年4月1日</p>
                </div>
              </div>
            </Link>
            <Link className='w-full px-5 flex flex-col items-center'>
              <div className='w-[900px] sp:w-full flex flex-row justify-center border-b border-black mb-10 py-5'>
                <div className='w-[50%] text-left px-20 sp:px-0 sp:text-center'>
                  <p className='mx-10 text-xl sp:text-base sp:mx-0'>代表</p>
                </div>
                <div className='w-[50%] text-left'>
                  <p className='text-xl sp:text-base'>小笹 洸擇</p>
                </div>
              </div>
            </Link>
            <Link className='w-full px-5 flex flex-col items-center'>
              <div className='w-[900px] sp:w-full flex flex-row justify-center border-b border-black mb-10 py-5'>
                <div className='w-[50%] text-left px-20 sp:px-0 sp:text-center'>
                  <p className='mx-10 text-xl sp:text-base sp:mx-0'>事業概要</p>
                </div>
                <div className='w-[50%] flex flex-col text-left'>
                  <p className='text-xl sp:text-xs'>ビジネスマッチングサービスの運営</p>
                  <p className='text-xl sp:text-xs'>WEB広告運用をはじめとしたプロモーション業務</p>
                  <p className='text-xl sp:text-xs'>WEB解析・リサーチ業務</p>
                  <p className='text-xl sp:text-xs'>WEBサイトおよびシステムの制作・開発</p>
                </div>              
              </div>
            </Link>
          </div>
          
        </div>
    </div>
  );
};

export default BusinessContent;
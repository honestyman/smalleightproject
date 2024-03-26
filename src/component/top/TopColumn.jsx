import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import WOW from 'wow.js';
import 'animate.css';
// import 'intersection-observer';

const TopColumn = () => {

  const ref = useRef(null);

  useEffect(() => {
    const wow = new WOW({
      offset: 100,
      mobile: false,
      duration: 1000,
    });
    wow.init();

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('wow', 'animate__animated', 'animate__zoomIn');
        } else {
          entry.target.classList.remove('wow', 'animate__animated', 'animate__zoomIn');
        }
      });
    });

    observer.observe(ref.current);

    // return () => {
    //   observer.unobserve(ref.current);
    // };
  }, []);

  return (
    <div className='w-full bg-[#FD6E6A] pb-10'>
      <div className='w-full flex flex-col justify-center items-center pb-10'>
        <div ref={ref}>
          <p className='text-4xl font-bold mt-10 mb-10 text-white'>コラム</p>
          <div className='w-full flex justify-center my-10'>
              <div className='flex flex-col justify-center items-center mx-10'>
                  <div className='w-[250px] h-[250px] bg-white'></div>
                  <p className='text-white mt-3'>2024.03.20</p>
                  <p className='text-white mt-3'>テキストテキストテキスト</p>
              </div>
              <div className='flex flex-col justify-center items-center mx-10'>
                  <div className='w-[250px] h-[250px] bg-white'></div>
                  <p className='text-white mt-3'>2024.03.20</p>
                  <p className='text-white mt-3'>テキストテキストテキスト</p>
              </div>
              <div className='flex flex-col justify-center items-center mx-10'>
                  <div className='w-[250px] h-[250px] bg-white'></div>
                  <p className='text-white mt-3'>2024.03.20</p>
                  <p className='text-white mt-3'>テキストテキストテキスト</p>
              </div>
          </div>
          <button className='text-xl bg-white text-[#FD6E6A] border-2 rounded-md px-5 py-1 mt-3 hover:bg-[#FD6E6A] hover:text-white'>もっと見る</button>
        </div>
        
      </div>
    </div>
  );
};

export default TopColumn;
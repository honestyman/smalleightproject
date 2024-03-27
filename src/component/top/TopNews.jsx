import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import WOW from 'wow.js';
import 'animate.css';
// import 'intersection-observer';

const TopNews = () => {

  const ref = useRef(null);

  useEffect(() => {
    const wow = new WOW({
      offset: 50,
      mobile: false,
      duration: 1000,
    });
    wow.init();

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('wow', 'animate__animated', 'animate__slideInLeft');
        } else {
          entry.target.classList.remove('wow', 'animate__animated', 'animate__slideInLeft');
        }
      });
    });

    observer.observe(ref.current);

    // return () => {
    //   observer.unobserve(ref.current);
    // };
  }, []);

  return (
    <div className='w-full bg-[#FD6E6A] pt-10'>
      <div className='w-full bg-white rounded-t-[100px] flex flex-col justify-center items-center pb-10 sp:rounded-t-[20px] sp:pb-0'>
        <div ref={ref} className='sp:w-full sp:px-5'>
          <p className='text-4xl font-bold mt-20 mb-10 text-[#FB2407] sp:text-2xl'>ニュース</p>
          <Link>
            <div className='flex flex-row justify-center border-b border-black mb-10 py-5'>
              <p className='mx-5 text-2xl sp:text-sm sp:mx-2'>2024.4.1</p>
              <p className='mx-5 text-2xl sp:text-sm sp:mx-2'>テキストテキストテキストテキスト</p>
            </div>
          </Link>
          <Link>
            <div className='flex flex-row justify-center border-b border-black mb-10 py-5'>
              <p className='mx-5 text-2xl sp:text-sm sp:mx-2'>2024.4.1</p>
              <p className='mx-5 text-2xl sp:text-sm sp:mx-2'>テキストテキストテキストテキスト</p>
            </div>
          </Link>
          <Link>
            <div className='flex flex-row justify-center border-b border-black mb-10 py-5'>
              <p className='mx-5 text-2xl sp:text-sm sp:mx-2'>2024.4.1</p>
              <p className='mx-5 text-2xl sp:text-sm sp:mx-2'>テキストテキストテキストテキスト</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TopNews;
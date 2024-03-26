import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import WOW from 'wow.js';
import 'animate.css';
// import 'intersection-observer';

const TopService = () => {
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
          entry.target.classList.add('wow', 'animate__animated', 'animate__slideInRight');
        } else {
          entry.target.classList.remove('wow', 'animate__animated', 'animate__slideInRight');
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
      <div className='w-full bg-white rounded-b-[100px] flex flex-col justify-center items-center pb-10 sp:rounded-b-[20px]'>
        <div ref={ref} className='sp:w-full'>
          <p className='text-4xl font-bold mt-20 mb-10 text-[#FB2407] sp:text-2xl sp:mt-10'>サービス</p>
            <div className='w-full flex justify-center my-20 sp:px-2 sp:my-5'>
                <div className='w-1/2'>
                  <div className='w-[500px] sp:w-full flex flex-col justify-center items-center text-left float-right sp:float-none mx-10 sp:mx-0'>
                    <p className='text-2xl mb-5 bg-red-500 mx-auto sp:text-[16px] text-center sp:mb-0'>ウェブマる!のロゴ</p>
                    <p className='text-2xl font-bold my-5 text-center sp:text-[16px] sp:my-0'>WEBマーケティングに強い企業が見つかる</p>
                    <p className='text-xl my-2 sp:text-[12px] sp:my-0'>「売上を拡大させたい」「サービスの認知度を上げたい」</p>
                    <p className='text-xl my-2 sp:text-[12px] sp:my-0'>「WEBサイトを改善したい」</p>
                    <p className='text-xl my-2 sp:text-[12px] sp:my-0'>「社内でWEBマーケティング人材を育成したい」など</p>
                    <p className='text-xl my-2 sp:text-[12px] sp:my-0'>WEBマーケティングを通じて企業成長を図りたい企業さまを支援します。</p>
                    <button className='text-xl text-white border-2 rounded-md bg-[#FD6E6A] px-5 py-1 mt-3 hover:bg-white hover:text-[#FD6E6A] sp:text-sm'>詳細はこちら</button>
                  </div>
                </div>
                <div className='w-1/2 sp:pl-4 flex justify-center items-center'>
                    <div className='w-[400px] sp:w-full h-[300px] sp:h-[150px] float-left sp:float-none bg-red-500 mx-10 sp:mx-0'></div>
                </div>
            </div>
            <div className='w-full flex justify-center my-20 sp:px-2 sp:my-5'>
                <div className='w-1/2 sp:pr-4 flex justify-center items-center'>
                    <div className='w-[400px] sp:w-full h-[300px] sp:h-[150px] float-right sp:float-none bg-red-500 mx-10 sp:mx-0'></div>
                </div>
                <div className='w-1/2'>
                  <div className='w-[500px] lg:w-[400px] sp:w-full flex flex-col justify-center items-center text-left float-left sp:float-none mx-10 sp:mx-0'>
                    <p className='text-2xl font-bold my-5 text-center sp:text-[16px] sp:my-0'>WEBマーケティング支援</p>
                    <p className='text-xl my-2 sp:text-[12px] sp:my-0'>ウェブマるを通した企業紹介をはじめ、</p>
                    <p className='text-xl my-2 sp:text-[12px] sp:my-0'>WEB広告運用、SEO、データ収集/傾向分析などの</p>
                    <p className='text-xl my-2 sp:text-[12px] sp:my-0'>WEBマーケティング支援を行っています。</p>
                    <button className='text-xl text-white border-2 rounded-md bg-[#FD6E6A] px-5 py-1 mt-3 hover:bg-white hover:text-[#FD6E6A] sp:text-sm'>お問い合わせ</button>
                  </div>
                </div>
            </div>

            <div className='w-full flex justify-center my-20 sp:px-2 sp:my-5'>
                <div className='w-1/2'>
                  <div className='w-[500px] sp:w-full flex flex-col justify-center items-center text-left float-right sp:float-none mx-10 sp:mx-0'>
                    <p className='text-2xl font-bold my-5 text-center sp:text-[16px] sp:my-0'>LPサイト制作支援</p>
                    <p className='text-xl my-2 sp:text-[12px] sp:my-0'>ウェブマるを通した企業紹介をはじめ、</p>
                    <p className='text-xl my-2 sp:text-[12px] sp:my-0'>LPやWEBサイトの改修・制作、</p>
                    <p className='text-xl my-2 sp:text-[12px] sp:my-0'>導線設計からUIUX改善などの支援を行っています。</p>
                    <button className='text-xl text-white border-2 rounded-md bg-[#FD6E6A] px-5 py-1 mt-3 hover:bg-white hover:text-[#FD6E6A] sp:text-sm'>詳細はこちら</button>
                  </div>
                </div>
                <div className='w-1/2 sp:pl-4 flex justify-center items-center'>
                    <div className='w-[400px] sp:w-full h-[300px] sp:h-[150px] float-left sp:float-none bg-red-500 mx-10 sp:mx-0'></div>
                </div>
            </div>


        </div>
      </div>
    </div>
  );
};

export default TopService;
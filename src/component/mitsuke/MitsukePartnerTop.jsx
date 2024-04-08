import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import 'react-circular-progressbar/dist/styles.css';
import { SlArrowLeft } from "react-icons/sl";
import { useDispatch, useSelector } from "react-redux";

// import 'intersection-observer';


const MitsukePartnerTop = () => {

  const dispatch = useDispatch();
  

  return (
    <div className='w-full h-full flex flex-col justify-center items-center pt-40 pb-20 sp:pt-20'>
      <div className='w-full flex justify-center pb-10 sp:flex-wrap'>
        <div className='w-[70%] sp:w-full flex flex-col justify-center items-center'>
          <div className='w-full px-20 sp:px-2'>
            <p className='text-white text-6xl mb-10 sp:text-2xl sp:mt-10 leading-normal'>Mitsuke(ミツケ)で<br/>リード獲得を支援します。</p>
          </div>
          <p className='text-white text-2xl mt-10 sp:mt-5 sp:text-xl sp:mx-3 leading-loose'>貴社の得意領域や強みをMitsukeでアピールしませんか?<br/>Mitsukeは、マーケティングの課題解決を求めている顧客に<br/>アプローチできるマッチングサービスです。<br/>ご掲載自体は無料で承っておりますのでお気軽にお問い合わせください。</p>
        </div>
        <div className='w-[30%] sp:hidden'>
          
        </div>
      </div>

      <div className='w-full flex items-center py-10 mt-20 bg-[#f4f8f9] sp:px-3 sp:flex-wrap'>
        <div className='w-[70%] sp:w-full flex flex-col items-center'>
          <p className='text-2xl font-bold py-5 sp:text-xl'>Mitsukeへ掲載するまでの流れ</p>
          <div className='w-[80%] sp:w-full flex justify-center items-center py-3 my-1 border bg-white rounded-md px-5 shadow sp:flex-wrap'>
            <span className='text-white p-2 rounded-full bg-[#B40100] text-4xl mr-5'>01</span>
            <div className='w-[calc(100%-100px)] sp:w-full flex flex-col justify-center items-start'>
              <span className='font-bold mb-2 sp:my-3'>まずはお問い合わせください!</span>
              <span className='text-left sp:mb-3'>ご掲載は無料です。 お気軽にお問い合わせください。</span>
            </div>
          </div>

          <div className='w-[80%] sp:w-full flex justify-center items-center py-3 my-1 border bg-white rounded-md px-5 shadow sp:flex-wrap'>
            <span className='text-white p-2 rounded-full bg-[#B40100] text-4xl mr-5'>02</span>
            <div className='w-[calc(100%-100px)] sp:w-full flex flex-col justify-center items-start'>
              <span className='font-bold mb-2 sp:my-3'>貴社の得意領域、業界への強み、特典のアリナシなど条件をお聞かせください!</span>
              <span className='text-left sp:mb-3'>「SEO」 や 「WEB広告運用」 など貴社が得意とする領域や、 特定業界への強みなどをお聞かせください。 もちろん、MAツールなどのベンダー様もご利用いただけます。また、Mitsukeのユーザーに対して特典を用意しアピールすることも可能です。</span>
            </div>
          </div>

          <div className='w-[80%] sp:w-full flex justify-center items-center py-3 my-1 border bg-white rounded-md px-5 shadow sp:flex-wrap'>
            <span className='text-white p-2 rounded-full bg-[#B40100] text-4xl mr-5'>03</span>
            <div className='w-[calc(100%-100px)] sp:w-full flex flex-col justify-center items-start'>
              <span className='font-bold mb-2 sp:my-3'>内容を確認いただき、掲載開始!</span>
              <span className='text-left sp:mb-3'>02で伺った内容をMitsukeに反映し掲載を開始します。</span>
            </div>
          </div>

          <div className='w-[80%] sp:w-full flex justify-center items-center py-3 my-1 border bg-white rounded-md px-5 shadow sp:flex-wrap'>
            <span className='text-white p-2 rounded-full bg-[#B40100] text-4xl mr-5'>04</span>
            <div className='w-[calc(100%-100px)] sp:w-full flex flex-col justify-center items-start'>
              <span className='font-bold mb-2 sp:my-3'>ユーザーからの問い合わせを確認しリードを獲得!</span>
              <span className='text-left sp:mb-3'>Mitsukeを通じて問い合わせがあったユーザーをご紹介。貴社の条件に合っていればリードを提供させていただきます。<br/> (※リード提供は有料となります)</span>
            </div>
          </div>
        </div>

        <div className='w-[30%] sp:hidden'>

        </div>

      </div>
    </div>
  );
};

export default MitsukePartnerTop;
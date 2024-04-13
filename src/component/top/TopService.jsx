import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import WOW from 'wow.js';
import 'animate.css';
import computer from '../../img/computer.webp';
import coding from '../../img/coding.webp';
import analytics from '../../img/analytics.webp';

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
    <div className='w-full pb-10'>
      <div className='w-full bg-[#f4f8f9] flex flex-col justify-center items-center'>
        <div ref={ref} className='w-full sp:w-full'>
          <h1 className='text-4xl font-bold mt-20 text-[#B40100] sp:text-2xl sp:mt-10'>SERVICE</h1>
          <div className='w-full flex sp:flex-wrap-reverse justify-center bg-[#f4f8f9] py-20 sp:px-2 sp:py-5'>
            <div className='w-1/2 sp:w-full'>
              <div className='w-[500px] lg:w-[400px] sp:w-full text-[#191F4D] flex flex-col justify-center items-center text-left float-right sp:float-none mx-10 sp:px-3 sp:mx-0'>
                <p className='text-[22px] font-bold my-5 text-center sp:text-[16px]'>スモハチツール</p>
                <p className='my-2 sp:text-[12px] sp:my-0'>業務で役に立つWEBツールをご提供しています。 (随時追加)</p>
                <br/>
                <p className='my-2 sp:text-[12px] sp:my-0'>・構造化データ マークアップツール</p>
                <p className='my-2 sp:text-[12px] sp:my-0'>・OGPタグ確認ツール</p>
                <p className='my-2 sp:text-[12px] sp:my-0'>・見出し (hタグ) 確認ツール</p>
                <p className='my-2 sp:text-[12px] sp:my-0'>・UTMパラメータ生成ツール</p>
                <Link to={"/mitsuke"} className='text-[#191F4D] border border-[#191F4D] rounded-md bg-white px-5 py-1 mt-3 text-sm hover:bg-[#191F4D] hover:text-white sp:text-sm'>使ってみる</Link>
              </div>
            </div>
            <div className='w-1/2 sp:w-full flex justify-start items-center sp:justify-center'>
              <div className='w-[400px] h-[300px] overflow-hidden sp:w-[80%] sp:h-[200px] rounded-md absolute float-left sp:float-none mx-10 sp:mx-0' style={{boxShadow:"5px 10px 10px gray"}}>
               <img src={computer} className='w-full h-full rounded-md zoom' alt="" />
              </div>
              {/* <div className='w-[400px] sp:w-full h-[300px] sp:h-[150px] float-left sp:float-none bg-red-500 mx-10 sp:mx-0'></div> */}
            </div>
          </div>
          <div className='w-full flex sp:flex-wrap bg-white justify-center py-20 sp:px-2 sp:py-5'>
            <div className='w-1/2 sp:w-full flex justify-end items-center sp:justify-center sp:pb-5'>
              <div className='w-[400px] h-[300px] overflow-hidden sp:w-[80%] sp:h-[200px] rounded-md absolute float-left sp:float-none mx-10 sp:mx-0' style={{boxShadow:"5px 10px 10px gray"}}>
                <img src={analytics} className='w-full h-full rounded-md zoom' alt="" />
              </div>
              {/* <div className='w-[400px] sp:w-full h-[300px] sp:h-[150px] float-right sp:float-none bg-red-500 mx-10 sp:mx-0'></div> */}
            </div>
            <div className='w-1/2 sp:w-full'>
              <div className='w-[500px] lg:w-[400px] text-[#191F4D] sp:w-full flex flex-col justify-center items-center text-center float-left sp:float-none mx-10 sp:px-3 sp:mx-0'>
                <p className='text-[22px] font-bold my-5 text-center sp:text-[16px] sp:my-0'>デジタルマーケティング支援</p>
                <p className='my-2 sp:text-[12px] sp:my-0'>環境構築から施策実施、 ツール導入の支援など<br/>貴社の目達成のために併走いたします。</p><br/>
                <p className='my-2 sp:text-[12px] sp:my-0'>・WEB広告運用代行/ インハウス立ち上げ支援</p>
                <p className='my-2 sp:text-[12px] sp:my-0'>・CRO (コンバージョン率最適化)</p>
                <p className='my-2 sp:text-[12px] sp:my-0'>・SEO(検索エンジン最適化)/SEOツール導入支援</p>
                <p className='my-2 sp:text-[12px] sp:my-0'>・アクセス解析/効果分析</p>
                <p className='my-2 sp:text-[12px] sp:my-0'>・GA4、GTM、GSC、 lookerstudio, Youtube等連携設定支援</p>

                <button className='text-[#191F4D] border border-[#191F4D] rounded-md bg-white px-5 py-1 mt-3 text-sm hover:bg-[#191F4D] hover:text-white sp:text-sm'>お問い合わせ</button>
              </div>
            </div>
          </div>

          <div className='w-full flex sp:flex-wrap-reverse justify-center py-20 sp:px-2 sp:py-5'>
            <div className='w-1/2 sp:w-full sp:py-5'>
              <div className='w-[500px] lg:w-[400px] text-[#191F4D] sp:w-full flex flex-col justify-center items-center text-center float-right sp:float-none mx-10 sp:mx-0 sp:px-3'>
                <p className='text-[22px] font-bold my-5 text-center sp:text-[16px] sp:my-0'>LP・サイト等 制作支援</p>
                <p className=' my-2 sp:text-[12px] sp:my-0'>LPO (ランディングページ最適化) からアプリ開発まで対応させていただきます。</p>
                <br/>
                <p className=' my-2 sp:text-[12px] sp:my-0'>・導線設計 UI/UX改善</p>
                <p className=' my-2 sp:text-[12px] sp:my-0'>・HP及びLP制作</p>
                <p className=' my-2 sp:text-[12px] sp:my-0'>・WordPress、ララベルなどのフレームワークを利用した<br/>WEBサイト制作</p>
                <p className=' my-2 sp:text-[12px] sp:my-0'>・システム開発及びアップデート</p>
                <p className=' my-2 sp:text-[12px] sp:my-0'>・FlutterやReact Nativeを利用したアプリ開発</p>
                <button className='text-[#191F4D] border border-[#191F4D] rounded-md bg-white px-5 py-1 mt-3 text-sm hover:bg-[#191F4D] hover:text-white sp:text-sm'>詳細はこちら</button>
              </div>
            </div>
            <div className='w-1/2 sp:w-full sp:pl-4 flex justify-start sp:justify-center items-center'>
              <div className='w-[400px] h-[300px] overflow-hidden sp:w-[80%] sp:h-[200px] rounded-md absolute float-left sp:float-none mx-10 sp:mx-0' style={{boxShadow:"5px 10px 10px gray"}}>
                <img src={coding} className='w-full h-full rounded-md zoom' alt="" />
              </div>
              {/* <div className='w-[400px] sp:w-full h-[300px] sp:h-[150px] float-left sp:float-none bg-red-500 mx-10 sp:mx-0'></div> */}
            </div>
          </div>


        </div>
      </div>
    </div>
  );
};

export default TopService;
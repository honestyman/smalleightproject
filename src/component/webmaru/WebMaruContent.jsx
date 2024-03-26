import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { SlArrowDown } from "react-icons/sl";

const WebMaruContnet = () => {

  return (
    <div className='w-full bg-[#f4f8f9] py-10 drop-shadow-sm'>
      <div className='w-full flex flex-col justify-center items-center mt-10 mb-20'>
          <p className='text-4xl font-bold'>カテゴリーで探す</p>
      </div>
      <div className='w-full flex justify-center items-center border-t-2 pt-5'>
          <div className='text-xl mx-16 flex justify-center items-center'>課題から探す<SlArrowDown className="ml-2" /></div>
          <div className='text-xl mx-16 flex justify-center items-center'>特徴・強みから探す<SlArrowDown className="ml-2" /></div>
          <div className='text-xl mx-16 flex justify-center items-center'>ツールを探す<SlArrowDown className="ml-2" /></div>
          <div className='text-xl mx-16 flex justify-center items-center'>予算規模から探す<SlArrowDown className="ml-2" /></div>
      </div>
      <div className='w-full flex flex-col justify-center items-center px-10'>
        <div className='w-full bg-white flex rounded-2xl shadow mt-10 px-3 py-5'>
          <div className='w-[20%] flex justify-center items-center'>
            <div className='w-[200px] h-[200px] bg-[#FD6E6A]'></div>
          </div>
          <div className='w-[80%] flex flex-col text-left px-5'>
            <p className='text-2xl font-bold'>株式会社○○○○</p>
            <p className='text-sm font-bold mt-5'>【PRタイトル】</p>
            <p className="font-bold">担当者1名が「提案~ヒアリング~広告運用~結果改善~広告運用体制の構築支援」 まで全て実施いたします。</p>
            <p className='text-sm mt-5'>【紹介文】</p>
            <p>要望や予算に合わせて、オリジナルプランをご提案します。 スリーコールに決まったプランはございません。 対応時間や予算も柔軟に対応 しますので、必要な時にいつでもご相談ください。</p>
            <p className='text-sm mt-5'>【得意な領域】</p>
            <p>リスティング広告、ディスプレイ広告、 SNS広告、 LPO、 ネイティブ広告</p>
            <p className='text-sm mt-5'>【解決できる課題】</p>
            <p>新規顧客を獲得、サービス等の認知度向上、 WEB サイト改善</p>
            <p className='text-sm mt-5'>【価格】</p>
            <p>50万円~/月</p>
            <p className='text-sm mt-5'>【業界実績】</p>
            <p>製造業、 ゲーム、 通信、アパレル、 介護</p>
            <div className='w-[100%] flex justify-center items-center'>
              <button className='text-white border-2 rounded-2xl bg-[#FD6E6A] px-10 py-1 mt-3 hover:bg-white hover:text-[#FD6E6A]'>お問い合わせ</button>
            </div>
          </div>
        </div>
        <div className='w-full bg-white flex rounded-2xl shadow mt-10 px-3 py-5'>
          <div className='w-[20%] flex justify-center items-center'>
            <div className='w-[200px] h-[200px] bg-[#FD6E6A]'></div>
          </div>
          <div className='w-[80%] flex flex-col text-left px-5'>
            <p className='text-2xl font-bold'>株式会社○○○○</p>
            <p className='text-sm font-bold mt-5'>【PRタイトル】</p>
            <p className="font-bold">担当者1名が「提案~ヒアリング~広告運用~結果改善~広告運用体制の構築支援」 まで全て実施いたします。</p>
            <p className='text-sm mt-5'>【紹介文】</p>
            <p>要望や予算に合わせて、オリジナルプランをご提案します。 スリーコールに決まったプランはございません。 対応時間や予算も柔軟に対応 しますので、必要な時にいつでもご相談ください。</p>
            <p className='text-sm mt-5'>【得意な領域】</p>
            <p>リスティング広告、ディスプレイ広告、 SNS広告、 LPO、 ネイティブ広告</p>
            <p className='text-sm mt-5'>【解決できる課題】</p>
            <p>新規顧客を獲得、サービス等の認知度向上、 WEB サイト改善</p>
            <p className='text-sm mt-5'>【価格】</p>
            <p>50万円~/月</p>
            <p className='text-sm mt-5'>【業界実績】</p>
            <p>製造業、 ゲーム、 通信、アパレル、 介護</p>
            <div className='w-[100%] flex justify-center items-center'>
              <button className='text-white border-2 rounded-2xl bg-[#FD6E6A] px-10 py-1 mt-3 hover:bg-white hover:text-[#FD6E6A]'>お問い合わせ</button>
            </div>
          </div>
        </div>
        <div className='w-full bg-white flex rounded-2xl shadow mt-10 px-3 py-5'>
          <div className='w-[20%] flex justify-center items-center'>
            <div className='w-[200px] h-[200px] bg-[#FD6E6A]'></div>
          </div>
          <div className='w-[80%] flex flex-col text-left px-5'>
            <p className='text-2xl font-bold'>株式会社○○○○</p>
            <p className='text-sm font-bold mt-5'>【PRタイトル】</p>
            <p className="font-bold">担当者1名が「提案~ヒアリング~広告運用~結果改善~広告運用体制の構築支援」 まで全て実施いたします。</p>
            <p className='text-sm mt-5'>【紹介文】</p>
            <p>要望や予算に合わせて、オリジナルプランをご提案します。 スリーコールに決まったプランはございません。 対応時間や予算も柔軟に対応 しますので、必要な時にいつでもご相談ください。</p>
            <p className='text-sm mt-5'>【得意な領域】</p>
            <p>リスティング広告、ディスプレイ広告、 SNS広告、 LPO、 ネイティブ広告</p>
            <p className='text-sm mt-5'>【解決できる課題】</p>
            <p>新規顧客を獲得、サービス等の認知度向上、 WEB サイト改善</p>
            <p className='text-sm mt-5'>【価格】</p>
            <p>50万円~/月</p>
            <p className='text-sm mt-5'>【業界実績】</p>
            <p>製造業、 ゲーム、 通信、アパレル、 介護</p>
            <div className='w-[100%] flex justify-center items-center'>
              <button className='text-white border-2 rounded-2xl bg-[#FD6E6A] px-10 py-1 mt-3 hover:bg-white hover:text-[#FD6E6A]'>お問い合わせ</button>
            </div>
          </div>
        </div>
        
        
      </div>
    </div>
  );
};

export default WebMaruContnet;
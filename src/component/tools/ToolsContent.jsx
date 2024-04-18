import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { IoMdCode} from "react-icons/io";
import { IoShareSocialOutline } from "react-icons/io5";
import { PiTreeStructure } from "react-icons/pi";

const ToolsContent = () => {

  return (
    <div className='w-full h-[1000px] bg-white pt-20 pb-20 overflow-y-auto'>
      <div className='w-full pt-10 pb-5 px-20 text-[#191F4D] text-left bg-[#f4f8f9] sp:px-10'>
        <h1 className='text-4xl py-5 sp:text-2xl'>スモハチツール</h1>
        <p className='sp:text-xs'>業務で役に立つWEBツールをご提供しています。</p>
      </div>
      <div className='flex justify-start sp:flex-wrap items-center pt-20 px-20 sp:pt-5 sp:px-10'>
        <div className='w-[350px] h-[250px] text-[#191F4D] shadow rounded-md border p-3 mr-20 sp:my-5 sp:mx-auto'>
          <div className='border-b border-[#191F4D] font-bold text-center py-3'>
            <p><span className="text-xl mr-2">{`{#}`}</span>UTMパラメータ生成</p>
          </div>
          <div className='w-full flex flex-col items-center py-5 px-5'>
            <p className='text-sm mb-10 text-left'>生成ウェブトラフィックのソースを追跡するためのクエリパラメーターを生成できます。</p>
            <Link to="create_param"><div className='w-[200px] h-[50px] flex items-center justify-center rounded bg-[#191F4D] text-white hover:bg-white hover:border hover:text-[#191F4D]'>ツールへ</div></Link>
          </div>
        </div>

        <div className='w-[350px] h-[250px] text-[#191F4D] shadow rounded-md border p-3 mr-20 sp:my-5 sp:mx-auto'>
          <div className='border-b border-[#191F4D] font-bold text-center py-3'>
            <div className='flex items-center justify-center'><IoMdCode className="text-2xl mr-2"/>見出し(hタグ)確認</div>
          </div>
          <div className='w-full flex flex-col items-center py-5 px-5'>
            <p className='text-sm mb-10 text-left'>指定したサイトURLの文字数、 タイトル、見出しタグを確認できます。</p>
            <Link><div className='w-[200px] h-[50px] flex items-center justify-center rounded bg-[#191F4D] text-white hover:bg-white hover:border hover:text-[#191F4D]'>ツールへ</div></Link>
          </div>
        </div>
      </div>

      <div className='flex justify-start sp:flex-wrap items-center pt-20 px-20 sp:pt-0 sp:px-10'>
        <div className='w-[350px] h-[250px] text-[#191F4D] shadow rounded-md border p-3 mr-20 sp:my-5 sp:mx-auto'>
          <div className='border-b border-[#191F4D] font-bold text-center py-3'>
            <p className='flex items-center justify-center'><IoShareSocialOutline className="text-2xl mr-2"/>OGPタグ確認</p>
          </div>
          <div className='w-full flex flex-col items-center py-5 px-5'>
            <p className='text-sm text-left mb-5'>SNS上でWEBページのタイトル、 イメージ画像、 URL含めた詳細、 説明文などの情報を表示するためのタグを確認できます。</p>
            <Link><div className='w-[200px] h-[50px] flex items-center justify-center rounded bg-[#191F4D] text-white hover:bg-white hover:border hover:text-[#191F4D]'>ツールへ</div></Link>
          </div>
        </div>

        <div className='w-[350px] h-[250px] text-[#191F4D] shadow rounded-md border p-3 mr-20 sp:my-5 sp:mx-auto'>
          <div className='border-b border-[#191F4D] font-bold text-center py-3'>
            <div className='flex items-center justify-center'><PiTreeStructure className="text-2xl mr-2"/>構造化データ生成</div>
          </div>
          <div className='w-full flex flex-col items-center py-5 px-5'>
            <p className='text-sm text-left mb-10'>JSON-LDマークアップの作成をサポートする Schema.org 構造化データを生成できます。</p>
            <Link><div className='w-[200px] h-[50px] flex items-center justify-center rounded bg-[#191F4D] text-white hover:bg-white hover:border hover:text-[#191F4D]'>ツールへ</div></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToolsContent;
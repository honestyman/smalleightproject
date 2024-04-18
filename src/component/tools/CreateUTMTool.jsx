import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

const CreateUTMTool = () => {

  const [url, setUrl] = useState("");
  const [campaignSource, setCampaignSource] = useState("");
  const [campaignMedium, setCampaignMedium] = useState("");
  const [campaignName, setCampaignName] = useState("");
  const [campaignContent, setCampaignContent] = useState("");
  const [campaignTerm, setCampaignTerm] = useState("");
  
  return (
    <div className='w-full h-[1000px] bg-white pt-20 overflow-y-auto'>
      <div className='w-full pt-10 pb-5 px-20 text-[#191F4D] text-left bg-[#f4f8f9] sp:px-10'>
        <h1 className='text-4xl sp:text-2xl py-5'><span className="text-4xl sp:text-2xl mr-2">{`{#}`}</span>UTMパラメータ生成</h1>
        <p className='text-xs'>下記に必要な情報を入れるだけで広告などに付与するUTM パラメータを生成できます。</p>
      </div>

      <div className='flex flex-col justify-start sp:flex-wrap items-start pt-10 px-20 sp:px-5'>
        <div className='w-[700px] sp:w-full flex items-start flex-col pb-5 sp:text-xs'>
          <label>(1) WEBサイトURLを入力してください<span className="px-2 text-white rounded-md bg-red-500 text-sm sp:text-xs mx-2">必須</span></label>
          <input className="shadow appearance-none border border-[#191F4D] rounded w-full mt-2 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="url" placeholder='例) https://smalleight.jp/' value={url} onChange={(e)=>setUrl(e.target.value)} />
        </div>
        <div className='w-[700px] sp:w-full flex items-start flex-col pb-5 sp:text-xs'>
          <label>(2) キャンペーンのソース(参照元)を入力してください<span className="px-2 text-white rounded-md bg-red-500 text-sm sp:text-xs mx-2">必須</span></label>
          <input className="shadow appearance-none border border-[#191F4D] rounded w-full mt-2 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="campaignSource" placeholder='例) google' value={campaignSource} onChange={(e)=>setCampaignSource(e.target.value)}/>
        </div>
        <div className='w-[700px] sp:w-full flex items-start flex-col pb-5 sp:text-xs'>
          <label>(3) キャンペーンのメディアを入力してください<span className="px-2 text-white rounded-md bg-red-500 text-sm sp:text-xs mx-2">必須</span></label>
          <input className="shadow appearance-none border border-[#191F4D] rounded w-full mt-2 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="campaignMedia" placeholder='例) cpc' value={campaignMedium} onChange={(e)=>setCampaignMedium(e.target.value)}/>
        </div>
        <div className='w-[700px] sp:w-full flex items-start flex-col pb-5 sp:text-xs'>
          <label>(4) キャンペーン名を入力してください<span className="px-2 text-white rounded-md bg-red-500 text-sm  mx-2">必須</span></label>
          <input className="shadow appearance-none border border-[#191F4D] rounded w-full mt-2 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="campaignName" placeholder='例) brand' value={campaignName} onChange={(e)=>setCampaignName(e.target.value)}/>
        </div>
        <div className='w-[700px] sp:w-full flex items-start flex-col pb-5 sp:text-xs'>
          <label>(5) キャンペーンのコンテンツを入力してください (任意)</label>
          <input className="shadow appearance-none border border-[#191F4D] rounded w-full mt-2 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="url" placeholder='例) summer_event' value={campaignContent} onChange={(e)=>setCampaignContent(e.target.value)}/>
        </div>
        <div className='w-[700px] sp:w-full flex items-start flex-col pb-5 sp:text-xs'>
          <label>(6) キャンペーンのキーワードを入力してください (任意)</label>
          <input className="shadow appearance-none border border-[#191F4D] rounded w-full mt-2 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="url" placeholder='例) shirt、 {keyword} など' value={campaignTerm} onChange={(e)=>setCampaignTerm(e.target.value)}/>
        </div>

        <div className='w-[700px] sp:w-full flex items-start flex-col py-5'>
          <label className='font-bold sp:text-sm'>生成結果</label>
          <div className='w-full h-20 border border-[#191F4D] p-2 text-left mt-3 rounded'>
            <p className='break-words	'>{url && <span>{url}</span>}{url && campaignSource && <span>?utm_source={campaignSource}</span>}{url && campaignSource && campaignMedium && <span>&utm_medium={campaignMedium}</span>}{url && campaignSource && campaignMedium && campaignName && <span>&utm_campaign={campaignName}</span>}{url && campaignSource && campaignMedium && campaignName && campaignContent && <span>&utm_content={campaignContent}</span>}{url && campaignSource && campaignMedium && campaignName && campaignTerm && <span>&utm_term={campaignTerm}</span>}</p>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default CreateUTMTool;
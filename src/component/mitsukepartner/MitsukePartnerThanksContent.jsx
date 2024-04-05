import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { postQuery } from '../../redux/slice/clientSlice';
import { SlArrowLeft } from "react-icons/sl";

const MitsukePartnerThanksContent = () => {
  const { postWantedResultMessage } = useSelector(state=>state.clients)

  const dispatch = useDispatch();
 
  return (
    <div className='w-full bg-gradient-to-t from-[#FD6E6A] to-red-500 pt-40 pb-20'>
      <div className='w-full bg-white rounded-[100px] sp:rounded-[20px] flex flex-col justify-center items-center pb-10'>
          <p className='text-4xl sp:text-3xl font-bold mt-20 mb-10 text-[#FB2407]'>お問い合わせ</p>
          <div className="w-[50%] sp:w-full flex flex-col mx-auto">
            <div className='w-full flex flex-col px-10 sp:px-5'>
              {
                postWantedResultMessage && <div className='w-full h-[230px] flex flex-col mb-5 px-2 pt-10'>
                <p className='text-xl my-1'>お問い合わせありがとうございます!</p>
                <p className='text-xl my-1'>内容確認後、ご連絡させていただきますので</p>
                <p className='text-xl my-1'>今しばらくお待ちください!</p>
              </div>
              }
            </div>
          </div>
      </div>
    </div>
  );
};

export default MitsukePartnerThanksContent;
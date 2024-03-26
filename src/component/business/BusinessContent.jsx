import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const BusinessContent = () => {

  return (
    <div className='w-full bg-gradient-to-t from-[#FD6E6A] to-red-500 pt-40 pb-20'>
      <div className='w-full bg-white rounded-[100px] flex flex-col justify-center items-center pb-10'>
          <p className='text-4xl font-bold mt-20 mb-10 text-[#FB2407]'>事業概要</p>
          <Link>
            <div className='flex flex-row justify-center border-b border-black mb-10 py-5'>
              <p className='mx-10 text-2xl'>屋号</p>
              <p className='mx-5 text-2xl'>୦୦୦୦୦୦୦୦୦୦୦୦</p>
            </div>
          </Link>
          <Link>
            <div className='flex flex-row justify-center border-b border-black mb-10 py-5'>
              <p className='mx-10 text-2xl'>創業</p>
              <p className='mx-5 text-2xl'>୦୦୦୦୦୦୦୦୦୦୦୦</p>
            </div>
          </Link>
          <Link>
            <div className='flex flex-row justify-center border-b border-black mb-10 py-5'>
              <p className='mx-10 text-2xl'>代表</p>
              <p className='mx-5 text-2xl'>୦୦୦୦୦୦୦୦୦୦୦୦</p>
            </div>
          </Link>
          <Link>
            <div className='flex flex-row justify-center border-b border-black mb-10 py-5'>
              <p className='mx-10 text-2xl'>事業概要</p>
              <p className='mx-5 text-2xl'>୦୦୦୦୦୦୦୦୦୦୦୦</p>
            </div>
          </Link>
        </div>
    </div>
  );
};

export default BusinessContent;
import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
// import { Button, IconButton } from "@material-tailwind/react";
// import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";

const ColumnContent = () => {

  return (
    <div className='w-full bg-gradient-to-t from-[#FD6E6A] to-red-500 pt-40 pb-10'>
      <div className='w-full bg-white rounded-[100px] flex flex-col justify-center items-center pb-20'>
          <p className='text-4xl font-bold mt-10 text-[#FB2407]'>コラム</p>
          <div className='w-[1000px] flex flex-wrap justify-center my-10'>
              <div className='flex flex-col justify-center items-center mx-10 mt-10'>
                  <div className='w-[250px] h-[250px] bg-[#FD6E6A]'></div>
                  <p className='mt-3'>2024.03.20</p>
                  <p className='mt-3'>テキストテキストテキスト</p>
              </div>
              <div className='flex flex-col justify-center items-center mx-10 mt-10'>
                  <div className='w-[250px] h-[250px] bg-[#FD6E6A]'></div>
                  <p className='mt-3'>2024.03.20</p>
                  <p className='mt-3'>テキストテキストテキスト</p>
              </div>
              <div className='flex flex-col justify-center items-center mx-10 mt-10'>
                  <div className='w-[250px] h-[250px] bg-[#FD6E6A]'></div>
                  <p className='mt-3'>2024.03.20</p>
                  <p className='mt-3'>テキストテキストテキスト</p>
              </div>
              <div className='flex flex-col justify-center items-center mx-10 mt-10'>
                  <div className='w-[250px] h-[250px] bg-[#FD6E6A]'></div>
                  <p className='mt-3'>2024.03.20</p>
                  <p className='mt-3'>テキストテキストテキスト</p>
              </div>
              <div className='flex flex-col justify-center items-center mx-10 mt-10'>
                  <div className='w-[250px] h-[250px] bg-[#FD6E6A]'></div>
                  <p className='mt-3'>2024.03.20</p>
                  <p className='mt-3'>テキストテキストテキスト</p>
              </div>
              <div className='flex flex-col justify-center items-center mx-10 mt-10'>
                  <div className='w-[250px] h-[250px] bg-[#FD6E6A]'></div>
                  <p className='mt-3'>2024.03.20</p>
                  <p className='mt-3'>テキストテキストテキスト</p>
              </div>
          </div>
          <nav aria-label="Page navigation example">
            <ul className="list-style-none flex">
                <li className='mx-2'>
                    <a
                        className="relative block rounded bg-transparent px-3 py-1.5 text-sm text-neutral-600 transition-all duration-300 hover:bg-neutral-100"
                        href="#"
                        aria-label="Previous">
                        <span aria-hidden="true">&laquo;</span>
                    </a>
                </li>
                <li className='mx-2'>
                    <a
                        className="relative block rounded bg-transparent px-3 py-1.5 text-sm text-neutral-600 transition-all duration-300 hover:bg-neutral-100"
                        href="#">1</a>
                </li>
                <li aria-current="page" className='mx-2'>
                    <a
                        className="relative block rounded bg-transparent px-3 py-1.5 text-sm text-neutral-600 transition-all duration-300 hover:bg-neutral-100"
                        href="#">2</a>
                </li>
                <li className='mx-2'>
                    <a
                        className="relative block rounded bg-transparent px-3 py-1.5 text-sm text-neutral-600 transition-all duration-300 hover:bg-neutral-100"
                        href="#">3</a>
                </li>
                <li className='mx-2'>
                    <a
                        className="relative block rounded bg-transparent px-3 py-1.5 text-sm text-neutral-600 transition-all duration-300 hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white"
                        href="#"
                        aria-label="Next"><span aria-hidden="true">&raquo;</span>
                    </a>
                </li>
            </ul>
        </nav>
        </div>
    </div>
  );
};

export default ColumnContent;
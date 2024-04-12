import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getNewsList } from "../../redux/slice/newsSlice";

import WOW from 'wow.js';
import 'animate.css';
// import 'intersection-observer';

const TopNews = () => {
  
  const dispatch = useDispatch();
  const ref = useRef(null);

  const  { allNewsList } = useSelector(state => state.news);

  const [data, setData]=useState([]);

  useEffect(() => {
    dispatch(getNewsList());
  },[]);

  useEffect(() => {
    if(allNewsList.length){
      for(let i=0;i<3;i++){
        data[i]=allNewsList[i];
      }
    }
  },[allNewsList]);

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
    <div className='w-full bg-white'>
      <div className='w-full bg-white border flex flex-col justify-center items-center pb-10 sp:rounded-t-[20px] sp:pb-0'>
        <div ref={ref} className='sp:w-full sp:px-2'>
          <p className='text-6xl font-bold mt-20 mb-10 text-[#B40100] sp:text-2xl sp:mb-2 sp:mt-10'>NEWS</p>
          <div className='w-full flex flex-col justify-center'>
            <div className='w-[900px] sp:w-full flex flex-row justify-center text-[#191F4D] font-bold mb-10 py-5 sp:mb-0 sp:py-2 sp:pr-3'>
              <div className='w-[50%] text-left px-20 sp:px-5'>
                <p className='mx-10 text-3xl sp:mx-2 sp:text-xl'>Date</p>
              </div>
              <div className='w-[50%] text-left'>
                <p className='text-3xl sp:text-xl'>Title</p>
              </div>
            </div>
            {data && data.map((news, index) => {
              return(
                <Link to={"/newsdetail/"+news.id} key={index}>
                  <div className='w-[900px] sp:w-full flex flex-row justify-center text-[#191F4D] border-b border-black mb-5 py-5 hover:-mt-3 sp:py-2 sp:pr-3'>
                    <div className='w-[50%] text-left px-20 sp:px-5'>
                      <p className='mx-10 text-xl sp:mx-2 sp:text-sm'>{news.publishDate?news.publishDate.slice(0,10):""}</p>
                    </div>
                    <div className='w-[50%] text-left'>
                      <p className='text-xl sp:text-sm'>{news.title}</p>
                    </div>
                  </div>
                </Link>
                // <Link to={"/newsdetail/"+news.id} key={index}>
                //   <div className='flex flex-col justify-center items-center justify-between w-[400px] h-[400px] sp:w-[300px] shadow border rounded-md m-5 p-10'>
                //     <img className='w-[100%] h-[200px] rounded hover:opacity-50 hover:scale-110' src={`${process.env.REACT_APP_BASE_URL}/img/${news.image}`} />
                //     <p className='mt-3'>{news.publishDate?news.publishDate.slice(0,10):""}</p>
                //     <p>{news.title}</p>
                //   </div>
                // </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopNews;
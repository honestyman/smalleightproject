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
          entry.target.classList.add('wow', 'animate__animated', 'animate__slideInLeft');
        } else {
          entry.target.classList.remove('wow', 'animate__animated', 'animate__slideInLeft');
        }
      });
    });

    observer.observe(ref.current);

    // return () => {
    //   observer.unobserve(ref.current);
    // };
  }, []);

  return (
    <div className='w-full bg-[#B40100] pt-10'>
      <div className='w-full bg-white rounded-t-[100px] flex flex-col justify-center items-center pb-10 sp:rounded-t-[20px] sp:pb-0'>
        <div ref={ref} className='sp:w-full sp:px-5'>
          <p className='text-4xl font-bold mt-20 mb-10 text-[#FB2407] sp:text-2xl'>ニュース</p>
          <div className='w-full flex flex-wrap px-10 justify-center'>
            {data && data.map((news, index) => {
              return(
                <Link to={"/newsdetail/"+news.id} key={index}>
                  <div className='flex flex-col justify-center items-center justify-between w-[400px] h-[400px] sp:w-[300px] shadow border rounded-md m-5 p-10'>
                    <img className='w-[100%] h-[200px] rounded hover:opacity-50 hover:scale-110' src={`${process.env.REACT_APP_BASE_URL}/img/${news.image}`} />
                    <p className='mt-3'>{news.publishDate?news.publishDate.slice(0,10):""}</p>
                    <p>{news.title}</p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopNews;
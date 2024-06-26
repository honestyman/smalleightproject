import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getOneNews } from "../../redux/slice/newsSlice";
import computer from '../../img/computer.webp';

import WOW from 'wow.js';
import 'animate.css';

const NewsDetailContent = (props) => {

  const ref = useRef(null);
  const dispatch = useDispatch();
  // const navigate= useNavigate();

  const [contentsArray, setContentsArray] = useState([]);

  const { oneNewsData } = useSelector(state => state.news);
  
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  
  useEffect(() => {
    dispatch(getOneNews(props.newsId));
  }, []);

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
          entry.target.classList.add('wow', 'animate__animated', 'animate__pulse');
        } else {
          entry.target.classList.remove('wow', 'animate__animated', 'animate__pulse');
        }
      });
    });

    observer.observe(ref.current);
  }, []);

  return (
    <div className='w-full bg-white to-red-700 pt-20 pb-20'>
      <div className='w-full bg-white'>
        <p className='pt-10 ml-40 text-left sp:ml-10'><Link to="/" className='bg-[#191F4D] py-1 px-2 rounded text-white'>Top</Link> / <Link className='bg-[#191F4D] py-1 px-2 rounded text-white' to="/news">ニュース</Link> / {oneNewsData.title}</p>
        <div className='w-full flex justify-center pb-10 sp:rounded-[20px] sp:flex-wrap-reverse'>
          <div className='w-[75%] flex flex-col px-20 text-left sp:px-5 sp:w-full'>
            <div className='flex py-10 flex justify-between items-center flex-wrap'>
              <p className='text-xl text-[#191F4D] font-bold mx-5 sp:text-sm'>{oneNewsData.createdAt ? oneNewsData.createdAt.slice(0, 10) : ""}</p>
            </div>
            <h1 className='text-3xl font-bold mt-5 text-center sp:text-xl sp:mt-10'><span>{oneNewsData.title}</span></h1>
            <div className='w-full py-5'>
              <img className='w-[60%] rounded-2xl mx-auto hover:opacity-80' src={`${process.env.REACT_APP_BASE_URL}/img/${oneNewsData.image}`} alt='newImage'/>
            </div>
            
            <p className='my-10 leading-loose tracking-wider sp:text-sm'>{oneNewsData.contents}</p>
            {oneNewsData.newschildren && oneNewsData.newschildren.map((child, index) => {
              return (
                <div className='w-full flex flex-col py-5' key={index}>
                  {child.title && <h2 className='text-xl'>{child.title}</h2>}
                  {child.description && <p className='leading-loose tracking-wider sp:text-sm'>{child.description}</p>}
                </div>
              );
            })
            }
            
          </div>
          <div className='w-[25%] sp:w-full flex flex-col px-10 mt-10 justify-center'>
              <div className='w-full flex flex-col items-center bg-white px-10 py-10 border rounded-xl shadow-md lg:px-3 lg:py-5 sp:px-5 sp:py-10'>
                {/* <div className='w-[100px] h-[100px] bg-red-500'></div> */}
                <img src={computer} className='w-[80%] lg:w-full sp:w-full sp:h-[150px] rounded-md shadow-md float-left sp:float-none mx-10 sp:mx-0 hover:opacity-50 hover:scale-110' alt="" />
                <p className='text-[#191F4D] text-xl font-bold mt-5'>スモハチツール</p>
                <span className='my-5 lg:text-sm text-[#191F4D] sp:text-sm'>フリーのジェネレーターなど業務で<br/>役に立つWEBツールをご提供しています。</span>
                <div ref={ref} className='w-full flex flex-col items-center'>
                  <Link to={"/tools"} className='px-5 py-2 bg-white w-[200px] lg:w-[150px] rounded-md border shadow text-[#191F4D] lg:text-sm hover:border hover:text-white hover:bg-[#191F4D]'>スモハチツールへ</Link>
                  {/* <Link to="/mitsuke" className='px-5 py-2 bg-[#191F4D] w-[200px] lg:w-[150px] rounded-full text-white hover:border hover:text-[#191F4D] hover:bg-white'>質問に答える(無料)</Link>
                  <Link to="/mitsuke/partner" className='px-5 py-2 border-2 w-[200px] lg:w-[150px] rounded-full text-[#191F4D] my-5 hover:bg-[#191F4D] hover:text-white'>ご掲載希望はこちら</Link> */}
                </div>
              </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default NewsDetailContent;
import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { SlArrowRight } from "react-icons/sl";
import { getOneColumn } from "../../redux/slice/columnSlice";
import computer from '../../img/computer.webp';


import WOW from 'wow.js';
import 'animate.css';

const ColumnDetailContent = (props) => {
  const ref = useRef(null);

  const dispatch = useDispatch();
  const navigate= useNavigate();

  const [date, setDate]=useState("")

  const  {oneColumnData } = useSelector(state => state.columns);
  
  useEffect(() => {
    dispatch(getOneColumn(props.columnId));
  },[]);

  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);

  useEffect(()=>{
    console.log(oneColumnData);
  },[oneColumnData]);

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
    <div className='w-full bg-white pt-20 '>
      <div className='w-full'>
        <p className='mx-10 pt-10 text-left ml-40 sp:mx-10'><Link to="/" className='bg-[#191F4D] py-1 px-2 rounded text-white'>Top</Link> / <Link className='bg-[#191F4D] py-1 px-2 rounded text-white' to="/column">コラム</Link> / {oneColumnData.title}</p>
        <div className='w-[full] flex justify-center pb-10 sp:rounded-[20px] sp:flex-wrap-reverse'>
          <div className='w-[75%] flex flex-col px-32 text-left sp:px-5 sp:w-full'>
            <h1 className='text-3xl font-bold mt-20 text-center sp:text-xl sp:mt-10'><span>{oneColumnData.title}</span></h1>
            <div className='flex mt-5 flex justify-between items-center flex-wrap'>
              <div className='flex'>
                {
                  oneColumnData.columncategories && oneColumnData.columncategories.map((category, index)=>{
                    return(
                      <span key={index} className='mx-3 mt-2 text-sm bg-[#f4f8f9] font-bold border rounded-md p-2 sp:text-xs sp:p-2 sp:mx-1'>{category.text}</span>
                    );
                  })
                }
              </div> 
              <p className='text-xl text-[#191F4D] font-bold mx-5 sp:text-sm'>{oneColumnData.createdAt?oneColumnData.createdAt.slice(0,10):""}</p>
            </div>
            <p className='my-10 leading-loose tracking-wider sp:text-xs'>{oneColumnData.description}</p>
            <div className='w-full flex justify-center py-5'>
              {oneColumnData.thumbnail && <img className='rounded hover:opacity-50 hover:scale-110' src={`${process.env.REACT_APP_BASE_URL}/img/${oneColumnData.thumbnail}`} alt='thumbnail'/>}
            </div>
            <div>
              {
                oneColumnData.columnfirstchildren && oneColumnData.columnfirstchildren.map((section1, index1)=>{
                  return(
                    <div key={index1} id={`h2_${section1.id}`}>
                      <div className='flex text-2xl font-bold text-[#191F4D] p-5 bg-[#f4f8f9] items-center sp:text-xl sp:pt-0'>
                        <div className='rounded-full text-sm text-white p-3 bg-[#191F4D]'>
                            <SlArrowRight />
                        </div>
                        <h2 className='ml-2'>{section1.title}</h2>
                      </div>
                      <p className='my-10 leading-loose tracking-wider sp:text-xs'>{section1.description}</p>
                      {
                        section1 && section1.columnsecondchildren.map((section2, index2)=>{
                          return(
                            <div key={index2} id={`h3_${section2.id}`}>
                              <div className='w-full border-b-[2px] border-dashed p-3 border-[#191F4D]'>
                                <h3 className='text-xl font-bold sp:text-[16px]'>{section2.title}</h3>
                              </div>
                              <p className='my-10 leading-loose tracking-wider sp:text-xs'>{section2.description}</p>
                            </div>
                          )
                        })
                      }
                    </div>
                  );
                })
              }
            </div>
          </div>
          <div className='w-[25%] sp:w-full flex flex-col px-10 justify-start py-40 sp:py-10'>
              <div className='w-full flex flex-col items-center bg-white px-10 py-10 border rounded-xl shadow-md lg:px-3 lg:py-5 sp:px-5 sp:py-10'>
                {/* <div className='w-[100px] h-[100px] bg-red-500'></div> */}
                <img src={computer} className='w-[80%] lg:w-full sp:w-full sp:h-[150px] rounded-md shadow-md float-left sp:float-none mx-10 sp:mx-0 hover:opacity-50 hover:scale-110' alt="" />
                <p className='text-[#191F4D] text-xl font-bold mt-5'>スモハチツール</p>
                <span className='my-5 lg:text-sm text-[#191F4D] sp:text-sm'>フリーのジェネレーターなど業務で<br/>役に立つWEBツールをご提供しています。</span>
                <div ref={ref} className='w-full flex flex-col items-center'>
                  <Link className='px-5 py-2 bg-white w-[200px] lg:w-[150px] rounded-md border shadow text-[#191F4D] lg:text-sm hover:border hover:text-white hover:bg-[#191F4D]'>スモハチツールへ</Link>
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

export default ColumnDetailContent;
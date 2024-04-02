import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getOneColumn } from "../../redux/slice/columnSlice";
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
    <div className='w-full bg-gradient-to-t from-[#FD6E6A] to-red-500 pt-40 pb-20'>
      <div className='w-full bg-white rounded-[100px] sp:rounded-[20px]'>
        <p className='mx-10 pt-10 text-left ml-40 sp:mx-10'><Link to="/" className='bg-[#FD6E6A] py-1 px-2 rounded text-white'>Top</Link> / <Link className='bg-[#FD6E6A] py-1 px-2 rounded text-white' to="/news">コラム</Link> / {oneColumnData.title}</p>
        <div className='w-[full] flex justify-center pb-10 sp:rounded-[20px] sp:flex-wrap-reverse'>
          <div className='w-[75%] flex flex-col px-40 text-left sp:px-5 sp:w-full'>
            <h1 className='text-5xl font-bold mt-20 text-center sp:text-xl sp:mt-10'><span>{oneColumnData.title}</span></h1>
            <div className='flex mt-5 flex justify-between items-center flex-wrap'>
              <div className='flex'>
                {
                  oneColumnData.columncategories && oneColumnData.columncategories.map((category, index)=>{
                    return(
                      <span key={index} className='mx-3 mt-2 bg-[#f4f8f9] font-bold border rounded-md p-3 sp:text-xs sp:p-2 sp:mx-1'>{category.text}</span>
                    );
                  })
                }
              </div> 
              <p className='text-xl text-[#FB2407] font-bold mx-5 sp:text-sm'>{oneColumnData.createdAt?oneColumnData.createdAt.slice(0,10):""}</p>
            </div>
            <p className='text-xl my-10 sp:text-xs'>{oneColumnData.description}</p>
            <div>
              {
                oneColumnData.columnfirstchildren && oneColumnData.columnfirstchildren.map((section1, index1)=>{
                  return(
                    <div key={index1}>
                      <p className='text-5xl font-bold text-[#FB2407] pt-10 sp:text-xl sp:pt-0'>{section1.title}</p>
                      <p className='text-xl my-10 sp:text-xs'>{section1.description}</p>
                      {
                        section1 && section1.columnsecondchildren.map((section2, index2)=>{
                          return(
                            <div key={index2}>
                              <p className='text-3xl font-bold sp:text-[16px]'>{section2.title}</p>
                              <p className='text-xl my-10 sp:text-xs'>{section2.description}</p>
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
            <div className='w-full flex flex-col items-center bg-white px-10 py-20 rounded-xl shadow-md lg:px-5 lg:py-10 sp:px-5 sp:py-10'>
              <div className='w-[100px] h-[100px] bg-red-500'></div>
              <span className='my-5 lg:text-sm sp:text-sm'>マーケティングに関する質問に答えるだけで条件に合った企業が見つかります</span>
              <div ref={ref} className='w-full flex flex-col items-center'>
                <Link to="/webmaru" className='px-5 py-2 bg-[#FD6E6A] w-[200px] lg:w-[150px] rounded-full text-white hover:border hover:text-[#FD6E6A] hover:bg-white'>質問に答える(無料)</Link>
                <Link className='px-5 py-2 border-2 w-[200px] lg:w-[150px] rounded-full text-[#FD6E6A] my-5 hover:bg-[#FD6E6A] hover:text-white'>ご掲載希望はこちら</Link>
              </div>
            </div>
          </div>
            
        </div>
      </div>
      
    </div>
  );
};

export default ColumnDetailContent;
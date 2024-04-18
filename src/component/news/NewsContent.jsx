import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getNewsList } from "../../redux/slice/newsSlice";
import Pagination from '../Pagination';

const NewsContent = () => {

  const dispatch = useDispatch();

  const  { allNewsList } = useSelector(state => state.news);

  const [currentPage, setCurrentPage]=useState(1)
  const [recordsPerPage, setRecordPerPage]=useState(6);
  const [data, setData]=useState([]);

  useEffect(() => {
    dispatch(getNewsList());
  },[]);

  useEffect(() => {
    console.log(allNewsList);
    setData(allNewsList);
  },[allNewsList]);

  useEffect(() => {
    // Event listener callback function
    const handleResize = () => {
      if(window.innerWidth<=640){
        setRecordPerPage(6);
      }else{
        setRecordPerPage(6)
      }
    };

    // Attach the event listener
    window.addEventListener('resize', handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  useEffect(()=>{
    if(window.innerWidth<=640){
        setRecordPerPage(6);
      }
  });

  const indexOfLastRecord = currentPage*recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord-recordsPerPage;
  const currentRecords = data.slice(indexOfFirstRecord, indexOfLastRecord);
  const nPages=Math.ceil(data.length/recordsPerPage);

  return (
    <div className='w-full bg-white pt-20 pb-20'>
      <div className='w-full flex flex-col justify-center items-center pb-10'>
          <h1 className='text-4xl font-bold mt-20 mb-10 text-[#B40100]'>ニュース</h1>
          <div className='w-full flex flex-col items-center px-10 justify-center'>
            {/* <div className='w-[900px] sp:w-full flex flex-row justify-center text-[#191F4D] font-bold mb-10 py-5 sp:mb-0 sp:py-2 sp:pr-3'>
              <div className='w-[50%] text-left px-20 sp:px-5'>
                <p className='mx-10 text-3xl sp:mx-2 sp:text-xl'>Date</p>
              </div>
              <div className='w-[50%] text-left'>
                <p className='text-3xl sp:text-xl'>Title</p>
              </div>
            </div> */}
            {currentRecords && currentRecords.map((news, index) => {
              return(
                <Link className='w-full flex flex-col items-center' to={"/newsdetail/"+news.id} key={index}>
                  <div className='w-[900px] sp:w-full flex flex-row justify-center sp:justify-between text-[#191F4D] border-b border-black mb-5 py-5 hover:font-bold sp:py-2 sp:pr-3'>
                    <div className='w-[50%] text-left px-20 sp:px-5'>
                      <p className='mx-10 text-xl sp:mx-2 sp:text-sm'>{news.createdAt?news.createdAt.slice(0,10):""}</p>
                    </div>
                    <div className='w-[50%] text-left'>
                      <p className='text-xl sp:text-sm'>{news.title}</p>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
          {/* <Link>
            <div className='flex flex-row justify-center border-b border-black mb-10 py-5'>
              <p className='mx-5 text-2xl'>2024.4.1</p>
              <p className='mx-5 text-2xl'>テキストテキストテキストテキスト</p>
            </div>
          </Link> */}
            <Pagination nPages={nPages} currentPage={currentPage} setCurrentPage={setCurrentPage}/>
        </div>
    </div>
  );
};

export default NewsContent;
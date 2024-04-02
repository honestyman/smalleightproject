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
        setRecordPerPage(1);
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
        setRecordPerPage(1);
      }
  });

  const indexOfLastRecord = currentPage*recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord-recordsPerPage;
  const currentRecords = data.slice(indexOfFirstRecord, indexOfLastRecord);
  const nPages=Math.ceil(data.length/recordsPerPage);

  return (
    <div className='w-full bg-gradient-to-t from-[#FD6E6A] to-red-500 pt-40 pb-20'>
      <div className='w-full bg-white rounded-[100px] sp:rounded-[20px] flex flex-col justify-center items-center pb-10'>
          <p className='text-4xl font-bold mt-20 mb-10 text-[#FB2407]'>ニュース</p>
          <div className='w-full flex flex-wrap px-10 justify-center'>
            {currentRecords && currentRecords.map((news, index) => {
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
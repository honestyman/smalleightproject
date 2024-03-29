import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import WOW from 'wow.js';
import 'animate.css';
import { useDispatch, useSelector } from 'react-redux';
import { getColumnList } from '../../redux/slice/columnSlice';
import Pagination from '../Pagination';
// import 'intersection-observer';

const TopColumn = () => {
  const [currentPage, setCurrentPage]=useState(1)
  const [recordsPerPage, setRecordPerPage]=useState(3);
  const [data, setData]=useState([]);

  const ref = useRef(null);
  const dispatch = useDispatch();
  const  {allColumnList } = useSelector(state => state.columns);

  useEffect(()=>{
    dispatch(getColumnList());
  },[]);

  useEffect(()=>{
    console.log(allColumnList);
    if(allColumnList>6){
      for(let i=0;i<6;i++){
        data[i]=allColumnList[i];
      }
    }else{
      setData(allColumnList);
    }
  },[allColumnList]);
  
  const indexOfLastRecord = currentPage*recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord-recordsPerPage;
  const currentRecords = data.slice(indexOfFirstRecord, indexOfLastRecord);
  const nPages=Math.ceil(data.length/recordsPerPage);

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
  })

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
          entry.target.classList.add('wow', 'animate__animated', 'animate__zoomIn');
        } else {
          entry.target.classList.remove('wow', 'animate__animated', 'animate__zoomIn');
        }
      });
    });

    observer.observe(ref.current);

  }, []);

  return (
    <div className='w-full bg-[#FD6E6A] pb-10'>
      <div className='w-full flex flex-col justify-center items-center pb-10 sp:pb-0'>
        <div ref={ref} className='sp:w-full'>
          <p className='text-4xl font-bold mt-10 mb-10 text-white sp:text-2xl sp:mt-0'>コラム</p>
          <div className='w-full flex justify-center my-10 sp:my-5'>
            {currentRecords && currentRecords.map((column, index)=>{
              return(
                <div className='flex flex-col justify-center items-center mx-10 sp:w-[50%]'>
                  <div className='w-[250px] h-[250px] bg-white sp:w-200px sp:h-[200px]'></div>
                  <p className='text-white mt-3'>{column.createdAt.slice(0,10)}</p>
                  <p className='w-[300px] text-white mt-3'>{column.title}</p>
                </div>  
              );
            })}
          </div>
          <Pagination nPages={nPages} currentPage={currentPage} setCurrentPage={setCurrentPage}/>
          <button className='text-xl bg-white text-[#FD6E6A] border-2 rounded-md px-5 py-1 mt-10 hover:bg-[#FD6E6A] hover:text-white sp:text-sm'>もっと見る</button>
        </div>
        
      </div>
    </div>
  );
};

export default TopColumn;
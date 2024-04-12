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
        setRecordPerPage(3)
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
          entry.target.classList.add('wow', 'animate__animated', 'animate__fadeIn');
        } else {
          entry.target.classList.remove('wow', 'animate__animated', 'animate__fadeIn');
        }
      });
    });

    observer.observe(ref.current);

  }, []);

  return (
    <div className='w-full bg-white pb-10'>
      <div className='w-full flex flex-col justify-center items-center pb-10 sp:pb-0'>
        <div ref={ref} className='w-full sp:w-full'>
          <p className='text-6xl font-bold mt-10 mb-10 text-[#B40100] sp:text-2xl sp:mt-0'>コラム</p>
          <div className='w-full flex flex-wrap justify-center py-10 sp:my-5 sp:py-2'>
            {currentRecords && currentRecords.map((column, index)=>{
              return(
                <Link to={"/columndetail/"+column.id}>
                  <div key={index} className='flex flex-col justify-start sp:justify-center items-center mx-5 px-10 lg:mx-5 sp:text-sm'>
                    <div className='w-[200px] h-[200px] rounded-md sp:w-200px sp:h-[200px]'>
                      {column.thumbnail && <img className='w-full rounded hover:opacity-50' src={`${process.env.REACT_APP_BASE_URL}/img/${column.thumbnail}`} />}
                    </div>
                    <p className='text-[#191F4D] mt-3'>{column.createdAt.slice(0,10)}</p>
                    <p className='w-[200px] text-[#191F4D] mt-3'>{column.title}</p>
                  </div>  
                </Link>
              );
            })}
          </div>
          <Pagination nPages={nPages} currentPage={currentPage} setCurrentPage={setCurrentPage}/>
          <Link to={"/column"}><button className='text-[#191F4D] border border-[#191F4D] rounded-md bg-white px-5 py-1 mt-10 text-sm hover:bg-[#191F4D] hover:text-white sp:text-sm'>もっと見る</button></Link>
        </div>
        
      </div>
    </div>
  );
};

export default TopColumn;
import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getColumnList } from '../../redux/slice/columnSlice';
import Pagination from '../Pagination';

const ColumnContent = () => {
  const [currentPage, setCurrentPage]=useState(1)
  const [recordsPerPage, setRecordPerPage]=useState(6);
  const [data, setData]=useState([]);

  const dispatch = useDispatch();
  const  {allColumnList } = useSelector(state => state.columns);

  useEffect(()=>{
    dispatch(getColumnList());
  },[]);
  useEffect(()=>{
    setData(allColumnList);
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
  return (
    <div className='w-full bg-gradient-to-t from-[#FD6E6A] to-red-500 pt-40 pb-10'>
      <div className='w-full bg-white rounded-[100px] sp:rounded-[20px] flex flex-col justify-center items-center pb-20 '>
          <p className='text-4xl font-bold mt-10 text-[#FB2407] sp:text-2xl'>コラム</p>
          <div className='w-[75%] sp:w-full flex flex-wrap justify-center my-5'>
          {currentRecords && currentRecords.map((column, index)=>{
              return(
                <Link key={index} to={"/columndetail/"+column.id}>
                  <div className='flex flex-col justify-center items-center mx-10 mt-10'>
                      <div className='w-[250px] h-[250px] bg-[#FD6E6A]'></div>
                      <p className='mt-3'>{column.createdAt.slice(0,10)}</p>
                      <p className='mt-3 w-[300px]'>{column.title}</p>
                  </div>  
                </Link>
              );
            })}
          </div>
          <Pagination nPages={nPages} currentPage={currentPage} setCurrentPage={setCurrentPage}/>
        </div>
    </div>
  );
};

export default ColumnContent;
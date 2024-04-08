import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getColumnList, getColumnCategoryList } from '../../redux/slice/columnSlice';
import Pagination from '../Pagination';
import WOW from 'wow.js';
import 'animate.css';

const ColumnContent = () => {

  const ref = useRef(null);

  const [currentPage, setCurrentPage]=useState(1)
  const [recordsPerPage, setRecordPerPage]=useState(6);
  const [data, setData]=useState([]);

  const dispatch = useDispatch();
  const  {allColumnList, allColumnCategoryList } = useSelector(state => state.columns);

  useEffect(()=>{
    dispatch(getColumnList());
    dispatch(getColumnCategoryList());
  },[]);
  
  useEffect(()=>{
    if(!data.length){
      setData(allColumnList);
    }
    // console.log("allColumnList", allColumnList)
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
  });

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

  const categoryFilterFunction = (text) =>{
    console.log(text);
    setData(
      allColumnList.filter(column => {
        if(column.columncategories){
          for(let i=0;i<column.columncategories.length; i++){
            return(column.columncategories[i].text===text)
          }
        }
      })
    )
  }
  useEffect(()=>{
    console.log(data);
  },[data]);

  const setReset =()=>{
    setData(allColumnList)
  }


  return (
    <div className='w-full bg-gradient-to-t from-[#B40100] to-red-700 pt-40 pb-10'>
      <div className='w-full bg-[#f4f8f9] rounded-[100px] sp:rounded-[20px] flex flex-col justify-center items-center pb-20 '>
          <div className='w-full flex sp:flex-wrap-reverse'>
            <div className='w-[75%] sp:w-full flex flex-col'>
              <p className='text-4xl font-bold mt-10 text-[#FB2407] sp:text-2xl'>コラム一覧</p>
              <p className='text-xl mt-5 sp:text-sm'>SmallEightのプログやコラム記事を掲載しています。</p>
              <div className='w-full sp:w-full flex flex-wrap justify-center my-5'>
                {currentRecords && currentRecords.map((column, index)=>{
                  return(
                    <Link key={index} to={"/columndetail/"+column.id}>
                      <div className='flex flex-col justify-center items-center mx-10 mt-10'>
                          <div className='w-[250px] h-[250px] bg-[#B40100]'></div>
                          <p className='mt-3'>{column.createdAt.slice(0,10)}</p>
                          <p className='mt-3 w-[300px]'>{column.title}</p>
                      </div>  
                    </Link>
                  );
                })}
              </div>
              <Pagination nPages={nPages} currentPage={currentPage} setCurrentPage={setCurrentPage}/>
            </div>
            <div className='w-[25%] sp:w-full flex flex-col px-10 justify-center'>
              <div className='w-full h-[30%] overflow-y-auto my-10'>
                <div className='flex flex-wrap justify-between'>
                  <button onClick={setReset} className='w-[45%] text-[#B40100] border-2 text-sm mb-1 px-2 py-1 rounded hover:bg-[#B40100] hover:text-white'>すべて見る</button>
                  {allColumnCategoryList && allColumnCategoryList.map((category, index) =>{
                    return(
                      <button onClick={() => categoryFilterFunction(category.text)} className='w-[45%] bg-[#B40100] text-sm mb-1 px-2 py-1 rounded text-white hover:text-[#B40100] hover:bg-white hover:border lg:text-sm sp:text-sm' key={index}>{category.text}</button>
                    );
                  })}
                </div>
              </div>
              <div className='w-full flex flex-col items-center bg-white px-10 py-20 rounded-xl shadow-md lg:px-5 lg:py-10 sp:px-5 sp:py-10'>
                <div className='w-[100px] h-[100px] bg-red-500'></div>
                <span className='my-5 lg:text-sm sp:text-sm'>マーケティングに関する質問に答えるだけで条件に合った企業が見つかります</span>
                <div ref={ref} className='w-full flex flex-col items-center'>
                  <Link to="/mitsuke" className='px-5 py-2 bg-[#B40100] w-[200px] lg:w-[150px] rounded-full text-white hover:border hover:text-[#B40100] hover:bg-white'>質問に答える(無料)</Link>
                  <Link to="/mitsuke/partner" className='px-5 py-2 border-2 w-[200px] lg:w-[150px] rounded-full text-[#B40100] my-5 hover:bg-[#B40100] hover:text-white'>ご掲載希望はこちら</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  );
};

export default ColumnContent;
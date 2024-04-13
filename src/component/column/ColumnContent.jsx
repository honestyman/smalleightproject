import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getColumnList, getColumnCategoryList } from '../../redux/slice/columnSlice';
import computer from '../../img/computer.webp';
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
    <div className='w-full bg-white pt-28'>
      <div className='w-full flex flex-col justify-center items-center pb-20 '>
          <div className='w-full flex sp:flex-wrap-reverse'>
            <div className='w-[75%] sp:w-full flex flex-col'>
              <p className='text-4xl font-bold mt-10 text-[#B40100] sp:text-2xl'>コラム一覧</p>
              <p className='text-xl text-[#191F4D] mt-5 sp:text-sm'>SmallEightのプログやコラム記事を掲載しています。</p>
              <div className='w-full sp:w-full flex flex-wrap justify-start px-10 my-5'>
                {currentRecords && currentRecords.map((column, index)=>{
                  return(
                    <Link key={index} to={"/columndetail/"+column.id}>
                      <div className='flex flex-col justify-center items-center mx-10 mt-10 px-5'>
                          <div className='w-[200px] h-[200px] rounded-md bg-[#191F4D]'>
                            {column.thumbnail && <img className='w-full rounded hover:opacity-50' src={`${process.env.REACT_APP_BASE_URL}/img/${column.thumbnail}`} />}
                          </div>
                          <p className='mt-3'>{column.createdAt.slice(0,10)}</p>
                          <p className='mt-3 w-[200px]'>{column.title}</p>
                      </div>  
                    </Link>
                  );
                })}
              </div>
              <Pagination nPages={nPages} currentPage={currentPage} setCurrentPage={setCurrentPage}/>
            </div>
            <div className='w-[25%] sp:w-full flex flex-col px-10 justify-center'>
              <div className='w-full overflow-y-auto my-10 border shadow-md rounded-md p-5'>
                <div className='flex flex-wrap justify-between'>
                  <button onClick={setReset} className='w-[45%] lg:w-full text-[#191F4D] border-2 text-sm mb-1 px-2 py-1 rounded hover:bg-[#191F4D] hover:text-white'>すべて見る</button>
                  {allColumnCategoryList && allColumnCategoryList.map((category, index) =>{
                    return(
                      <button onClick={() => categoryFilterFunction(category.text)} className='w-[45%] lg:w-full bg-white text-sm mb-1 px-2 py-1 border-2 rounded text-[#191F4D] hover:text-white hover:bg-[#191F4D] hover:border lg:text-sm sp:text-sm' key={index}>{category.text}</button>
                    );
                  })}
                </div>
              </div>
              <div className='w-full flex flex-col items-center bg-white px-10 py-10 border rounded-xl shadow-md lg:px-3 lg:py-5 sp:px-5 sp:py-10'>
                {/* <div className='w-[100px] h-[100px] bg-red-500'></div> */}
                <img src={computer} className='w-[80%] lg:w-full sp:w-full sp:h-[150px] rounded-md shadow-md float-left sp:float-none mx-10 sp:mx-0 hover:opacity-50 hover:scale-110' alt="" />
                <p className='text-[#191F4D] text-xl font-bold mt-5'>スモハチ Tools</p>
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

export default ColumnContent;
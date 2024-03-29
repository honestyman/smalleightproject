import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { SlArrowDown, SlArrowUp } from "react-icons/sl";
import { useDispatch, useSelector } from "react-redux";
import { getCompanyList } from "../../redux/slice/companySlice";
import Pagination from '../Pagination';


const WebMaruContnet = () => {
  const [currentPage, setCurrentPage]=useState(1)
  const [recordsPerPage]=useState(1);
  const [data, setData]=useState([]);
  const [taskFlag, setTaskFlag]=useState(false);
  const [expertiseFlag, setExpertiseFlag]=useState(false);
  const [toolFlag, setToolFlag]=useState(false);
  const [priceFlag, setPriceFlag]=useState(false);

  const dispatch = useDispatch();
  const {allCompanyList} = useSelector(state => state.companies);
  
  useEffect(() => {
    dispatch(getCompanyList());
  }, []);
  useEffect(() => {
    setData(allCompanyList)
  }, [allCompanyList]);

  const indexOfLastRecord = currentPage*recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord-recordsPerPage;
  const currentRecords = data.slice(indexOfFirstRecord, indexOfLastRecord);
  const nPages=Math.ceil(data.length/recordsPerPage);
  
  const sortTask=()=>{
    setTaskFlag(taskFlag?false:true);
    const temp = [...data];
    temp.sort((a, b) => {
      return b.industryexperiences.length - a.industryexperiences.length;
    });
    setData(temp);
    if(taskFlag){
      setData(allCompanyList)
    }
  }
  const sortExpertise=()=>{
    setExpertiseFlag(expertiseFlag?false:true);
    const temp = [...data];
    temp.sort((a, b) => {
      return b.expertises.length - a.expertises.length;
    });
    setData(temp);
    if(expertiseFlag){
      setData(allCompanyList)
    }
  }
  const sortTool=()=>{
    setToolFlag(toolFlag?false:true);
    const temp = [...data];
    temp.sort((a, b) => {
      return b.tools.length - a.tools.length;
    });
    setData(temp);
    if(toolFlag){
      setData(allCompanyList)
    }
  }
  const sortPrice=()=>{
    setPriceFlag(priceFlag?false:true);
    const temp = [...data];
    // let matches = str.match(/(\d+)/);
    // console.log(parseInt(temp[1].pricesence.text));
    temp.sort((a, b) => {
      return (a.pricesence.text).match(/(\d+)/)[0] - (b.pricesence.text).match(/(\d+)/)[0];
    });
    setData(temp);
    if(priceFlag){
      setData(allCompanyList)
    }
  }


  return (
    <div className='w-full bg-[#f4f8f9] py-10 drop-shadow-sm'>
      <div className='w-full flex flex-col justify-center items-center mt-10 mb-20 sp:mb-10 sp:mt-0'>
          <p className='text-4xl font-bold sp:text-xl'>カテゴリーで探す</p>
      </div>
      <div className='w-full flex justify-center items-center border-t-2 pt-5'>
          <Link><div className='text-xl mx-16 flex justify-center items-center sp:mx-2 sp:text-sm' onClick={sortTask}>課題から探す{!taskFlag?<SlArrowDown className="ml-2" />:<SlArrowUp className="ml-2" />}</div></Link>
          <Link><div className='text-xl mx-16 flex justify-center items-center sp:mx-2 sp:text-sm' onClick={sortExpertise}>特徴・強みから探す{!expertiseFlag?<SlArrowDown className="ml-2" />:<SlArrowUp className="ml-2" />}</div></Link>
          <Link><div className='text-xl mx-16 flex justify-center items-center sp:mx-2 sp:text-sm' onClick={sortTool}>ツールを探す{!toolFlag?<SlArrowDown className="ml-2" />:<SlArrowUp className="ml-2" />}</div></Link>
          <Link><div className='text-xl mx-16 flex justify-center items-center sp:mx-2 sp:text-sm' onClick={sortPrice}>予算規模から探す{!priceFlag?<SlArrowDown className="ml-2" />:<SlArrowUp className="ml-2" />}</div></Link>
      </div>
      <div className='w-full flex flex-col justify-center items-center px-10 sp:px-5'>
        {currentRecords && currentRecords.map((company)=>{
            return(
              <div key={company.id} className='w-full bg-white flex rounded-2xl shadow mt-10 px-3 py-5 sp:flex-wrap'>
                <div className='w-[20%] sp:w-full flex justify-center items-center'>
                  <div className='w-[200px] h-[200px] sp:w-[100px] sp:h-[100px] bg-[#FD6E6A]'></div>
                </div>
                <div className='w-[80%] sp:w-full flex flex-col text-left px-5 sp:pt-5'>
                  <p className='text-2xl font-bold sp:text-xl sp:text-center'>{company.name}</p>
                  <p className='text-sm font-bold mt-5 sp:text-[12px]'>【PRタイトル】</p>
                  <p className="font-bold sp:text-sm">{company.title}</p>
                  <p className='text-sm mt-5 sp:text-[12px]'>【紹介文】</p>
                  <p className='sp:text-sm'>{company.description}</p>
                  <p className='text-sm mt-5 sp:text-[12px]'>【得意な領域】</p>
                  <p className='sp:text-sm'>{company.expertises.map((text, index)=>{
                    return(
                      <span key={index}>{text.text}{index<company.expertises.length-1?", ":""}</span>
                    );
                  })}</p>
                  <p className='text-sm mt-5 sp:text-[12px]'>【マーケティングツール】</p>
                  <p className='sp:text-sm'>{company.tools.map((text, index)=>{
                    return(
                      <span key={index}>{text.text}{index<company.tools.length-1?", ":""}</span>
                    );
                  })}</p>
                  <p className='text-sm mt-5 sp:text-[12px]'>【解決できる課題】</p>
                  <p className='sp:text-sm'>{company.solvedissues.map((text, index)=>{
                    return(
                      <span key={index}>{text.text}{index<company.solvedissues.length-1?", ":""}</span>
                    );
                  })}</p>
                  <p className='text-sm mt-5 sp:text-[12px]'>【価格】</p>
                  <p className='sp:text-sm'>{company.pricesence.text}</p>
                  <p className='text-sm mt-5 sp:text-[12px]'>【業界実績】</p>
                  <p className='sp:text-sm'>{company.industryexperiences.map((text, index)=>{
                    return(
                      <span key={index}>{text.text}{(index < company.industryexperiences.length-1)?", ":""}</span>
                    );
                  })}</p>
                  <div className='w-[100%] flex justify-center items-center'>
                    <Link to={"/companyinquery/"+company.id}><button className='text-white border-2 rounded-2xl bg-[#FD6E6A] px-10 py-1 mt-3 hover:bg-white hover:text-[#FD6E6A] sp:text-sm'>お問い合わせ</button></Link>
                  </div>
                </div>
              </div>      
            );
        })}       
      </div>
      <Pagination nPages={nPages} currentPage={currentPage} setCurrentPage={setCurrentPage} />  
      
    </div>
  );
};

export default WebMaruContnet;
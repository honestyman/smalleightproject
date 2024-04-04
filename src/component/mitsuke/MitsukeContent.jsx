import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { SlArrowDown, SlArrowUp } from "react-icons/sl";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getCompanyList } from "../../redux/slice/companySlice";

import Pagination from '../Pagination';


const MitsukeContnet = ( {companyContentRef} ) => {
  const navigate= useNavigate();
  const [currentPage, setCurrentPage]=useState(1)
  const [recordsPerPage, setRecordPerPage]=useState(2);
  const [data, setData]=useState([]);
  const [taskFlag, setTaskFlag]=useState(false);
  const [expertiseFlag, setExpertiseFlag]=useState(false);
  const [toolFlag, setToolFlag]=useState(false);
  const [priceFlag, setPriceFlag]=useState(false);

  const [disabled, setDisabled] = useState(true);

  const [isCheckedCompany, setisCheckedCompany] = useState({})
  const [checkedCompanyValue, setCheckedCompanyValue] = useState([]);
  const [checkedCompanyId, setCheckedCompanyId] = useState("");
  const [checkedCompanyCount, setCheckedCompanyCount] = useState(0);

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

  useEffect(() => {
    console.log(checkedCompanyValue)
    var string="";
    if(checkedCompanyValue.length){
      setDisabled(false);
    }else{
      setDisabled(true);
    }
    if(checkedCompanyValue){
      for(let i=0;i<checkedCompanyValue.length;i++){
        string+=checkedCompanyValue[i];
        if(checkedCompanyValue[i+1]){
          string+="&";
        }
      }
    }
    setCheckedCompanyCount(checkedCompanyValue.length);
    setCheckedCompanyId(string);
  }, [checkedCompanyValue]);

  const toggleHandlerCompanies = (item) => () => {
    let tmp = isCheckedCompany;
    tmp[item.id] = isCheckedCompany[item.id] != undefined ? !isCheckedCompany[item.id] : true;
    setisCheckedCompany(tmp)
    if (checkedCompanyValue.includes(item.id))
    setCheckedCompanyValue(checkedCompanyValue.filter(ele => ele != item.id))
    else setCheckedCompanyValue([...checkedCompanyValue, item.id])
  };

  const multifulClick = () =>{
    // alert("sdf");
    navigate("/multiful_companyinquery/"+checkedCompanyId);
    
  }

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
      <div ref={companyContentRef} className='w-full flex flex-col justify-center items-center px-20 sp:px-5'>
        {currentRecords && currentRecords.map((company, index)=>{
            return(
              <div key={index} className='w-full bg-white flex rounded-2xl shadow mt-10 px-10 py-5 sp:flex-wrap'>
                <div className='w-full sp:w-full flex flex-col text-left px-5 sp:pt-5 sp:px-1'>
                  <div className='w-full flex justify-center items-center sp:flex-wrap'>
                    <div className='sp:w-full flex justify-center items-center px-10'>
                      <div className='w-[100px] h-[100px] sp:w-[100px] sp:h-[100px] bg-[#FD6E6A]'></div>
                    </div>
                    <p className='text-2xl font-bold sp:text-xl sp:text-center sp:mt-3'>{company.name}</p>
                  </div>
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
                  <div className='w-full flex justify-center items-center mt-3'>
                    <button className='flex items-center text-white border-2 rounded-2xl bg-[#FD6E6A] px-10 py-1 sp:text-sm' onClick={toggleHandlerCompanies(company)}>
                      <input
                        checked={isCheckedCompany[parseInt(company.id)] != undefined ? isCheckedCompany[parseInt(company.id)] : false}
                        className='w-4 h-4 mr-3'
                        type="checkbox"
                        readOnly
                      />
                      この企業を選択
                      </button>
                    {/* <div className='ml-10 flex items-center' onClick={toggleHandlerCompanies(company, index)}>
                      <input
                        checked={isCheckedCompany[parseInt(index)] != undefined ? isCheckedCompany[parseInt(index)] : false}
                        className='w-5 h-5 '
                        type="checkbox"
                        readOnly
                      />
                      <span className='mx-2'>この企業を選択</span>
                    </div> */}
                  </div>
                </div>
              </div>      
            );
        })}       
      </div>
      <div className='flex justify-center items-center py-3'>
        <span className='px-5'>選択した企業</span>
        <span className='mr-5'>{checkedCompanyCount}件</span>
        <button onClick={multifulClick} disabled={disabled} className={`border-2 rounded-2xl px-5 py-1 sp:text-sm ${!disabled ? 'bg-[#FD6E6A] text-white hover:bg-white hover:text-[#FD6E6A]' : 'bg-gray-300'} `}>お問い合わせ</button>
      </div>
      <Pagination nPages={nPages} currentPage={currentPage} setCurrentPage={setCurrentPage} />  
      
    </div>
  );
};

export default MitsukeContnet;
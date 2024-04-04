import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { SlArrowDown, SlArrowUp } from "react-icons/sl";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getCompanyList } from "../../redux/slice/companySlice";

import Pagination from '../Pagination';


const MitsukePartnerContnet = ( {companyContentRef} ) => {
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
      
    </div>
  );
};

export default MitsukePartnerContnet;
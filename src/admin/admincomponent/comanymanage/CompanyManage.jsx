
import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { CiCircleMore } from "react-icons/ci";
import { RxUpdate } from "react-icons/rx";
import { RiDeleteBin6Line } from "react-icons/ri";
import { IoAddCircleOutline } from "react-icons/io5";

import { useDispatch, useSelector } from 'react-redux';
import { getCompanyList, deleteOneCompany } from "../../../redux/slice/companySlice";
import Pagination from '../../../component/Pagination';
import { Select } from "antd";

const CompanyManage=()=>{
  const dispatch = useDispatch();
  const navigate= useNavigate();
  const  { allCompanyList } = useSelector(state => state.companies);
  
  const [currentPage, setCurrentPage]=useState(1)
  const [recordsPerPage, setRecordPerPage]=useState(3);
  const [data, setData]=useState([]);
  const [deleted, setDeleted]=useState("");

  useEffect(() => {
    dispatch(getCompanyList());
  },[]);

  useEffect(() => {
    setData(allCompanyList)
    console.log(allCompanyList);
  },[allCompanyList]);

  const deleteFunction = (id) => {
    console.log(id);
    dispatch(deleteOneCompany(id)).then(() => {
      dispatch(getCompanyList());
      setCurrentPage(1);
    })
  }

  const indexOfLastRecord = currentPage*recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord-recordsPerPage;
  const currentRecords = data.slice(indexOfFirstRecord, indexOfLastRecord);
  const nPages=Math.ceil(data.length/recordsPerPage);

  return(
    <div className={`-webkit-fill-available h-[900px] bg-white text-sm shadow items-center py-10`}>
      <p className="text-xl font-bold">会社管理</p>
      <div className="w-full flex justify-end items-end px-20 pt-10">
        <Link to={"company_add"} className='flex items-center text-sm text-white rounded-md bg-blue-700 mx-2 px-10 py-1 hover:bg-white hover:text-black hover:border'><IoAddCircleOutline className="font-bold mr-2" />新規登録</Link>
      </div>
      <div className="flex flex-col mx-10 h-[70%] overflow-y-auto">
        <div className="inline-block min-w-full px-10">
        {currentRecords && currentRecords.map((company, index)=>{
            return(
              <div key={index} className='w-full bg-white flex rounded-2xl shadow mt-10 px-10 py-5 border sp:flex-wrap'>
                <div className='w-full sp:w-full flex flex-col text-left px-5 sp:pt-5 sp:px-1'>
                  <div className='w-full flex justify-center items-center sp:flex-wrap'>
                    <div className='sp:w-full flex justify-center items-center px-5'>
                      <div className='w-[60px] h-[60px] sp:w-[100px] sp:h-[100px] border p-1 rounded shadow'>
                        <img className='w-full h-full rounded hover:opacity-50 hover:scale-110' src={`${process.env.REACT_APP_BASE_URL}/img/${company.logo}`} />
                      </div>
                    </div>
                    <p className='font-bold sp:mt-3'>{company.name}</p>
                  </div>

                  <p className='text-sm font-bold mt-2 sp:text-[12px]'>【PRタイトル】</p>
                  <p className="font-bold sp:text-sm">{company.title}</p>
                  <p className='text-sm mt-2 sp:text-[12px]'>【紹介文】</p>
                  <p className='sp:text-sm'>{company.description}</p>
                  <p className='text-sm mt-2 sp:text-[12px]'>【得意な領域】</p>
                  <p className='sp:text-sm'>{company.expertises.map((text, index)=>{
                    return(
                      <span key={index}>{text.text}{index<company.expertises.length-1?", ":""}</span>
                    );
                  })}</p>
                  <p className='text-sm mt-2 sp:text-[12px]'>【マーケティングツール】</p>
                  <p className='sp:text-sm'>{company.tools.map((text, index)=>{
                    return(
                      <span key={index}>{text.text}{index<company.tools.length-1?", ":""}</span>
                    );
                  })}</p>
                  <p className='text-sm mt-2 sp:text-[12px]'>【解決できる課題】</p>
                  <p className='sp:text-sm'>{company.solvedissues.map((text, index)=>{
                    return(
                      <span key={index}>{text.text}{index<company.solvedissues.length-1?", ":""}</span>
                    );
                  })}</p>
                  <p className='text-sm mt-2 sp:text-[12px]'>【価格】</p>
                  <p className='sp:text-sm'>{company.pricesence.text}</p>
                  <p className='text-sm mt-2 sp:text-[12px]'>【業界実績】</p>
                  <p className='sp:text-sm'>{company.industryexperiences.map((text, index)=>{
                    return(
                      <span key={index}>{text.text}{(index < company.industryexperiences.length-1)?", ":""}</span>
                    );
                  })}</p>
                  <div className='w-full flex justify-center items-center mt-3'>
                    <Link to={"company_detail/"+company.id} className='flex items-center text-sm text-white rounded-md bg-green-500 mx-2 px-10 py-1 hover:bg-white hover:text-black hover:border'><CiCircleMore className="font-bold mr-2" />詳細</Link>
                    <Link to={"company_update/"+company.id} className='flex items-center text-sm text-white rounded-md bg-yellow-300 mx-2 px-10 py-1 hover:bg-white hover:text-black hover:border'><RxUpdate className="font-bold mr-2" />変更</Link>
                    <Link className='flex items-center text-sm text-white rounded-md bg-red-500 mx-2 px-10 py-1 hover:bg-white hover:text-black hover:border' onClick={()=>deleteFunction(company.id)}><RiDeleteBin6Line className="font-bold mr-2" />削除</Link>
                  </div>
                </div>
              </div>      
            );
        })}       
        </div>
      </div>
          <Pagination nPages={nPages} currentPage={currentPage} setCurrentPage={setCurrentPage}/>
          <div className="w-full flex py-3 mx-auto items-center justify-center">
            <span className="text-red-500 text-sm mr-3">表示する個数 :</span>
            <Select className="w-20" 
              value={recordsPerPage}
              onChange={ (value) => setRecordPerPage(value)}
              options={
                [
                  {
                    value:"1",
                    label:"1"
                  },
                  {
                    value:"3",
                    label:"3"
                  },
                  {
                    value:"5",
                    label:"5"
                  }
                ]
              }
            />
          </div>
    </div>
  );
  
};
export default CompanyManage;
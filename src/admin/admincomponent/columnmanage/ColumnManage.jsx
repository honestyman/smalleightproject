
import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { CiCircleMore } from "react-icons/ci";
import { RxUpdate } from "react-icons/rx";
import { RiDeleteBin6Line } from "react-icons/ri";
import { IoAddCircleOutline } from "react-icons/io5";

import { useDispatch, useSelector } from 'react-redux';
// import { getCompanyList, deleteOneCompany } from "../../../redux/slice/companySlice";
import Pagination from '../../../component/Pagination';
import { Select } from "antd";
import { deleteOneColumn, getColumnList } from "../../../redux/slice/columnSlice";

const ColumnManage=()=>{
  const dispatch = useDispatch();
  const navigate= useNavigate();
  const  { allColumnList } = useSelector(state => state.columns);
  
  const [currentPage, setCurrentPage]=useState(1)
  const [recordsPerPage, setRecordPerPage]=useState(3);
  const [data, setData]=useState([]);
  const [deleted, setDeleted]=useState("");

  useEffect(() => {
    dispatch(getColumnList());
  },[]);

  useEffect(() => {
    console.log(allColumnList)
    setData(allColumnList)
  },[allColumnList]);

  const deleteFunction = (id) => {
    dispatch(deleteOneColumn(id)).then(() => {
      dispatch(getColumnList());
      setCurrentPage(1);
    })
  }

  const indexOfLastRecord = currentPage*recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord-recordsPerPage;
  const currentRecords = data.slice(indexOfFirstRecord, indexOfLastRecord);
  const nPages=Math.ceil(data.length/recordsPerPage);

  return(
    <div className="-webkit-fill-available h-[900px] bg-white shadow items-center py-10">
      <p className="text-xl font-bold">コラム記事管理</p>
      <div className="w-full flex justify-end items-end px-20 pt-10">
        <Link to={"column_add"} className='flex items-center text-sm text-white rounded-md bg-blue-700 mx-2 px-10 py-1 hover:bg-white hover:text-black hover:border'><IoAddCircleOutline className="font-bold mr-2" />新規登録</Link>
      </div>
      <div className="flex flex-col mx-10 h-[70%] text-sm overflow-y-auto">
        <div className="inline-block min-w-full px-10">
        {currentRecords && currentRecords.map((column, index)=>{
            return(
              <div key={index} className='w-full bg-white flex rounded-2xl shadow mt-10 px-10 py-5 border sp:flex-wrap'>
                <div className='w-full sp:w-full flex flex-col text-left px-5 sp:pt-5 sp:px-1'>
                  <div className="flex w-full">
                    <div className='w-[400px] flex justify-center items-center'>
                     {column.thumbnail && <img className='w-[80%] rounded hover:opacity-50 hover:scale-110' src={`${process.env.REACT_APP_BASE_URL}/img/${column.thumbnail}`} />}
                    </div>
                    <div className="w-full">
                      <p className="font-bold font-bold text-center sp:text-sm">{column.title}</p>
                      <div className="w-full flex justify-between px-5 py-3">
                        <div className="flex">
                          {column.columncategories && column.columncategories.map((category, index1)=>{
                            return(
                              <span key={index1} className="mx-1 bg-gray-300 text-xs rounded px-2 py-1">{category.text}</span>
                            );
                          })
                          }
                        </div>
                      <span className='text-sm mt-2 text-red-500 sp:text-[12px]'>{column.createdAt.slice(0,10)}</span>
                      </div>
                      <p className='sp:text-sm'>{column.description}</p>  
                    </div>
                  </div>
                  
                  <div className='w-full flex justify-center items-center mt-3'>
                    <Link to={"column_detail/"+column.id} className='flex items-center text-sm text-white rounded-md bg-green-500 mx-2 px-10 py-1 hover:bg-white hover:text-black hover:border'><CiCircleMore className="font-bold mr-2" />詳細</Link>
                    <Link to={"column_update/"+column.id} className='flex items-center text-sm text-white rounded-md bg-yellow-300 mx-2 px-10 py-1 hover:bg-white hover:text-black hover:border'><RxUpdate className="font-bold mr-2" />更新</Link>
                    <Link className='flex items-center text-sm text-white rounded-md bg-red-500 mx-2 px-10 py-1 hover:bg-white hover:text-black hover:border' onClick={()=>deleteFunction(column.id)}><RiDeleteBin6Line className="font-bold mr-2" />削除</Link>
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
export default ColumnManage;
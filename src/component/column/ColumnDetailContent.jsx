import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getOneColumn } from "../../redux/slice/columnSlice";

const ColumnDetailContent = (props) => {
  const dispatch = useDispatch();
  const navigate= useNavigate();

  const [date, setDate]=useState("")

  const  {oneColumnData } = useSelector(state => state.columns);
  
  useEffect(() => {
    dispatch(getOneColumn(props.columnId));
  },[]);

  useEffect(()=>{
    console.log(oneColumnData);
  },[oneColumnData]);
    
  return (
    <div className='w-full bg-gradient-to-t from-[#FD6E6A] to-red-500 pt-40 pb-20'>
      <div className='w-[full] bg-white rounded-[100px] flex justify-center pb-10 sp:rounded-[20px]'>
        <div className='w-[80%] flex flex-col px-40 text-left sp:px-5 sp:w-full'>
          <h1 className='text-5xl font-bold mt-20 text-center sp:text-xl'><span>{oneColumnData.title}</span></h1>
          <div className='flex mt-5 flex justify-between items-center flex-wrap'>
            <div className='flex'>
              <span className='mx-3 mt-2 bg-[#f4f8f9] font-bold border rounded-md p-3 sp:text-xs sp:p-2 sp:mx-1'>カテゴリー1</span>
              <span className='mx-3 mt-2 bg-[#f4f8f9] font-bold border rounded-md p-3 sp:text-xs sp:p-2 sp:mx-1'>カテゴリー2</span>
            </div> 
            <p className='text-xl text-[#FB2407] font-bold mx-5 sp:text-sm'>{oneColumnData.createdAt?oneColumnData.createdAt.slice(0,10):""}</p>
          </div>
          <p className='text-xl my-10 sp:text-xs'>{oneColumnData.description}</p>
          <div>
            {
              oneColumnData.columnfirstchildren && oneColumnData.columnfirstchildren.map((section1, index1)=>{
                return(
                  <div key={index1}>
                    <p className='text-5xl font-bold text-[#FB2407] pt-10 sp:text-xl sp:pt-0'>{section1.title}</p>
                    <p className='text-xl my-10 sp:text-xs'>{section1.description}</p>
                    {
                      section1 && section1.columnsecondchildren.map((section2, index2)=>{
                        return(
                          <div key={index2}>
                            <p className='text-3xl font-bold sp:text-[16px]'>{section2.title}</p>
                            <p className='text-xl my-10 sp:text-xs'>{section2.description}</p>
                          </div>
                        )
                      })
                    }
                  </div>
                );
              })
            }
          </div>
        </div>
        <div className='w-[20%] bg-gray-200 h-20 sp:hidden'>
          
        </div>
          
        </div>
    </div>
  );
};

export default ColumnDetailContent;
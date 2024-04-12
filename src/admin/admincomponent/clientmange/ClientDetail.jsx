
import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { SlArrowLeft } from "react-icons/sl";

import { useDispatch, useSelector } from 'react-redux';
import { getOneClient } from "../../../redux/slice/clientSlice";


const ClientDetail=()=>{
  const dispatch = useDispatch();
  const navigate= useNavigate();
  const Id=useParams().id;
  const  { oneClientData } = useSelector(state => state.clients);
  
  const [currentPage, setCurrentPage]=useState(1)
  const [recordsPerPage, setRecordPerPage]=useState(6);
  const [data, setData]=useState([]);

  useEffect(() => {
    dispatch(getOneClient(Id));
  },[]);

  useEffect(() => {
    console.log(oneClientData);
  },[oneClientData]);

  return(
    <div className={`-webkit-fill-available h-[900px] bg-white shadow items-center py-10 overflow-y-auto`}>
      <p className="text-xl font-bold">クライアント詳細</p>
      <div className="flex flex-col text-sm mx-20 py-10">
        <div className="flex justify-start items-center py-3">
          <label className="font-bold">お名前 : </label>
          <p className="mx-5">{oneClientData.name}</p>
        </div>
        <div className="flex justify-start items-center py-3">
          <label className="font-bold">会社名 : </label>
          <p className="mx-5">{oneClientData.company}</p>
        </div>
        <div className="flex justify-start items-center py-3">
          <label className="font-bold">メールアドレス : </label>
          <p className="mx-5">{oneClientData.email}</p>
        </div>
        {
          oneClientData.phoneNumber && 
          <div className="flex justify-start items-center py-3">
            <label className="font-bold">電話番号 : </label>
            <p className="mx-5">{oneClientData.phoneNumber}</p>
          </div>
        }
        {
          oneClientData.questionContent && 
          <div className="flex justify-start items-center py-3">
            <label className="font-bold">その他お問い合わせ内容 : </label>
            <p className="mx-5">{oneClientData.questionContent}</p>
          </div>
        }
        {
          oneClientData.service && 
          <div className="flex justify-start items-center py-3">
            <label className="font-bold">選択したサービス : </label>
            <p className="mx-5">{oneClientData.service}</p>
          </div>
        }
        {
          oneClientData.purpose && 
          <div className="flex justify-start items-center py-3">
            <label className="font-bold">ウェブマーケティングで達成したい目標 : </label>
            <p className="mx-5">{oneClientData.purpose}</p>
          </div>
        }
        {
          oneClientData.measures && 
          <div className="flex justify-start items-center py-3">
            <label className="font-bold">実施したいウェブマーケティング施策 : </label>
            <p className="mx-5">{oneClientData.measures}</p>
          </div>
        }
        {
          oneClientData.tools && 
          <div className="flex justify-start items-center py-3">
            <label className="font-bold">探しているツール : </label>
            <p className="mx-5">{oneClientData.tools}</p>
          </div>
        }
        {
          oneClientData.currentMeasures && 
          <div className="flex justify-start items-center py-3">
            <label className="font-bold">現在実施しているウェブポリシー : </label>
            <p className="mx-5">{oneClientData.currentMeasures}</p>
          </div>
        }
        {
          oneClientData.startDate && 
          <div className="flex justify-start items-center py-3">
            <label className="font-bold">ウェブマーケティングを開始 : </label>
            <p className="mx-5">{oneClientData.startDate}</p>
          </div>
        }
        {
          oneClientData.budget && 
          <div className="flex justify-start items-center py-3">
            <label className="font-bold">予想予算 : </label>
            <p className="mx-5">{oneClientData.budget}</p>
          </div>
        }
        {
          oneClientData.selectedCompany && 
          <div className="flex justify-start items-center py-3">
            <label className="font-bold">お問い合わせ会社 : </label>
            <p className="mx-5">{oneClientData.selectedCompany}</p>
          </div>
        }
        {
          oneClientData.createdAt && 
          <div className="flex justify-start items-center py-3">
            <label className="font-bold">お問い合わせ日 : </label>
            <p className="mx-5">{oneClientData.createdAt.slice(0,10)}</p>
          </div>
        }
      </div>
      <div className="w-full flex justify-center items-center">
       <Link to="/manage" className="flex items-center px-3 py-1 text-sm border rounded-md hover:bg-[#B40100] hover:text-white"><SlArrowLeft className='mx-1' /> 前に戻る</Link>
      </div>
    </div>
  );
  
};
export default ClientDetail;
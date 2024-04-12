
import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { CiCircleMore } from "react-icons/ci";
import { RiDeleteBin6Line } from "react-icons/ri";

import { useDispatch, useSelector } from 'react-redux';
import { getClientList, deleteOneClient } from "../../../redux/slice/clientSlice";
import Pagination from '../../../component/Pagination';
import { Select } from "antd";


const ClientManage=()=>{
  const dispatch = useDispatch();
  const navigate= useNavigate();
  const  { clientList, deletedResultMessage } = useSelector(state => state.clients);
  
  const [currentPage, setCurrentPage]=useState(1)
  const [recordsPerPage, setRecordPerPage]=useState(10);
  const [data, setData]=useState([]);
  const [deleted, setDeleted]=useState("");

  useEffect(() => {
    dispatch(getClientList());
  },[]);

  useEffect(() => {
    setData(clientList)
  },[clientList]);

  const deleteFunction = (id) => {
    dispatch(deleteOneClient(id)).then(() => {
      dispatch(getClientList());
    })
  }

  const indexOfLastRecord = currentPage*recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord-recordsPerPage;
  const currentRecords = data.slice(indexOfFirstRecord, indexOfLastRecord);
  const nPages=Math.ceil(data.length/recordsPerPage);

  return(
    <div className={`-webkit-fill-available h-[900px] bg-white shadow items-center py-10`}>
      <p className="text-xl font-bold">クライアント管理</p>
      <div className="flex flex-col mx-10 h-[75%] overflow-y-auto">
          <div className="inline-block min-w-full py-2">
              <table
                className="min-w-full text-left border text-xs font-light text-surface dark:text-white">
                <thead
                  className="border-b border-neutral-200 text-sm text-center font-medium dark:border-white/10">
                  <tr>
                    <th scope="col" className="px-6 py-4">詳細</th>
                    <th scope="col" className="px-6 py-4">No</th>
                    <th scope="col" className="px-6 py-4">お名前</th>
                    <th scope="col" className="px-6 py-4">メールアドレス</th>
                    <th scope="col" className="px-6 py-4">会社名</th>
                    <th scope="col" className="px-6 py-4">問い合わせた会社名</th>
                    <th scope="col" className="px-6 py-4">問い合わせた日付</th>
                    <th scope="col" className="px-6 py-4">削除</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    currentRecords && currentRecords.map((client, index)=>{
                      return(
                        <tr key={index} className="border-b border-neutral-200 text-center bg-gray-100 dark:border-white/10">
                          <td className="whitespace-nowrap border px-6 py-4"><Link to={"client_detail/"+client.id} className="flex justify-center text-green-500 items-center hover:text-black"><CiCircleMore className="mr-2" />詳細</Link></td>
                          <td className="whitespace-nowrap border px-6 py-4 ">{(currentPage-1)*recordsPerPage+index+1}</td>
                          <td className="whitespace-nowrap border px-6 py-4">{client.name}</td>
                          <td className="whitespace-nowrap border px-6 py-4">{client.email}</td>
                          <td className="whitespace-nowrap border px-6 py-4">{client.company}</td>
                          <td className="w-[300px] whitespace-wrap border px-6 py-4">{client.selectedCompany}</td>
                          <td className="whitespace-nowrap border px-6 py-4">{client.createdAt?client.createdAt.slice(0,10):""}</td>
                          <td className="whitespace-nowrap border px-6 py-4"><Link onClick={()=>deleteFunction(client.id)} className="flex text-red-500 justify-center items-center hover:text-black"><RiDeleteBin6Line className="mr-2"/>削除</Link></td>
                        </tr>  
                      );
                    })
                  }
                </tbody>
              </table>
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
                    value:"5",
                    label:"5"
                  },
                  {
                    value:"10",
                    label:"10"
                  },
                  {
                    value:"15",
                    label:"15"
                  },
                  {
                    value:"20",
                    label:"20"
                  }
                ]
              }
            />
          </div>
    </div>
  );
  
};
export default ClientManage;
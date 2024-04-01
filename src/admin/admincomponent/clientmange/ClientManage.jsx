
import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { getClientList } from "../../../redux/slice/clientSlice";

const ClientManage=()=>{
  const dispatch = useDispatch();
  const navigate= useNavigate();
  const  { clientList } = useSelector(state => state.clients);
  
  const [currentPage, setCurrentPage]=useState(1)
  const [recordsPerPage, setRecordPerPage]=useState(6);
  const [data, setData]=useState([]);

  useEffect(() => {
    dispatch(getClientList());
  },[]);

  useEffect(() => {
    console.log(clientList);
    setData(clientList)
  },[clientList]);

  return(
    <div className={`-webkit-fill-available h-full bg-white shadow items-center fixed py-10`}>
      <p className="text-2xl font-bold">クライアント管理</p>
      <div class="flex flex-col">
        <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
            <div class="overflow-hidden">
              <table
                class="min-w-full text-left border text-sm font-light text-surface dark:text-white">
                <thead
                  class="border-b border-neutral-200 font-medium dark:border-white/10">
                  <tr>
                    <th scope="col" class="px-6 py-4">詳細</th>
                    <th scope="col" class="px-6 py-4">No</th>
                    <th scope="col" class="px-6 py-4">お名前</th>
                    <th scope="col" class="px-6 py-4">メールアドレス</th>
                    <th scope="col" class="px-6 py-4">会社名</th>
                    <th scope="col" class="px-6 py-4">問い合わせた会社名</th>
                    <th scope="col" class="px-6 py-4">問い合わせた日付</th>
                  </tr>
                </thead>
                <tbody>
                  <tr class="border-b border-neutral-200 bg-gray-100 dark:border-white/10">
                    <td class="whitespace-nowrap px-6 py-4 font-medium">1</td>
                    <td class="whitespace-nowrap px-6 py-4">Mark</td>
                    <td class="whitespace-nowrap px-6 py-4">Otto</td>
                    <td class="whitespace-nowrap px-6 py-4">@mdo</td>
                  </tr>
                  <tr class="border-b border-neutral-200 bg-gray-100 dark:border-white/10">
                    <td class="whitespace-nowrap px-6 py-4 font-medium">2</td>
                    <td class="whitespace-nowrap px-6 py-4">Jacob</td>
                    <td class="whitespace-nowrap px-6 py-4">Thornton</td>
                    <td class="whitespace-nowrap px-6 py-4">@fat</td>
                  </tr>
                  <tr class="border-b border-neutral-200 bg-gray-100 dark:border-white/10">
                    <td class="whitespace-nowrap px-6 py-4 font-medium">3</td>
                    <td class="whitespace-nowrap px-6 py-4">Larry</td>
                    <td class="whitespace-nowrap px-6 py-4">Wild</td>
                    <td class="whitespace-nowrap px-6 py-4">@twitter</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  
};
export default ClientManage;
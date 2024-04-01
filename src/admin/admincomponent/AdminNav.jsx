import logo from '../../img/black_logo.png';
import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaRegUserCircle, FaHome, FaNewspaper, FaTasks, FaTools  } from "react-icons/fa";
import { RiArticleLine } from "react-icons/ri";
import { IoIosPricetags, IoMdTime } from "react-icons/io";
import { MdFeaturedPlayList } from "react-icons/md";
import { GiAchievement } from "react-icons/gi";
import { BiCategory } from "react-icons/bi";


const AdminNav=()=>{
  const navigate= useNavigate();

  const [companyblock, setCompanyBlock] = useState('block');
  const [columnblock, setColumnBlock] = useState('block');
  
  const changeCompanyBlock = () =>{
    setCompanyBlock(companyblock=="block"?"hidden":"block");
  }
  const changeColumnBlock = () =>{
    setColumnBlock(columnblock=="block"?"hidden":"block");
  }

  return(
    <div className={`min-w-[300px] h-[980px] flex flex-col bg-white shadow-md items-start py-5`}>
      <Link className='w-full flex items-center px-5 py-2 rounded hover:bg-[#FD6E6A] hover:text-white'><FaRegUserCircle className='mr-1'/>クライアント管理</Link>
      <button onClick={changeCompanyBlock} className='w-full flex items-center px-5 py-2'><FaHome className='mr-1'/>会社管理</button>
      <div className={`w-full pl-5 ${companyblock}`} >
        <Link className='w-full flex items-center px-5 py-2 rounded hover:bg-[#FD6E6A] hover:text-white'><FaHome className='mr-1'/>会社管理</Link>
        <Link className='w-full flex items-center px-5 py-2 rounded hover:bg-[#FD6E6A] hover:text-white'><IoIosPricetags className='mr-1'/>価格感管理</Link>  
        <Link className='w-full flex items-center px-5 py-2 rounded hover:bg-[#FD6E6A] hover:text-white'><FaTasks className='mr-1'/>解決できる課題管理</Link>  
        <Link className='w-full flex items-center px-5 py-2 rounded hover:bg-[#FD6E6A] hover:text-white'><MdFeaturedPlayList className='mr-1'/>得意な領域管理</Link>  
        <Link className='w-full flex items-center px-5 py-2 rounded hover:bg-[#FD6E6A] hover:text-white'><FaTools className='mr-1'/>ツール管理</Link>  
        <Link className='w-full flex items-center px-5 py-2 rounded hover:bg-[#FD6E6A] hover:text-white'><IoMdTime className='mr-1'/>対応可能な時間管理</Link>  
        <Link className='w-full flex items-center px-5 py-2 rounded hover:bg-[#FD6E6A] hover:text-white'><GiAchievement className='mr-1'/>業界実績管理</Link>  
      </div>
      <button onClick={changeColumnBlock} className='w-full flex items-center px-5 py-2'><RiArticleLine className='mr-1'/>コラム記事管理</button>
      <div className={`w-full pl-5 ${columnblock}`} >
        <Link className='w-full flex items-center px-5 py-2 rounded hover:bg-[#FD6E6A] hover:text-white'><RiArticleLine className='mr-1'/>コラム記事管理</Link>  
        <Link className='w-full flex items-center px-5 py-2 rounded hover:bg-[#FD6E6A] hover:text-white'><BiCategory className='mr-1'/>カテゴリー管理</Link>  
      </div>
      <Link className='w-full flex items-center px-5 py-2 rounded hover:bg-[#FD6E6A] hover:text-white'><FaNewspaper className='mr-1'/>ニュース管理</Link>
    </div>
  );
  
};
export default AdminNav;
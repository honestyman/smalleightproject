
import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaRegUserCircle, FaHome, FaNewspaper, FaTasks, FaTools, FaRegQuestionCircle  } from "react-icons/fa";
import { RiArticleLine } from "react-icons/ri";
import { IoIosPricetags, IoMdTime} from "react-icons/io";
import { MdFeaturedPlayList, MdOutlineMapsHomeWork, MdCampaign   } from "react-icons/md";
import { GiAchievement } from "react-icons/gi";
import { BiCategory } from "react-icons/bi";


const AdminNav=()=>{
  const navigate= useNavigate();

  const [change, setChange] = useState("");
  const [style, setStyle] = useState("");
  
  useEffect(() => {
    // var url = window.location.href;
    var pathname = window.location.pathname;
    setStyle(pathname);
    console.log(pathname);
  }, [change]);

  const [companyblock, setCompanyBlock] = useState('block');
  const [columnblock, setColumnBlock] = useState('block');
  
  const changeCompanyBlock = () =>{
    setCompanyBlock(companyblock=="block"?"hidden":"block");
  }
  const changeColumnBlock = () =>{
    setColumnBlock(columnblock=="block"?"hidden":"block");
  }

  return(
    <div className="min-w-[300px] h-[900px] flex flex-col bg-white shadow-md text-sm items-start py-5">
      <Link to={"/manage"} className={`w-full flex items-center px-5 py-2 rounded hover:bg-[#B40100] hover:text-white ${style==="/manage"?'bg-[#B40100] text-white':'none'}`} onClick={()=>{setChange("clientmanage")}}><FaRegUserCircle className='mr-1'/>クライアント管理</Link>
      <button onClick={changeCompanyBlock} className='w-full flex items-center px-5 py-2'><FaHome className='mr-1'/>会社管理</button>
      <div className={`w-full pl-5 ${companyblock}`} >
        <Link to="companymanage" className={`w-full flex items-center px-5 py-2 rounded hover:bg-[#B40100] hover:text-white ${style==="/manage/companymanage"?'bg-[#B40100] text-white':'none'}`} onClick={()=>{setChange("companymanage")}}><FaHome className='mr-1'/>会社管理</Link>
        <Link className='w-full flex items-center px-5 py-2 rounded hover:bg-[#B40100] hover:text-white'><IoIosPricetags className='mr-1'/>価格感管理</Link>  
        <Link className='w-full flex items-center px-5 py-2 rounded hover:bg-[#B40100] hover:text-white'><FaTasks className='mr-1'/>解決できる課題管理</Link>  
        <Link className='w-full flex items-center px-5 py-2 rounded hover:bg-[#B40100] hover:text-white'><MdFeaturedPlayList className='mr-1'/>得意な領域管理</Link>  
        <Link className='w-full flex items-center px-5 py-2 rounded hover:bg-[#B40100] hover:text-white'><FaTools className='mr-1'/>ツール管理</Link>  
        <Link className='w-full flex items-center px-5 py-2 rounded hover:bg-[#B40100] hover:text-white'><IoMdTime className='mr-1'/>対応可能な時間管理</Link>  
        <Link className='w-full flex items-center px-5 py-2 rounded hover:bg-[#B40100] hover:text-white'><GiAchievement className='mr-1'/>業界実績管理</Link>  
        <Link className='w-full flex items-center px-5 py-2 rounded hover:bg-[#B40100] hover:text-white'><MdCampaign className='mr-1'/>特典キャンペーン管理</Link>  
      </div>
      <button onClick={changeColumnBlock} className='w-full flex items-center px-5 py-2'><RiArticleLine className='mr-1'/>コラム記事管理</button>
      <div className={`w-full pl-5 ${columnblock}`} >
        <Link to="columnmanage" className={`w-full flex items-center px-5 py-2 rounded hover:bg-[#B40100] hover:text-white ${style==="/manage/columnmanage"?'bg-[#B40100] text-white':'none'}`} onClick={()=>{setChange("columnmanage")}}><RiArticleLine className='mr-1'/>コラム記事管理</Link>  
        <Link className='w-full flex items-center px-5 py-2 rounded hover:bg-[#B40100] hover:text-white'><BiCategory className='mr-1'/>カテゴリー管理</Link>  
      </div>
      <Link className='w-full flex items-center px-5 py-2 rounded hover:bg-[#B40100] hover:text-white'><FaNewspaper className='mr-1'/>ニュース管理</Link>
      <Link className='w-full flex items-center px-5 py-2 rounded hover:bg-[#B40100] hover:text-white'><FaRegQuestionCircle className='mr-1'/>質問管理</Link>
      <Link className='w-full flex items-center px-5 py-2 rounded hover:bg-[#B40100] hover:text-white'><MdOutlineMapsHomeWork className='mr-1'/>希望掲載企業管理</Link>
    </div>
  );
  
};
export default AdminNav;
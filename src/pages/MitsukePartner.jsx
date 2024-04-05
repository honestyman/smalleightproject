import React, {useRef} from "react";
import { useState, useEffect } from "react";
import Header from "../component/Header";

import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';

import Footer from "../component/Footer";
import 'intersection-observer';
import MitsukePartnerTop from "../component/mitsuke/MitsukePartnerTop";
import { postWanted } from '../redux/slice/clientSlice';


const MitsukePartner=()=>{

  const navigate= useNavigate();
  const dispatch = useDispatch();

  const [disabled, setDisabled] = useState(true);

  const [officialPosition, setOfficialPosition] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [companyEmail, setCompanyEmail] = useState("");
  const [publishForm, setPublishForm] = useState("掲載のみ");
  const [phoneNumber, setPhonenumber] = useState("");

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const clickQueryHandler =()=>{
    let emailRegex = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;
    if(!emailRegex.test(companyEmail)){
       alert("正確なメール形式ではありません。"); 
    }else{
      const payload={
        name:companyName,
        email:companyEmail,
        officialPosition:officialPosition,
        phoneNumber:phoneNumber,
        publishForm:publishForm
      }
      dispatch(postWanted(payload));
      navigate("/mitsukepartnerthanks");
    }
  }
 
  useEffect(()=>{
    if(companyName && companyEmail && officialPosition && phoneNumber && publishForm){
      setDisabled(false);
    }else{
      setDisabled(true);
    }
  },[ companyName, companyEmail, officialPosition, phoneNumber, publishForm]);

  return(
    <div className="w-100">
      <Header/>
      <div className="w-full bg-gradient-to-br from-[#FB2407] to-[#FD6E6A] rounded-sm sp:pb-10">
        <div className="w-full h-full bg-gradient-to-t from-[#FD6E6A] to-red-700">
          <MitsukePartnerTop/>
        </div>
        <div className="w-[20%] sp:w-full h-[1100px] sp:h-[1000px] absolute top-40 right-5 bg-[#f4f8f9] rounded-xl shadow-md sp:relative sp:right-0 sp:top-0">
          <div className='w-full flex flex-col justify-center items-center px-5 pb-10'>
              <p className='text-2xl font-bold mt-20 mb-10 text-[#FB2407] sp:text-xl'>お気軽にお問い合わせください</p>
              <div className="w-full sp:w-full sp:px-5 sp:text-sm flex flex-col mx-auto">
                <div className='w-full flex flex-col my-5'>
                  <div className='w-full flex justify-between'>
                    <label>会社名</label>
                    <label className='bg-[#FB2407] text-white rounded px-1 mx-1'>必須</label>
                  </div>
                  <input type="text" className="shadow appearance-none border border-red-500 rounded w-full mt-1 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="company" placeholder='株式会社○○' value={companyName} onChange={(e) => setCompanyName(e.target.value)} />
                </div>
                <div className='w-full flex flex-col my-5'>
                  <div className='w-full flex justify-between'>
                    <label>役職</label>
                    <label className='bg-[#FB2407] text-white rounded px-1 mx-1'>必須</label>
                  </div>
                  <input type="text" className="shadow appearance-none border border-red-500 rounded w-full mt-1 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" value={officialPosition} onChange={(e) => setOfficialPosition(e.target.value)} />
                </div>
                <div className='w-full flex flex-col my-5'>
                  <div className='w-full flex justify-between'>
                    <label>メールアドレス</label>
                    <label className='bg-[#FB2407] text-white rounded px-1 mx-1'>必須</label>
                  </div>
                  <input className="shadow appearance-none border border-red-500 rounded w-full mt-1 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" placeholder='ビジネス用メールアドレスを入力ください。' value={companyEmail} onChange={(e) => setCompanyEmail(e.target.value)} />
                </div>
                <div className='w-full flex flex-col my-5'>
                  <div className='w-full flex justify-between'>
                    <label>電話番号</label>
                    <label className='bg-[#FB2407] text-white rounded px-1 mx-1'>必須</label>
                  </div>
                  <input className="shadow appearance-none border border-red-500 rounded w-full mt-1 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" placeholder='00000000000' value={phoneNumber} onChange={(e) => setPhonenumber(e.target.value)} />
                </div>
                <div className='w-full flex flex-col my-5'>
                  <div className='w-full flex justify-between'>
                    <label>ご掲載に関して</label>
                    <label className='bg-[#FB2407] text-white rounded px-1 mx-1'>必須</label>
                  </div>
                  <select className="shadow border border-red-500 rounded w-full mt-1 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name="kind" value={publishForm} onChange={(e) => setPublishForm(e.target.value)}>
                    <option value="Mitsukeについて">掲載のみ</option>
                    <option value="Small Eightについて">掲載+リード</option>
                  </select>
                </div>
                <div className='w-full flex flex-col text-left my-5'>
                  <p>「お問い合わせ」 をクリックすることで、当社の<span className="font-bold mx-1 underline"><Link to="/terms">利用規約</Link></span>および<span className="font-bold mx-1 underline"><Link to="/policy">プライバシーポリシー</Link></span>に同意したものとみ なします。</p>
                </div>
                <div className='w-full h-10 flex mt-10 justify-center sp:px-0 sp:text-sm'>
                  <button disabled={disabled} className={`text-white border-2 rounded-full px-10 lg:mx-2 lg:px-2 sp:mx-2 sp:px-2 py-1 ${!disabled ? 'bg-[#FD6E6A] hover:bg-white hover:text-[#FD6E6A]' : 'bg-gray-300'} `} onClick={clickQueryHandler}>お問い合わせ</button>
                </div>
              </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
  
};
export default MitsukePartner;
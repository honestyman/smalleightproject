import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { postQuery } from '../../redux/slice/clientSlice';
import { SlArrowLeft } from "react-icons/sl";

const InqueryContent = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  
  const [queryblock, setQueryBlock]=useState("block");
  const [messageblock, setMessageBlock]=useState("hidden");
  const [disabled, setDisabled] = useState(true);
  const [maxLength, setMaxLength] = useState(0);

  const [clientName, setClientName] = useState("");
  const [clientCompanyName, setClientCompanyName] = useState("");
  const [clientEmail, setClientEmail] = useState("");
  const [queryKind, setQueryKind] = useState("スモハチツールについて");
  const [questionContent, setQuestionContent] = useState("");

  const clickQueryHandler =()=>{
    let emailRegex = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;
    if(!emailRegex.test(clientEmail)){
       alert("正確なメール形式ではありません。"); 
    }else{
      const payload={
        kind:queryKind,
        name:clientName,
        companyName:clientCompanyName,
        email:clientEmail,
        questionContent:questionContent
      }
      dispatch(postQuery(payload));
      navigate("/inquerythanks");
    }
  }

  useEffect(()=>{
    if(questionContent){
      setMaxLength(questionContent.length)
    }
  },[questionContent])
 
  useEffect(()=>{
    if(queryKind && clientCompanyName && clientName && clientEmail && questionContent){
      setDisabled(false);
    }else{
      setDisabled(true);
    }
  },[ clientCompanyName, clientName, clientEmail, questionContent]);

  // const backFuntion = () =>{
  //   setQueryKind("Mitsukeについて")
  //   setClientName("")
  //   setClientEmail("")
  //   setClientCompanyName("")
  //   setQuestionContent("")
  //   setMessageBlock("hidden")
  //   setQueryBlock("block")
  // }


  return (
    <div className='w-full bg-bg-[#f4f8f9] pt-20 pb-20'>
      <div className='w-full bg-white flex flex-col justify-center items-center pb-10'>
          <p className='text-4xl font-bold mt-20 mb-10 text-[#B40100] sp:text-2xl'>お問い合わせ</p>
          <div className={`w-[50%] sp:w-full text-[#191F4D] sp:px-10 sp:text-sm flex flex-col mx-auto`}>
            <div className='w-full flex flex-col my-5'>
              <div className='w-full flex'>
                <label>お問い合わせ種類</label>
                <label className='bg-[#FB2407] text-white rounded px-1 mx-1'>必須</label>
              </div>
              <select className="shadow border border-[#191F4D] rounded w-full mt-1 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name="kind" value={queryKind} onChange={(e) => setQueryKind(e.target.value)}>
                <option value="Mitsukeについて">スモハチツールについて</option>
                <option value="Small Eightについて">デジタルマーケティング支援について</option>
                <option value="Small Eightについて">LP、 サイト制作支援について</option>
                <option value="その他">その他</option>
              </select>
            </div>
            <div className='w-full flex flex-col my-5'>
              <div className='w-full flex'>
                <label>会社名</label>
                <label className='bg-[#FB2407] text-white rounded px-1 mx-1'>必須</label>
              </div>
              <input className="shadow appearance-none border border-[#191F4D] rounded w-full mt-1 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="company" placeholder='株式会社○○' value={clientCompanyName} onChange={(e) => setClientCompanyName(e.target.value)} />
            </div>
            <div className='w-full flex flex-col my-5'>
              <div className='w-full flex'>
                <label>お名前</label>
                <label className='bg-[#FB2407] text-white rounded px-1 mx-1'>必須</label>
              </div>
              <input className="shadow appearance-none border border-[#191F4D] rounded w-full mt-1 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" placeholder='田中 太郎' value={clientName} onChange={(e) => setClientName(e.target.value)} />
            </div>
            <div className='w-full flex flex-col my-5'>
              <div className='w-full flex'>
                <label>メールアドレス</label>
                <label className='bg-[#FB2407] text-white rounded px-1 mx-1'>必須</label>
              </div>
              <input className="shadow appearance-none border border-[#191F4D] rounded w-full mt-1 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" placeholder='ビジネス用メールアドレスを入力ください。' value={clientEmail} onChange={(e) => setClientEmail(e.target.value)} />
            </div>
            <div className='w-full flex flex-col my-5'>
              <div className='w-full flex'>
                <label>問い合わせ内容</label>
                <label className='bg-[#FB2407] text-white rounded px-1 mx-1'>必須</label>
              </div>
              <textarea maxLength={1000} className="shadow appearance-none border border-[#191F4D] rounded w-full h-40 mt-1 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" placeholder='恐れ入りますが、 お問い合わせにご対応しかねる場合がございます。 あらかじめご了承ください。' value={questionContent} onChange={(e) => setQuestionContent(e.target.value)} />
              <span className='text-right text-[#191F4D]'>{maxLength}/1000</span>
            </div>
            <div className='w-full h-10 flex px-5 mt-10 justify-center sp:px-0 sp:text-sm'>
              {/* <Link to={"/Mitsuke"}><button className='flex items-center border-2 rounded-full px-10 py-1 mx-10 lg:mx-2 lg:px-2 sp:mx-2 sp:px-2 text-[#B40100] hover:text-black'><SlArrowLeft className='mx-1' /> 前に戻る</button></Link> */}
              <button disabled={disabled} className={`text-[#191F4D] border-2 rounded-md px-10 mx-10 lg:mx-2 lg:px-2 sp:mx-2 sp:px-2 py-1 ${!disabled ? 'bg-white hover:bg-[#191F4D] hover:text-white' : 'bg-gray-300 text-white'} `} onClick={clickQueryHandler}>お問い合わせ</button>
            </div>
          </div>
      </div>
    </div>
  );
};

export default InqueryContent;
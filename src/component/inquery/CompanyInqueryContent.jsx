import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { SlArrowLeft } from "react-icons/sl";
import { getOneCompany, postSelectedOneCompany } from "../../redux/slice/companySlice";

const CompanyInqueryContent = (props) => {

  const dispatch = useDispatch();
  const [queryblock, setQueryBlock]=useState("block");
  const [messageblock, setMessageBlock]=useState("hidden");
  const [disabled, setDisabled] = useState(true);
  
  const [clientName, setClientName] = useState("");
  const [clientCompanyName, setClientCompanyName] = useState("");
  const [clientEmail, setClientEmail] = useState("");
  const [clientPhonenumber, setClientPhonenumber] = useState("");
  const [questionContent, setQuestionContent] = useState("");

  const  { postSelectedOneCompanyResultMessage } = useSelector(state => state.companies);
  const { oneCompany } = useSelector(state=>state.companies)

  useEffect(()=>{
    if (clientName && clientCompanyName && clientEmail) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  },[clientName, clientCompanyName, clientEmail]);

  useEffect(()=>{
    dispatch(getOneCompany(props.companyId));
  },[]);

  useEffect(()=>{
    if(postSelectedOneCompanyResultMessage==="success"){
      setQueryBlock("hidden");
      setMessageBlock("block");
    }
  },[postSelectedOneCompanyResultMessage]);

  const clickQueryHandler=()=>{
    const payload={
      name:clientName,
      companyName:clientCompanyName,
      email:clientEmail,
      phoneNumber:clientPhonenumber,
      questionContent:questionContent,
      companyId:props.companyId
    }
    dispatch(postSelectedOneCompany(payload));
    
  }
  const backClick=()=>{
    setClientName("");
    setClientEmail("");
    setClientCompanyName("");
    setClientPhonenumber("");
    setQuestionContent("");
    setMessageBlock("hidden");
    setQueryBlock("block");
  }

  return (
    <div className='w-full bg-gradient-to-t from-[#B40100] to-red-500 pt-40 pb-20'>
      <div className='w-full bg-white rounded-[100px] flex flex-col justify-center items-center pb-10 sp:rounded-[20px]'>
          <p className='text-4xl font-bold mt-20 mb-10 text-[#FB2407] sp:text-xl'>{`お問い合わせ(${oneCompany.name})`}</p>
          <div className="w-full h-full items-center flex">
              <div className='w-[70%] lg:w-[50%] sp:w-full h-[500px] sp:h-[350px] flex flex-col items-center px-10 lg:px-5 sp:px-5'>
                {/* ------------query--------- */}
                <div className={`w-full h-full text-sm flex flex-wrap mb-5 overflow-y-auto px-20 sp:px-0 lg:px-0 ${queryblock}`}>
                  <div className='w-1/2 flex flex-col items-start justify-center text-left rounded-md mt-1 px-5 lg:px-2 sp:px-1'>
                    <div className='w-full flex justify-between'>
                      <label>お名前</label>
                      <label className='bg-[#FB2407] text-white rounded px-1 mx-1'>必須</label>
                    </div>
                    <input className="shadow appearance-none border border-red-500 rounded w-full mt-1 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" value={clientName} onChange={(e) => setClientName(e.target.value)} />
                  </div>
                  <div className='w-1/2 flex flex-col items-start justify-center text-left rounded-md mt-1 px-5 lg:px-2 sp:px-1'>
                    <div className='w-full flex justify-between'>
                      <label>会社名</label>
                      <label className='bg-[#FB2407] text-white rounded px-1 mx-1'>必須</label>
                    </div>
                    <input className="shadow appearance-none border border-red-500 rounded w-full mt-1 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" value={clientCompanyName} onChange={(e) => setClientCompanyName(e.target.value)} />
                  </div>
                  <div className='w-1/2 flex flex-col items-start justify-center text-left rounded-md mt-1 px-5 lg:px-2 sp:px-1'>
                    <div className='w-full flex justify-between'>
                      <label>メールアドレス</label>
                      <label className='bg-[#FB2407] text-white rounded px-1 mx-1'>必須</label>
                    </div>
                    <input className="shadow appearance-none border border-red-500 rounded w-full mt-1 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" value={clientEmail} onChange={(e) => setClientEmail(e.target.value)} />
                  </div>
                  <div className='w-1/2 flex flex-col items-start justify-center text-left rounded-md mt-1 px-5 lg:px-2 sp:px-1'>
                    <label>電話番号</label>
                    <input className="shadow appearance-none border border-red-500 rounded w-full mt-1 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" value={clientPhonenumber} onChange={(e) => setClientPhonenumber(e.target.value)} />
                  </div>
                  <div className='w-full flex flex-col items-start justify-center text-left rounded-md mt-1 px-5 lg:px-2 sp:px-1'>
                    <label>その他お問い合わせ内容</label>
                    <textarea className="shadow appearance-none border border-red-500 rounded w-full h-20 mt-1 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" value={questionContent} onChange={(e) => setQuestionContent(e.target.value)} />
                  </div>
                  <div className='w-full h-10 flex px-5 mt-10 justify-center sp:px-0 sp:text-sm'>
                    <Link to={"/Mitsuke"}><button className='flex items-center border-2 rounded-full px-10 py-1 mx-10 lg:mx-2 lg:px-2 sp:mx-2 sp:px-2 text-[#B40100] hover:text-black'><SlArrowLeft className='mx-1' /> 前に戻る</button></Link>
                     <button disabled={disabled} className={`text-white border-2 rounded-full px-10 mx-10 lg:mx-2 lg:px-2 sp:mx-2 sp:px-2 py-1 ${!disabled ? 'bg-[#B40100] hover:bg-white hover:text-[#B40100]' : 'bg-gray-300'} `} onClick={clickQueryHandler}>お問い合わせ</button>
                  </div>
                </div>
                {/* ------------message--------- */}
                <div className={`w-full h-full text-sm flex flex-col items-center justify-center mb-5 overflow-y-auto px-20 sp:px-0 lg:px-0 ${messageblock}`}>
                    <div className='w-full flex flex-col text-2xl text-center my-10'>
                      <p className='my-1'>お問い合わせありがとうございます!</p>
                      <p className='my-1'>内容確認後、ご連絡させていただきますので</p>
                      <p className='my-1'>今しばらくお待ちください!</p>
                    </div>
                    <button className='flex items-center border-2 rounded-full px-10 py-1 mx-10 lg:mx-2 sp:mx-2 sp:px-2 text-[#B40100] hover:text-black' onClick={backClick}><SlArrowLeft className='mx-1' /> 前に戻る</button>
                </div>
                
              </div>

              <div className='w-[30%] lg:w-[50%] px-10 sp:hidden'>
                <div className='w-full bg-white rounded-2xl shadow px-3 py-5'>
                  <div className='w-full sp:w-full flex flex-col text-left px-5 sp:pt-5'>
                    <div className='flex items-center'>
                      <div className='w-[100px] h-[100px] bg-[#B40100]'></div>
                      <p className='text-xl font-bold mx-3 sp:text-xl sp:text-center'>{oneCompany.name}</p>
                    </div>
                    <p className='text-xs font-bold mt-5 sp:text-[12px]'>【PRタイトル】</p>
                    <p className="font-bold text-sm">{oneCompany.title}</p>
                    <p className='text-xs mt-5 sp:text-[12px]'>【紹介文】</p>
                    <p className='text-sm'>{oneCompany.description}</p>
                    <p className='text-xs mt-5 sp:text-[12px]'>【得意な領域】</p>
                    <p className='text-sm'>{oneCompany.expertises && oneCompany.expertises.map((text, index)=>{
                      return(
                        <span key={index}>{text.text}{index<oneCompany.expertises.length-1?", ":""}</span>
                      );
                    })}</p>
                    <p className='text-xs mt-5 sp:text-[12px]'>【マーケティングツール】</p>
                    <p className='text-sm'>{oneCompany.tools && oneCompany.tools.map((text, index)=>{
                      return(
                        <span key={index}>{text.text}{index<oneCompany.tools.length-1?", ":""}</span>
                      );
                    })}</p>
                    <p className='text-xs mt-5 sp:text-[12px]'>【解決できる課題】</p>
                    <p className='text-sm'>{oneCompany.solvedissues && oneCompany.solvedissues.map((text, index)=>{
                      return(
                        <span key={index}>{text.text}{index<oneCompany.solvedissues.length-1?", ":""}</span>
                      );
                    })}</p>
                    <p className='text-xs mt-5 sp:text-[12px]'>【価格】</p>
                    <p className='text-sm'>{oneCompany.pricesence && oneCompany.pricesence.text}</p>
                    <p className='text-xs mt-5 sp:text-[12px]'>【業界実績】</p>
                    <p className='text-sm'>{oneCompany.industryexperiences && oneCompany.industryexperiences.map((text, index)=>{
                      return(
                        <span key={index}>{text.text}{(index < oneCompany.industryexperiences.length-1)?", ":""}</span>
                      );
                    })}</p>
                  </div>
                </div>
              </div>
            </div>
        </div>
    </div>
  );
};

export default CompanyInqueryContent;
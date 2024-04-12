
import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { IoAddCircleOutline } from "react-icons/io5";
import { SlArrowLeft } from "react-icons/sl";

import { Input, Select, Upload, Button, message } from "antd";
import { UploadOutlined } from '@ant-design/icons';

import { useDispatch, useSelector } from 'react-redux';
import { getCampaignList, getExpertiseList, getToolsList, getSolvedissueList, getPricesenceList, getStartDateList, getIndustryExperienceList, addCompany, addCompanyLogo } from "../../../redux/slice/companySlice";
import TextArea from "antd/es/input/TextArea";


const CompanyAddPage=()=>{
  const dispatch = useDispatch();
  const Id=useParams().id;

  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [campaigns, setCampaigns] = useState();
  const [expertise, setExpertise] = useState();
  const [tools, setTools] = useState();
  const [solvedissues, setSolvedissues] = useState();
  const [pricesence, setPricesence] = useState();
  const [startdate, setStartDate] = useState();
  const [industryExperiences, setIndustryExperiences] = useState();
  const [publishForm, setPublishForm] = useState();
  const [address, setAddress] = useState("");
  const [representativeName, setRepresentativeName] = useState("");
  const [establishedYear, setEstablishedYear] = useState();
  const [memberCount, setMemberCount] = useState("");
  const [sales, setSales] = useState();
  const [logo, setLogo] = useState();
  const [imagePreview, setImagePreview] = useState(null);

  const [validName, setValidName] = useState("");
  const [validLogo, setValidLogo] = useState("");
  const [validTitle, setValidTitle] = useState("");
  const [validDescription, setValidDescription] = useState("");
  const [validExpertise, setValidExpertise] = useState("");
  const [validTool, setValidTool] = useState("");
  const [validSolvedissue, setValidSolvedissue] = useState("");
  const [validPricesence, setValidPricesence] = useState("");
  const [validStartdate, setValidStartdate] = useState("");
  const [validIndustryExperience, setValidIndustryExperience] = useState("");
  const [validPublishForm, setValidPublishForm] = useState("");

  const [fileflag, setFileFlag] = useState(true);

  const  { allCampaignList, allExpertiseList, allToolsList, allSolvedissueList, allPricesenceList, allStartDateList, allIndustryExperienceList } = useSelector(state => state.companies);

  useEffect(() => {
    dispatch(getCampaignList());
    dispatch(getExpertiseList());
    dispatch(getToolsList());
    dispatch(getSolvedissueList());
    dispatch(getPricesenceList());
    dispatch(getStartDateList());
    dispatch(getIndustryExperienceList());
  },[]);

  useEffect(() => {
    console.log(allToolsList);
  },[allToolsList]);

  const campaignData = () =>{
    const result=[];
    for(let i=0; i<allCampaignList.length; i++){
      // console.log(allCampaignList[i].text)
      result.push({
        value:allCampaignList[i].text,
        label:allCampaignList[i].text
      });
    }
    return result;
  }

  const expertisesData = () =>{
    const result=[];
    for(let i=0; i<allExpertiseList.length; i++){
      // console.log(allCampaignList[i].text)
      result.push({
        value:allExpertiseList[i].text,
        label:allExpertiseList[i].text
      });
    }
    return result;
  }

  const toolsData = () =>{
    const result=[];
    for(let i=0; i<allToolsList.length; i++){
      // console.log(allCampaignList[i].text)
      result.push({
        value:allToolsList[i].text,
        label:allToolsList[i].text
      });
    }
    return result;
  }

  const solvedissuesData = () =>{
    const result=[];
    for(let i=0; i<allSolvedissueList.length; i++){
      // console.log(allCampaignList[i].text)
      result.push({
        value:allSolvedissueList[i].text,
        label:allSolvedissueList[i].text
      });
    }
    return result;
  }

  const pricesenceData = () =>{
    const result=[];
    for(let i=0; i<allPricesenceList.length; i++){
      // console.log(allCampaignList[i].text)
      result.push({
        value:allPricesenceList[i].text,
        label:allPricesenceList[i].text
      });
    }
    return result;
  }
  const startDateData = () =>{
    const result=[];
    for(let i=0; i<allStartDateList.length; i++){
      // console.log(allCampaignList[i].text)
      result.push({
        value:allStartDateList[i].text,
        label:allStartDateList[i].text
      });
    }
    return result;
  }

  const industryexperiencesData = () =>{
    const result=[];
    for(let i=0; i<allIndustryExperienceList.length; i++){
      // console.log(allCampaignList[i].text)
      result.push({
        value:allIndustryExperienceList[i].text,
        label:allIndustryExperienceList[i].text
      });
    }
    return result;
  }
  useEffect(() => {
    console.log(logo);
    // const filePath = URL.createObjectURL(logo);
    if (logo) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(logo);
    } else {
      setImagePreview(null);
    }

  },[logo]);
  
  const getLogoImage = async(e) => {
    // setLogo(e.target.files[0]);
    var file=e.target.files[0]
    
    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png' || file.type === 'image/webp';
    const maxPixels = 500 * 500; // Maximum number of pixels

    if (!isJpgOrPng) {
      message.error('アップロードできる画像はJPG/PNG/WEBPのみです！');
      // setFileFlag(false);
    }

    // Calculate image dimensions using createImageBitmap
    const image = await createImageBitmap(file);
    const width = image.width;
    const height = image.height;
    const pixels = width * height;

    if (pixels > maxPixels) {
      message.error(`画像のサイズは500x500ピクセルを超えないこと！`);
      // setFileFlag(false);
    }
    if(isJpgOrPng && (pixels <= maxPixels)){
      setLogo(file);
    }
    
    // return isJpgOrPng && pixels <= maxPixels;
  };

  const handleClickAddCompany =()=>{
    if(!name){
      setValidName("※この項目は必須入力項目です。")
    }else{
      setValidName("")
    }
    if(!logo){
      setValidLogo("※この項目は必須入力項目です。")
    }else{
      setValidLogo("")
    }
    if(!title){
      setValidTitle("※この項目は必須入力項目です。")
    }else{
      setValidTitle("")
    }
    if(!description){
      setValidDescription("※この項目は必須入力項目です。")
    }else{
      setValidDescription("")
    }
    if(!startdate){
      setValidStartdate("※この項目は必須入力項目です。")
    }else{
      setValidStartdate("")
    }
    if(!pricesence){
      setValidPricesence("※この項目は必須入力項目です。")
    }else{
      setValidPricesence("")
    }
    if(!expertise){
      setValidExpertise("※この項目は必須入力項目です。")
    }else{
      setValidExpertise("")
    }
    if(!tools){
      setValidTool("※この項目は必須入力項目です。")
    }else{
      setValidTool("")
    }
    if(!solvedissues){
      setValidSolvedissue("※この項目は必須入力項目です。")
    }else{
      setValidSolvedissue("")
    }
    if(!industryExperiences){
      setValidIndustryExperience("※この項目は必須入力項目です。")
    }else{
      setValidIndustryExperience("")
    }
    if(!publishForm){
      setValidPublishForm("※この項目は必須入力項目です。")
    }else{
      setValidPublishForm("")
    }
    if(name && logo && title && description && startdate && pricesence && expertise && tools && solvedissues && industryExperiences && publishForm){
      const payload={
        name: name,
        logo:logo.name,
        title: title,
        description: description,
        campaigns: campaigns,
        expertise: expertise,
        tools: tools,
        solvedissues: solvedissues,
        pricesence: pricesence,
        startdate: startdate,
        industryExperiences: industryExperiences,
        representativeName: representativeName,
        address: address,
        establishedYear: establishedYear,
        memberCount: memberCount,
        sales: sales,
        publishForm: publishForm
      }
      dispatch(addCompany(payload)).then(() => {
        dispatch(addCompanyLogo(logo)).then(()=>{
          alert("正確に登録されています！");          
        });
        // setCurrentPage(1);
      })
    }
  }

  return(
    <div className={`-webkit-fill-available h-[900px] bg-white text-sm shadow items-center px-10 py-10 `}>
      <div className="w-full h-full pb-10 overflow-y-auto">
        <div className="flex w-full justify-center items-center">
          <p className="text-xl font-bold mx-5">会社情報登録</p>
        </div>
        <div className="w-[700px] flex flex-col text-left mx-auto px-20 py-5">
          <div className="flex flex-col items-start py-2">
            <label className="font-bold mb-1">【会社名】<span className="px-2 text-white rounded-md bg-red-500 text-sm">必須</span></label>
            <Input type="text" value={name} onChange={(e)=>setName(e.target.value)}/>
            {validName!=="" && <p className="text-red-500 text-sm">{validName}</p>}
          </div>
          <div className="flex flex-col items-start py-2">
            <label className="font-bold mb-1">【PRタイトル】<span className="px-2 text-white rounded-md bg-red-500 text-sm">必須</span></label>
            <TextArea type="text" value={title} onChange={(e)=>setTitle(e.target.value)}/>
            {validTitle!=="" && <p className="text-red-500 text-sm">{validTitle}</p>}
          </div>
          <div className="flex flex-col items-start py-2">
            <label className="font-bold mb-1">【紹介文】<span className="px-2 text-white rounded-md bg-red-500 text-sm">必須</span></label>
            <TextArea value={description} onChange={(e)=>setDescription(e.target.value)}/>
            {validDescription!=="" && <p className="text-red-500 text-sm">{validDescription}</p>}
          </div>
          <div className="flex flex-col items-start py-2">
            <label className="font-bold mb-1">【特典キャンペーン】</label>
            <Select className="w-full" 
              mode="multiple"
              value={campaigns}
              onChange={ (value) => setCampaigns(value)}
              options={
                campaignData()
              }
              />
          </div>
          <div className="flex flex-col items-start py-2">
            <label className="font-bold mb-1">【得意な領域】<span className="px-2 text-white rounded-md bg-red-500 text-sm">必須</span></label>
            <Select className="w-full" 
              mode="multiple"
              value={expertise}
              onChange={ (value) => setExpertise(value)}
              options={
                expertisesData()
              }
              />
            {validExpertise!=="" && <p className="text-red-500 text-sm">{validExpertise}</p>}
          </div>
          <div className="flex flex-col items-start py-2">
            <label className="font-bold mb-1">【マーケティングツール】<span className="px-2 text-white rounded-md bg-red-500 text-sm">必須</span></label>
            <Select className="w-full" 
              mode="multiple"
              value={tools}
              onChange={ (value) => setTools(value)}
              options={
                toolsData()
              }
              />
            {validTool!=="" && <p className="text-red-500 text-sm">{validTool}</p>}
          </div>
          <div className="flex flex-col items-start py-2">
            <label className="font-bold mb-1">【解決できる課題】<span className="px-2 text-white rounded-md bg-red-500 text-sm">必須</span></label>
            <Select className="w-full" 
              mode="multiple"
              value={solvedissues}
              onChange={ (value) => setSolvedissues(value)}
              options={
                solvedissuesData()
              }
              />
            {validSolvedissue!=="" && <p className="text-red-500 text-sm">{validSolvedissue}</p>}
          </div>
          <div className="flex flex-col items-start py-2">
            <label className="font-bold mb-1">【価格】<span className="px-2 text-white rounded-md bg-red-500 text-sm">必須</span></label>
            <Select className="w-full" 
              value={pricesence}
              onChange={ (value) => setPricesence(value)}
              options={
                pricesenceData()
              }
              />
            {validPricesence!=="" && <p className="text-red-500 text-sm">{validPricesence}</p>}
          </div>
          <div className="flex flex-col items-start py-2">
            <label className="font-bold mb-1">【いつから対応可能か】<span className="px-2 text-white rounded-md bg-red-500 text-sm">必須</span></label>
            <Select className="w-full" 
              value={startdate}
              onChange={ (value) => setStartDate(value)}
              options={
                startDateData()
              }
              />
            {validStartdate!=="" && <p className="text-red-500 text-sm">{validStartdate}</p>}
          </div>
          <div className="flex flex-col items-start py-2">
            <label className="font-bold mb-1">【業界実績】<span className="px-2 text-white rounded-md bg-red-500 text-sm">必須</span></label>
            <Select className="w-full" 
              mode="multiple"
              value={industryExperiences}
              onChange={ (value) => setIndustryExperiences(value)}
              options={
                industryexperiencesData()
              }
              />
            {validIndustryExperience!=="" && <p className="text-red-500 text-sm">{validIndustryExperience}</p>}
          </div>
          <div className="flex flex-col items-start py-2">
            <label className="font-bold mb-1">【代表者名】</label>
            <Input type="text" value={representativeName} onChange={(e)=>setRepresentativeName(e.target.value)} />
          </div>
          <div className="flex flex-col items-start py-2">
            <label className="font-bold mb-1">【住所】</label>
            <Input type="text" value={address} onChange={(e)=>setAddress(e.target.value)}/>
          </div>
          <div className="flex flex-col items-start py-2">
            <label className="font-bold mb-1">【設立年】</label>
            <Input type="number" value={establishedYear} onChange={(e)=>setEstablishedYear(e.target.value)} />
          </div>
          <div className="flex flex-col items-start py-2">
            <label className="font-bold mb-1">【従業員数】</label>
            <Input type="text" value={memberCount} onChange={(e)=>setMemberCount(e.target.value)}/>
          </div>
          <div className="flex flex-col items-start py-2">
            <label className="font-bold mb-1">【売上高】</label>
            <Input type="number" value={sales} onChange={(e)=>setSales(e.target.value)}/>
          </div>
          <div className="flex flex-col items-start py-2">
            <label className="font-bold mb-1">【掲載形態】<span className="px-2 text-white rounded-md bg-red-500 text-sm">必須</span></label>
            <Select className="w-full" 
              value={publishForm}
              onChange={ (value) => setPublishForm(value)}
              options={
                [
                  {
                    value:"掲載のみ",
                    label:"掲載のみ"
                  },
                  {
                    value:"掲載+リード",
                    label:"掲載+リード"
                  }
                ]
              }
              />
            {validPublishForm!=="" && <p className="text-red-500 text-sm">{validPublishForm}</p>}
          </div> 
          <div className="flex flex-col items-start py-2">
            <label className="font-bold mb-1">【会社ロゴ】<span className="px-2 text-white rounded-md bg-red-500 text-sm">必須</span></label>
            <input
              className="relative m-0 block w-full min-w-0 flex-auto cursor-pointer rounded border border-solid border-secondary-500 bg-transparent bg-clip-padding px-3 py-[0.32rem] font-normal transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:me-3 file:cursor-pointer file:overflow-hidden file:rounded-none file:border-0 file:border-e file:border-solid file:border-inherit file:bg-transparent file:px-3  file:py-[0.32rem] focus:border-primary focus:text-gray-700 focus:shadow-inset focus:outline-none dark:border-white/70 dark:text-white file:dark:text-white"
              type="file"
              id="formFile"
              onChange={getLogoImage} 
              />
              {validLogo!=="" && <p className="text-red-500 text-sm">{validLogo}</p>}
              {imagePreview && (
                <div className="w-full flex border rounded-md p-1 mt-2 items-center">
                  <img className="rounded" src={imagePreview} alt="Preview" style={{ maxWidth: '50px' }} />
                  <span className="mx-2">{logo.name}</span>
                </div>
              )}
          </div>
          
        </div>
        <div className="w-full flex justify-center items-center">
        <Link to="/manage/companymanage" className="flex items-center text-sm border px-2 py-1 mx-5 rounded-md hover:bg-[#B40100] hover:text-white"><SlArrowLeft className='mx-1' /> 前に戻る</Link>
        <Link className='flex items-center text-sm text-white rounded-md bg-blue-700 mx-5 px-10 py-1 hover:bg-white hover:text-black hover:border' onClick={handleClickAddCompany}><IoAddCircleOutline className="font-bold mr-2" />登録</Link>
        </div>
      </div>
    </div>
  );
  
};
export default CompanyAddPage;
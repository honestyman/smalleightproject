
import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { IoAddCircleOutline } from "react-icons/io5";
import { SlArrowLeft } from "react-icons/sl";
import { IoMdAdd } from "react-icons/io";
import { RiDeleteBin6Line } from "react-icons/ri";

import { Input, Select, Upload, Button, message, Tree } from "antd";
import { UploadOutlined } from '@ant-design/icons';

import { useDispatch, useSelector } from 'react-redux';
import { getCampaignList, getExpertiseList, getToolsList, getSolvedissueList, getPricesenceList, getStartDateList, getIndustryExperienceList, addCompany, addCompanyLogo } from "../../../redux/slice/companySlice";
import TextArea from "antd/es/input/TextArea";
import { addColumn, addColumnThumbnail, getColumnCategoryList } from "../../../redux/slice/columnSlice";


// It's just a simple demo. You can use tree map to optimize update perf.
const ColumnAddPage=()=>{

  const dispatch = useDispatch();

  const [parentTitleValues, setParentTitleValues] = useState([]);
  const [parentContentValues, setParentContentValues] = useState([]);
  const [childrenTitleValues, setChildrenTitleValues] = useState([]);
  const [childrenContentValues, setChildrenContentValues] = useState([]);
  const [treeData, setTreeData] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [thumbnail, setThumbnail] = useState();
  const [columnCategories, setColumnCategories] = useState();
  const [imagePreview, setImagePreview] = useState(null);

  const [parent, setParent]=useState("")
  
  const [validTitle, setValidTitle] = useState("");
  const [validDescription, setValidDescription] = useState("");
  const [validColumnCategory, setValidColumnCategory] = useState("");

  const { allColumnCategoryList } = useSelector(state => state.columns);

  useEffect(() =>{
    dispatch(getColumnCategoryList())
  },[])
  
  const categoryData = () =>{
    const result=[];
    for(let i=0;i<allColumnCategoryList.length;i++){
      result.push({
        value:allColumnCategoryList[i].text,
        label:allColumnCategoryList[i].text,
      })
    }
    return result;
  }

  useEffect(() => {
    // const filePath = URL.createObjectURL(logo);
    if (thumbnail) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(thumbnail);
    } else {
      setImagePreview(null);
    }

  },[thumbnail]);

  const getThumbnailImage = async(e) => {
    // setLogo(e.target.files[0]);
    var file=e.target.files[0]
    
    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png' || file.type === 'image/webp';
    
    if (!isJpgOrPng) {
      message.error('アップロードできる画像はJPG/PNG/WEBPのみです！');
      // setFileFlag(false);
    }
    if(isJpgOrPng){
      setThumbnail(file);
    }
    
    // return isJpgOrPng && pixels <= maxPixels;
  };

  useEffect(()=>{
    console.log(treeData);
  },[treeData])

  useEffect(() =>{
    console.log(parentTitleValues)
  },[parentTitleValues])

  useEffect(() =>{
    console.log(parentContentValues)
  },[parentContentValues])

  const changeParentTitle = (key, value)=>{
      if(value){
        setParentTitleValues([...parentTitleValues, { key:key, value:value }])
      }   
  }
  const changeParentContent = (key, value)=>{
    if(value){
      setParentContentValues([...parentContentValues, { key:key, value:value }])
    }   
  }

  const changeChildrenTitle = (key, value)=>{
    if(value){
      setChildrenTitleValues([...childrenTitleValues, { key:key, value:value }])
    }
  }
  const changeChildrenContent = (key, value)=>{
    if(value){
      setChildrenContentValues([...childrenContentValues, { key:key, value:value }])
    }
  }

  const handleClickAddColumn =()=>{
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
    if(!columnCategories){
      setValidColumnCategory("※この項目は必須入力項目です。")
    }else{
      setValidColumnCategory("")
    }

    if(title && description && columnCategories){
      const payload={
        title: title,
        description: description,
        columnCategories: columnCategories,
        firstTitleValues: parentTitleValues,
        firstContentValues: parentContentValues, 
        secondTitleValues: childrenTitleValues,
        secondContentValues: childrenContentValues
      }
      if(thumbnail){
        payload.thumbnail=thumbnail.name;
      }
      if(payload){
        dispatch(addColumn(payload)).then(()=>{
          alert("正確に登録されています！");  
          if(thumbnail){
             dispatch(addColumnThumbnail(thumbnail));
          }
        })
      }
    }

  }

  const handleAddParent = () => {
    if(treeData.length){
      setTreeData([
        ...treeData,
        {
          key: (parseInt(treeData[treeData.length-1 ].key)+1).toString(),
          title: <div className="w-[90%] flex flex-col">
                    <div className="flex flex-col items-start py-2">
                      <label className="font-bold mb-1">【中見出し】</label>
                      <Input type="text" onChange={(e)=>changeParentTitle((parseInt(treeData[treeData.length-1 ].key)+1).toString(), e.target.value)} />
                    </div>
                    <div className="flex flex-col items-start py-2">
                      <label className="font-bold mb-1">【コンテンツ】</label>
                      <TextArea type="text" onChange={(e)=>changeParentContent((parseInt(treeData[treeData.length-1 ].key)+1).toString(), e.target.value)}/>
                    </div>
                 </div>,
          children: []
        } 
      ])
    }else{
      setTreeData(
        [
          {
            key: "1",
            title: <div className="w-[90%] flex flex-col">
                      <div className="flex flex-col items-start py-2">
                        <label className="font-bold mb-1">【中見出し】</label>
                        <Input type="text" onChange={(e)=>changeParentTitle("1", e.target.value)}/>
                      </div>
                      <div className="flex flex-col items-start py-2">
                        <label className="font-bold mb-1">【コンテンツ】</label>
                        <TextArea type="text" onChange={(e)=>changeParentContent("1", e.target.value)}/>
                      </div>
                   </div>,
            children: []
          }
        ]
      )
    }
  }

  const handleAddChildren = (key) => {
    console.log(key);
    const updatedTreeData = treeData.map((node) => {
      if (node.key === key) {
        return {
          ...node,
          children: [
            ...node.children,
            {
              key: `${node.key}-${node.children.length + 1}`,
              title: <div className="w-full flex flex-col pl-10 py-3">
                        <div className="flex flex-col items-start py-2">
                          <label className="font-bold mb-1">【小見出し】</label>
                          <Input type="text" onChange={(e)=>changeChildrenTitle(`${node.key}-${node.children.length + 1}`, e.target.value)}/>
                        </div>
                        <div className="flex flex-col items-start py-2">
                          <label className="font-bold mb-1">【コンテンツ】</label>
                          <TextArea type="text" onChange={(e)=>changeChildrenContent(`${node.key}-${node.children.length + 1}`, e.target.value)}/>
                        </div>
                    </div>,
              children: [],
            },
          ],
        };
      }
      return node;
    });
    console.log(updatedTreeData)
    setTreeData(updatedTreeData);
  };

  const handleDeleteChildren = (key) => {
    // alert(key)
    var data=treeData
    let flag_parent=0;
    for(let i=0;i<data.length;i++){
      if(data[i].key===key){
        flag_parent=1;
      }
    }
    if(flag_parent){
      data = data.filter(item =>item.key !== key)
      setParentTitleValues(parentTitleValues.filter(item=>item.key !== key))
      setParentContentValues(parentContentValues.filter(item=>item.key !== key))
    }else{
      for(let i=0;i<data.length;i++){
        let flag_child=0;
        for(let j=0;j<data[i].children.length;j++){
          if(data[i].children[j].key===key){
            flag_child=1;
          }
        }
        if(flag_child){
          data[i].children=data[i].children.filter(child =>child.key !== key)
          setChildrenTitleValues(childrenTitleValues.filter(item=>item.key !== key))
          setChildrenContentValues(childrenContentValues.filter(item=>item.key !== key))
        }
      }
      data = data.filter(item =>item.key !== key)
    }
    setTreeData(data);
  }

  const renderTreeNodes = (data) =>
    data.map((node) => (
      <div key={node.key} className="w-full">
        <div className="w-full flex">
          <div className="w-[20%] flex flex-col justify-center items-center p-5">
            {
              !node.key.includes("-") && <button className="w-14 h-14 flex flex-col justify-center text-xs text-white rounded-full bg-blue-700 items-center p-1 hover:bg-white hover:text-black hover:border" onClick={() => handleAddChildren(node.key)}>小見出し<IoMdAdd/></button>
            }
            <button className={`w-14 h-14 flex flex-col justify-center text-xs text-white rounded-full bg-red-500 items-center py-1 mt-1 ${node.key.includes("-")?"ml-20":""} hover:bg-white hover:text-black hover:border`} onClick={() => handleDeleteChildren(node.key)}>削除<RiDeleteBin6Line/></button>
          </div>
          {node.title}
        </div>
        {node.children && node.children.length > 0 && renderTreeNodes(node.children)}
      </div>
    ));



  return(
    <div className={`-webkit-fill-available h-[900px] bg-white text-sm shadow items-center px-10 py-10 `}>
      <div className="w-full h-full pb-10 overflow-y-auto">
        <div className="flex w-full justify-center items-center">
          <p className="text-xl font-bold mx-5">コラム記事登録</p>
        </div>
        <div className="w-[800px] flex flex-col text-left mx-auto px-20 py-5">
          <div className="flex flex-col items-start py-2">
              <label className="font-bold mb-1">【タイトル】<span className="px-2 text-white rounded-md bg-red-500 text-sm">必須</span></label>
              <Input type="text" value={title} onChange={(e)=>setTitle(e.target.value)}/>
              {validTitle!=="" && <p className="text-red-500 text-sm">{validTitle}</p>}
          </div>
          <div className="flex flex-col items-start py-2">
            <label className="font-bold mb-1">【コンテンツ】<span className="px-2 text-white rounded-md bg-red-500 text-sm">必須</span></label>
            <TextArea value={description} onChange={(e)=>setDescription(e.target.value)}/>
            {validDescription!=="" && <p className="text-red-500 text-sm">{validDescription}</p>}
          </div>
          <div className="flex flex-col items-start py-2">
            <label className="font-bold mb-1">【カテゴリー】<span className="px-2 text-white rounded-md bg-red-500 text-sm">必須</span></label>
            <Select className="w-full" 
              mode="multiple"
              value={columnCategories}
              onChange={ (value) => setColumnCategories(value)}
              options={
                categoryData()
              }
              />
            {validColumnCategory!=="" && <p className="text-red-500 text-sm">{validColumnCategory}</p>}
          </div>
          <div className="flex flex-col items-start py-2">
            <label className="font-bold mb-1">【サムネイル画像】</label>
            <input
              className="relative m-0 block w-full min-w-0 flex-auto cursor-pointer rounded border border-solid border-secondary-500 bg-transparent bg-clip-padding px-3 py-[0.32rem] font-normal transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:me-3 file:cursor-pointer file:overflow-hidden file:rounded-none file:border-0 file:border-e file:border-solid file:border-inherit file:bg-transparent file:px-3  file:py-[0.32rem] focus:border-primary focus:text-gray-700 focus:shadow-inset focus:outline-none dark:border-white/70 dark:text-white file:dark:text-white"
              type="file"
              id="formFile"
              onChange={getThumbnailImage} 
              />
              {/* {validLogo!=="" && <p className="text-red-500 text-sm">{validLogo}</p>} */}
              {imagePreview && (
                <div className="w-full flex border rounded-md p-1 mt-2 items-center">
                  <img className="rounded" src={imagePreview} alt="Preview" style={{ maxWidth: '50px' }} />
                  <span className="mx-2">{thumbnail.name}</span>
                </div>
              )}
          </div>
          <div className="flex flex-col items-start py-2">
            <button className='flex items-center text-sm text-white rounded-md bg-blue-700 mx-5 px-5 py-1 hover:bg-white hover:text-black hover:border' onClick={() => handleAddParent()}><IoAddCircleOutline className="font-bold mr-2" />中見出し追加</button>
          </div>
          {       
            treeData && renderTreeNodes(treeData) 
          }

        </div>
        <div className="w-full flex justify-center items-center">
          <Link to="/manage/columnmanage" className="flex items-center text-sm border px-2 py-1 mx-5 rounded-md hover:bg-[#B40100] hover:text-white"><SlArrowLeft className='mx-1' /> 前に戻る</Link>
          <Link className='flex items-center text-sm text-white rounded-md bg-blue-700 mx-5 px-10 py-1 hover:bg-white hover:text-black hover:border' onClick={handleClickAddColumn}><IoAddCircleOutline className="font-bold mr-2" />登録</Link>
        </div>
      </div>
    </div>
  );
  
};
export default ColumnAddPage;
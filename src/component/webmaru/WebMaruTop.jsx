import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { SlArrowLeft } from "react-icons/sl";
import { useDispatch, useSelector } from "react-redux";
import { findingCompany, postSelectedCompanys } from "../../redux/slice/companySlice";
import { findingTool } from "../../redux/slice/companySlice";


import WOW from 'wow.js';
import 'animate.css';
// import 'intersection-observer';
const firstQuestionData = [
  {
    id: "1",
    text: "広告代理店／コンサル会社を探している",
  },
  {
    id: "2",
    text: "マーケティングツールを探している",
  }
];

const advertisementStep1Data = [
  {
    id: "1",
    text: "新規顧客を獲得",
  },
  {
    id: "2",
    text: "サービス等の認知度を向上",
  },
  {
    id: "3",
    text: "WEBサイト改善",
  },
  {
    id: "4",
    text: "マーケティング人材育成",
  },
  {
    id: "5",
    text: "WEB採用強化",
  }
  ,
  {
    id: "6",
    text: "その他・相談したい",
  }
];
const advertisementStep2Data = [
  {
    id: "1",
    text: "リスティング広告",
  },
  {
    id: "2",
    text: "ディスプレイ広告",
  },
  {
    id: "3",
    text: "動画広告（YOUTUBE含む）",
  },
  {
    id: "4",
    text: "SNS運用（広告運用含む）",
  },
  {
    id: "5",
    text: "アフィリエイト広告",
  },
  {
    id: "6",
    text: "ネイティブ広告",
  },
  {
    id: "7",
    text: "記事広告",
  },
  {
    id: "8",
    text: "SEO（検索エンジン最適化）・MEO（マップ検索エンジン最適化）",
  },
  {
    id: "9",
    text: "LPO（ランディングページ最適化）",
  },
  {
    id: "10",
    text: "EFO（エントリーフォーム最適化）",
  },
  {
    id: "11",
    text: "その他・相談したい",
  }
];
const advertisementStep3Data = [
  {
    id: "1",
    text: "WEB広告",
  },
  {
    id: "2",
    text: "SEO／オウンドメディア運用",
  },
  {
    id: "3",
    text: "SNS運用",
  },
  {
    id: "4",
    text: "行っていない",
  },
  {
    id: "5",
    text: "その他",
  }
];
const advertisementStep4Data = [
  {
    id: "1",
    text: "1か月以内",
  },
  {
    id: "2",
    text: "2～3か月以内",
  },
  {
    id: "3",
    text: "6か月以内",
  },
  {
    id: "4",
    text: "1年以内",
  },
  {
    id: "5",
    text: "検討中・良い提案があれば",
  }
];
const advertisementStep5Data = [
  {
    id: "1",
    text: "～50万円／月",
  },
  {
    id: "2",
    text: "50万円～／月",
  },
  {
    id: "3",
    text: "100万円～／月",
  },
  {
    id: "4",
    text: "300万円～／月",
  },
  {
    id: "5",
    text: "500万円～／月",
  },
  {
    id: "6",
    text: "1,000万円～／月",
  },
  {
    id: "7",
    text: "検討中・良い提案があれば",
  }
];

const marketingStep1Data = [
  {
    id: "1",
    text: "MA（マーケティングオートメーション）ツール",
  },
  {
    id: "2",
    text: "SFA（営業支援）ツール",
  },
  {
    id: "3",
    text: "CRM（顧客関係管理）ツール",
  },
  {
    id: "4",
    text: "アクセス解析ツール",
  },
  {
    id: "5",
    text: "SEOツール",
  },
  {
    id: "6",
    text: "LPOツール",
  },
  {
    id: "7",
    text: "広告効果測定ツール",
  },
  {
    id: "8",
    text: "SNS運用ツール",
  }
];

const resultViewData = [
  {
    id: "1",
    name: "株式会社○○",
    budget: "～50万円／月",
    specialization: "WEB広告",
  },
  {
    id: "2",
    name: "株式会社○○",
    budget: "～50万円／月",
    specialization: "WEB広告",
  },
  {
    id: "3",
    name: "株式会社○○",
    budget: "～50万円／月",
    specialization: "WEB広告",
  }
];


const WebMaruTop = ( {scrollToWebMaruContnet} ) => {

  const dispatch = useDispatch();
  const [block, setBlock] = useState(false);
  const ref1 = useRef(null);
  const ref2 = useRef(null);

  const [disabled, setDisabled] = useState(true);
  const [disabledAdStep1, setDisabledAdStep1] = useState(true);
  const [disabledAdStep2, setDisabledAdStep2] = useState(true);
  const [disabledAdStep3, setDisabledAdStep3] = useState(true);
  const [disabledAdStep4, setDisabledAdStep4] = useState(true);
  const [disabledAdStep5, setDisabledAdStep5] = useState(true);
  const [disabledAdStep6, setDisabledAdStep6] = useState(true);

  const [disabledMaStep1, setDisabledMaStep1] = useState(true);
  const [disabledMaStep2, setDisabledMaStep2] = useState(true);
  const [disabledMaStep3, setDisabledMaStep3] = useState(true);
  const [disabledMaStep4, setDisabledMaStep4] = useState(true);

  const [disabledResultView, setDisabledResultView] = useState(true);
  const [disabledToolResultView, setDisabledToolResultView] = useState(true);


  const [selectedValue, setSelectedValue] = useState('');
  const [advertisementStep1, setAdvertisementStep1] = useState('hidden');
  const [advertisementStep2, setAdvertisementStep2] = useState('hidden');
  const [advertisementStep3, setAdvertisementStep3] = useState('hidden');
  const [advertisementStep4, setAdvertisementStep4] = useState('hidden');
  const [advertisementStep5, setAdvertisementStep5] = useState('hidden');
  const [advertisementStep6, setAdvertisementStep6] = useState('hidden');
  const [marketingStep1, setMarketingStep1] = useState('hidden');
  const [marketingStep2, setMarketingStep2] = useState('hidden');
  const [marketingStep3, setMarketingStep3] = useState('hidden');
  const [marketingStep4, setMarketingStep4] = useState('hidden');
  
  const [resultView, setResultView] = useState('hidden');
  const [resultMarketingView, setResultMarketingView] = useState('hidden');
  const [resultMessage, setResultMessage] = useState('hidden');
  const [first, setFirst] = useState('block');

  const [advertisementStep1Value, setAdvertisementStep1Value] = useState([]);
  const [advertisementStep2Value, setAdvertisementStep2Value] = useState([]);
  const [advertisementStep3Value, setAdvertisementStep3Value] = useState([]);
  const [advertisementStep4Value, setAdvertisementStep4Value] = useState("");
  const [advertisementStep5Value, setAdvertisementStep5Value] = useState("");

  const [marketingStep1Value, setMarketingStep1Value] = useState([]);
  const [marketingStep2Value, setMarketingStep2Value] = useState("");
  const [marketingStep3Value, setMarketingStep3Value] = useState("");

  const [resultValue, setResultValue] = useState([]);
  const [resultToolValue, setResultToolValue] = useState([]);

  const [isCheckedResult, setisCheckedResult] = useState({})
  const [isToolCheckedResult, setisToolCheckedResult] = useState({})
  const [isCheckedadvertisementStep1, setisCheckedadvertisementStep1] = useState({})
  const [isCheckedadvertisementStep2, setisCheckedadvertisementStep2] = useState({})
  const [isCheckedadvertisementStep3, setisCheckedadvertisementStep3] = useState({})

  const [isCheckedmarketingStep1, setisCheckedmarketingStep1] = useState({})


  const [checked, setChecked] = useState(false);
  const [toolChecked, setToolChecked] = useState(false);
  const [clientName, setClientName] = useState("");
  const [clientCompanyName, setClientCompanyName] = useState("");
  const [clientEmail, setClientEmail] = useState("");
  const [clientPhonenumber, setClientPhonenumber] = useState("");
  const [questionContent, setQuestionContent] = useState("");

  const {matchCompanies, matchToolCompanies, postSelectedCompanysResultMessage} = useSelector(state => state.companies);
  
  useEffect(() => {
    console.log(matchCompanies);
  }, [matchCompanies]);

  useEffect(() => {
    console.log("=======>",postSelectedCompanysResultMessage);
    if(postSelectedCompanysResultMessage==="success"){
      setResultView("hidden");
      setResultMarketingView("hidden");
      setResultMessage("block");
    } 
  }, [postSelectedCompanysResultMessage]);

  useEffect(() => {
    const wow = new WOW({
      offset: 100,
      mobile: false,
      duration: 1000,
    });
    wow.init();

    const observer1 = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('wow', 'animate__animated', 'animate__pulse');
        } else {
          entry.target.classList.remove('wow', 'animate__animated', 'animate__pulse');
        }
      });
    });

    const observer2 = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('wow', 'animate__animated', 'animate__zoomIn');
        } else {
          entry.target.classList.remove('wow', 'animate__animated', 'animate__zoomIn');
        }
      });
    });

    observer1.observe(ref1.current);
    observer2.observe(ref2.current);

    // return () => {
    //   observer.unobserve(ref.current);
    // };
  }, []);

  useEffect(()=>{
    console.log("====>", selectedValue);
  },[selectedValue])

  const showModal = () => {
    // alert("isClicked");
    setBlock(true);

    setAdvertisementStep1('hidden');
    setAdvertisementStep2('hidden');
    setAdvertisementStep3('hidden');
    setAdvertisementStep4('hidden');
    setAdvertisementStep5('hidden');
    setAdvertisementStep6('hidden');
    setMarketingStep1('hidden');
    setMarketingStep2('hidden');
    setFirst('block');

  }
  const closeModal = () => {
    setResultMessage("hidden");
    setBlock(false);
  }
  const handleRadioChange = (event) => {
    setDisabled(false)
    setSelectedValue(event.target.value);
  }
  const nextFuntion1 = () => {
    setFirst("hidden");
    if (selectedValue === "広告代理店／コンサル会社を探している") {
      setAdvertisementStep1("block");
    }else{
      setMarketingStep1("block");
    }
  }
  const advertisementStep1Funtion = () => {
    setAdvertisementStep1("hidden");
    setAdvertisementStep2("block");
  }
  const advertisementStep2Funtion = () => {
    setAdvertisementStep2("hidden");
    setAdvertisementStep3("block");
  }
  const advertisementStep3Funtion = () => {
    setAdvertisementStep3("hidden");
    setAdvertisementStep4("block");
  }
  const advertisementStep4Funtion = () => {
    setAdvertisementStep4("hidden");
    setAdvertisementStep5("block");
  }
  const advertisementStep5Funtion = () => {
    setAdvertisementStep5("hidden");
    setAdvertisementStep6("block");
  }
  const advertisementStep6Funtion = () => {
    let emailRegex = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;
    if(!emailRegex.test(clientEmail)){
       alert("正確なメール形式ではありません。"); 
    }else{
      const payload={
        service:selectedValue,
        purpose:advertisementStep1Value,
        measures:advertisementStep2Value,
        currentMeasures:advertisementStep3Value,
        startDate:advertisementStep4Value,
        budget:advertisementStep5Value,
        name:clientName,
        companyName:clientCompanyName,
        email:clientEmail,
        phoneNumber:clientPhonenumber,
        questionContent:questionContent
      }
      dispatch(findingCompany(payload));
    
      setAdvertisementStep6("hidden");
      setResultView("block");
    }
  }

  const marketingStep1Funtion = () => {
    setMarketingStep1("hidden");
    setMarketingStep2("block");
  }
  const marketingStep2Funtion = () => {
    // console.log(marketingStep2Value);
    setMarketingStep2("hidden");
    setMarketingStep3("block");
  }
  const marketingStep3Funtion = () => {
    // console.log(marketingStep3Value);
    setMarketingStep3("hidden");
    setMarketingStep4("block");
  }
  const marketingStep4Funtion = () => {
    let emailRegex = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;
    if(!emailRegex.test(clientEmail)){
       alert("正確なメール形式ではありません。"); 
    }else{
      const payload={
        service:selectedValue,
        findTool:marketingStep1Value,
        startDate:marketingStep2Value,
        budget:marketingStep3Value,
        name:clientName,
        companyName:clientCompanyName,
        email:clientEmail,
        phoneNumber:clientPhonenumber,
        questionContent:questionContent
      }
      dispatch(findingTool(payload));
      setMarketingStep4("hidden");
      setResultMarketingView("block");
    }
  }

  const resultViewFuntion = () => {
    const payload={
      name:clientName,
      email:clientEmail,
      selectedCompanise:resultValue
    }
    dispatch(postSelectedCompanys(payload));
  }
  const resultMarketingViewFuntion = () => {
    const payload={
      name:clientName,
      email:clientEmail,
      selectedCompanise:resultToolValue
    }
    dispatch(postSelectedCompanys(payload));
    // if(postSelectedCompanysResultMessage==="success"){
    //   setResultMarketingView("hidden");
    //   setResultMessage("block");
    // } 
  }

  const advertisementStep1BackFuntion = () => {
    setAdvertisementStep1("hidden");
    setFirst("block");
  }
  const advertisementStep2BackFuntion = () => {
    setAdvertisementStep2("hidden");
    setAdvertisementStep1("block");
  }
  const advertisementStep3BackFuntion = () => {
    setAdvertisementStep3("hidden");
    setAdvertisementStep2("block");
  }
  const advertisementStep4BackFuntion = () => {
    setAdvertisementStep4("hidden");
    setAdvertisementStep3("block");
  }
  const advertisementStep5BackFuntion = () => {
    setAdvertisementStep5("hidden");
    setAdvertisementStep4("block");
  }
  const advertisementStep6BackFuntion = () => {
    setAdvertisementStep6("hidden");
    setAdvertisementStep5("block");
  }
  const marketingStep1BackFuntion = () => {
    setMarketingStep1("hidden");
    setFirst("block");
  }
  const marketingStep2BackFuntion = () => {
    setMarketingStep2("hidden");
    setMarketingStep1("block");
  }
  const marketingStep3BackFuntion = () => {
    setMarketingStep3("hidden");
    setMarketingStep2("block");
  }
  const marketingStep4BackFuntion = () => {
    setMarketingStep4("hidden");
    setMarketingStep3("block");
  }
  const resultViewBackFuntion = () => {
    setResultView("hidden");
    setAdvertisementStep6("block");
  }
  const resultMarketingViewBackFuntion =()=>{
    setResultMarketingView("hidden");
    setMarketingStep4("block");
  }

  const toggleHandlerAdvertisementStep1 = (item) => () => {
    let tmp = isCheckedadvertisementStep1;
    tmp[item.id - 1] = isCheckedadvertisementStep1[item.id - 1] != undefined ? !isCheckedadvertisementStep1[item.id - 1] : true;
    setisCheckedadvertisementStep1(tmp)
    if (advertisementStep1Value.includes(item.text))
      setAdvertisementStep1Value(advertisementStep1Value.filter(ele => ele != item.text))
    else setAdvertisementStep1Value([...advertisementStep1Value, item.text])
  };
  const toggleHandlerAdvertisementStep2 = (item) => () => {
    let tmp = isCheckedadvertisementStep2;
    tmp[item.id - 1] = isCheckedadvertisementStep2[item.id - 1] != undefined ? !isCheckedadvertisementStep2[item.id - 1] : true;
    setisCheckedadvertisementStep2(tmp)
    if (advertisementStep2Value.includes(item.text))
      setAdvertisementStep2Value(advertisementStep2Value.filter(ele => ele != item.text))
    else setAdvertisementStep2Value([...advertisementStep2Value, item.text])
  };
  const toggleHandlerAdvertisementStep3 = (item) => () => {
    let tmp = isCheckedadvertisementStep3;
    tmp[item.id - 1] = isCheckedadvertisementStep3[item.id - 1] != undefined ? !isCheckedadvertisementStep3[item.id - 1] : true;
    setisCheckedadvertisementStep3(tmp)
    if (advertisementStep3Value.includes(item.text))
      setAdvertisementStep3Value(advertisementStep3Value.filter(ele => ele != item.text))
    else setAdvertisementStep3Value([...advertisementStep3Value, item.text])
  };
  const toggleHandlerAdvertisementStep4 = (event) => {
    setAdvertisementStep4Value(event.target.value);
  };
  const toggleHandlerAdvertisementStep5 = (event) => {
    console.log(event.target.value);
    setAdvertisementStep5Value(event.target.value);
  };

  const toggleHandlerMarketingStep1 = (item) => () => {
    let tmp = isCheckedmarketingStep1;
    tmp[item.id - 1] = isCheckedmarketingStep1[item.id - 1] != undefined ? !isCheckedmarketingStep1[item.id - 1] : true;
    setisCheckedmarketingStep1(tmp)
    if (marketingStep1Value.includes(item.text))
      setMarketingStep1Value(marketingStep1Value.filter(ele => ele != item.text))
    else setMarketingStep1Value([...marketingStep1Value, item.text])
  };
  const toggleHandlerMarketingStep2 = (event) => {
    setMarketingStep2Value(event.target.value);
  };
  const toggleHandlerMarketingStep3 = (event) => {
    setMarketingStep3Value(event.target.value);
  };

  const toggleHandlerResultView = (item, index) => () => {
    let tmp = isCheckedResult;
    tmp[index] = isCheckedResult[index] != undefined ? !isCheckedResult[index] : true;
    setisCheckedResult(tmp)
    if (resultValue.includes(item.id))
      setResultValue(resultValue.filter(ele => ele != item.id))
    else setResultValue([...resultValue, item.id])
  };
  const toggleAllCheckedResultView = () => {
    if (checked) {
      setChecked(false);
      setResultValue([]);
      setisCheckedResult({})
    } else {
      setChecked(true);
      setResultValue([]);
      let tmp = {};
      for (let i = 0; i < matchCompanies.length; i++) {
        resultValue[i] = matchCompanies[i].id
        tmp[i] = true;
      }
      setResultValue([...resultValue]);
      setisCheckedResult(tmp);
    }
    // console.log(resultValue);
  };
  useEffect(() => {
    setChecked((resultValue.length == matchCompanies.length) && matchCompanies.length)
    console.log(resultValue)
  }, [resultValue]);

  const toggleHandlerToolResultView = (item, index) => () => {
    let tmp = isToolCheckedResult;
    tmp[index] = isToolCheckedResult[index] != undefined ? !isToolCheckedResult[index] : true;
    setisCheckedResult(tmp)
    if (resultToolValue.includes(item.id))
      setResultToolValue(resultToolValue.filter(ele => ele != item.id))
    else setResultToolValue([...resultToolValue, item.id])
  };
  const toggleAllCheckedToolResultView = () => {
    if (toolChecked) {
      setToolChecked(false);
      setResultToolValue([]);
      setisToolCheckedResult({})
    } else {
      setToolChecked(true);
      setResultToolValue([]);
      let tmp = [];
      for (let i = 0; i < matchToolCompanies.length; i++) {
        resultToolValue[i] = matchToolCompanies[i].id
        tmp[i] = true;
      }
      setResultToolValue([...resultToolValue]);
      console.log(tmp);
      setisToolCheckedResult(tmp);
    }
    // console.log(resultValue);
  };
  useEffect(() => {
    setToolChecked((resultToolValue.length == matchToolCompanies.length) && matchToolCompanies.length)
    console.log(resultToolValue)
  }, [resultToolValue]);

  useEffect(() => {
    // console.log(advertisementStep1Value);
    if (advertisementStep1Value.length) {
      setDisabledAdStep1(false);
    } else {
      setDisabledAdStep1(true);
    }
    if (advertisementStep2Value.length) {
      setDisabledAdStep2(false);
    } else {
      setDisabledAdStep2(true);
    }

    if (advertisementStep3Value.length) {
      setDisabledAdStep3(false);
    } else {
      setDisabledAdStep3(true);
    }

    if (advertisementStep4Value !== "") {
      setDisabledAdStep4(false);
    } else {
      setDisabledAdStep4(true);
    }

    if (advertisementStep5Value) {
      setDisabledAdStep5(false);
    } else {
      setDisabledAdStep5(true);
    }
    if (clientName && clientCompanyName && clientEmail) {
      setDisabledAdStep6(false);
    } else {
      setDisabledAdStep6(true);
    }
    if (resultValue.length) {
      setDisabledResultView(false);
    } else {
      setDisabledResultView(true);
    }

    if (resultToolValue.length) {
      setDisabledToolResultView(false);
    } else {
      setDisabledToolResultView(true);
    }
  }, [advertisementStep1Value, advertisementStep2Value, advertisementStep3Value, advertisementStep4Value, advertisementStep5Value, clientName, clientCompanyName, clientEmail, resultValue, resultToolValue])

  useEffect(() => {
    if (marketingStep1Value.length) {
      setDisabledMaStep1(false);
    } else {
      setDisabledMaStep1(true);
    }

    if (marketingStep2Value) {
      setDisabledMaStep2(false);
    } else {
      setDisabledMaStep2(true);
    }

    if (marketingStep3Value) {
      setDisabledMaStep3(false);
    } else {
      setDisabledMaStep3(true);
    }
  }, [marketingStep1Value, marketingStep2Value, marketingStep3Value])

  return (
    <div className='w-full h-full flex flex-col justify-center items-center pt-40 pb-20 sp:pt-20'>
      <div className='w-full flex justify-center sp:flex-wrap'>
        <div className='w-[70%] sp:w-full flex flex-col justify-center items-center'>
          <p className='text-white text-4xl mb-10 sp:text-2xl sp:mx-10 sp:mt-10'>最適なマーケティングパートナーを見つけるなら</p>
          <div className='w-[300px] border-white border-t-2'></div>
          <p className='text-white text-6xl mt-10 sp:text-2xl sp:mx-10'>Mitsuke (ミツケ)</p>
          <div ref={ref1} className='w-[80%] sp:w-full'>
            <div className='w-full sp:w-[80%] flex flex-col justify-center items-center rounded-md bg-white shadow-xl mt-10 px-5 py-10 sp:mx-auto sp:py-5'>
              <div className='w-full flex pb-5 border-b justify-center sp:flex-wrap'>
                <span className='text-white mx-3 px-3 py-2 bg-[#FD6E6A] rounded-md sp:w-full sp:my-1'>新規顧客獲得</span>
                <span className='text-white mx-3 px-3 py-2 bg-[#FD6E6A] rounded-md sp:w-full sp:my-1'>認知拡大</span>
                <span className='text-white mx-3 px-3 py-2 bg-[#FD6E6A] rounded-md sp:w-full sp:my-1'>WEBサイト制作</span>
                <span className='text-white mx-3 px-3 py-2 bg-[#FD6E6A] rounded-md sp:w-full sp:my-1'>マーケティングツール</span>
              </div>
              <p className='py-5 text-red-500'>など</p>
              <div className='w-full sp:rounded-2xl text-red-500 text-2xl font-bold flex flex-col justify-center items-center mb-5 sp:text-sm'>
                {/* <p>\カンタン3分でマッチング/</p> */}
                <p className='sp:mx-5'>マーケティングに強みをもった企業やツールが見つかります!</p>
              </div>
              {/* <p className='text-xl'>アンケートを始めますか?</p> */}
              <button className='w-[250px] text-white border-2 rounded-full bg-[#FD6E6A] px-5 py-2 my-2 hover:bg-white hover:text-[#FD6E6A] sp:text-sm' onClick={() => showModal()}>さっそく見つけて</button>
              <button className='w-[250px] text-[#FD6E6A] border-2 rounded-full bg-white px-5 py-2 my-2 hover:bg-[#FD6E6A] hover:text-white sp:text-sm'>ご掲載希望はこちらから</button>
            </div>
          </div>
        </div>
        <div className='w-[30%] sp:w-full flex flex-wrap justify-start items-center sp:justify-center sp:pt-5'>
          <Link onClick={() => showModal()} className='w-[200px] h-[200px] sp:w-[170px] sp:h-[170px] bg-[#f4f8f9] flex flex-col itmes-center justify-between rounded-md shadow-md text-sm px-2 py-5 mx-2 sp:my-3 hover:shadow-2xl'>
            <div className='w-[100px] h-[100px] bg-red-500 mx-auto'></div>
            <span className='text-red-500 font-bold sp:text-sm'>カンタンな質問に答えて</span>
            <span className='sp:text-[10px]'>最適な企業ツールを見つける</span>
          </Link>
          <Link onClick={scrollToWebMaruContnet} className='w-[200px] h-[200px] sp:w-[170px] sp:h-[170px] bg-[#f4f8f9] flex flex-col itmes-center justify-between rounded-md shadow-md text-sm px-2 py-5 mx-2 sp:my-3 hover:shadow-2xl'>
            <div className='w-[100px] h-[100px] bg-red-500 mx-auto'></div>
            <span className='font-bold sp:text-sm'>課題 目的から</span>
            <span className='sp:text-[10px]'>最適な企業ツールを見つける</span>
          </Link>
          <Link onClick={scrollToWebMaruContnet} className='w-[200px] h-[200px] sp:w-[170px] sp:h-[170px] bg-[#f4f8f9] flex flex-col itmes-center justify-between rounded-md shadow-md text-sm px-2 py-5 mx-2 sp:my-3 hover:shadow-2xl'>
            <div className='w-[100px] h-[100px] bg-red-500 mx-auto'></div>
            <span className='font-bold sp:text-sm'>検討している施策から</span>
            <span className='sp:text-[10px]'>最適な企業ツールを見つける</span>
          </Link>
          <Link onClick={scrollToWebMaruContnet} className='w-[200px] h-[200px] sp:w-[170px] sp:h-[170px] bg-[#f4f8f9] flex flex-col itmes-center justify-between rounded-md shadow-md text-sm px-2 py-5 mx-2 sp:my-3 hover:shadow-2xl'>
            <div className='w-[100px] h-[100px] bg-red-500 mx-auto'></div>
            <span className='font-bold'>ご予算規模から</span>
            <span className='sp:text-[10px]'>最適な企業ツールを見つける</span>
          </Link>
        </div>
      </div>

      <div className='w-full flex flex-col items-center py-10 mt-20 bg-[#f4f8f9] sp:px-3'>
        <p className='text-2xl font-bold py-5 sp:text-xl'>Mitsukeで最適なパートナーの見つけ方</p>
        <div className='w-[60%] sp:w-full flex justify-center py-3 my-1 -ml-40 border bg-white rounded-md px-5 shadow sp:ml-0 sp:flex-wrap'>
          <div className='w-[100px] h-[100px] bg-red-500 mr-5'></div>
          <div className='w-[calc(100%-100px)] sp:w-full flex flex-col justify-center items-center'>
            <span className='font-bold mb-2 sp:my-3'>探しているサービスや解決したい課題、ご予算イメージなどを基に検索</span>
            <span className='text-left sp:mb-3'>「新規顧客を増やしたい」 「サービスの認知度を上げたい」 「顧客分析ツールが欲しい」など。 質問に回答するともっとカンタンに希望に合う企業が見つかります。</span>
            <button className='px-5 py-1 bg-[#FD6E6A] border border-[#FD6E6A] text-white rounded hover:text-[#FD6E6A] hover:bg-white' onClick={() => showModal()}>質問に回答する</button>
          </div>
        </div>

        <div className='w-[60%] sp:w-full sp:w-full flex justify-center py-3 my-1 border bg-white rounded-md px-5 shadow sp:flex-wrap'>
          <div className='w-[100px] h-[100px] bg-red-500 mr-5'></div>
          <div className='w-[calc(100%-100px)] sp:w-full flex flex-col justify-center items-center'>
            <span className='font-bold mb-2 sp:my-3'>気になる企業が見つかったらお問い合わせ!</span>
            <span className='text-left sp:mb-3'>記入いただいた情報を基にマッチングを行います。</span>
          </div>
        </div>

        <div className='w-[60%] sp:w-full flex justify-center py-3 my-1 ml-40 border bg-white rounded-md px-5 shadow sp:ml-0 sp:flex-wrap'>
          <div className='w-[100px] h-[100px] bg-red-500 mr-5'></div>
          <div className='w-[calc(100%-100px)] sp:w-full flex flex-col justify-center items-center '>
            <span className='font-bold mb-2 sp:my-3'>気になる企業の担当者から直接ご連絡させていただきます。</span>
            <span className='text-left sp:mb-3'>マッチング可能の場合、いただいたご連絡先へ企業担当者から直接連絡いたします。 マッチング企業が複数の場合は、各社の提案を開いた上での選定が可能です。</span>
          </div>
        </div>

      </div>
      
      <div className={`w-full h-full z-40 bg-white bg-opacity-60 top-0 ${block ? 'block fixed' : 'hidden absolute'}`}>
        <div ref={ref2}>
          <div className='w-[700px] sp:w-[90%] h-[500px] bg-white rounded-md drop-shadow-md mx-auto my-[15%]'>
            <div className={`w-full h-full flex flex-col ${first}`}>
              <div className='w-full flex justify-end'>
                <Link onClick={() => closeModal()}><span className='text-black text-2xl mx-3 mt-3 hover:text-[#FB2407]'>&times;</span></Link>
              </div>
              <div className='w-full flex justify-between px-10 items-center my-5 sp:px-5'>
                <p className='mx-10 sp:w-[250px] sp:mx-5'>どのようなサービスを探していますか？</p>
                <div className='w-[80px]'>
                  <CircularProgressbar
                    value={0}
                    text={`0%`}
                    background
                    backgroundPadding={6}
                    styles={buildStyles({
                      backgroundColor: "#FD6E6A",
                      textColor: "white",
                      pathColor: "white",
                      trailColor: "transparent"
                    })}
                  />
                </div>
              </div>
              <div className='w-full flex flex-col mt-10 px-20 sp:px-5'>
                {firstQuestionData.map((item) => {
                    return (
                      <div key={item.id} className="flex items-center mb-10 border border-[#FD6E6A] rounded-md py-2 px-5">
                        <input id={`radio${item.id}`} type="radio" name="radio" className="hidden" value={item.text} onChange={handleRadioChange} />
                        <label htmlFor={`radio${item.id}`} className="flex items-center cursor-pointer">
                          <span className="w-3 h-3 inline-block mr-2 rounded-full border border-grey flex-no-shrink"></span>
                          {item.text}</label>
                      </div>
                    );
                  })}
                <div className='w-full px-5'>
                  <button disabled={disabled} className={`text-white float-right border-2 rounded-full px-10 py-1 ${!disabled ? 'bg-[#FD6E6A] hover:bg-white hover:text-[#FD6E6A]' : 'bg-gray-300'} `} onClick={() => nextFuntion1()}>次へ</button>
                </div>
              </div>
            </div>
            {/* advertisment   Step1 */}
            <div className={`w-full h-full flex flex-col ${advertisementStep1}`}>
              <div className='w-full flex justify-between'>
                <p className='bg-[#FD6E6A] text-white px-2 py-1'>全部で6問</p>
                <Link onClick={() => closeModal()}><span className='text-black text-2xl mx-3 mt-3 hover:text-[#FB2407]'>&times;</span></Link>
              </div>
              <div className='w-full flex justify-between px-10 items-center my-5 sp:px-5'>
                <p className='mx-10 sp:w-[250px] sp:mx-5'>WEBマーケティングで達成したい目標をお答えください</p>
                <div className='w-[80px]'>
                  <CircularProgressbar
                    value={14}
                    text={`14%`}
                    background
                    backgroundPadding={6}
                    styles={buildStyles({
                      backgroundColor: "#FD6E6A",
                      textColor: "white",
                      pathColor: "white",
                      trailColor: "transparent"
                    })}
                  />
                </div>
              </div>
              <div className='w-full flex flex-col px-10 sp:px-5'>
                <div className='w-full h-[250px] flex flex-col mb-5 overflow-y-auto px-2'>
                  {advertisementStep1Data.map((item) => {
                    return (
                      <div
                        key={item.id}
                        className='w-full flex border border-[#FD6E6A] rounded-md my-1 py-2 px-5'
                        onClick={toggleHandlerAdvertisementStep1(item)}
                      >
                        <input
                          checked={isCheckedadvertisementStep1[parseInt(item.id - 1)] != undefined ? isCheckedadvertisementStep1[parseInt(item.id - 1)] : false}
                          className='mx-2'
                          type="checkbox"
                          readOnly
                        />
                        <label >{item.text}</label>
                      </div>
                    );
                  })}
                </div>
                <div className='w-full flex px-5 justify-between'>
                  <button className='flex justify-center items-center hover:text-[#FD6E6A]' onClick={() => advertisementStep1BackFuntion()}><SlArrowLeft className='mx-1' /> 前に戻る</button>
                  <button disabled={disabledAdStep1} className={`text-white border-2 rounded-full px-10 py-1 ${!disabledAdStep1 ? 'bg-[#FD6E6A] hover:bg-white hover:text-[#FD6E6A]' : 'bg-gray-300'} `} onClick={() => advertisementStep1Funtion()}>次へ</button>
                </div>
              </div>
            </div>

            {/* advertisment   Step2 */}
            <div className={`w-full h-full flex flex-col ${advertisementStep2}`}>
              <div className='w-full flex justify-between'>
                <p className='bg-[#FD6E6A] text-white px-2 py-1'>全部で6問</p>
                <Link onClick={() => closeModal()}><span className='text-black text-2xl mx-3 mt-3 hover:text-[#FB2407]'>&times;</span></Link>
              </div>
              <div className='w-full h-20 flex justify-between px-10 items-center my-5 sp:px-5'>
                <p className='mx-10 sp:w-[250px] sp:mx-5'>実施したいWEBマーケティング施策をお答えください</p>
                <div className='w-[80px]'>
                  <CircularProgressbar
                    value={28}
                    text={`28%`}
                    background
                    backgroundPadding={6}
                    styles={buildStyles({
                      backgroundColor: "#FD6E6A",
                      textColor: "white",
                      pathColor: "white",
                      trailColor: "transparent"
                    })}
                  />
                </div>
              </div>
              <div className='w-full flex flex-col px-10 sp:px-5 sp:px-5'>
                <div className='w-full h-[250px] flex flex-col mb-5 overflow-y-auto px-2'>
                  {advertisementStep2Data.map((item) => {
                    return (
                      <div
                        key={item.id}
                        className='w-full flex border border-[#FD6E6A] rounded-md my-1 py-2 px-5'
                        onClick={toggleHandlerAdvertisementStep2(item)}
                      >
                        <input
                          checked={isCheckedadvertisementStep2[parseInt(item.id - 1)] != undefined ? isCheckedadvertisementStep2[parseInt(item.id - 1)] : false}
                          className='mx-2'
                          type="checkbox"
                          readOnly
                        />
                        <label >{item.text}</label>
                      </div>
                    );
                  })}
                </div>
                <div className='w-full flex px-5 justify-between'>
                  <button className='flex justify-center items-center hover:text-[#FD6E6A]' onClick={() => advertisementStep2BackFuntion()}><SlArrowLeft className='mx-1' /> 前に戻る</button>
                  <button disabled={disabledAdStep2} className={`text-white border-2 rounded-full px-10 py-1 ${!disabledAdStep2 ? 'bg-[#FD6E6A] hover:bg-white hover:text-[#FD6E6A]' : 'bg-gray-300'} `} onClick={() => advertisementStep2Funtion()}>次へ</button>
                </div>
              </div>
            </div>
            {/* advertisment   Step3 */}
            <div className={`w-full h-full flex flex-col ${advertisementStep3}`}>
              <div className='w-full flex justify-between'>
                <p className='bg-[#FD6E6A] text-white px-2 py-1'>全部で6問</p>
                <Link onClick={() => closeModal()}><span className='text-black text-2xl mx-3 mt-3 hover:text-[#FB2407]'>&times;</span></Link>
              </div>
              <div className='w-full h-20 flex justify-between px-10 items-center my-5 sp:px-5'>
                <p className='mx-10 sp:w-[250px] sp:mx-5'>現状、どのようなWEB施策を行っていますか？</p>
                <div className='w-[80px]'>
                  <CircularProgressbar
                    value={43}
                    text={`43%`}
                    background
                    backgroundPadding={6}
                    styles={buildStyles({
                      backgroundColor: "#FD6E6A",
                      textColor: "white",
                      pathColor: "white",
                      trailColor: "transparent"
                    })}
                  />
                </div>
              </div>
              <div className='w-full flex flex-col px-10 sp:px-5'>
                <div className='w-full h-[250px] flex flex-col mb-5 overflow-y-auto px-2'>
                  {advertisementStep3Data.map((item) => {
                    return (
                      <div
                        key={item.id}
                        className='w-full flex border border-[#FD6E6A] rounded-md my-1 py-2 px-5'
                        onClick={toggleHandlerAdvertisementStep3(item)}
                      >
                        <input
                          className='mx-2'
                          type="checkbox"
                          checked={isCheckedadvertisementStep3[parseInt(item.id - 1)] != undefined ? isCheckedadvertisementStep3[parseInt(item.id - 1)] : false}
                          readOnly
                        />
                        <label >{item.text}</label>
                      </div>
                    );
                  })}
                </div>
                <div className='w-full flex px-5 justify-between'>
                  <button className='flex justify-center items-center hover:text-[#FD6E6A]' onClick={() => advertisementStep3BackFuntion()}><SlArrowLeft className='mx-1' /> 前に戻る</button>
                  <button disabled={disabledAdStep3} className={`text-white border-2 rounded-full px-10 py-1 ${!disabledAdStep3 ? 'bg-[#FD6E6A] hover:bg-white hover:text-[#FD6E6A]' : 'bg-gray-300'} `} onClick={() => advertisementStep3Funtion()}>次へ</button>
                </div>
              </div>
            </div>
            {/* advertisment   Step4 */}
            <div className={`w-full h-full flex flex-col ${advertisementStep4}`}>
              <div className='w-full flex justify-between'>
                <p className='bg-[#FD6E6A] text-white px-2 py-1'>全部で6問</p>
                <Link onClick={() => closeModal()}><span className='text-black text-2xl mx-3 mt-3 hover:text-[#FB2407]'>&times;</span></Link>
              </div>
              <div className='w-full h-20 flex justify-between px-10 items-center my-5 sp:px-5'>
                <p className='mx-10 sp:w-[250px] sp:mx-5'>WEBマーケティングを行う場合、いつから開始を希望されますか？</p>
                <div className='w-[80px]'>
                  <CircularProgressbar
                    value={57}
                    text={`57%`}
                    background
                    backgroundPadding={6}
                    styles={buildStyles({
                      backgroundColor: "#FD6E6A",
                      textColor: "white",
                      pathColor: "white",
                      trailColor: "transparent"
                    })}
                  />
                </div>
              </div>
              <div className='w-full flex flex-col px-10 sp:px-5'>
                <div className='w-full h-[250px] flex flex-col mb-5 overflow-y-auto px-2'>
                  {advertisementStep4Data.map((item) => {
                    return (
                      <div key={item.id} className="w-full flex border border-[#FD6E6A] rounded-md my-1 py-2 px-5">
                        <input id={`radioadvertisementstep4_${item.id}`} type="radio" name={"radioadvertisementstep4"} className="hidden" value={item.text} onChange={toggleHandlerAdvertisementStep4} />
                        <label htmlFor={`radioadvertisementstep4_${item.id}`} className="flex items-center cursor-pointer">
                          <span className="w-3 h-3 inline-block mr-2 rounded-full border border-grey flex-no-shrink"></span>
                          {item.text}</label>
                      </div>
                    );
                  })}
                </div>
                <div className='w-full flex px-5 justify-between'>
                  <button className='flex justify-center items-center hover:text-[#FD6E6A]' onClick={() => advertisementStep4BackFuntion()}><SlArrowLeft className='mx-1' /> 前に戻る</button>
                  <button disabled={disabledAdStep4} className={`text-white border-2 rounded-full px-10 py-1 ${!disabledAdStep4 ? 'bg-[#FD6E6A] hover:bg-white hover:text-[#FD6E6A]' : 'bg-gray-300'} `} onClick={() => advertisementStep4Funtion()}>次へ</button>
                </div>
              </div>
            </div>
            {/* advertisment   Step5 */}
            <div className={`w-full h-full flex flex-col ${advertisementStep5}`}>
              <div className='w-full flex justify-between'>
                <p className='bg-[#FD6E6A] text-white px-2 py-1'>全部で6問</p>
                <Link onClick={() => closeModal()}><span className='text-black text-2xl mx-3 mt-3 hover:text-[#FB2407]'>&times;</span></Link>
              </div>
              <div className='w-full h-20 flex justify-between px-10 items-center my-5 sp:px-5'>
                <p className='mx-10 sp:w-[250px] sp:mx-5'>想定しているご予算をお答えください</p>
                <div className='w-[80px]'>
                  <CircularProgressbar
                    value={71}
                    text={`71%`}
                    background
                    backgroundPadding={6}
                    styles={buildStyles({
                      backgroundColor: "#FD6E6A",
                      textColor: "white",
                      pathColor: "white",
                      trailColor: "transparent"
                    })}
                  />
                </div>
              </div>
              <div className='w-full flex flex-col px-10 sp:px-5'>
                <div className='w-full h-[250px] flex flex-col mb-5 overflow-y-auto px-2'>
                  {advertisementStep5Data.map((item) => {
                    return (
                      <div key={item.id} className="w-full flex border border-[#FD6E6A] rounded-md my-1 py-2 px-5">
                        <input id={`radioadvertisementstep5_${item.id}`} type="radio" name="radioadvertisementstep5" className="hidden" value={item.text} onChange={toggleHandlerAdvertisementStep5} />
                        <label htmlFor={`radioadvertisementstep5_${item.id}`} className="flex items-center cursor-pointer">
                          <span className="w-3 h-3 inline-block mr-2 rounded-full border border-grey flex-no-shrink"></span>
                          {item.text}</label>
                      </div>
                    );
                  })}
                </div>
                <div className='w-full flex px-5 justify-between'>
                  <button className='flex justify-center items-center hover:text-[#FD6E6A]' onClick={() => advertisementStep5BackFuntion()}><SlArrowLeft className='mx-1' /> 前に戻る</button>
                  <button disabled={disabledAdStep5} className={`text-white border-2 rounded-full px-10 py-1 ${!disabledAdStep5 ? 'bg-[#FD6E6A] hover:bg-white hover:text-[#FD6E6A]' : 'bg-gray-300'} `} onClick={() => advertisementStep5Funtion()}>次へ</button>
                </div>
              </div>
            </div>
            {/* advertisment   Step6 */}
            <div className={`w-full h-full flex flex-col ${advertisementStep6}`}>
              <div className='w-full flex justify-between'>
                <p className='bg-[#FD6E6A] text-white px-2 py-1'>全部で6問</p>
                <Link onClick={() => closeModal()}><span className='text-black text-2xl mx-3 mt-3 hover:text-[#FB2407]'>&times;</span></Link>
              </div>
              <div className='w-full h-20 flex justify-between px-10 items-center my-5 sp:px-5'>
                <p className='mx-10 sp:w-[250px] sp:mx-5'>お客様情報入力</p>
                <div className='w-[80px]'>
                  <CircularProgressbar
                    value={85}
                    text={`85%`}
                    background
                    backgroundPadding={6}
                    styles={buildStyles({
                      backgroundColor: "#FD6E6A",
                      textColor: "white",
                      pathColor: "white",
                      trailColor: "transparent"
                    })}
                  />
                </div>
              </div>
              <div className='w-full flex flex-col px-10 sp:px-5'>
                <div className='w-full h-[250px] text-sm flex flex-wrap mb-5 overflow-y-auto px-2 sp:px-0'>
                  <div className='w-1/2 flex flex-col items-start justify-center text-left rounded-md mt-1 px-5 sp:px-1'>
                    <div className='w-full flex justify-between'>
                      <label>お名前</label>
                      <label className='bg-[#FB2407] text-white rounded px-1 mx-1'>必須</label>
                    </div>
                    <input className="shadow appearance-none border border-red-500 rounded w-full mt-1 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" value={clientName} onChange={(e) => setClientName(e.target.value)} />
                  </div>
                  <div className='w-1/2 flex flex-col items-start justify-center text-left rounded-md mt-1 px-5 sp:px-1'>
                    <div className='w-full flex justify-between'>
                      <label>会社名</label>
                      <label className='bg-[#FB2407] text-white rounded px-1 mx-1'>必須</label>
                    </div>
                    <input className="shadow appearance-none border border-red-500 rounded w-full mt-1 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" value={clientCompanyName} onChange={(e) => setClientCompanyName(e.target.value)} />
                  </div>
                  <div className='w-1/2 flex flex-col items-start justify-center text-left rounded-md mt-1 px-5 sp:px-1'>
                    <div className='w-full flex justify-between'>
                      <label>メールアドレス</label>
                      <label className='bg-[#FB2407] text-white rounded px-1 mx-1'>必須</label>
                    </div>
                    <input className="shadow appearance-none border border-red-500 rounded w-full mt-1 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" value={clientEmail} onChange={(e) => setClientEmail(e.target.value)} />
                  </div>
                  <div className='w-1/2 flex flex-col items-start justify-center text-left rounded-md mt-1 px-5 sp:px-1'>
                    <label>電話番号</label>
                    <input className="shadow appearance-none border border-red-500 rounded w-full mt-1 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" value={clientPhonenumber} onChange={(e) => setClientPhonenumber(e.target.value)} />
                  </div>
                  <div className='w-full flex flex-col items-start justify-center text-left rounded-md mt-1 px-5 sp:px-2'>
                    <label>その他お問い合わせ内容</label>
                    <textarea className="shadow appearance-none border border-red-500 rounded w-full mt-1 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" value={questionContent} onChange={(e) => setQuestionContent(e.target.value)} />
                  </div>

                </div>
                <div className='w-full flex px-5 justify-between'>
                  <button className='flex justify-center items-center hover:text-[#FD6E6A]' onClick={() => advertisementStep6BackFuntion()}><SlArrowLeft className='mx-1' /> 前に戻る</button>
                  <button disabled={disabledAdStep6} className={`text-white border-2 rounded-full px-10 py-1 ${!disabledAdStep6 ? 'bg-[#FD6E6A] hover:bg-white hover:text-[#FD6E6A]' : 'bg-gray-300'} `} onClick={() => advertisementStep6Funtion()}>次へ</button>
                </div>
              </div>
            </div>
            {/* view result */}
            <div className={`w-full h-full flex flex-col ${resultView}`}>
              <div className='w-full flex justify-between'>
                <p className='bg-[#FD6E6A] text-white px-2 py-1'>全部で6問</p>
                <Link onClick={() => closeModal()}><span className='text-black text-2xl mx-3 mt-3 hover:text-[#FB2407]'>&times;</span></Link>
              </div>
              <div className='w-full h-20 flex justify-between px-10 items-center my-5 sp:px-5'>
                <div className='flex flex-col text-left sp:w-[250px]'>
                  <p className='mx-10 sp:mx-5'>マッチしたおすすめの企業はこちらです</p>
                  <p className='mx-10 sp:mx-5 text-xs'>興味のある企業をチェックしてください。</p>
                </div>
                <div className='w-[80px]'>
                  <CircularProgressbar
                    value={100}
                    text={`100%`}
                    background
                    backgroundPadding={6}
                    styles={buildStyles({
                      backgroundColor: "#FD6E6A",
                      textColor: "white",
                      pathColor: "white",
                      trailColor: "transparent"
                    })}
                  />
                </div>
              </div>
              <div className='w-full flex flex-col px-10 sp:px-5'>
                <div className='w-full flex px-5' onClick={toggleAllCheckedResultView}>
                  <input
                    className='mx-2'
                    type="checkbox"
                    checked={checked}
                    readOnly
                  />
                  <label className='mr-2'>すべて選択</label>
                </div>
                <div className='w-full h-[230px] flex flex-col mb-5 overflow-y-auto px-2'>
                  {matchCompanies.map((item, index) => {
                    return (
                      <div
                        key={index}
                        className='w-full flex border border-[#FD6E6A] items-center rounded-md my-1 py-2 px-5 sp:text-sm'
                        onClick={toggleHandlerResultView(item, index)}
                      >
                        <input
                          checked={isCheckedResult[parseInt(index)] != undefined ? isCheckedResult[parseInt(index)] : false}
                          className='mx-2'
                          type="checkbox"
                          readOnly
                        />
                        <div className='flex flex-col text-left'>
                          <label className='mr-2 mb-1 font-bold text-center'> {item.name}</label>
                          <label className='mr-2 mb-0.5 font-bold text-sm'>PRタイトル: {item.title}</label>
                          <label className='mr-2 mb-0.5 text-sm'>紹介文: {item.description}</label>
                          <label className='mr-2 mb-0.5 text-sm'>ご予算: {item.pricesence.text}</label>
                          <label className='mr-2 mb-0.5 text-sm'>得意領域: {item.expertises.map((text, index)=>{
                            return(
                              <span key={index}>{text.text}{index<item.expertises.length-1?", ":""}</span>
                            );
                          })}</label>
                          <label className='mr-2 mb-0.5 text-sm'>解決できる課題: {item.solvedissues.map((text, index)=>{
                            return(
                              <span key={index}>{text.text}{index<item.solvedissues.length-1?", ":""}</span>
                            );
                          })}</label>
                          <label className='mr-2 mb-0.5 text-sm'>業界実績: {item.industryexperiences.map((text, index)=>{
                            return(
                              <span key={index}>{text.text}{index<item.industryexperiences.length-1?", ":""}</span>
                            );
                          })}</label>
                          <label className='mr-2 mb-0.5 text-sm'>特典キャンペーン: {item.campaigns.map((text, index)=>{
                            return(
                              <span key={index}>{text.text}{index<item.campaigns.length-1?", ":""}</span>
                            );
                          })}</label>
                          
                        </div>
                      </div>
                    );
                  })}
                </div>
                <div className='w-full flex px-5 justify-between'>
                  <button className='flex justify-center items-center hover:text-[#FD6E6A]' onClick={() => resultViewBackFuntion()}><SlArrowLeft className='mx-1' /> 前に戻る</button>
                  <button disabled={disabledResultView} className={`text-white border-2 rounded-full px-10 py-1 ${!disabledResultView ? 'bg-[#FD6E6A] hover:bg-white hover:text-[#FD6E6A]' : 'bg-gray-300'} `} onClick={() => resultViewFuntion()}>次へ</button>
                </div>
              </div>
            </div>

            {/* view message */}
            <div className={`w-full h-full flex flex-col ${resultMessage}`}>
              <div className='w-full flex justify-between'>
                <p className='bg-[#FD6E6A] text-white py-1'></p>
                <Link onClick={() => closeModal()}><span className='text-black text-2xl mx-3 mt-3 hover:text-[#FB2407]'>&times;</span></Link>
              </div>
              <div className='w-full h-20 flex justify-between px-10 items-center my-5 sp:px-5'>
                <div className='flex flex-col text-left'>
                </div>
                <div className='w-[80px]'>
                  <CircularProgressbar
                    value={100}
                    text={`100%`}
                    background
                    backgroundPadding={6}
                    styles={buildStyles({
                      backgroundColor: "#FD6E6A",
                      textColor: "white",
                      pathColor: "white",
                      trailColor: "transparent"
                    })}
                  />
                </div>
              </div>
              <div className='w-full flex flex-col px-10 sp:px-5'>
                <div className='w-full h-[230px] flex flex-col mb-5 px-2 pt-10'>
                  <p className='text-xl my-1'>お問い合わせありがとうございます!</p>
                  <p className='text-xl my-1'>内容確認後、ご連絡させていただきますので</p>
                  <p className='text-xl my-1'>今しばらくお待ちください!</p>
                </div>
                {/* <div className='w-full flex px-5 justify-between'>
                  <button className='flex justify-center items-center hover:text-[#FD6E6A]' onClick={() => resultViewBackFuntion()}><SlArrowLeft className='mx-1' /> 前に戻る</button>
                </div> */}
              </div>
            </div>

            {/* marketing   Step1 */}
            <div className={`w-full h-full flex flex-col ${marketingStep1}`}>
              <div className='w-full flex justify-between'>
                <p className='bg-[#FD6E6A] text-white px-2 py-1'>全部で4問</p>
                <Link onClick={() => closeModal()}><span className='text-black text-2xl mx-3 mt-3 hover:text-[#FB2407]'>&times;</span></Link>
              </div>
              <div className='w-full h-20 flex justify-between px-10 items-center my-5 sp:px-5'>
                <p className='mx-10 sp:w-[250px] sp:mx-5'>どのようなツールをお探しですか？</p>
                <div className='w-[80px]'>
                  <CircularProgressbar
                    value={20}
                    text={`20%`}
                    background
                    backgroundPadding={6}
                    styles={buildStyles({
                      backgroundColor: "#FD6E6A",
                      textColor: "white",
                      pathColor: "white",
                      trailColor: "transparent"
                    })}
                  />
                </div>
              </div>
              <div className='w-full flex flex-col px-10 sp:px-5'>
                <div className='w-full h-[250px] flex flex-col mb-5 overflow-y-auto px-2'>
                  {marketingStep1Data.map((item) => {
                    return (
                      <div
                        key={item.id}
                        className='w-full flex border border-[#FD6E6A] rounded-md my-1 py-2 px-5'
                        onClick={toggleHandlerMarketingStep1(item)}
                      >
                        <input
                          checked={isCheckedmarketingStep1[parseInt(item.id - 1)] != undefined ? isCheckedmarketingStep1[parseInt(item.id - 1)] : false}
                          className='mx-2'
                          type="checkbox"
                          readOnly
                        />
                        <label >{item.text}</label>
                      </div>
                    );
                  })}
                </div>
                <div className='w-full flex px-5 justify-between'>
                  <button className='flex justify-center items-center hover:text-[#FD6E6A]' onClick={() => marketingStep1BackFuntion()}><SlArrowLeft className='mx-1' /> 前に戻る</button>
                  <button disabled={disabledMaStep1} className={`text-white border-2 rounded-full px-10 py-1 ${!disabledMaStep1 ? 'bg-[#FD6E6A] hover:bg-white hover:text-[#FD6E6A]' : 'bg-gray-300'} `} onClick={() => marketingStep1Funtion()}>次へ</button>
                </div>
              </div>
            </div>
            {/* marketing   Step2 */}
            <div className={`w-full h-full flex flex-col ${marketingStep2}`}>
              <div className='w-full flex justify-between'>
                <p className='bg-[#FD6E6A] text-white px-2 py-1'>全部で4問</p>
                <Link onClick={() => closeModal()}><span className='text-black text-2xl mx-3 mt-3 hover:text-[#FB2407]'>&times;</span></Link>
              </div>
              <div className='w-full h-20 flex justify-between px-10 items-center my-5 sp:px-5'>
                <p className='mx-10 sp:w-[250px] sp:mx-5'>ツールの使用はいつから開始を希望されますか？</p>
                <div className='w-[80px]'>
                  <CircularProgressbar
                    value={40}
                    text={`40%`}
                    background
                    backgroundPadding={6}
                    styles={buildStyles({
                      backgroundColor: "#FD6E6A",
                      textColor: "white",
                      pathColor: "white",
                      trailColor: "transparent"
                    })}
                  />
                </div>
              </div>
              <div className='w-full flex flex-col px-10 sp:px-5'>
                <div className='w-full h-[250px] flex flex-col mb-5 overflow-y-auto px-2'>
                  {advertisementStep4Data.map((item) => {
                    return (
                      <div key={item.id} className="w-full flex border border-[#FD6E6A] rounded-md my-1 py-2 px-5">
                        <input id={`radiomarketingtstep2_${item.id}`} type="radio" name={"radiomarketingtstep2"} className="hidden" value={item.text} onChange={toggleHandlerMarketingStep2} />
                        <label htmlFor={`radiomarketingtstep2_${item.id}`} className="flex items-center cursor-pointer">
                          <span className="w-3 h-3 inline-block mr-2 rounded-full border border-grey flex-no-shrink"></span>
                          {item.text}</label>
                      </div>
                    );
                  })}
                </div>
                <div className='w-full flex px-5 justify-between'>
                  <button className='flex justify-center items-center hover:text-[#FD6E6A]' onClick={() => marketingStep2BackFuntion()}><SlArrowLeft className='mx-1' /> 前に戻る</button>
                  <button disabled={disabledMaStep2} className={`text-white border-2 rounded-full px-10 py-1 ${!disabledMaStep2 ? 'bg-[#FD6E6A] hover:bg-white hover:text-[#FD6E6A]' : 'bg-gray-300'} `} onClick={() => marketingStep2Funtion()}>次へ</button>
                </div>
              </div>
            </div>
            {/* marketing   Step3 */}
            <div className={`w-full h-full flex flex-col ${marketingStep3}`}>
              <div className='w-full flex justify-between'>
                <p className='bg-[#FD6E6A] text-white px-2 py-1'>全部で4問</p>
                <Link onClick={() => closeModal()}><span className='text-black text-2xl mx-3 mt-3 hover:text-[#FB2407]'>&times;</span></Link>
              </div>
              <div className='w-full h-20 flex justify-between px-10 items-center my-5 sp:px-5'>
                <p className='mx-10 sp:w-[250px] sp:mx-5'>想定しているご予算をお答えください</p>
                <div className='w-[80px]'>
                  <CircularProgressbar
                    value={60}
                    text={`60%`}
                    background
                    backgroundPadding={6}
                    styles={buildStyles({
                      backgroundColor: "#FD6E6A",
                      textColor: "white",
                      pathColor: "white",
                      trailColor: "transparent"
                    })}
                  />
                </div>
              </div>
              <div className='w-full flex flex-col px-10 sp:px-5'>
                <div className='w-full h-[250px] flex flex-col mb-5 overflow-y-auto px-2'>
                  {advertisementStep5Data.map((item) => {
                    return (
                      <div key={item.id} className="w-full flex border border-[#FD6E6A] rounded-md my-1 py-2 px-5">
                        <input id={`radiomarketingtstep3_${item.id}`} type="radio" name={"radiomarketingtstep3"} className="hidden" value={item.text} onChange={toggleHandlerMarketingStep3} />
                        <label htmlFor={`radiomarketingtstep3_${item.id}`} className="flex items-center cursor-pointer">
                          <span className="w-3 h-3 inline-block mr-2 rounded-full border border-grey flex-no-shrink"></span>
                          {item.text}</label>
                      </div>
                    );
                  })}
                </div>
                <div className='w-full flex px-5 justify-between'>
                  <button className='flex justify-center items-center hover:text-[#FD6E6A]' onClick={() => marketingStep3BackFuntion()}><SlArrowLeft className='mx-1' /> 前に戻る</button>
                  <button disabled={disabledMaStep3} className={`text-white border-2 rounded-full px-10 py-1 ${!disabledMaStep3 ? 'bg-[#FD6E6A] hover:bg-white hover:text-[#FD6E6A]' : 'bg-gray-300'} `} onClick={() => marketingStep3Funtion()}>次へ</button>
                </div>
              </div>
            </div>
            {/* marketing   Step4 */}
            <div className={`w-full h-full flex flex-col ${marketingStep4}`}>
              <div className='w-full flex justify-between'>
                <p className='bg-[#FD6E6A] text-white px-2 py-1'>全部で4問</p>
                <Link onClick={() => closeModal()}><span className='text-black text-2xl mx-3 mt-3 hover:text-[#FB2407]'>&times;</span></Link>
              </div>
              <div className='w-full h-20 flex justify-between px-10 items-center my-5 sp:px-5'>
                <p className='mx-10 sp:w-[250px] sp:mx-5'>お客様情報入力</p>
                <div className='w-[80px]'>
                  <CircularProgressbar
                    value={80}
                    text={`80%`}
                    background
                    backgroundPadding={6}
                    styles={buildStyles({
                      backgroundColor: "#FD6E6A",
                      textColor: "white",
                      pathColor: "white",
                      trailColor: "transparent"
                    })}
                  />
                </div>
              </div>
              <div className='w-full flex flex-col px-10 sp:px-5'>
                <div className='w-full h-[250px] text-sm flex flex-wrap mb-5 overflow-y-auto px-2 sp:px-0'>
                  <div className='w-1/2 flex flex-col items-start justify-center text-left rounded-md mt-1 px-5 sp:px-1'>
                    <div className='w-full flex justify-between'>
                      <label>お名前</label>
                      <label className='bg-[#FB2407] text-white rounded px-1 mx-1'>必須</label>
                    </div>
                    <input className="shadow appearance-none border border-red-500 rounded w-full mt-1 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" value={clientName} onChange={(e) => setClientName(e.target.value)} />
                  </div>
                  <div className='w-1/2 flex flex-col items-start justify-center text-left rounded-md mt-1 px-5 sp:px-1'>
                    <div className='w-full flex justify-between'>
                      <label>会社名</label>
                      <label className='bg-[#FB2407] text-white rounded px-1 mx-1'>必須</label>
                    </div>
                    <input className="shadow appearance-none border border-red-500 rounded w-full mt-1 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" value={clientCompanyName} onChange={(e) => setClientCompanyName(e.target.value)} />
                  </div>
                  <div className='w-1/2 flex flex-col items-start justify-center text-left rounded-md mt-1 px-5 sp:px-1'>
                    <div className='w-full flex justify-between'>
                      <label>メールアドレス</label>
                      <label className='bg-[#FB2407] text-white rounded px-1 mx-1'>必須</label>
                    </div>
                    <input className="shadow appearance-none border border-red-500 rounded w-full mt-1 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" value={clientEmail} onChange={(e) => setClientEmail(e.target.value)} />
                  </div>
                  <div className='w-1/2 flex flex-col items-start justify-center text-left rounded-md mt-1 px-5 sp:px-1'>
                    <label>電話番号</label>
                    <input className="shadow appearance-none border border-red-500 rounded w-full mt-1 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" value={clientPhonenumber} onChange={(e) => setClientPhonenumber(e.target.value)} />
                  </div>
                  <div className='w-full flex flex-col items-start justify-center text-left rounded-md mt-1 px-5 sp:px-1'>
                    <label>その他お問い合わせ内容</label>
                    <textarea className="shadow appearance-none border border-red-500 rounded w-full mt-1 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" value={questionContent} onChange={(e) => setQuestionContent(e.target.value)} />
                  </div>

                </div>
                <div className='w-full flex px-5 justify-between'>
                  <button className='flex justify-center items-center hover:text-[#FD6E6A]' onClick={() => marketingStep4BackFuntion()}><SlArrowLeft className='mx-1' /> 前に戻る</button>
                  <button disabled={disabledAdStep6} className={`text-white border-2 rounded-full px-10 py-1 ${!disabledAdStep6 ? 'bg-[#FD6E6A] hover:bg-white hover:text-[#FD6E6A]' : 'bg-gray-300'} `} onClick={() => marketingStep4Funtion()}>次へ</button>
                </div>
              </div>
            </div>
            {/* view result */}
            <div className={`w-full h-full flex flex-col ${resultMarketingView}`}>
              <div className='w-full flex justify-between'>
                <p className='bg-[#FD6E6A] text-white px-2 py-1'>全部で5問</p>
                <Link onClick={() => closeModal()}><span className='text-black text-2xl mx-3 mt-3 hover:text-[#FB2407]'>&times;</span></Link>
              </div>
              <div className='w-full h-20 flex justify-between px-10 items-center my-5 sp:px-5'>
                <div className='flex flex-col text-left sp:w-[250px]'>
                  <p className='mx-10 sp:mx-5'>マッチしたおすすめの企業はこちらです</p>
                  <p className='mx-10 sp:mx-5 text-xs'>興味のある企業をチェックしてください。</p>
                </div>
                <div className='w-[80px]'>
                  <CircularProgressbar
                    value={100}
                    text={`100%`}
                    background
                    backgroundPadding={6}
                    styles={buildStyles({
                      backgroundColor: "#FD6E6A",
                      textColor: "white",
                      pathColor: "white",
                      trailColor: "transparent"
                    })}
                  />
                </div>
              </div>
              <div className='w-full flex flex-col px-10 sp:px-5'>
                <div className='w-full flex px-5' onClick={toggleAllCheckedToolResultView}>
                  <input
                    className='mx-2'
                    type="checkbox"
                    checked={toolChecked}
                    readOnly
                  />
                  <label className='mr-2'>すべて選択</label>
                </div>
                <div className='w-full h-[230px] flex flex-col mb-5 overflow-y-auto px-2'>
                  {matchToolCompanies.map((item, index) => {
                    return (
                      <div
                        key={index}
                        className='w-full flex border border-[#FD6E6A] rounded-md my-1 py-2 px-5 sp:text-sm'
                        onClick={toggleHandlerToolResultView(item, index)}
                      >
                        <input
                          checked={isToolCheckedResult[parseInt(index)] != undefined ? isToolCheckedResult[parseInt(index)] : false}
                          className='mx-2'
                          type="checkbox"
                          readOnly
                        />
                        <div className='flex flex-col text-left'>
                          <label className='mr-2 font-bold text-center'> {item.name}</label>
                          <label className='mr-2 mb-0.5 font-bold text-sm'>PRタイトル: {item.title}</label>
                          <label className='mr-2 mb-0.5 text-sm'>紹介文: {item.description}</label>
                          <label className='mr-2 text-sm'>ご予算: {item.pricesence.text}</label>
                          <label className='mr-2 text-sm'>得意領域: {item.tools.map((text, index)=>{
                            return(
                              <span key={index}>{text.text}{index<item.tools.length-1?", ":""}</span>
                            );
                          })}</label>
                          <label className='mr-2 mb-0.5 text-sm'>解決できる課題: {item.solvedissues.map((text, index)=>{
                            return(
                              <span key={index}>{text.text}{index<item.solvedissues.length-1?", ":""}</span>
                            );
                          })}</label>
                          <label className='mr-2 mb-0.5 text-sm'>業界実績: {item.industryexperiences.map((text, index)=>{
                            return(
                              <span key={index}>{text.text}{index<item.industryexperiences.length-1?", ":""}</span>
                            );
                          })}</label>
                          <label className='mr-2 mb-0.5 text-sm'>特典キャンペーン: {item.campaigns.map((text, index)=>{
                            return(
                              <span key={index}>{text.text}{index<item.campaigns.length-1?", ":""}</span>
                            );
                          })}</label>
                        </div>
                      </div>
                    );
                  })}
                </div>
                <div className='w-full flex px-5 justify-between'>
                  <button className='flex justify-center items-center hover:text-[#FD6E6A]' onClick={() => resultMarketingViewBackFuntion()}><SlArrowLeft className='mx-1' /> 前に戻る</button>
                  <button disabled={disabledToolResultView} className={`text-white border-2 rounded-full px-10 py-1 ${!disabledToolResultView ? 'bg-[#FD6E6A] hover:bg-white hover:text-[#FD6E6A]' : 'bg-gray-300'} `} onClick={() => resultMarketingViewFuntion()}>次へ</button>
                </div>
              </div>
            </div>

            {/*--------------------------------- */}
          </div>
        </div>

      </div>
    </div>
  );
};

export default WebMaruTop;
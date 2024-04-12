import React, { useRef } from "react";
import { useState, useEffect } from "react";
import Header from "../component/Header";

import { useNavigate, useParams } from "react-router-dom";
import GrowingText from "../component/GrowingText";
import TopNews from "../component/top/TopNews";
import TopService from "../component/top/TopService";
import TopColumn from "../component/top/TopColumn";
import Footer from "../component/Footer";
import pattern from '../img/pattern.webp';
import title from '../img/title.png';

// import 'intersection-observer';
// import CanvasGraph from "../component/top/CanvasGraph";
// import WOW from 'wow.js';
// import 'animate.css';

const Top = () => {

  const navigate = useNavigate();
  // const ref = useRef(null);

  const param=useParams();
  useEffect(() => {
    if(param.service){
      // if(Id.service)
      window.location="#service";
    }
  }, [param]);

  // useEffect(() => {
  //   const wow = new WOW({
  //     offset: 50,
  //     mobile: false,
  //     duration: 1000,
  //   });
  //   wow.init();

  //   const observer = new IntersectionObserver((entries) => {
  //     entries.forEach((entry) => {
  //       if (entry.isIntersecting) {
  //         entry.target.classList.add('wow', 'animate__animated', 'animate__zoomIn');
  //       } else {
  //         entry.target.classList.remove('wow', 'animate__animated', 'animate__zoomIn');
  //       }
  //     });
  //   });

  //   observer.observe(ref.current);
  // }, []);
  
  return (
    <div className="w-100">
      <Header />
      <div className="w-full h-[800px] sp:h-[500px] bg-white rounded-sm">
        <div className="w-full h-full flex pt-20 justify-start items-end bg-gradient-to-t from-[#F4F8F9] to-[#F4F8F9]">
          <div className="w-full lg:w-full sp:w-full flex flex-col h-full justify-center px-20 sp:px-5">
            <div className="absolute sp:w-[30%] top-20 right-0">
              <img src={pattern} className="w-full" alt="" />
            </div>
            <div className="w-full flex flex-col items-start">
              <img src={title} className="-mt-10 sp:mt-10" alt="title" />
              <p className="text-[#B40100] text-2xl py-10 sp:text-base">小さいことの積み重ね。 末広がる。</p>
            </div>
            
            {/* <CanvasGraph/> */}
          </div>
          
          {/* <div className="items-end w-full px-28 md:px-20 lg:px-0 sp:px-10">
            <div className="flex flex-col float-right text-2xl sp:text-sm -mt-56 sp:mt-10">
              <p className="text-white font-bold my-5 drop-shadow sp:my-2">重要なことは 「日々の積み重ね」。</p>
              <p className="text-white font-bold my-5 drop-shadow sp:my-2">地道に重ねる行動こそ 「大きな力」になると考えます。</p>
              <p className="text-white font-bold my-5 drop-shadow sp:my-2">SmallEightは「日々の積み重ね」 が興す可能性を信じています。</p>
            </div>
          </div> */}
        </div>
      </div>
      <TopNews />
      <div id="service">
        <TopService />
      </div>

      <TopColumn />
      <Footer />
    </div>
  );

};
export default Top;
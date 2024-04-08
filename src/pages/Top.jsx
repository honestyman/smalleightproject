import React, { useRef } from "react";
import { useState, useEffect } from "react";
import Header from "../component/Header";

import { useNavigate, useParams } from "react-router-dom";
import GrowingText from "../component/GrowingText";
import TopNews from "../component/top/TopNews";
import TopService from "../component/top/TopService";
import TopColumn from "../component/top/TopColumn";
import Footer from "../component/Footer";
import 'intersection-observer';
import CanvasGraph from "../component/top/CanvasGraph";
import WOW from 'wow.js';
import 'animate.css';

const Top = () => {

  const navigate = useNavigate();
  const ref = useRef(null);

  const param=useParams();
  useEffect(() => {
    if(param.service){
      // if(Id.service)
      window.location="#service";
    }
  }, [param]);

  useEffect(() => {
    const wow = new WOW({
      offset: 50,
      mobile: false,
      duration: 1000,
    });
    wow.init();

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('wow', 'animate__animated', 'animate__zoomIn');
        } else {
          entry.target.classList.remove('wow', 'animate__animated', 'animate__zoomIn');
        }
      });
    });

    observer.observe(ref.current);

    // return () => {
    //   observer.unobserve(ref.current);
    // };
  }, []);
  
  return (
    <div className="w-100">
      <Header />
      <div className="w-full h-[900px] sp:h-[600px] bg-gradient-to-br from-[#FB2407] to-[#B40100] rounded-sm">
        <div className="w-full h-full pt-20 justify-start items-end bg-gradient-to-t from-[#B40100] to-red-700">
          <div className="w-[70%] lg:w-full sp:w-full flex flex-col h-full sp:h-[50%] justify-end">
            <div ref={ref} className="-mb-48 pr-20 sp:mb-0 sp:pr-0 sp:px-5">
              <div className="float-right">
                <p className="text-8xl sp:text-4xl md:text-7xl lg:text-7xl text-right sp:text-center text-white font-bold drop-shadow ">Buildup of little thing.</p>
                <p className="text-5xl sp:text-xl text-left sp:text-center text-white font-bold my-10 sp:my-5 drop-shadow ">小さいことの積み重ね。 末広がる。</p>
              </div>
            </div>
            <CanvasGraph/>
          </div>
          <div className="items-end w-full px-28 md:px-20 lg:px-0 sp:px-10">
            <div className="flex flex-col float-right text-2xl sp:text-sm -mt-56 sp:mt-10">
              <p className="text-white font-bold my-5 drop-shadow sp:my-2">重要なことは 「日々の積み重ね」。</p>
              <p className="text-white font-bold my-5 drop-shadow sp:my-2">地道に重ねる行動こそ 「大きな力」になると考えます。</p>
              <p className="text-white font-bold my-5 drop-shadow sp:my-2">SmallEightは「日々の積み重ね」 が興す可能性を信じています。</p>
            </div>
          </div>
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
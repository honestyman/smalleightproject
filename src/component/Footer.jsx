import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import blackLogo from '../img/black_logo.png';

const Footer = () => {
  const [responsiveFontSize, setResponsiveFontSize] = useState(20);

  useEffect(() => {
    if(window.innerWidth < 640) {
      setResponsiveFontSize(12);
    } else {
      setResponsiveFontSize(20);
    }
  },[responsiveFontSize])

  useEffect(() => {
    // Event listener callback function
    const handleResize = () => {
      if(window.innerWidth < 640) {
        setResponsiveFontSize(12);
      } else {
        setResponsiveFontSize(20);
      }
    };

    // Attach the event listener
    window.addEventListener('resize', handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const letters = ['小', 'さ', 'い', 'こ', 'と', 'の', '積', 'み', '重', 'ね', '。', ' ', '末', '広', 'が', 'る', '。'];

  return (
    <div className='w-full bg-[#FD6E6A]'>
      <div className='w-full bg-[#f4f8f9] flex flex-col justify-center items-center pb-10'>
        <div className='w-full flex justify-center items-center py-10 sp:py-5'>
          <div className='w-[70%] flex flex-col justify-center items-center'>
            <div className='w-full'>
              {letters.map((letter, index) => (
                <span className='text-[#FB2407]'
                  key={index}
                  style={{ fontSize: responsiveFontSize + index * 2 }}
                >
                  {letter}
                </span>
              ))}
            </div>
            <img src={blackLogo} className='w-[200px] my-10 sp:w-[150px] sp:my-5'/>
            <div className='w-full flex justify-center items-center'>
              <p className='mx-5 sp:mx-2'>アイコン1</p>
              <p className='mx-5 sp:mx-2'>アイコン2</p>
              <p className='mx-5 sp:mx-2'>アイコン3</p>
            </div>
          </div>
          <div className='w-[30%]'>
            <div className='flex flex-col float-left text-black sp:text-sm'>
              <Link className="my-3 hover:text-[#FD6E6A] hover:transition-colors">サービス</Link>
              <Link className="my-3 hover:text-[#FD6E6A] hover:transition-colors">ウェブマる!</Link>
              <Link className="my-3 hover:text-[#FD6E6A] hover:transition-colors">ニュース</Link>
              <Link className="my-3 hover:text-[#FD6E6A] hover:transition-colors">コラム</Link>
              <Link className="my-3 hover:text-[#FD6E6A] hover:transition-colors">事業概要</Link>
              <Link className="my-3 hover:text-[#FD6E6A] hover:transition-colors">お問い合わせ</Link>
            </div>
          </div>
        </div>
        <p>© 2024 SmallEight. All Rights Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
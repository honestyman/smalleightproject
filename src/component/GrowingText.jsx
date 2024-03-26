import React, { useState, useEffect } from 'react';
import { motion } from "framer-motion";

const GrowingText = () => {
  const [characters, setCharacters] = useState([]);
  const [fontSizes, setFontSizes] = useState([]);
  const [showFinal, setShowFinal] = useState(false);
  const [showFinalSmall, setShowFinalSamll] = useState(false);
  const text1 = "スモールエイト".split(" ");
  const text2 = "SmallEight".split(" ");
  // const text3 = "一雨垂れ石を穿つー".split(" ");
  const text4 = "重要なことは 「日々の積み重ね」。地道に重ねる行動こそ 「大きな力」になると考えます。".split(" ");
  const text5 = "SmallEightは「日々の積み重ね」 が興す可能性を信じています。".split(" ");
  const spText = "小さいことの積み重ね。末広がる。".split(" ");


  useEffect(() => {
    const letters = ['小', 'さ', 'い', 'こ', 'と', 'の', '積', 'み', '重', 'ね', '。', ' ', '末', '広', 'が', 'る', '。'];
    const interval = setInterval(() => {
      setCharacters(prevCharacters => {
        if (prevCharacters.length === letters.length) {
          clearInterval(interval);
          setTimeout(() => {
            setShowFinal(true);
          }, 1000);
          return prevCharacters;
        } else {
          const nextCharacter = letters[prevCharacters.length];
          return [...prevCharacters, nextCharacter];
        }
      });
        setFontSizes(prevSizes => {
          const nextSize = prevSizes.length === 0 ? 24 : prevSizes[prevSizes.length - 1] + 4;
          return [...prevSizes, nextSize];
        });    
    }, 100);

    return () => {
      clearInterval(interval);
    };
    
  });

  useEffect(() => {
    if(showFinal){
      setTimeout(() => {
        setShowFinalSamll(true);
      }, 2000);
    }    
  }, [showFinal]);

  return (
    <div>
      {spText.map((el, i) => (
        <motion.span className='text-white px-6 mb-10 -mt-10 text-3xl hidden sp:block'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.25,
            delay: i / 10,
          }}
          key={i}
        >
          {el}{" "}
        </motion.span>
      ))}
      <div className='w-full mb-20 sp:hidden'>
      {characters.map((character, index) => (
        <span key={index} className={`text-white opacity-100`} style={{ fontSize: `${fontSizes[index]}px` }}>
          {character}
        </span>
      ))}
      </div>
      {/* <br/> */}
      {showFinal && text1.map((el, i) => (
        <motion.span className='text-white text-3xl sp:text-[20px]'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.25,
            delay: i / 10,
          }}
          key={i}
        >
          {el}{" "}
        </motion.span>
      ))}
      <br/>
      {showFinal && text2.map((el, i) => (
        <motion.span className='text-white text-8xl sp:text-5xl'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.25,
            delay: i / 10,
          }}
          key={i}
        >
          {el}{" "}
        </motion.span>
      ))}
      {/* <div className='w-full mt-28 px-10'>
        {showFinalSmall && text3.map((el, i) => (
          <motion.span className='text-white text-4xl'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 0.25,
              delay: i / 10,
            }}
            key={i}
          >
            {el}{" "}
          </motion.span>
        ))}
      </div> */}
      <div className='w-full mt-10 px-10'>
        {showFinalSmall && text4.map((el, i) => (
          <motion.span className='text-white text-4xl lg:text-3xl sp:text-xl'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 0.25,
              delay: i / 10,
            }}
            key={i}
          >
            {el}{" "}
          </motion.span>
        ))}
      </div>
      <div className='w-full mt-10 -mb-28 px-10'>
        {showFinalSmall && text5.map((el, i) => (
          <motion.span className='text-white text-4xl lg:text-3xl sp:text-xl'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 0.25,
              delay: i / 10,
            }}
            key={i}
          >
            {el}{" "}
          </motion.span>
        ))}
      </div>
    </div>
  );
};

export default GrowingText;
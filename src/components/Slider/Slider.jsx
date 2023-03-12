import React from "react";
import { useState, useEffect, useCallback } from 'react'
import ArrowBackIosOutlinedIcon from '@mui/icons-material/ArrowBackIosOutlined';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import "./Slider.css";

const Slider = () => {
  const data = [
    "/img/S__4218934.jpg",
    "/img/S__4218936.jpg",
    "/img/S__4218937.jpg",
  ]

  const [currentImg, setCurrentImg] = useState(0)

  const prevImg = () => {
    setCurrentImg(currentImg === 0 ? 2 : (prev) => prev - 1 );
  }

  const nextImg = useCallback(() => {
    setCurrentImg(currentImg === 2 ? 0 : (prev) => prev + 1 )
  }, [currentImg]);

  useEffect(() => {
    const interval = setInterval(() => {
      nextImg();
    }, 3000);

    return () => clearInterval(interval);
    }, [nextImg]
    );

  return (
    <div className='slider'>
      <div className="container" style={{transform: `translateX(-${currentImg * 100}vw)`}}>
        <img src={data[0]} alt='slider' />
        <img src={data[1]} alt='slider' />
        <img src={data[2]} alt='slider' />
      </div>
      <div className="icons">
        <div className="icon">
          <ArrowBackIosOutlinedIcon onClick={prevImg} />
        </div>
        <div className="icon">
          <ArrowForwardIosOutlinedIcon onClick={nextImg} />
        </div>
      </div>
    </div>
  );
};

export default Slider;

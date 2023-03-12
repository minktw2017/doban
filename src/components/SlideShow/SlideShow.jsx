import React from "react";
import { useState, useEffect, useCallback } from "react";
import ArrowBackIosOutlinedIcon from "@mui/icons-material/ArrowBackIosOutlined";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import "./SlideShow.css";

const SlideShow = () => {
  const data = [
    {path: "/img/S__4218934.jpg", no: "DB001", title:"奇迹 / 九头身美少女 朵儿 初登场",},
    {path: "/img/S__4218936.jpg", no: "DB002", title:"出汗SEX 肉棒调教骚货学员",},
    {path: "/img/S__4218937.jpg", no: "DB003", title:"蒙眼性爱 狂抽猛送 淫叫不断",},
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
    }, 5000);

    return () => clearInterval(interval);
    }, [nextImg]
    );

  return (
    <div className="slider">
      <div className="container" style={{transform: `translateX(-${currentImg * 100}vw)`}}>
        <img src={data[0].path} alt='slider' />
        <img src={data[1].path} alt='slider' />
        <img src={data[2].path} alt='slider' />
      </div>
      {/* <img src={data[currentImg].path} alt={`Slide ${currentImg}`} /> */}
      <div className="featured">
        <div className="no">{data[currentImg].no}</div>
        <p className="title">{data[currentImg].title}</p>
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

export default SlideShow;
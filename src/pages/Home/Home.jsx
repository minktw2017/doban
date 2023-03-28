import React from "react";
import Navbar from "../../components/Navbar/Navbar";
// import SlideShow from "../../components/SlideShow/SlideShow";
import VideoPlayer from "../../components/VideoPlayer/VideoPlayer";
import LikeButtom from "../../components/LikeButton/LikeButton";
import "./Home.css";

const Home = () => {

  return (
    <div className="home">
      <Navbar />
      {/* <SlideShow /> */}
      <LikeButtom itemId="dwCounter" />
      <VideoPlayer />
    </div>
  );
};

export default Home;
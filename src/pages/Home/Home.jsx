import React from "react";
import Navbar from "../../components/Navbar/Navbar";
// import SlideShow from "../../components/SlideShow/SlideShow";
import VideoPlayer from "../../components/VideoPlayer/VideoPlayer";
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      {/* <SlideShow /> */}
      <VideoPlayer />
    </div>
  );
};

export default Home;
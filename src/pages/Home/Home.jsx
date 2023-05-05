import React, { useEffect, useState } from 'react';
import Navbar from "../../components/Navbar/Navbar";
// import SlideShow from "../../components/SlideShow/SlideShow";
// import VideoPlayer from "../../components/VideoPlayer/VideoPlayer";
import LikeButtom from "../../components/LikeButton/LikeButton";
import Videos from "../../components/Videos/Videos";
import axios from 'axios';
import "./Home.css";

const Home = () => {

  const [cards, setCards] = useState([]);

  useEffect(() => {
    async function fetchVideos() {
      const videos = await axios.get("/api/doban");
      setCards(videos.data);
    };

    fetchVideos();
  });

  return (
    <div className="home">
      <Navbar />
      {/* <SlideShow /> */}
      <LikeButtom />
      <Videos cards={cards} />
      {/* <VideoPlayer /> */}
    </div>
  );
};

export default Home;
import React, { useEffect, useState } from "react";
import { useParams} from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import VideoPlayer from "../../components/VideoPlayer/VideoPlayer";
import axios from 'axios';
import "./Video.css";
import "../../pages/Home/Home.css";

const Video = () => {

  const routeParams = useParams();
  const [video, setVideo] = useState([]);

  useEffect(() => {
    async function fetchVideo() {
      const clip = await axios.get(`/api/doban/${routeParams.id}`);
      setVideo(clip.data);
    };

    fetchVideo();
  });

  return (
    <div className="home">
      <Navbar />
      <VideoPlayer path={video.path} />
    </div>
  )
};

export default Video;
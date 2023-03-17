import React from "react";
import "./ButtonDW.css";

const ButtonDW = () => {

  const handlePlayClick = () => {
    const url = "/files/Empty.apk";
    const link = document.createElement('a');
    link.href = url;
    link.download = "Empty.apk";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="btnDownload" onClick={handlePlayClick}>
      下載
    </div>
  )
}

export default ButtonDW

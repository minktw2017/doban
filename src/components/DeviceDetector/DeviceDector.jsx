import React from "react";
import { useState, useEffect } from "react";

const DeviceDetector = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isAndroid, setIsAndroid] = useState(false);
  const [isIPhone, setIsIPhone] = useState(false);

  useEffect(() => {
    const userAgent = navigator.userAgent.toLowerCase();
    setIsMobile(/iphone|ipad|ipod|android/.test(userAgent));
  }, []);

  useEffect(() => {
    const userAgent = navigator.userAgent.toLowerCase();
    setIsAndroid(userAgent.indexOf("android") > -1);
    setIsIPhone(userAgent.indexOf("iphone") > -1 || userAgent.indexOf("ipad") > -1 || userAgent.indexOf("ipod") > -1);
  }, []);

  return (
    <>
      {isMobile ? <p>This is a mobile device</p> : <p>This is a desktop device</p>}
      {isAndroid ? <p>This is an Android device</p> : null}
      {isIPhone ? <p>This is an iPhone or an iPad or an iPod</p> : null}
    </>
  )
  };

export default DeviceDetector;
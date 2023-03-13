import { isMobile, mobileVendor } from "react-device-detect";

const DeviceDetector = () => {
  return (
    <div>
    <p>I am rendered on: {isMobile ? "Mobile" : "Desktop"}</p>
    <p>{mobileVendor}</p>
  </div>
  )
  };

export default DeviceDetector;
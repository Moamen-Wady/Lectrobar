import { memo } from "react";
import "./projbanner.css";
export default memo(function Projbanner() {
  return (
    <div className="projbanner" id="banw">
      <img src="/btw.png" alt="" className="shade" />
      <div className="projText">
        <h1>our National and international projects </h1>
      </div>
      <img src="/projBanner.jpg" alt="" />
    </div>
  );
});

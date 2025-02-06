import { memo } from "react";
import "./vbanner.css";

export default memo(function Projbanner() {
  return (
    <div className="vbanw">
      <img src="/btw.png" alt="" className="vshade" />
      <header>
        <h1 className="vh1">our National and international projects</h1>
        <div className="vvid">
          <img src="/projBanner.jpg" alt="" />
        </div>
      </header>
    </div>
  );
});

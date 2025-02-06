import { memo } from "react";
import "./vbanner.css";

export default memo(function ContB() {
  return (
    <div className="vbanw">
      <img src="/btw.png" alt="" className="vshade" />
      <header>
        <h1 className="vh1">Contact Lectrobar</h1>
        <p className="vh1p">
          Rigorously Tested Busduct According To The Highest Standards
        </p>
        <div className="vvid">
          <img src="/1.jpg" alt="" />
        </div>
      </header>
    </div>
  );
});

import { memo } from "react";
import "./blogb.css";

export default memo(function Blogb() {
  return (
    <div className="blogbanw" id="banw">
      <header className="bloghead">
        <h1 className="blogh1">
          Action Is The Foundational Key To All Success
        </h1>
        <div className="blogvid">
          <img src="/blogb.jpg" alt="" className="blogbg" />
        </div>
      </header>
    </div>
  );
});

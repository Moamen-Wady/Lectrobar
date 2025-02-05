import { memo } from "react";
import "./styles/styles.css";

export default memo(function Loading() {
  return (
    <div className="load" id="load">
      <img src="/logo.png" />
    </div>
  );
});

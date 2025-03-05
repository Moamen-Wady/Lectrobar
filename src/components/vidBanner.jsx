import { useRef } from "react";
import "./vbanner.css";
import useIntersectionObserver from "@react-hook/intersection-observer";

export default function VidBanner() {
  const containerRef = useRef();
  const lockRef = useRef(false);
  const { isIntersecting } = useIntersectionObserver(containerRef);
  if (isIntersecting) {
    lockRef.current = true;
  }

  return (
    <div className="vbanw" >
      <header>
        <h1 className="vh1">About Lectrobar</h1>
        <div className="vvid" ref={containerRef}>
          <img src="/btw.png" alt="" />
          {lockRef.current && (
            <video autoPlay muted loop>
              <source src="lectro.mp4" type="video/mp4"></source>
            </video>
          )}
        </div>
      </header>
    </div>
  );
};

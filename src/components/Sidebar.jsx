import { useState } from "react";
import "./Sidebar.css";
import { TextSearchInput } from "./TextSearchInput.tsx";
export default function Sidebar() {
  const [visible, setVisible] = useState(false);
  return (
    <div className="sbar" id="sbar">
      <div className="sub srch" id="sbsb">
        <a
          onClick={() => {
            setVisible(true);
          }}
        >
          <img
            loading="lazy"
            src="/search.webp"
            alt=""
            style={
              visible ? { visibility: "hidden" } : { visibility: "visible" }
            }
          />
        </a>
        {visible ? (
          <TextSearchInput
            root={document.getElementById("root")}
            positionOptions={{
              top: 30,
              right: 30,
            }}
            closeCallback={() => setVisible(false)}
          />
        ) : (
          <></>
        )}
      </div>
      <div className="sub fb">
        <a
          href="https://www.facebook.com/Lectroegypt?mibextid=LQQJ4d"
          target="_blank"
        >
          <img loading="lazy" src="/fb.webp" alt="" />
        </a>
      </div>
      <div className="sub lin">
        <a
          href="https://www.linkedin.com/company/lectro-egypt-for-electrical-products-&-contracting-co/"
          target="_blank"
        >
          <img loading="lazy" src="/lin.webp" alt="" />
        </a>
      </div>
      <div className="sub yt">
        <a
          href="https://youtube.com/@lectrobar-nh5fp?si=i5zcQIOzurqQiwEU"
          target="_blank"
        >
          <img loading="lazy" src="/yt.webp" alt="" />
        </a>
      </div>
    </div>
  );
}

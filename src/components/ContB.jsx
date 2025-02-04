import { memo } from "react";
import "./contb.css";

export default memo(function ContB() {
  return (
    <div className="contbanw" id="banw">
      <img src="/btw.png" className="shade" />
      <header>
        <h1 className="conth1">
          <pre>Contact Lectrobar</pre>
        </h1>
        <p className="conth1p">
          <pre>
            Rigorously Tested Busduct According To <br /> Higest Standards
          </pre>
        </p>
        <div className="contvid">
          <img src="/1.jpg" alt="" />
        </div>
      </header>
    </div>
  );
});

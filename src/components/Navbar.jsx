import { memo, useLayoutEffect } from "react";
import "./navbar.css";
import { Link } from "react-router-dom";

export default memo(function Navbar() {
  useLayoutEffect(() => {
    let nvb = document.getElementById("nvb");
    let bnr = document.getElementById("banw");
    if (bnr !== null) {
      setTimeout(() => {
        bnr.style.height = bnr.clientHeight + nvb.clientHeight + "px";
      }, 500);
    }

    let lp = document.querySelectorAll(".lp");
    lp.forEach((item) => {
      let padding = window
        .getComputedStyle(item)
        .getPropertyValue("padding")
        .toString()
        .replace("px", "");
      let paddingValue = Number(padding);
      item.style.height =
        (nvb.clientHeight - paddingValue * 2).toString() + "px";
    });

    function d() {
        let s = window.scrollY;
        let n = document.getElementById("nvb");
        let ch = document.getElementById("imgch");
        let edt = document.getElementById("edt");
  
        if (s > 1) {
          n.style.background = "#00395f";
          ch.setAttribute("src", "logow.png");
          ch.classList.remove("logoimg");
          ch.classList.add("replacelogoimg");
          edt.classList.remove("estimg");
          edt.classList.add("replaceestimg");
        } else {
          n.style.background =
            " radial-gradient(rgba(44, 44, 44, 0.5), rgb(128, 128, 128 ))";
          ch.setAttribute("src", "logow2.png");
          ch.classList.add("logoimg");
          ch.classList.remove("replacelogoimg");
          edt.classList.add("estimg");
          edt.classList.remove("replaceestimg");
        }
      }
      window.onscroll = d;
  
  }, []);
  function prodshow() {
    let prodmm = document.getElementById("prodmm");
    prodmm.style.height = "auto";
    prodmm.style.padding = "1rem";
  }
  function prodhide() {
    let prodmm = document.getElementById("prodmm");
    prodmm.style.height = 0;
    prodmm.style.padding = 0;
  }
  function projshow() {
    let projmm = document.getElementById("projmm");
    projmm.style.height = "auto";
    projmm.style.padding = "1rem";
  }
  function projhide() {
    let projmm = document.getElementById("projmm");
    projmm.style.height = 0;
    projmm.style.padding = 0;
  }
  function servshow() {
    let servmm = document.getElementById("servmm");
    servmm.style.height = "auto";
    servmm.style.padding = "1rem";
  }
  function servhide() {
    let servmm = document.getElementById("servmm");
    servmm.style.height = 0;
    servmm.style.padding = 0;
  }

  return (
    <div className="nvbr" id="nvb">
      <div className="nvbrcont">
        <li className="nvbrlogo" id="lcc">
          <Link to="/" className="logop">
            <p>
              <img src="/logow2.png" alt="" id="imgch" className="logoimg" />
            </p>
          </Link>
        </li>
        <ul className="nvbrul1">
          <li className="l">
            <Link to="/" className="lp">
              <p>Home</p>
              <img src="/bluebg.png" alt="" />
            </Link>
          </li>
          <li className="l">
            <Link to="/Aboutus" className="lp">
              <p>About Us</p>
              <img src="/bluebg.png" alt="" />
            </Link>
          </li>
          <li className="l" onMouseEnter={prodshow} onMouseLeave={prodhide}>
            <Link to="#" className="lp">
              <p>Products</p>
              <img src="/bluebg.png" alt="" />
            </Link>
            <div className="prodmm" id="prodmm">
              <div className="prodh">
                <h1>Medium Voltage:</h1>
                <a>Ring</a>
                <a>Transformer</a>
              </div>
              <div className="prodh">
                <h1>Low Voltage:</h1>
                <h2>Busduct</h2>
                <Link to="/lsbpro">
                  <strong>-</strong>LSB PRO
                </Link>
                <Link to="/lsb2">
                  <strong>-</strong>LSB II
                </Link>
                <Link to="/lsba">
                  <strong>-</strong>LSB A
                </Link>
                <Link to="/llb">
                  <strong>-</strong>LLB
                </Link>
                <h2>Low Voltage Panels</h2>
                <h2>Fuses and Switches</h2>
              </div>
            </div>
          </li>
          <li className="l" onMouseEnter={projshow} onMouseLeave={projhide}>
            <Link to="/Projects" className="lp">
              <p>Projects</p>
              <img src="/bluebg.png" alt="" />
            </Link>
            <div className="projmm" id="projmm">
              <h1>National & International</h1>
              <div className="projh">
                <ul>
                  <li>
                    <Link to="/Education">Education</Link>
                  </li>
                  <li>
                    <Link to="/Gov">Governmental Org</Link>
                  </li>
                  <li>
                    <Link to="/Villages">Villages</Link>
                  </li>
                  <li>
                    <Link to="/">Exhibitions</Link>
                  </li>
                </ul>
              </div>
              <div className="projh">
                <ul>
                  <li>
                    <Link to="/Factories">Factories</Link>
                  </li>
                  <li>
                    <Link to="/Hotels">Hotels</Link>
                  </li>
                  <li>
                    <Link to="/Towers">Towers</Link>
                  </li>
                  <li>
                    <Link to="/Malls">Malls</Link>
                  </li>
                </ul>
              </div>
              <div className="projh">
                <ul>
                  <li>
                    <Link to="/TechCenters">Tech Centers</Link>
                  </li>
                  <li>
                    <Link to="/Hospitals">Hospitals</Link>
                  </li>
                  <li>
                    <Link to="/Banks">Banks</Link>
                  </li>
                  <li>
                    <Link to="/Etc">Etc</Link>
                  </li>
                </ul>
              </div>
            </div>
          </li>
          <li className="l" onMouseEnter={servshow} onMouseLeave={servhide}>
            <Link to="#" className="lp">
              <p>Services</p>
              <img src="/bluebg.png" alt="" />
            </Link>
            <div className="servmm" id="servmm">
              <div className="servh">
                <a>Supply</a>
                <img src="/supply.png" alt="" />
                <a>Test And Commisioning</a>
                <img src="/test.png" alt="" />
              </div>
              <div className="servh">
                <a>Install</a>
                <img src="/install.png" alt="" />
                <a>Value Engineering</a>
                <img src="/valueEngineering.png" alt="" />
              </div>
              <div className="servh">
                <a>Maintenance</a>
                <img src="/maintenance.png" alt="" />
                <a>Technical Support</a>
                <img src="/technicalSupport.png" alt="" />
              </div>
            </div>
          </li>
          <li className="l">
            <Link to="/Blog" className="lp">
              <p>Blog</p>
              <img src="/bluebg.png" alt="" />
            </Link>
          </li>
          <li className="l">
            <Link to="/Contact" className="lp">
              <p>Contact</p>
              <img src="/bluebg.png" alt="" />
            </Link>
          </li>
        </ul>
        <li className="l edc" id="edc">
          <Link to="#" className="rp">
            <p>
              <img src="/edt.png" alt="" id="edt" className="estimg" />
            </p>
          </Link>
        </li>
      </div>
    </div>
  );
});

import "./styles/About.css";
import { useEffect, useState, useCallback } from "react";
import { AnimationOnScroll } from "react-animation-on-scroll";
import VidBanner from "./components/vidBanner";

const Values = function Values() {
  const [valueContent, setValueContent] = useState(
    <p>Hover Over A Value To Display It!</p>
  );
  const botr = useCallback(function () {
    setValueContent(
      <p>
        We value our employees&apos; dedication to our Company, recognize them
        as our greatest asset, and constantly strive to enhance them through
        training and decelopment.
      </p>
    );
  }, []);
  const botl = useCallback(function () {
    setValueContent(
      <p>
        Our goal is to provide value added products and services to every
        customer. We always repeat the customer relationship through confidence
        in our service and capabilities and this is our ultimate goal.
      </p>
    );
  }, []);
  const topr = useCallback(function () {
    setValueContent(
      <p>
        We lead a culture where safety is paramount to employees and customers
        and uncompromising in our commitment to the health and well-being of our
        employees, subcontractors, customers, and community.
      </p>
    );
  }, []);
  const topl = useCallback(function () {
    setValueContent(
      <p>
        We build lasting relationships through honesty, respect, and trust with
        our customers, employees, and community.
      </p>
    );
  }, []);
  const middle = useCallback(function () {
    setValueContent(
      <p>
        We strive to maintain the highest quality and efficiency in our work
        environment through the constant pursuit of improvement of our team and
        our processes in order to surpass the expectations of our customers.
      </p>
    );
  }, []);
  return (
    <AnimationOnScroll
      animateOnce={true}
      animateIn="animate__fadeInDown"
      className="aboutvalues"
    >
      <div>
        <h1>Values Are The Backbone Of A Successful Organization</h1>
        {valueContent}
      </div>
      <div>
        <svg
          id="untitled"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 250 250"
          shapeRendering="geometricPrecision"
          textRendering="geometricPrecision"
        >
          <g id="untitled-u-botl" className="aboutbotl" onMouseOver={botl}>
            <g id="untitled-s-g1">
              <path
                id="untitled-s-path1"
                d="M192.07367,160.506411v-100l-100,100h100Z"
                transform="matrix(0 1-1 0 190.775458 47.902852)"
                fill="#f5f5f5"
                stroke="#3f5787"
                strokeWidth="0.6"
              />
            </g>
            <text
              id="untitled-s-text1"
              dx="0"
              dy="0"
              fontFamily='"untitled:::Raleway"'
              fontSize="15"
              fontWeight="400"
              transform="matrix(.70183 0.712344-.712344 0.70183 43.213653 178.671092)"
              strokeWidth="0"
            >
              <tspan
                id="untitled-s-tspan1"
                y="0"
                fontWeight="400"
                strokeWidth="0"
              >
                Customer
              </tspan>
              <tspan
                id="untitled-s-tspan2"
                x="10"
                y="15"
                fontWeight="400"
                strokeWidth="0"
              >
                Focus
              </tspan>
              <tspan
                id="untitled-s-tspan3"
                x="0"
                y="30"
                fontWeight="400"
                strokeWidth="0"
              ></tspan>
            </text>
          </g>
          <g id="untitled-u-botr" className="aboutbotr" onMouseOver={botr}>
            <g id="untitled-s-g2">
              <path
                id="untitled-s-path2"
                d="M192.07367,160.506411v-100l-100,100h100Z"
                transform="translate(38.195377 79.470116)"
                fill="#f5f5f5"
                stroke="#3f5787"
                strokeWidth="0.6"
              />
            </g>
            <text
              id="untitled-s-text2"
              dx="0"
              dy="0"
              fontFamily='"untitled:::Raleway"'
              fontSize="15"
              fontWeight="400"
              transform="matrix(.687441-.72624 0.72624 0.687441 170.979022 232.245346)"
              strokeWidth="0"
            >
              <tspan
                id="untitled-s-tspan4"
                y="0"
                fontWeight="400"
                strokeWidth="0"
              >
                Excellence
              </tspan>
            </text>
          </g>
          <g
            id="untitled-u-topr"
            className="abouttopr"
            onMouseOver={topr}
            transform="translate(-24.119025 0.157696)"
          >
            <g
              id="untitled-s-g3"
              transform="matrix(0-1 1 0 93.881656 231.892496)"
            >
              <path
                id="untitled-s-path3"
                d="M192.07367,160.506411v-100l-100,100h100Z"
                fill="#f5f5f5"
                stroke="#3f5787"
                strokeWidth="0.6"
              />
            </g>
            <text
              id="untitled-s-text3"
              dx="0"
              dy="0"
              fontFamily='"untitled:::Raleway"'
              fontSize="15"
              fontWeight="400"
              transform="matrix(.707107 0.707107-.707107 0.707107 207.105942 56.198764)"
              fill="#323232"
              strokeWidth="0"
            >
              <tspan
                id="untitled-s-tspan5"
                y="0"
                fontWeight="400"
                strokeWidth="0"
              >
                Safety
              </tspan>
              <tspan
                id="untitled-s-tspan6"
                x="0"
                y="30"
                fontWeight="400"
                strokeWidth="0"
              ></tspan>
            </text>
          </g>
          <g id="untitled-u-topl" className="abouttopl" onMouseOver={topl}>
            <g
              id="untitled-s-g4"
              transform="matrix(-1 0 0-1 222.342707 200.482939)"
            >
              <path
                id="untitled-s-path4"
                d="M192.07367,160.506411v-100l-100,100h100Z"
                fill="#f5f5f5"
                stroke="#3f5787"
                strokeWidth="0.6"
              />
            </g>
            <text
              id="untitled-s-text4"
              dx="0"
              dy="0"
              fontFamily='"untitled:::Raleway"'
              fontSize="15"
              fontWeight="400"
              transform="matrix(.707107-.707107 0.707107 0.707107 44.739461 95.867747)"
              fill="#323232"
              strokeWidth="0"
            >
              <tspan
                id="untitled-s-tspan7"
                y="0"
                fontWeight="400"
                strokeWidth="0"
              >
                Integrity
              </tspan>
            </text>
          </g>
          <rect
            id="untitled-u-middle"
            className="aboutmiddle"
            onMouseOver={middle}
            width="141.42"
            height="141.42"
            rx="0"
            ry="0"
            transform="matrix(.707107-.707107 0.707107 0.707107 30.270965 139.976522)"
            fill="#f5f5f5"
            strokeWidth="0"
          />
          <text
            id="untitled-s-text5"
            className="aboutmiddle"
            dx="0"
            dy="0"
            fontFamily='"untitled:::Raleway"'
            fontSize="15"
            fontWeight="400"
            transform="translate(78.354715 137.908772)"
            strokeWidth="0"
          >
            <tspan
              id="untitled-s-tspan8"
              x="14"
              y="0"
              fontWeight="400"
              strokeWidth="0"
            >
              Employee
            </tspan>
            <tspan
              id="untitled-s-tspan9"
              x="0"
              y="15"
              fontWeight="400"
              strokeWidth="0"
            >
              Developement
            </tspan>
            <tspan
              id="untitled-s-tspan10"
              x="0"
              y="30"
              fontWeight="400"
              strokeWidth="0"
            ></tspan>
          </text>
          <style>{`
@fontFace { font - family: 'untitled:::Raleway';fontStyle: normal;fontWeight: 400;src: url(data:font/ttf;charset=utf-8;base64,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) format('truetype');}
`}</style>
        </svg>
      </div>
    </AnimationOnScroll>
  );
};

export default function Aboutus() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="aboutwrap">
      <VidBanner />

      <div className="aboutunderbanner">
        <h1>Why Lectrobar?</h1>
        <p>
          Lectrobar, a pioneering name in type-tested busduct and distribution
          panels since 1975, boasts four state-of-the-art manufacturing
          facilities spread across 30,000 square meters. Our top-quality
          products, known for their remarkable safety and longevity, conform to
          IEC standards and are recognized globally through rigorous testing,
          including DEKRA type testing. Our unwavering commitment to customer
          success is reflected in our dedication to exceptional product quality
          and service. Choose Lectrobar for dependable, world-class power
          distribution solutions.
        </p>
      </div>

      <AnimationOnScroll animateOnce={true} animateIn="animate__fadeInDown">
        <div className="aboutfactory">
          <div className="aboutfactorytxt">
            <p>
              <b>48</b> Years In This Industry
            </p>
            <a href="/profile.ppsx">Download Lectro Profile</a>
          </div>
          <div className="aboutfactoryimg">
            <img src="/factory.jpg" alt="" />
          </div>
        </div>
      </AnimationOnScroll>

      <AnimationOnScroll animateOnce={true} animateIn="animate__fadeInDown">
        <div className="aboutdistribution">
          <p>Our Footprints</p>
          <div>
            <img src="/distribution.png" alt="" className="aboutwmap" />
            <div className="aboutdot aboutdot22">
              <img src="/dot.png" alt="" />
              <span>Zambia</span>
            </div>
            <div className="aboutdot aboutdot20">
              <img src="/dot.png" alt="" />
              <span>Chad</span>
            </div>
            <div className="aboutdot aboutdot19">
              <img src="/dot.png" alt="" />
              <span>UAE</span>
            </div>
            <div className="aboutdot aboutdot18">
              <img src="/dot.png" alt="" />
              <span>Qatar</span>
            </div>
            <div className="aboutdot aboutdot17">
              <img src="/dot.png" alt="" />
              <span>Bahrain</span>
            </div>
            <div className="aboutdot aboutdot16">
              <img src="/dot.png" alt="" />
              <span>Korea</span>
            </div>
            <div className="aboutdot aboutdot15">
              <img src="/dot.png" alt="" />
              <span>Zimbabwe</span>
            </div>
            <div className="aboutdot aboutdot14">
              <img src="/dot.png" alt="" />
              <span>Tanzania</span>
            </div>
            <div className="aboutdot aboutdot13">
              <img src="/dot.png" alt="" />
              <span>Nigeria</span>
            </div>
            <div className="aboutdot aboutdot11">
              <img src="/dot.png" alt="" />
              <span>North Sudan</span>
            </div>
            <div className="aboutdot aboutdot10">
              <img src="/dot.png" alt="" />
              <span>Algeria</span>
            </div>
            <div className="aboutdot aboutdot9">
              <img src="/dot.png" alt="" />
              <span>Egypt</span>
            </div>
            <div className="aboutdot aboutdot8">
              <img src="/dot.png" alt="" />
              <span>Oman</span>
            </div>
            <div className="aboutdot aboutdot6">
              <img src="/dot.png" alt="" />
              <span>Iraq</span>
            </div>
            <div className="aboutdot aboutdot5">
              <img src="/dot.png" alt="" />
              <span>Saudi Arabia</span>
            </div>
            <div className="aboutdot aboutdot3">
              <img src="/dot.png" alt="" />
              <span>China</span>
            </div>
            <div className="aboutdot aboutdot2">
              <img src="/dot.png" alt="" />
              <span>Norway</span>
            </div>
            <div className="aboutdot aboutdot1">
              <img src="/dot.png" alt="" />
              <span>United Kingdom</span>
            </div>
          </div>
        </div>
      </AnimationOnScroll>

      <Values />

      <AnimationOnScroll
        animateOnce={true}
        animateIn="animate__fadeInDown"
        className="aboutcertificates"
      >
        <h1>Our Certificates</h1>
        <div>
          <div>
            <div>
              <img src="/dkr.png" alt="" />
            </div>
            <div>
              <img src="/kk.jpeg" alt="" />
            </div>
          </div>
          <div>
            <p>
              Since 1975 Lectro manufactured thousands of meters of installed
              busduct and distribution panels covering a huge number of
              industries both in Egypt and abroad With four factories and a
              total manufacturing area 30,000 square meters. An industrial
              complex of 4 factories is in Borg El Arab Industrial City:
              <li>2.5 factories are up and running</li>
              <li>1.5 factories are under construction</li>
            </p>
          </div>
        </div>
      </AnimationOnScroll>

      <AnimationOnScroll animateOnce={true} animateIn="animate__fadeInDown">
        <div className="aboutmission">
          <div>
            <p>
              At lectro, our mission is to design, manufacture, and deliver
              high-quality and innovative busbar solutions that enable efficient
              and reliable electrical power distribution.
            </p>
          </div>
        </div>
      </AnimationOnScroll>
    </div>
  );
}

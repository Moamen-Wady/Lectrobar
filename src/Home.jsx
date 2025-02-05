import "./styles/Home.css";
import Banner from "./components/banner";
import { memo, useEffect, useState } from "react";
import useIntersectionObserver from "@react-hook/intersection-observer";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { AnimationOnScroll } from "react-animation-on-scroll";
import { useCallback } from "react";

const IntroA = memo(function IntroA({ Slider }) {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    fade: false,
    cssEase: "ease",
    arrows: false,
    pauseOnHover: false,
  };
  const slides = [
    {
      img: "/inan1.jpg",
    },
    {
      img: "/inan2.jpg",
    },
    {
      img: "/inan3.jpg",
    },
    {
      img: "/inan4.jpg",
    },
    {
      img: "/inan5.jpg",
    },
  ];
  return (
    <AnimationOnScroll animateOnce={true} animateIn="animate__fadeInDown">
      <div className="homeintrocont">
        <h1>Welcome to Lectrobar</h1>
        <div className="homeintro">
          <div>
            <h1>
              <i>
                We deliver Systems that Exceed our Customers&apos; Expectations!
              </i>
            </h1>
            <p>
              Lectro Bar Group, which includes Lectro Bar Egypt and Lectro Bar
              Gulf, is a distinguished manufacturer that specializes in
              producing high-quality, tested Bus Ducts. These Bus Ducts are
              rigorously tested according to the new IEC61439 criteria and have
              earned the prestigious KEMA KEUR quality mark, demonstrating
              Lectrobar&apos;s commitment to excellence and quality assurance
              with the date of establishment.
            </p>
          </div>
          <div className="homeintroanim">
            <Slider {...settings}>
              {slides.map((slide, index) => (
                <div key={`SlideImg ${index + 1}`}>
                  <img
                    className="slide-image-body"
                    src={slide.img}
                    alt={`Slide ${index + 1}`}
                  />
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </AnimationOnScroll>
  );
});
const DynCount = memo(function DynCount() {
  let [a, setA] = useState(0);
  let [b, setB] = useState(0);
  let [c, setC] = useState(0);
  let [d, setD] = useState(0);
  let [e, setE] = useState(0);
  let [f, setF] = useState(0);
  let [started, setStarted] = useState(false);
  const containerRef = useRef();
  const { isIntersecting } = useIntersectionObserver(containerRef);
  let intervalA,
    intervalB,
    intervalC,
    intervalD,
    intervalE,
    intervalF,
    valueA = 0,
    valueB = 0,
    valueC = 0,
    valueD = 0,
    valueE = 0,
    valueF = 0;
  const frameA = useCallback(() => {
    if (valueA >= 600) {
      clearInterval(intervalA);
      setA(600);
    } else {
      valueA = valueA + 6;
      setA(valueA);
    }
  }, []);
  const frameB = useCallback(() => {
    if (valueB >= 10000) {
      clearInterval(intervalB);
      setB(10000);
    } else {
      valueB = valueB + 100;
      setB(valueB);
    }
  }, []);
  const frameC = useCallback(() => {
    if (valueC >= 1000) {
      clearInterval(intervalC);
      setC(1000);
    } else {
      valueC = valueC + 10;
      setC(valueC);
    }
  }, []);
  const frameD = useCallback(() => {
    if (valueD >= 15000) {
      clearInterval(intervalD);
      setD(15000);
    } else {
      valueD = valueD + 150;
      setD(valueD);
    }
  }, []);
  const frameE = useCallback(() => {
    if (valueE >= 3000) {
      clearInterval(intervalE);
      setE(3000);
    } else {
      valueE = valueE + 30;
      setE(valueE);
    }
  }, []);
  const frameF = useCallback(() => {
    if (valueF >= 19) {
      clearInterval(intervalF);
      setF(19);
    } else {
      valueF = valueF + 1;
      setF(valueF);
    }
  }, []);
  if (isIntersecting && started == false) {
    setStarted(true);
    intervalA = setInterval(frameA, 10);
    intervalB = setInterval(frameB, 10);
    intervalC = setInterval(frameC, 10);
    intervalD = setInterval(frameD, 10);
    intervalE = setInterval(frameE, 10);
    intervalF = setInterval(frameF, 100);
  }

  return (
    <>
      <hr ref={containerRef} style={{ width: 90 + "%", color: "darkblue" }} />
      <div className="homecoun">
        <p>
          <b>{b}+</b>Succefully Completed Projects
        </p>
        <p>
          <b>{a}+</b>Highly Specialised & Skilled Workforce
        </p>
        <p>
          <b>{c}+</b>Projects outside Egypt
        </p>
        <p>
          <b>{d}+</b>Meters Produced Per Month
        </p>
        <p>
          <b>{e}+</b>Meters Exported Annually
        </p>
        <p>
          <b>{f}+</b>Countries We Export To
        </p>
      </div>
    </>
  );
});
const Filter = memo(function Filter() {
  let [filter, setFilter] = useState(0);
  const fsetter = useCallback((e) => {
    const x = e.target;
    setFilter(x.slot);
  }, []);
  return (
    <AnimationOnScroll
      animateOnce={true}
      animateIn="animate__fadeIn"
      className="homefilterp"
    >
      <div className="homedk">
        <img src="/dk.jpeg" alt="" />
        <p>
          Lectro has manufactured and installed hundreds of thousands of meters
          of busducts for large and small projects since 1975, both for the
          domestic market and for exports around the globe. The production takes
          place in a state of the art facility, using latest generation
          precision techniques including CNC, automation systems and robotics.
          Lectro products have been type tested by DEKRA laboratories of the
          Netherlands. Lectro busduct systems contain high quality components
          and are trusted for their high safety factor and long life.
        </p>
      </div>

      <div className="homesidefcont">
        <div className="homesidef">
          <div className="hometypef" onClick={fsetter} slot="0">
            <p slot="0">Busduct</p>
          </div>
          <div className="hometypef" onClick={fsetter} slot="1">
            <p slot="1">Low Voltage Panels</p>
          </div>
          <div className="hometypef" onClick={fsetter} slot="2">
            <p slot="2">Fuses and Switches</p>
          </div>
          <div className="hometypef" onClick={fsetter} slot="3">
            <p slot="3">Ring</p>
          </div>
          <div className="hometypef" onClick={fsetter} slot="4">
            <p slot="4">Transformers</p>
          </div>
        </div>
        {filter == 0 && (
          <>
            <div className="homeprodbus">
              <div>
                <b>Busduct</b>
                <p>
                  In electric power distribution, a bus duct (also called
                  busway) is a sheet metal duct or also cast resin insulated
                  containing either copper or aluminium busbars for the purpose
                  of conducting a substantial current of electricity. It is an
                  alternative means of conducting electricity to power cables or
                  cable bus.
                </p>
              </div>
              <div>
                <div>
                  <Link to="llb">
                    <img src="/llb.jpg" alt="" />
                  </Link>
                </div>
                <p>LLB</p>
              </div>
              <div>
                <div>
                  <Link to="/lsba">
                    <img src="/lsba.jpg" alt="" />
                  </Link>
                </div>
                <p>LSB A</p>
              </div>
              <div>
                <div>
                  <Link to="/lsb2">
                    <img src="/lsb2.jpg" alt="" />
                  </Link>
                </div>
                <p>LSB II</p>
              </div>
              <div>
                <div>
                  <Link to="/lsbpro">
                    <img src="/lsbpro.jpg" alt="" />
                  </Link>
                </div>
                <p>LSB PRO</p>
              </div>
            </div>
          </>
        )}
        {filter == 1 && (
          <>
            <div className="homeprodlowv">
              <div>
                <b>Low Voltage Panels</b>
                <p>
                  Low voltage panel is a component of an electrical distribution
                  system that divides an electrical power feed into branch
                  circuits while providing a protective fuse or circuit breaker
                  for each circuit in a common enclosure.
                </p>
              </div>
              {/* <div>
                <div>
                  <img src="/lowv.jpg" alt="" />
                </div>
              </div> */}
            </div>
          </>
        )}
        {filter == 2 && (
          <>
            <div className="homeprodfuse">
              <div>
                <b>Fuses And Switches</b>
                <p>
                  The purpose of a switch or a fuse is to break or connect an
                  electric circuit, but they must be correctly connected in the
                  home. A switch or a fuse in an electrical circuit is always
                  connected to the live wire so that the socket or appliance is
                  not live when switched off.
                </p>
              </div>
              {/* <div>
                <div>
                  <img src="/sw.jpg" alt="" />
                </div>
              </div> */}
            </div>
          </>
        )}
        {filter == 3 && (
          <>
            <div className="homeprodimg">
              <b>Coming Soon</b>
            </div>
          </>
        )}
        {filter == 4 && (
          <>
            <div className="homeprodimg">
              <b>Coming Soon</b>
            </div>
          </>
        )}
      </div>
    </AnimationOnScroll>
  );
});
const Clients = memo(function Clients({ debounce }) {
  let [cli, setCli] = useState(1);
  const cliprv = () => {
    if (cli == 1) {
      document.getElementById(`sslide26`).style.animationName = "gotoleft";
    } else {
      document.getElementById(`sslide` + `${cli - 1}`).style.animationName =
        "gotoleft";
    }
  };
  const clinxt = () => {
    if (cli == 25) {
      document.getElementById(`sslide` + `${cli}`).style.animationName =
        "midtoleft";
      document.getElementById(`sslide` + `${cli + 1}`).style.animationName =
        "righttomid";
      document.getElementById(`sslide` + `${1}`).style.animationName =
        "comefromright";
    } else if (cli == 26) {
      document.getElementById(`sslide` + `${cli}`).style.animationName =
        "midtoleft";
      document.getElementById(`sslide` + `${1}`).style.animationName =
        "righttomid";
      document.getElementById(`sslide` + `${2}`).style.animationName =
        "comefromright";
    } else {
      document.getElementById(`sslide` + `${cli}`).style.animationName =
        "midtoleft";
      document.getElementById(`sslide` + `${cli + 1}`).style.animationName =
        "righttomid";
      document.getElementById(`sslide` + `${cli + 2}`).style.animationName =
        "comefromright";
    }
  };
  const nclincr = () => {
    if (cli == 26) {
      setCli(1);
    } else {
      setCli(cli + 1);
    }
  };
  const xcliprv = () => {
    if (cli == 26) {
      document.getElementById(`sslide1`).style.animationName = "gotoright";
    } else {
      document.getElementById(`sslide` + `${cli + 1}`).style.animationName =
        "gotoright";
    }
  };
  const xclinxt = () => {
    if (cli == 1) {
      document.getElementById(`sslide25`).style.animationName = "comefromleft";
      document.getElementById(`sslide26`).style.animationName = "lefttomid";
      document.getElementById(`sslide1`).style.animationName = "midtoright";
    } else if (cli == 2) {
      document.getElementById(`sslide26`).style.animationName = "comefromleft";
      document.getElementById(`sslide1`).style.animationName = "lefttomid";
      document.getElementById(`sslide2`).style.animationName = "midtoright";
    } else {
      document.getElementById(`sslide` + `${cli - 2}`).style.animationName =
        "comefromleft";
      document.getElementById(`sslide` + `${cli - 1}`).style.animationName =
        "lefttomid";
      document.getElementById(`sslide` + `${cli}`).style.animationName =
        "midtoright";
    }
  };
  const nclidcr = () => {
    if (cli == 1) {
      setCli(26);
    } else {
      setCli(cli - 1);
    }
  };
  const clifwd = () => {
    cliprv();
    clinxt();
    nclincr();
  };
  const clibwd = () => {
    xcliprv();
    xclinxt();
    nclidcr();
  };
  useEffect(() => {
    const run = setInterval(() => {
      document.getElementById("sleft").click();
    }, 2000);
    function handleSlider() {
      let sliderHeight = document.getElementById("sslide1").clientHeight;
      if (sliderHeight) {
        document.getElementById(
          "clientsSlider"
        ).style.height = `${sliderHeight}px`;
      }
    }
    handleSlider();
    const debounceSlider = debounce(handleSlider(), 100);
    window.onresize = debounceSlider;
    return clearInterval(run), (window.onresize = null);
  }, []);
  return (
    <AnimationOnScroll animateOnce={true} animateIn="animate__fadeInDown">
      <div className="homeintrocont">
        <h1>Clients</h1>
        <div className="homeclients">
          <div className="homeclientsimg" id="clientsSlider">
            <button id="sleft" className="homebtn" onClick={clifwd}>
              <img src="/l.png" alt=" " />
            </button>
            <div className="sslide" id="sslide1">
              <img src="/clients/c1.jpg" alt="" />
            </div>
            <div className="sslide" id="sslide2">
              <img src="/clients/c2.jpg" alt="" />
            </div>
            <div className="sslide" id="sslide3">
              <img src="/clients/c3.jpg" alt="" />
            </div>
            <div className="sslide" id="sslide4">
              <img src="/clients/c4.jpg" alt="" />
            </div>
            <div className="sslide" id="sslide5">
              <img src="/clients/c5.jpg" alt="" />
            </div>
            <div className="sslide" id="sslide6">
              <img src="/clients/c6.jpg" alt="" />
            </div>
            <div className="sslide" id="sslide7">
              <img src="/clients/c7.jpeg" alt="" />
            </div>
            <div className="sslide" id="sslide8">
              <img src="/clients/c8.jpeg" alt="" />
            </div>
            <div className="sslide" id="sslide9">
              <img src="/clients/c9.jpeg" alt="" />
            </div>
            <div className="sslide" id="sslide10">
              <img src="/clients/c10.jpeg" alt="" />
            </div>
            <div className="sslide" id="sslide11">
              <img src="/clients/c11.jpeg" alt="" />
            </div>
            <div className="sslide" id="sslide12">
              <img src="/clients/c12.jpeg" alt="" />
            </div>
            <div className="sslide" id="sslide13">
              <img src="/clients/c13.jpeg" alt="" />
            </div>
            <div className="sslide" id="sslide14">
              <img src="/clients/c14.jpeg" alt="" />
            </div>
            <div className="sslide" id="sslide15">
              <img src="/clients/c15.jpeg" alt="" />
            </div>
            <div className="sslide" id="sslide16">
              <img src="/clients/c26.png" alt="" />
            </div>
            <div className="sslide" id="sslide17">
              <img src="/clients/c27.jpg" alt="" />
            </div>
            <div className="sslide" id="sslide18">
              <img src="/clients/c18.jpeg" alt="" />
            </div>
            <div className="sslide" id="sslide19">
              <img src="/clients/c19.jpeg" alt="" />
            </div>
            <div className="sslide" id="sslide20">
              <img src="/clients/c30.png" alt="" />
            </div>
            <div className="sslide" id="sslide21">
              <img src="/clients/c21.jpeg" alt="" />
            </div>
            <div className="sslide" id="sslide22">
              <img src="/clients/c29.png" alt="" />
            </div>
            <div className="sslide" id="sslide23">
              <img src="/clients/c23.jpeg" alt="" />
            </div>
            <div className="sslide" id="sslide24">
              <img src="/clients/c24.jpeg" alt="" />
            </div>
            <div className="sslide" id="sslide25">
              <img src="/clients/c25.jpeg" alt="" />
            </div>
            <div className="sslide" id="sslide26">
              <img src="/clients/c31.png" alt="" />
            </div>
            <button id="sright" className="homebtn" onClick={clibwd}>
              <img src="/r.png" alt=" " />
            </button>
          </div>
        </div>
      </div>
    </AnimationOnScroll>
  );
});

export default memo(function Home({ Slider, debounce }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="homewrap">
      <Banner Slider={Slider} />
      <IntroA Slider={Slider} />
      <DynCount />
      <div className="homeintrocont">
        <h1>Products</h1>
        <div className="homeproducts">
          <AnimationOnScroll animateOnce={true} animateIn="animate__fadeInDown">
            <h1>
              <i>What is a Busduct System?</i>
            </h1>
            <p>
              A busduct system is a modular electrical transmission system used
              for the purpose to distribute and transport electrical power.
              Commonly used in commercial and industrial settings, a busduct
              system provides an alternative method of power distribution system
              to the traditional cabling system with a variety of benefits over
              power cables.
            </p>
            <p>
              Structurally, a busduct system is a prefabricated electrical
              distribution system containing either copper or aluminium busbars
              in a metal enclosure that is constructed to distribute electrical
              power to the right and needed place such as transformer –
              switchboard or switchboard – main sub board connection.
            </p>
          </AnimationOnScroll>
          <Filter />
        </div>
      </div>

      <AnimationOnScroll animateOnce={true} animateIn="animate__fadeIn">
        <div className="homeintrocont">
          <h1>Services</h1>
          <div className="homeserv">
            <div className="homeservimg">
              <div>
                <div className="homeserv1">
                  <div>
                    <p>Maintenance</p>
                  </div>
                  <img src="/servmaint.JPG" alt="" />
                </div>
                <div className="homeserv2">
                  <div>
                    <p>Supply</p>
                  </div>
                  <img src="/servsupp.JPG" alt="" />
                </div>
                <div className="homeserv3">
                  <div>
                    <p>Technical Support</p>
                  </div>
                  <img src="/servtech.JPG" alt="" />
                </div>
              </div>
              <div>
                <div className="homeserv4">
                  <div>
                    <p>Install</p>
                  </div>
                  <img src="/servinstall.JPG" alt="" />
                </div>
              </div>
              <div>
                <div className="homeserv5">
                  <div>
                    <p>Value Engineering</p>
                  </div>
                  <img src="/servve.JPG" alt="" />
                </div>
                <div className="homeserv6">
                  <div>
                    <p>Test and Commisioning</p>
                  </div>
                  <img src="/servtest.JPG" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </AnimationOnScroll>
      <Clients debounce={debounce} />
    </div>
  );
});

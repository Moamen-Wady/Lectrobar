import "./styles/Home.css";
import Banner from "./components/banner";
import { memo, useEffect, useState, useCallback, useRef } from "react";
import useIntersectionObserver from "@react-hook/intersection-observer";
import { Link } from "react-router-dom";
import { AnimationOnScroll } from "react-animation-on-scroll";

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
      img: "/inan1.webp",
      loading: "eager",
    },
    {
      img: "/inan2.webp",
      loading: "lazy",
    },
    {
      img: "/inan3.webp",
      loading: "lazy",
    },
    {
      img: "/inan4.webp",
      loading: "lazy",
    },
    {
      img: "/inan5.webp",
      loading: "lazy",
    },
  ];
  return (
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
            Gulf, is a distinguished manufacturer that specializes in producing
            high-quality, tested Bus Ducts. These Bus Ducts are rigorously
            tested according to the new IEC61439 criteria and have earned the
            prestigious KEMA KEUR quality mark, demonstrating Lectrobar&apos;s
            commitment to excellence and quality assurance with the date of
            establishment.
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
                  loading={slide.loading}
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
});
const DynCount = function DynCount() {
  const [counts, setCounts] = useState({
    a: 0,
    b: 0,
    c: 0,
    d: 0,
    e: 0,
    f: 0,
  });

  const [started, setStarted] = useState(false);
  const containerRef = useRef();
  const { isIntersecting } = useIntersectionObserver(containerRef);

  const targetValues = {
    a: 600,
    b: 10000,
    c: 1000,
    d: 15000,
    e: 3000,
    f: 19,
  };

  const stepValues = {
    a: 6,
    b: 100,
    c: 10,
    d: 150,
    e: 30,
    f: 1,
  };

  const animateCount = useCallback(() => {
    let startTime;

    function updateCount(timestamp) {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      let updated = false;

      setCounts((prevCounts) => {
        const newCounts = { ...prevCounts };

        Object.keys(targetValues).forEach((key) => {
          if (prevCounts[key] < targetValues[key]) {
            newCounts[key] = Math.min(
              prevCounts[key] + stepValues[key],
              targetValues[key]
            );
            updated = true;
          }
        });

        return updated ? newCounts : prevCounts;
      });

      if (updated) {
        requestAnimationFrame(updateCount);
      }
    }

    requestAnimationFrame(updateCount);
  }, []);

  useEffect(() => {
    if (isIntersecting && !started) {
      setStarted(true);
      animateCount();
    }
    return setStarted(false);
  }, [isIntersecting, started, animateCount, counts]);

  return (
    <>
      <hr ref={containerRef} style={{ width: "90%", color: "darkblue" }} />
      <div className="homecoun">
        <p>
          <b>{counts.b}+</b> Successfully Completed Projects
        </p>
        <p>
          <b>{counts.a}+</b> Highly Specialised & Skilled Workforce
        </p>
        <p>
          <b>{counts.c}+</b> Projects outside Egypt
        </p>
        <p>
          <b>{counts.d}+</b> Meters Produced Per Month
        </p>
        <p>
          <b>{counts.e}+</b> Meters Exported Annually
        </p>
        <p>
          <b>{counts.f}+</b> Countries We Export To
        </p>
      </div>
    </>
  );
};
const Filter = function Filter() {
  const [filter, setFilter] = useState(0);
  const fsetter = useCallback(
    (e) => {
      const x = e.target;
      setFilter(x.slot);
    },
    [filter]
  );
  return (
    <AnimationOnScroll
      animateOnce={true}
      animateIn="animate__fadeIn"
      className="homefilterp"
    >
      <div className="homedk">
        <img loading="lazy" src="/dk.jpeg" alt="" />
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
                    <img loading="lazy" src="/llb.webp" alt="" />
                  </Link>
                </div>
                <p>LLB</p>
              </div>
              <div>
                <div>
                  <Link to="/lsba">
                    <img loading="lazy" src="/lsba.webp" alt="" />
                  </Link>
                </div>
                <p>LSB A</p>
              </div>
              <div>
                <div>
                  <Link to="/lsb2">
                    <img loading="lazy" src="/lsb2.webp" alt="" />
                  </Link>
                </div>
                <p>LSB II</p>
              </div>
              <div>
                <div>
                  <Link to="/lsbpro">
                    <img loading="lazy" src="/lsbpro.webp" alt="" />
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
                  <img loading="lazy" src="/lowv.webp" alt="" />
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
                  <img loading="lazy" src="/sw.webp" alt="" />
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
};
const Clients = function Clients() {
  const images = [
    "/clients/c1.webp",
    "/clients/c2.webp",
    "/clients/c3.webp",
    "/clients/c4.webp",
    "/clients/c5.webp",
    "/clients/c6.webp",
    "/clients/c7.jpeg",
    "/clients/c8.jpeg",
    "/clients/c9.jpeg",
    "/clients/c10.jpeg",
    "/clients/c11.jpeg",
    "/clients/c12.jpeg",
    "/clients/c13.jpeg",
    "/clients/c14.jpeg",
    "/clients/c15.jpeg",
    "/clients/c26.webp",
    "/clients/c27.webp",
    "/clients/c18.jpeg",
    "/clients/c19.jpeg",
    "/clients/c30.webp",
    "/clients/c21.jpeg",
    "/clients/c29.webp",
    "/clients/c23.jpeg",
    "/clients/c24.jpeg",
    "/clients/c25.jpeg",
    "/clients/c31.webp",
  ];
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
    function heightHandler() {
      let sliderHeight = document.getElementById("sslide1")?.clientHeight;
      if (sliderHeight) {
        document.getElementById(
          "clientsSlider"
        ).style.height = `${sliderHeight}px`;
        document.getElementById("sleft").style.height = `${sliderHeight}px`;
        document.getElementById("sright").style.height = `${sliderHeight}px`;
      }
    }
    const run = setInterval(() => {
      clifwd();
      heightHandler();
    }, 2000);
    return () => clearInterval(run);
  }, [cli]);
  return (
    <div className="homeintrocont">
      <h1>Clients</h1>
      <div className="homeclients">
        <div className="homeclientsimg" id="clientsSlider">
          <button id="sleft" className="homebtn" onClick={clifwd}>
            <img loading="lazy" src="/l.webp" alt=" " />
          </button>
          {images.map((img, i) => (
            <div key={i} className="sslide" id={`sslide${i + 1}`}>
              <img loading="lazy" src={img} alt={`Client ${i + 1}`} />
            </div>
          ))}
          <button id="sright" className="homebtn" onClick={clibwd}>
            <img loading="lazy" src="/r.webp" alt=" " />
          </button>
        </div>
      </div>
    </div>
  );
};

export default memo(function Home({ Slider }) {
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
                  <img loading="lazy" src="/servmaint.webp" alt="" />
                </div>
                <div className="homeserv2">
                  <div>
                    <p>Supply</p>
                  </div>
                  <img loading="lazy" src="/servsupp.webp" alt="" />
                </div>
                <div className="homeserv3">
                  <div>
                    <p>Install</p>
                  </div>
                  <img loading="lazy" src="/servtech.webp" alt="" />
                </div>
              </div>
              <div>
                <div className="homeserv4">
                  <div>
                    <p>Technical Support</p>
                  </div>
                  <img loading="lazy" src="/servinstall.webp" alt="" />
                </div>
              </div>
              <div>
                <div className="homeserv5">
                  <div>
                    <p>Value Engineering</p>
                  </div>
                  <img loading="lazy" src="/servve.webp" alt="" />
                </div>
                <div className="homeserv6">
                  <div>
                    <p>Test and Commisioning</p>
                  </div>
                  <img loading="lazy" src="/servtest.webp" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </AnimationOnScroll>
      <Clients />
    </div>
  );
});

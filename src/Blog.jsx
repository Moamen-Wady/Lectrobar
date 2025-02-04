import { memo, useEffect } from "react";
import Blogb from "./components/Blogb";
import "./styles/blog.css";
import { Link } from "react-router-dom";
import { AnimationOnScroll } from "react-animation-on-scroll";

const Slider1 = memo(function Slider1({ Slider }) {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    fade: false,
    cssEase: "linear",
    arrows: false,
    pauseOnHover: false,
  };
  const slides = [
    {
      img: "/blog/blog31.jpg",
    },
    {
      img: "/blog/blog32.jpg",
    },
    {
      img: "/blog/blog33.jpg",
    },
    {
      img: "/blog/blog34.jpg",
    },
    {
      img: "/blog/blog35.jpg",
    },
    {
      img: "/blog/blog36.jpg",
    },
  ];

  return (
    <div className="blogintroanim">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={`SlideImg ${index + 1}`}>
            <img
              className="slide-image"
              src={slide.img}
              alt={`Slide ${index + 1}`}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
});

const Slider2 = memo(function Slider2({ Slider }) {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    fade: false,
    cssEase: "linear",
    arrows: false,
    pauseOnHover: false,
  };
  const slides = [
    {
      img: "/blog/blog1.jpg",
    },
    {
      img: "/blog/blog2.jpg",
    },
    {
      img: "/blog/blog3.jpg",
    },
    {
      img: "/blog/blog4.jpg",
    },
    {
      img: "/blog/blog5.jpg",
    },
    {
      img: "/blog/blog6.jpg",
    },
  ];

  return (
    <AnimationOnScroll animateOnce={false} animateIn="animate__fadeInDown">
      <div className="blogintroanim">
        <Slider {...settings}>
          {slides.map((slide, index) => (
            <div key={`SlideImg ${index + 1}`}>
              <img
                className="slide-image"
                src={slide.img}
                alt={`Slide ${index + 1}`}
              />
            </div>
          ))}
        </Slider>
      </div>
    </AnimationOnScroll>
  );
});

const Slider3 = memo(function Slider3({ Slider }) {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    fade: false,
    cssEase: "linear",
    arrows: false,
    pauseOnHover: false,
  };
  const slides = [
    {
      img: "/blog/blog21.jpg",
    },
    {
      img: "/blog/blog22.jpg",
    },
    {
      img: "/blog/blog23.jpg",
    },
    {
      img: "/blog/blog24.jpg",
    },
    {
      img: "/blog/blog25.jpg",
    },
    {
      img: "/blog/blog26.jpg",
    },
  ];

  return (
    <AnimationOnScroll animateOnce={false} animateIn="animate__fadeInDown">
      <div className="blogintroanim">
        <Slider {...settings}>
          {slides.map((slide, index) => (
            <div key={`SlideImg ${index + 1}`}>
              <img
                className="slide-image"
                src={slide.img}
                alt={`Slide ${index + 1}`}
              />
            </div>
          ))}
        </Slider>
      </div>
    </AnimationOnScroll>
  );
});

const Slider4 = memo(function Slider4({ Slider }) {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    fade: false,
    cssEase: "linear",
    arrows: false,
    pauseOnHover: false,
  };
  const slides = [
    {
      img: "/blog/blog41.jpg",
    },
    {
      img: "/blog/blog42.jpg",
    },
    {
      img: "/blog/blog43.jpg",
    },
    {
      img: "/blog/blog44.jpg",
    },
    {
      img: "/blog/blog45.jpg",
    },
    {
      img: "/blog/blog46.jpg",
    },
  ];

  return (
    <AnimationOnScroll animateOnce={false} animateIn="animate__fadeInDown">
      <div className="blogintroanim">
        <Slider {...settings}>
          {slides.map((slide, index) => (
            <div key={`SlideImg ${index + 1}`}>
              <img
                className="slide-image"
                src={slide.img}
                alt={`Slide ${index + 1}`}
              />
            </div>
          ))}
        </Slider>
      </div>
    </AnimationOnScroll>
  );
});

export default memo(function Blog({ Slider }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    let ver1 = document.getElementById("ver1");
    let ver2 = document.getElementById("ver2");
    let ver3 = document.getElementById("ver3");
    let hor1 = document.getElementById("hor1");
    let hor2 = document.getElementById("hor2");
    let hor3 = document.getElementById("hor3");
    let hor4 = document.getElementById("hor4");
    let bev1 = document.getElementById("bev1");
    let blogcircle1 = document.getElementById("blogcircle1");
    let blogcirclecont1 = document.getElementById("blogcirclecont1");
    hor1.style.width =
      (bev1.clientWidth * 0.1 + blogcirclecont1.clientWidth * 0.02).toString() +
      "px";
    hor2.style.width =
      (bev1.clientWidth * 0.1 + blogcirclecont1.clientWidth * 0.02).toString() +
      "px";
    hor3.style.width =
      (bev1.clientWidth * 0.1 + blogcirclecont1.clientWidth * 0.02).toString() +
      "px";
    hor4.style.width =
      (bev1.clientWidth * 0.1 + blogcirclecont1.clientWidth * 0.02).toString() +
      "px";
    ver1.style.right =
      (blogcircle1.clientWidth + hor1.clientWidth + 1).toString() + "px";
    ver1.style.height = bev1.clientHeight.toString() + "px";
    ver2.style.right =
      (blogcircle1.clientWidth + hor1.clientWidth + 1).toString() + "px";
    ver2.style.height = bev1.clientHeight.toString() + "px";
    ver3.style.right =
      (blogcircle1.clientWidth + hor1.clientWidth + 1).toString() + "px";
    ver3.style.height = bev1.clientHeight.toString() + "px";
  });
  return (
    <div>
      <Blogb />
      <div id="bev1" className="blogevent">
        <div className="blogcirclecont" id="blogcirclecont1">
          <div className="blogcircle" id="blogcircle1">
            <p>28-10-2023</p>
            <div className="blogvert" id="ver1"></div>
            <div className="bloghor" id="hor1"></div>
          </div>
        </div>

        <div className="blogslider">
          <Slider1 Slider={Slider} />
          <h1>Lectrobar Exhibition 2023</h1>
          <Link to="/e3" className="blogmorelink">
            More
          </Link>
        </div>
      </div>

      <AnimationOnScroll animateOnce={true} animateIn="animate__fadeIn">
        <div id="bev1" className="blogevent">
          <div className="blogcirclecont" id="blogcirclecont1">
            <div className="blogcircle" id="blogcircle1">
              <p>11-9-2023</p>
              <div className="blogvert" id="ver2"></div>
              <div className="bloghor" id="hor2"></div>
            </div>
          </div>

          <div className="blogslider">
            <Slider2 Slider={Slider} />
            <h1>CHINT Lectrobar Cairo Seminar</h1>
            <Link to="/e1" className="blogmorelink">
              More
            </Link>
          </div>
        </div>
      </AnimationOnScroll>

      <AnimationOnScroll animateOnce={true} animateIn="animate__fadeIn">
        <div className="blogevent">
          <div className="blogcirclecont">
            <div className="blogcircle">
              <p>7-9-2023</p>
              <div className="blogvert" id="ver3"></div>
              <div className="bloghor" id="hor3"></div>
            </div>
          </div>
          <div className="blogslider">
            <Slider3 Slider={Slider} />
            <h1>CHINT Lectrobar Borg El-Arab New Factory Opening</h1>
            <Link to="/e2" className="blogmorelink">
              More
            </Link>
          </div>
        </div>
      </AnimationOnScroll>

      <AnimationOnScroll animateOnce={true} animateIn="animate__fadeIn">
        <div className="blogevent">
          <div className="blogcirclecont">
            <div className="blogcircle">
              <p>28-10-2022</p>
              <div className="bloghor" id="hor4"></div>
            </div>
          </div>
          <div className="blogslider">
            <Slider4 Slider={Slider} />
            <h1>Lectrobar Exhibition 2022</h1>
            <Link to="/e4" className="blogmorelink">
              More
            </Link>
          </div>
        </div>
      </AnimationOnScroll>
    </div>
  );
});

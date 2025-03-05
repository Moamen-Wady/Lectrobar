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
    cssEase: "ease",
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
              className="slide-image-body"
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
    cssEase: "ease",
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
    <AnimationOnScroll animateOnce={true} animateIn="animate__fadeInDown">
      <div className="blogintroanim">
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
    cssEase: "ease",
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
    <AnimationOnScroll animateOnce={true} animateIn="animate__fadeInDown">
      <div className="blogintroanim">
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
    cssEase: "ease",
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
    <AnimationOnScroll animateOnce={true} animateIn="animate__fadeInDown">
      <div className="blogintroanim">
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
    </AnimationOnScroll>
  );
});

export default memo(function Blog({ Slider, debounce }) {
  useEffect(() => {
    window.scrollTo(0, 0);
    function handleLines() {
      let ver1 = document.getElementById("ver1");
      let ver2 = document.getElementById("ver2");
      let ver3 = document.getElementById("ver3");
      let hor1 = document.getElementById("hor1");
      let hor2 = document.getElementById("hor2");
      let hor3 = document.getElementById("hor3");
      let hor4 = document.getElementById("hor4");
      let bev1 = document.getElementById("bev1");
      let bev2 = document.getElementById("bev2");
      let bev3 = document.getElementById("bev3");
      let bev4 = document.getElementById("bev4");
      let blogcircle1 = document.getElementById("blogcircle1");
      let blogcirclecont1 = document.getElementById("blogcirclecont1");
      let blogcircle2 = document.getElementById("blogcircle2");
      let blogcirclecont2 = document.getElementById("blogcirclecont2");
      let blogcircle3 = document.getElementById("blogcircle3");
      let blogcirclecont3 = document.getElementById("blogcirclecont3");
      // let blogcircle4 = document.getElementById("blogcircle4");
      let blogcirclecont4 = document.getElementById("blogcirclecont4");
      let marginVal = Number(
        window
          .getComputedStyle(bev1)
          .getPropertyValue("margin-bottom")
          .slice(0, -2)
      );
      hor1.style.width = `${
        bev1.clientWidth * 0.1 + blogcirclecont1.clientWidth * 0.02
      }px`;
      hor2.style.width = `${
        bev2.clientWidth * 0.1 + blogcirclecont2.clientWidth * 0.02
      }px`;
      hor3.style.width = `${
        bev3.clientWidth * 0.1 + blogcirclecont3.clientWidth * 0.02
      }px`;
      hor4.style.width = `${
        bev4.clientWidth * 0.1 + blogcirclecont4.clientWidth * 0.02
      }px`;
      ver1.style.right = `${blogcircle1.clientWidth + hor1.clientWidth + 1}px`;
      ver2.style.right = `${blogcircle2.clientWidth + hor2.clientWidth + 1}px`;
      ver3.style.right = `${blogcircle3.clientWidth + hor3.clientWidth + 1}px`;
      ver1.style.height = `${bev1.clientHeight - 1.9 + marginVal}px`;
      ver2.style.height = `${bev2.clientHeight - 1.9 + marginVal}px`;
      ver3.style.height = `${bev3.clientHeight - 1.9 + marginVal}px`;
    }
    handleLines();
    const debounceLines = debounce(() => handleLines(), 100);
    window.onresize = debounceLines;
    return () => (window.onresize = null);
  }, []);
  return (
    <div>
      <Blogb />
      <div className="blogevent" id="bev1">
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
          <Link to="/Blog/3" className="blogmorelink">
            More
          </Link>
        </div>
      </div>

      <AnimationOnScroll animateOnce={true} animateIn="animate__fadeIn">
        <div className="blogevent" id="bev2">
          <div className="blogcirclecont" id="blogcirclecont2">
            <div className="blogcircle" id="blogcircle2">
              <p>11-9-2023</p>
              <div className="blogvert" id="ver2"></div>
              <div className="bloghor" id="hor2"></div>
            </div>
          </div>

          <div className="blogslider">
            <Slider2 Slider={Slider} />
            <h1>CHINT Lectrobar Cairo Seminar</h1>
            <Link to="/Blog/1" className="blogmorelink">
              More
            </Link>
          </div>
        </div>
      </AnimationOnScroll>

      <AnimationOnScroll animateOnce={true} animateIn="animate__fadeIn">
        <div className="blogevent" id="bev3">
          <div className="blogcirclecont" id="blogcirclecont3">
            <div className="blogcircle" id="blogcircle3">
              <p>7-9-2023</p>
              <div className="blogvert" id="ver3"></div>
              <div className="bloghor" id="hor3"></div>
            </div>
          </div>
          <div className="blogslider">
            <Slider3 Slider={Slider} />
            <h1>CHINT Lectrobar Borg El-Arab New Factory Opening</h1>
            <Link to="/Blog/2" className="blogmorelink">
              More
            </Link>
          </div>
        </div>
      </AnimationOnScroll>

      <AnimationOnScroll animateOnce={true} animateIn="animate__fadeIn">
        <div className="blogevent" id="bev4">
          <div className="blogcirclecont" id="blogcirclecont4">
            <div className="blogcircle" id="blogcircle4">
              <p>28-10-2022</p>
              <div className="bloghor" id="hor4"></div>
            </div>
          </div>
          <div className="blogslider">
            <Slider4 Slider={Slider} />
            <h1>Lectrobar Exhibition 2022</h1>
            <Link to="/Blog/4" className="blogmorelink">
              More
            </Link>
          </div>
        </div>
      </AnimationOnScroll>
    </div>
  );
});

import { memo } from "react";
import "./banner.css";
import { Link } from "react-router-dom";
import { useCallback } from "react";

export default memo(function Slidez({ Slider }) {
  const PrevArrow = useCallback((props) => {
    const { onClick } = props;
    return (
      <div className="btnbanner bleft" onClick={onClick}>
        <img src="/l.png" alt="" />
      </div>
    );
  }, []);
  const NextArrow = useCallback((props) => {
    const { onClick } = props;
    return (
      <div className="btnbanner bright" onClick={onClick}>
        <img src="/r.png" alt="" />
      </div>
    );
  }, []);
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    fade: false,
    cssEase: "ease",
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    pauseOnHover: false,
  };
  const slides = [
    {
      img: "/1.jpg",
    },
    {
      img: "/2.jpg",
    },
    {
      img: "/3.jpg",
    },
    {
      img: "/4.jpg",
    },
    {
      img: "/5.jpg",
    },
    {
      img: "/6.jpg",
    },
  ];

  return (
    <div className="banw">
      <img src="/btw.png" className="shade" />
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={`SlideImg ${index + 1}`}>
            <img
              className="slide-image-head"
              src={slide.img}
              alt={`Slide ${index + 1}`}
            />
          </div>
        ))}
      </Slider>
      <div className="btmportion">
        <div className="leftp1">
          <div>
            <span>
              <pre>At Lectrobar Quality Comes First</pre>
            </span>
          </div>
        </div>
        <div className="leftp2">
          <Link to="/Blog">Our News</Link>
        </div>
      </div>
    </div>
  );
});

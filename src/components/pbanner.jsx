import { memo } from "react";
import "./banner.css";
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
      img: "/pr1.jpeg",
    },
    {
      img: "/pr2.jpeg",
    },
    {
      img: "/pr3.jpeg",
    },
    {
      img: "/pr4.jpeg",
    },
    {
      img: "/pr5.jpeg",
    },
    {
      img: "/pr6.jpeg",
    },
  ];

  return (
    <div className="banw" id="banw">
      <img src="/btw.png" className="shade" />
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

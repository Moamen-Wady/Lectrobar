import { useEffect } from "react";
import "./styles/e4.css";
import { AnimationOnScroll } from "react-animation-on-scroll";
import { memo } from "react";

export default function E4({ Slider }) {
  const Slidere4 = memo(function Slidere4({ Slider }) {
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
        img: "/blog/ve41.jpg",
      },
      {
        img: "/blog/ve42.jpg",
      },
      {
        img: "/blog/ve43.jpg",
      },
      {
        img: "/blog/ve44.jpg",
      },
      {
        img: "/blog/ve45.jpg",
      },
    ];

    return (
      <div className="e4introanim">
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
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="e4cont">
      <h1>Lectrobar Exhibition 2023</h1>
      <div className="e4main">
        <div className="e4txt">
          <p>
            Lectrobar left a lasting impression at the Egypt Energy Expo in
            Cairo from October 28th to 30th, where our flagship product, the
            busbar, attracted keen interest from attendees. As we delved into
            our manufacturing history, the event served as a valuable
            opportunity for networking, emphasizing Lectrobar&apos;s commitment to
            innovation, and firmly establishing us as a leader in the industry.
          </p>
        </div>
        <div className="e4vid">
          <div className="e4slider">
            <Slidere4 Slider={Slider} />
          </div>
          {/* <iframe src="https://drive.google.com/file/d/1JN8mscx39b_l7Ofb46rwT8g80UsuxK1-/preview" allow="autoplay"></iframe> */}
        </div>
      </div>

      <AnimationOnScroll animateOnce={false} animateIn="animate__fadeInDown">
        <div className="e4pics">
          <div>
            <img className="e4img" src="/blog/e41.jpg" alt="" />
          </div>
          <div>
            <img className="e4img" src="/blog/e42.jpg" alt="" />
          </div>
          <div>
            <img className="e4img" src="/blog/e43.jpg" alt="" />
          </div>
          <div>
            <img className="e4img" src="/blog/e44.jpg" alt="" />
          </div>
          <div>
            <img className="e4img" src="/blog/e45.jpg" alt="" />
          </div>
          <div>
            <img className="e4img" src="/blog/e46.jpg" alt="" />
          </div>
        </div>
      </AnimationOnScroll>
    </div>
  );
}

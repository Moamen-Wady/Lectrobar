import { useEffect } from "react";
import "./styles/e3.css";
import { AnimationOnScroll } from "react-animation-on-scroll";
import { memo } from "react";

export default function E3({ Slider }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const Slidere3 = memo(function Slidere3({ Slider }) {
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
        img: "/blog/ve31.jpg",
      },
      {
        img: "/blog/ve32.jpg",
      },
      {
        img: "/blog/ve33.jpg",
      },
      {
        img: "/blog/ve34.jpg",
      },
      {
        img: "/blog/ve35.jpg",
      },
    ];

    return (
      <div className="e3introanim">
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
  return (
    <div className="e3cont">
      <h1>Lectrobar Exhibition 2023</h1>
      <div className="e3main">
        <div className="e3txt">
          <p>
            Lectrobar enjoyed a strong presence at the International
            Manufacturing Convention & Exhibition held in Cairo from October
            28th to 30th, drawing eager attendees. Visitors were keen to explore
            our advanced products, particularly our busbars and low-voltage
            panels, as we shared insights into our manufacturing history and
            highlighted our collaboration with the esteemed Chinese company
            CHNT. The event was further distinguished by the presence of
            President Abdelfatah El Sisi, underscoring the significance of our
            contributions to the industry. This provided a unique opportunity
            for networking and emphasized Lectrobar&apos;s commitment to innovation,
            solidifying our position as an industry leader.
          </p>
        </div>
        <div className="e3vid">
          <div className="e3slider">
            <Slidere3 Slider={Slider} />
          </div>
        </div>
      </div>

      <AnimationOnScroll animateOnce={false} animateIn="animate__fadeInDown">
        <div className="e3pics">
          <div>
            <img className="e3img" src="/blog/e31.jpg" alt="" />
          </div>
          <div>
            <img className="e3img" src="/blog/e32.jpg" alt="" />
          </div>
          <div>
            <img className="e3img" src="/blog/e33.jpg" alt="" />
          </div>
          <div>
            <img className="e3img" src="/blog/e34.jpg" alt="" />
          </div>
          <div>
            <img className="e3img" src="/blog/e35.jpg" alt="" />
          </div>
          <div>
            <img className="e3img" src="/blog/e36.jpg" alt="" />
          </div>
        </div>
      </AnimationOnScroll>
    </div>
  );
}

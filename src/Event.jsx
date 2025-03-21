import { useEffect } from "react";
import "./styles/event.css";
import { AnimationOnScroll } from "react-animation-on-scroll";
import { useParams } from "react-router";

export default function EventPage({ EventsData }) {
  const { event } = useParams();
  let currentEvent = EventsData[event - 1];
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [event]);

  return (
    <div className="eventcont">
      <h1>{currentEvent.name}</h1>
      <div className="eventmain">
        <div className="eventtxt">
          <p>{currentEvent.description} </p>
        </div>
        <div className="eventvid">
          {currentEvent.isVideo && (
            <iframe src={currentEvent.video} allow="autoplay"></iframe>
          )}
          {currentEvent.isSlider && (
            <div className="eventslider">{currentEvent.slider}</div>
          )}
        </div>
      </div>

      <AnimationOnScroll animateOnce={true} animateIn="animate__fadeInDown">
        <div className="eventpics">
          {currentEvent.images.map((img) => {
            return (
              <div key={img}>
                <img loading="lazy" className="eventimg" src={img} alt="" />
              </div>
            );
          })}
        </div>
      </AnimationOnScroll>
    </div>
  );
}

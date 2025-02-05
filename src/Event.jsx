import { useEffect } from "react";
import "./styles/event.css";
import { AnimationOnScroll } from "react-animation-on-scroll";
import { useParams } from "react-router";

export default function EventPage({ EventsData }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const { event } = useParams();
  let currentEvent = EventsData[event - 1];

  return (
    <div className="eventcont" >
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
              <div>
                <img className="eventimg" src={img} alt="" />
              </div>
            );
          })}
        </div>
      </AnimationOnScroll>
    </div>
  );
}

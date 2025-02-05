import "./styles/contact.css";
import ContB from "./components/ContB";
import { AnimationOnScroll } from "react-animation-on-scroll";
import { memo, useEffect } from "react";
import api from "./api";
import { useState } from "react";
import { useCallback } from "react";
import { useLayoutEffect } from "react";
export default memo(function Contact({ notify }) {
  let [dissub, setDissub] = useState([false, "all", "white", "black"]);

  const sForm = useCallback(async (e) => {
    e.preventDefault();
    setDissub([true, "none", "grey", "black"]);
    notify("info", "Please Wait...");
    const formData = new FormData(document.getElementById("form"));
    await api
      .post("/submit.php", formData)
      .then((data) => {
        if (data.data === "Message sent successfully!") {
          notify("success", "Message Sent Successfully!");
          document.getElementById("form").reset();
          setDissub([false, "all", "white", "black"]);
        } else {
          notify("error", "Failed to Send Message, Please Try Again");
          setDissub([false, "all", "white", "black"]);
        }
      })
      .catch(() => {
        notify("error", "Server Error, Please Try Again");
        setDissub([false, "all", "white", "black"]);
      });
  }, []);

useLayoutEffect(()=>{
  let info = document.getElementById("contactinfo").clientHeight
  let form = document.getElementById("form")
  form.style.height = `${info}px`
})

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <ContB />
      <AnimationOnScroll animateOnce={true} animateIn="animate__fadeInDown">
        <div className="contactmap">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d225027.9150066593!2d42.637496!3d28.205454!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145f62b720cf98d5%3A0x912ee6932ca2e223!2sLectrobar!5e0!3m2!1sen!2sus!4v1694504990774!5m2!1sen!2sus"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </AnimationOnScroll>

      <AnimationOnScroll animateOnce={true} animateIn="animate__fadeInDown">
        <div className="contactinfocont">
          <div className="contactinfo" id="contactinfo">
            <h1>Information</h1>
            <div>
              <h2>Address</h2>
              <img src="location.png" alt="location" className="lctn" />
              <a>The 2nd District, Borg El-Arab, Alexandria, Egypt</a>
            </div>
            <div>
              <h2>Phone</h2>
              <img src="phone.png" alt="phone" className="phn" />
              <a href="tel:+2011 0321 1875">+2011 0321 1875</a>
              <br />
              <a href="tel:+2010 2994 1145">+2010 2994 1145</a>
            </div>
            <div>
              <h2>E-mail</h2>
              <img src="mail.png" alt="mail" className="eml" />
              <a href="mailto:info@lectrobar.com">info@lectrobar.com</a>
            </div>
          </div>
          <div className="contactcform" id="contactform">
            <form
              onSubmit={sForm}
              method="post"
              id="form"
              className="contactform"
            >
              <input type="text" id="name" name="name" placeholder="Name" />
              <input
                type="email"
                id="email"
                name="email"
                placeholder="E-mail"
              />
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="Your Phone Number"
              />
              <input
                type="text"
                id="subject"
                name="subject"
                placeholder="Subject"
              />
              <textarea
                id="message"
                name="message"
                placeholder="Your Message"
              ></textarea>
              <input
                type="submit"
                value="Submit"
                disabled={dissub[0]}
                style={{
                  backgroundColor: dissub[2],
                  pointerEvents: dissub[1],
                  color: dissub[3],
                }}
              />
            </form>
          </div>
        </div>
      </AnimationOnScroll>

      <AnimationOnScroll animateOnce={true} animateIn="animate__fadeInDown">
        <div className="contactcsales">
          <div className="contactcslslt">
            <h1>Lectrobar Sales Representatives</h1>
          </div>
          <div className="contactcslsrt">
            <ul>
              <li>
                <a href="tel:+201103211875">+201103211875</a>
              </li>
              <li>
                <a href="tel:+201029941145">+201029941145</a>
              </li>
              <li>
                <a href="tel:+201110012245">+201110012245</a>
              </li>
              <li>
                <a href="tel:+201118605522">+201118605522</a>
              </li>
            </ul>
          </div>
        </div>
      </AnimationOnScroll>
    </div>
  );
});

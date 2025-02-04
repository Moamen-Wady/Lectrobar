import { useEffect } from "react";
import "./styles/lsbpro.css";
import Pbanner from "./components/pbanner";
export default function Lsbpro({ Slider }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Pbanner Slider={Slider} />
      <h1 className="lsbproh1">Lectrobar Sandwich Busduct (LSB PRO)</h1>
      <div className="lsbproltcont">
        <p className="lsbprotxtcont">
          <a href="/lsbpro.pdf" target="_blank">
            <img src="lsbproc.jpeg" alt="" className="lsbproimgcont" />
          </a>
          <span>
            Lectro has manufactured and installed hundreds of thousands of
            meters of busducts for large and small projects since 1975, both for
            the domestic market and for exports around the globe. The production
            takes place in a state of the art facility, using latest generation
            precision techniques including CNC, automation systems and robotics.
            Lectro products have been type tested by DEKRA laboratories of the
            Netherlands. Lectro busduct systems contain high quality components
            and are trusted for their high safety factor and long life. Lectro
            newest range, The «series LSB PRO» busduct provide currents from
            1000A to 6400A. We pride ourselves in delivering systems which
            exceed the expectation of our customers, both in terms of quality
            and in the level of customer service we provide.
          </span>
        </p>
      </div>
      <div className="lsbprortcont">
        <p className="lsbprotxtcont">
          <img src="lsbpro1.jpeg" alt="" className="lsbproimgcont" />
          <span>
            <strong>Busbar and Insulation:</strong>
            <br />
            Lectrobars are fabricated from high strength pure electrolytic
            copper with suitable cross section tin coated at contacts (
            conductivity better than 99.5%). Tin coating provides surface
            protection and good contact.
          </span>
        </p>
      </div>
      <div className="lsbproltcont">
        <p className="lsbprotxtcont">
          <img src="lsbpro2.jpeg" alt="" className="lsbproimgcont" />
          <span>
            Lectrobar busducts have a sandwich type non-ventilated
            configuration. The non-ventilated housing design excludes potential
            points of penetration by moisture and dust. Busbars for plug-in
            applications, have full size welded conductor tabs. This design
            extends the contact surfaces outside of the busduct casing and into
            the plug-in outlet. By this design, true sandwich configuration is
            maintained throughout the entire busduct length for both feeder and
            plug-in. This will eliminate the need to seperate or flare the
            conductor bars at the plug-in opening.
          </span>
        </p>
      </div>
    </div>
  );
}

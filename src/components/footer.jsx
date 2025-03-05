import "./footer.css";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="ff">
      <div className="xcon">
        <div className="portion">
          <div className="contact">
            <h1>
              <img className="imx" src="/logow2.png" alt="" />
            </h1>
            <div className="content">
              <p>
                <img src="/location.png" alt="location" />
                <a>
                  The 5<sup style={{ textTransform: "lowercase" }}>th </sup>
                  District, Borg El-Arab, Alexandria, Egypt
                </a>
              </p>
              <p>
                <img src="/phone.png" alt="phone" />
                <a href="tel:+2011 0321 1875">+2011 0321 1875</a>
              </p>
              <p>
                <img src="/mail.png" alt="mail" />
                <a href="mailto:info@lectrobar.com">info@lectrobar.com</a>
              </p>
            </div>
          </div>
        </div>
        <div className="portion">
          <h1>Learn More</h1>
          <ul className="ful">
            <li className="xl">
              <Link to="/" className="ll">
                Home
              </Link>
            </li>
            <li className="xl">
              <Link to="/Aboutus" className="ll">
                About Us
              </Link>
            </li>
            <li className="xl">
              <Link to="/Projects" className="ll">
                Projects
              </Link>
            </li>
            <li className="xl">
              <Link to="/Blog" className="ll">
                Blog
              </Link>
            </li>
            <li className="xl">
              <Link to="/Contact" className="ll">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div className="portion">
          <h1>Products</h1>
          <ul className="ful">
            <li className="xl">
              <Link to="/Products/lsbpro" className="ll">
                LSB PRO
              </Link>
            </li>
            <li className="xl">
              <Link to="/Products/lsb2" className="ll">
                LSB II
              </Link>
            </li>
            <li className="xl">
              <Link to="/Products/lsba" className="ll">
                LSB A
              </Link>
            </li>
            <li className="xl">
              <Link to="/Products/llb" className="ll">
                LLB
              </Link>
            </li>
          </ul>
        </div>
        <div className="portion">
          <h1>Services</h1>
          <ul className="ful">
            <li className="xl">
              <Link to="#" className="ll">
                Supply
              </Link>
            </li>
            <li className="xl">
              <Link to="#" className="ll">
                Install
              </Link>
            </li>
            <li className="xl">
              <Link to="#" className="ll">
                Test and Commisioning
              </Link>
            </li>
            <li className="xl">
              <Link to="#" className="ll">
                Value Engineering
              </Link>
            </li>
            <li className="xl">
              <Link to="#" className="ll">
                Maintenance
              </Link>
            </li>
            <li className="xl">
              <Link to="#" className="ll">
                Technical Support
              </Link>
            </li>
          </ul>
        </div>
        <div className="portion">
          <h1>Projects</h1>
          <ul className="ful">
            <li className="xl">
              <Link to="/Projects/Education" className="ll">
                Education
              </Link>
            </li>
            <li className="xl">
              <Link to="/Projects/Hospitals" className="ll">
                Hospitals
              </Link>
            </li>
            <li className="xl">
              <Link to="/Projects/Malls" className="ll">
                Malls
              </Link>
            </li>
            <li className="xl">
              <Link to="/Projects/Factories" className="ll">
                Factories
              </Link>
            </li>
            <li className="xl">
              <Link to="/Projects/Gov" className="ll">
                Governmental Org.
              </Link>
            </li>
            <li className="xl">
              <Link to="/Projects/Towers" className="ll">
                Towers
              </Link>
            </li>
            <li className="xl">
              <Link to="/Projects/Hotels" className="ll">
                Hotels
              </Link>
            </li>
            <li className="xl">
              <Link to="/Projects/Villages" className="ll">
                Villages
              </Link>
            </li>
            <li className="xl">
              <Link to="/Projects/Banks" className="ll">
                Banks
              </Link>
            </li>
            <li className="xl">
              <Link to="/Projects/Etc" className="ll">
                Etc
              </Link>
            </li>
            <li className="xl">
              <Link to="/Projects/TechCenters" className="ll">
                Tech Centers
              </Link>
            </li>
            <li className="xl">
              <Link to="#" className="ll">
                Exhibitions
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

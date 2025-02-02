import { useEffect, useState, useCallback, lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./styles/styles.css";
import "animate.css/animate.min.css";

const Home = lazy(() => import("./Home"));
const Projects = lazy(() => import("./Projects"));
const Project = lazy(() => import("./Project"));
const Contact = lazy(() => import("./Contact"));
const Lsba = lazy(() => import("./lsba"));
const Lsb2 = lazy(() => import("./lsb2"));
const Llb = lazy(() => import("./llb"));
const Lsbpro = lazy(() => import("./lsbpro"));
const Aboutus = lazy(() => import("./Aboutus"));
const Blog = lazy(() => import("./Blog"));
const E1 = lazy(() => import("./e1"));
const E2 = lazy(() => import("./e2"));
const E3 = lazy(() => import("./e3"));
const E4 = lazy(() => import("./e4"));
const Navbar = lazy(() => import("./components/Navbar"));
const Footer = lazy(() => import("./components/footer"));
const Sidebar = lazy(() => import("./components/Sidebar"));

const all = {
  Banks: [
    {
      category: "Banks",
      mainImg: "projects/banks/b1/1.jpg",
      projectName: "Central Bank of Oman",
      consultantName: "HP",
      consultantImg: "projects/consultants/bt1.png",
      constructorName: "aladrak",
      constructorImg: "projects/constructors/br1.png",
      meters: 705,
      type: "International",
      country: "Oman",
    },
    {
      category: "Banks",
      mainImg: "projects/banks/b2/1.jpg",
      projectName: "bank muscat",
      consultantName: "atkins",
      consultantImg: "projects/consultants/bt2.png",
      constructorName: "galfar",
      constructorImg: "projects/constructors/br2.png",
      meters: 190,
      type: "International",
      country: "Oman",
    },
    {
      category: "Banks",
      mainImg: "projects/banks/b3/1.jpeg",
      projectName: "Ahly United Bank",
      consultantName: "inter-Desing",
      consultantImg: "projects/consultants/bt3.jpg",
      constructorName: "Detac",
      constructorImg: "projects/constructors/br3.png",
      meters: 600,
      type: "national",
      country: "Egypt",
    },
  ],
  Education: [
    {
      category: "Education",
      mainImg: "projects/education/ed1/1.jpg",
      projectName: "Helwan university",
      consultantName: "dr.salam",
      consultantImg: "projects/consultants/edt1.png",
      constructorName: "almokaweloon al arab",
      constructorImg: "projects/constructors/edr1.png",
      meters: 590,
      type: "national",
      country: "Egypt",
    },
    {
      category: "Education",
      mainImg: "projects/education/ed2/1.jpg",
      projectName: "Additional Block Girls Primary school",
      consultantName: "ministry of education bahrain",
      consultantImg: "projects/consultants/edt2.jpg",
      constructorName: "EWA",
      constructorImg: "projects/constructors/edr2.jpg",
      meters: 0,
      type: "international",
      country: "Bahrain",
    },
    {
      category: "Education",
      mainImg: "projects/education/ed3/1.jpg",
      projectName: "additional academic block for girls intermediate school",
      consultantName: "ministry of education bahrain",
      consultantImg: "projects/consultants/edt2.jpg",
      constructorName: "EWA",
      constructorImg: "projects/constructors/edr2.jpg",
      meters: 0,
      type: "international",
      country: "Bahrain",
    },
    {
      category: "Education",
      mainImg: "projects/education/ed4/1.jpg",
      projectName:
        "additional academic block sports hall for girls primary school",
      consultantName: "ministry of education bahrain",
      consultantImg: "projects/consultants/edt2.jpg",
      constructorName: "EWA",
      constructorImg: "projects/constructors/edr2.jpg",
      meters: 0,
      type: "international",
      country: "Bahrain",
    },
  ],
  Etc: [
    {
      category: "Etc",
      mainImg: "projects/etc/etc1/1.png",
      projectName: "COC-CCC",
      consultantName: "consultant",
      consultantImg: "projects/consultants/etct1.png",
      constructorName: "constructor",
      constructorImg: "projects/constructors/etcr1.png",
      meters: 12725,
      type: "national",
      country: "Egypt",
    },
    {
      category: "Etc",
      mainImg: "projects/etc/etc2/1.jpg",
      projectName: "Giza System",
      consultantName: "ezzo",
      consultantImg: "projects/consultants/etct2.png",
      constructorName: "detac",
      constructorImg: "projects/constructors/br3.png",
      meters: 0,
      type: "national",
      country: "Egypt",
    },
    {
      category: "Etc",
      mainImg: "projects/etc/etc3/1.jpg",
      projectName: "tahrir square garage",
      consultantName: "ACE",
      consultantImg: "projects/consultants/etct3.png",
      constructorName: "al mokaweloon al arab",
      constructorImg: "projects/constructors/edr1.png",
      meters: 968,
      type: "national",
      country: "Egypt",
    },
    {
      category: "Etc",
      mainImg: "projects/etc/etc4/1.jpg",
      projectName: "Lekhwiya-Qatar",
      consultantName: "ECG",
      consultantImg: "projects/consultants/etct4.png",
      constructorName: "KCT",
      constructorImg: "projects/constructors/etcr4.png",
      meters: 650,
      type: "international",
      country: "Oman",
    },
    {
      category: "Etc",
      mainImg: "projects/etc/etc5/1.jpeg",
      projectName: "Eastern tobacco company",
      consultantName: "Eng.Abdo El Shahat",
      consultantImg: "",
      constructorName: "Detac",
      constructorImg: "projects/constructors/br3.png",
      meters: 67050,
      type: "national",
      country: "Egypt",
    },
  ],
  // Exhibitions: [],
  Factories: [
    {
      category: "Factories",
      mainImg: "projects/factories/f1/1.png",
      projectName: "BMIC",
      consultantName: "cummins",
      consultantImg: "projects/consultants/ft1.png",
      constructorName: "cummins",
      constructorImg: "projects/constructors/fr1.png",
      meters: 300,
      type: "national",
      country: "egypt",
    },
    {
      category: "Factories",
      mainImg: "projects/factories/f2/1.jpg",
      projectName: "water plant area duqm oman",
      consultantName: "L&T",
      consultantImg: "projects/consultants/ft2.jpg",
      constructorName: "ACTS",
      constructorImg: "projects/constructors/fr2.jpg",
      meters: 0,
      type: "international",
      country: "oman",
    },
  ],
  Gov: [
    {
      category: "Gov",
      mainImg: "projects/gov/g1/1.jpg",
      projectName: "ministry of manpower",
      consultantName: "Huckle",
      consultantImg: "projects/consultants/gt1.png",
      constructorName: "larsen & toubro",
      constructorImg: "projects/constructors/br1.png",
      meters: 1081,
      type: "national",
      country: "egypt",
    },
    {
      category: "Gov",
      mainImg: "projects/gov/g2/1.png",
      projectName: "prisidency of the council of ministers",
      consultantName: "consultant",
      consultantImg: "projects/consultants/gt2.png",
      constructorName: "orascom",
      constructorImg: "projects/constructors/br2.png",
      meters: 0,
      type: "national",
      country: "egypt",
    },
    {
      category: "Gov",
      mainImg: "projects/gov/g3/1.png",
      projectName: "ministries complex new capital egypt",
      consultantName: "consultant",
      consultantImg: "projects/consultants/gt3.png",
      constructorName: "constructor",
      constructorImg: "projects/constructors/br3.png",
      meters: 24065,
      type: "national",
      country: "Egypt",
    },
    {
      category: "Gov",
      mainImg: "projects/gov/g4/1.jpg",
      projectName: "egypt parlimant",
      consultantName: "consultant",
      consultantImg: "projects/consultants/gt4.png",
      constructorName: "al mokaweloon al arab",
      constructorImg: "projects/constructors/edr1.png",
      meters: 970,
      type: "national",
      country: "egypt",
    },
    {
      category: "Gov",
      mainImg: "projects/gov/g5/1.jpg",
      projectName: "new capital ",
      consultantName: "consultant",
      consultantImg: "projects/consultants/gt5.png",
      constructorName: "constructor",
      constructorImg: "projects/constructors/br5.png",
      meters: 34085,
      type: "national",
      country: "egypt",
    },
    {
      category: "Gov",
      mainImg: "projects/gov/g6/1.jpg",
      projectName: "civilization museum",
      consultantName: "crown home",
      consultantImg: "projects/consultants/gt6.jpg",
      constructorName: "hassan allam",
      constructorImg: "projects/constructors/br6.png",
      meters: 3135,
      type: "national",
      country: "Egypt",
    },
  ],
  Hospitals: [
    {
      category: "Hospitals",
      mainImg: "projects/hospitals/hos1/1.jpg",
      projectName: "gulf medical university and hospital",
      consultantName: "HOSMAC",
      consultantImg: "projects/consultants/host1.jpg",
      constructorName: "THUMBAY",
      constructorImg: "projects/constructors/hosr1.jpg",
      meters: 0,
      type: "International",
      country: "UAE",
    },
  ],
  Hotels: [
    {
      category: "Hotels",
      mainImg: "projects/hotels/h1/1.jpg",
      projectName: "anantara",
      consultantName: "ECG",
      consultantImg: "projects/consultants/etct4.png",
      constructorName: "KCT",
      constructorImg: "projects/constructors/etcr4.png",
      meters: 445,
      type: "International",
      country: "Qatar",
    },
    {
      category: "Hotels",
      mainImg: "projects/hotels/h2/1.png",
      projectName: "choueifat hotel",
      consultantName: "Shaker",
      consultantImg: "projects/consultants/ht2.png",
      constructorName: "amlak",
      constructorImg: "projects/constructors/hr2.png",
      meters: 6350,
      type: "national",
      country: "egypt",
    },
    {
      category: "Hotels",
      mainImg: "projects/hotels/h3/1.jpeg",
      projectName: "porto marina",
      consultantName: "Crown Home",
      consultantImg: "projects/consultants/gt6.jpg",
      constructorName: "amer",
      constructorImg: "projects/constructors/hr3.png",
      meters: 2240,
      type: "national",
      country: "Egypt",
    },
    {
      category: "Hotels",
      mainImg: "projects/hotels/h4/1.jpg",
      projectName: "raya plaza",
      consultantName: "Shaker",
      consultantImg: "projects/consultants/ht2.png",
      constructorName: "ABB",
      constructorImg: "projects/constructors/hr4.png",
      meters: 1004,
      type: "national",
      country: "Egypt",
    },
    {
      category: "Hotels",
      mainImg: "projects/hotels/h5/1.jpg",
      projectName: "City Max Hotels",
      consultantName: "arkiplan",
      consultantImg: "projects/consultants/ht5.jpg",
      constructorName: "Chirag",
      constructorImg: "projects/constructors/hr5.jpg",
      meters: 0,
      type: "international",
      country: "UAE",
    },
  ],
  Malls: [
    {
      category: "Malls",
      mainImg: "projects/malls/m1/1.png",
      projectName: "The Polygon",
      consultantName: "shaker",
      consultantImg: "projects/consultants/ht2.png",
      constructorName: "siemens",
      constructorImg: "projects/constructors/mr1.png",
      meters: 1324,
      type: "national",
      country: "egypt",
    },
    {
      category: "Malls",
      mainImg: "projects/malls/m2/1.png",
      projectName: "forty west",
      consultantName: "shaker",
      consultantImg: "projects/consultants/ht2.png",
      constructorName: "hassan allam",
      constructorImg: "projects/constructors/gr6.jpg",
      meters: 460,
      type: "national",
      country: "egypt",
    },
    {
      category: "Malls",
      mainImg: "projects/malls/m3/1.jpeg",
      projectName: "Carrefour",
      consultantName: "shaker",
      consultantImg: "projects/consultants/ht2.png",
      constructorName: "siemens",
      constructorImg: "projects/constructors/mr1.png",
      meters: 465,
      type: "national",
      country: "egypt",
    },
    {
      category: "Malls",
      mainImg: "projects/malls/m4/1.jpeg",
      projectName: "Mirage Mall",
      consultantName: "KE",
      consultantImg: "projects/consultants/mt4.png",
      constructorName: "detac",
      constructorImg: "projects/constructors/br3.png",
      meters: 1045,
      type: "national",
      country: "egypt",
    },
    {
      category: "Malls",
      mainImg: "projects/malls/m5/1.jpg",
      projectName: "DAMAC park Avenue",
      consultantName: "KA",
      consultantImg: "projects/consultants/mt5.png",
      constructorName: "detac",
      constructorImg: "projects/constructors/br3.png",
      meters: 320,
      type: "national",
      country: "egypt",
    },
    {
      category: "Malls",
      mainImg: "projects/malls/m6/1.jpg",
      projectName: "Capital Business Parks",
      consultantName: "KA",
      consultantImg: "projects/consultants/mt5.png",
      constructorName: "durrah",
      constructorImg: "projects/constructors/mr6.png",
      meters: 180,
      type: "national",
      country: "egypt",
    },
    {
      category: "Malls",
      mainImg: "projects/malls/m7/1.jpg",
      projectName: "The dubai mall fashion atrium expansion",
      consultantName: "WSP",
      consultantImg: "projects/consultants/mt7.jpg",
      constructorName: "SP",
      constructorImg: "projects/constructors/mr7.png",
      meters: 0,
      type: "international",
      country: "UAE",
    },
    {
      category: "Malls",
      mainImg: "projects/malls/m8/1.jpg",
      projectName: "al araimi boulivard mall",
      consultantName: "AEB",
      consultantImg: "projects/consultants/mt8.jpg",
      constructorName: "UNIQUE",
      constructorImg: "projects/constructors/mr8.jpg",
      meters: 0,
      type: "international",
      country: "Oman",
    },
  ],
  TechCenters: [
    {
      category: "TechCenters",
      mainImg: "projects/techCenters/tc1/1.png",
      projectName: "NN1",
      consultantName: "consultant",
      consultantImg: "projects/consultants/tct1.png",
      constructorName: "orascom",
      constructorImg: "projects/constructors/gr2.png",
      meters: 7720,
      type: "national",
      country: "Egypt",
    },
    {
      category: "TechCenters",
      mainImg: "projects/techCenters/tc2/1.png",
      projectName: "NN2",
      consultantName: "consultant",
      consultantImg: "projects/consultants/tct1.png",
      constructorName: "hassan allam",
      constructorImg: "projects/constructors/gr6.jpg",
      meters: 5205,
      type: "national",
      country: "Egypt",
    },
    {
      category: "TechCenters",
      mainImg: "projects/techCenters/tc3/1.jpg",
      projectName: "Etisalat",
      consultantName: "KE",
      consultantImg: "projects/consultants/mt4.png",
      constructorName: "conserv",
      constructorImg: "projects/constructors/tcr3.png",
      meters: 870,
      type: "national",
      country: "Egypt",
    },
    {
      category: "TechCenters",
      mainImg: "projects/techCenters/tc4/1.jpg",
      projectName: "Vodafone",
      consultantName: "shaker",
      consultantImg: "projects/consultants/ht2.png",
      constructorName: "ABB",
      constructorImg: "projects/constructors/hr4.png",
      meters: 280,
      type: "national",
      country: "Egypt",
    },
  ],
  Towers: [
    {
      category: "Towers",
      mainImg: "projects/towers/t1/1.png",
      projectName: "el mazroei tower",
      consultantName: "consultair",
      consultantImg: "projects/consultants/tt1.png",
      constructorName: "JAMS",
      constructorImg: "projects/constructors/tr1.jpg",
      meters: 440,
      type: "iternational",
      country: "UAE",
    },
    {
      category: "Towers",
      mainImg: "projects/towers/t2/1.png",
      projectName: "al katami tower fujairah",
      consultantName: "Emirates Engineering Consulting",
      consultantImg: "projects/consultants/tt2.png",
      constructorName: "JAMS",
      constructorImg: "projects/constructors/tr1.jpg",
      meters: 100,
      type: "iternational",
      country: "UAE",
    },
    {
      category: "Towers",
      mainImg: "projects/towers/t3/1.jpg",
      projectName: "al baraha",
      consultantName: "EHAF",
      consultantImg: "projects/consultants/tt3.png",
      constructorName: "CRC",
      constructorImg: "projects/constructors/tr3.png",
      meters: 450,
      type: "iternational",
      country: "Qatar",
    },
    {
      category: "Towers",
      mainImg: "projects/towers/t4/1.png",
      projectName: "al jasra twin tower",
      consultantName: "EHAF",
      consultantImg: "projects/consultants/tt3.png",
      constructorName: "CRC",
      constructorImg: "projects/constructors/tr3.png",
      meters: 884,
      type: "iternational",
      country: "Qatar",
    },
    {
      category: "Towers",
      mainImg: "projects/towers/t5/1.jpg",
      projectName: "shaali tower",
      consultantName: "KWEC",
      consultantImg: "projects/consultants/tt5.png",
      constructorName: "MEC",
      constructorImg: "projects/constructors/tr5.png",
      meters: 425,
      type: "iternational",
      country: "UAE",
    },
    {
      category: "Towers",
      mainImg: "projects/towers/t6/1.jpg",
      projectName: "zafranah tower",
      consultantName: "NEXT",
      consultantImg: "projects/consultants/tt6.png",
      constructorName: "BEMCO",
      constructorImg: "projects/constructors/tr6.png",
      meters: 830,
      type: "iternational",
      country: "UAE",
    },
    {
      category: "Towers",
      mainImg: "projects/towers/t7/1.jpg",
      projectName: "smouha towers",
      consultantName: "egyptian armed forces engineering authority",
      consultantImg: "projects/consultants/tt7.jpg",
      constructorName: "hassan allam",
      constructorImg: "projects/constructors/gr6.jpg",
      meters: 640,
      type: "national",
      country: "egypt",
    },
    {
      category: "Towers",
      mainImg: "projects/towers/t8/1.png",
      projectName: "marina mix",
      consultantName: "AEB",
      consultantImg: "projects/consultants/tt8.jpg",
      constructorName: "Metrix",
      constructorImg: "projects/constructors/tr8.png",
      meters: 290,
      type: "national",
      country: "Egypt",
    },
    {
      category: "Towers",
      mainImg: "projects/towers/t9/1.png",
      projectName: "oasis tower 2",
      consultantName: "Canadian Consultant",
      consultantImg: "projects/towers/t9/t.jpg",
      constructorName: "gulfasia",
      constructorImg: "projects/towers/t9/r.jpg",
      meters: 0,
      type: "international",
      country: "UAE",
    },
    {
      category: "Towers",
      mainImg: "projects/towers/t10/1.jpg",
      projectName: "clock tower",
      consultantName: "Proarc",
      consultantImg: "projects/towers/t10/t.jpg",
      constructorName: "kahrab",
      constructorImg: "projects/towers/t10/r.jpg",
      meters: 0,
      type: "international",
      country: "UAE",
    },
    {
      category: "Towers",
      mainImg: "projects/towers/t11/1.jpg",
      projectName: "aka residence",
      consultantName: "POE",
      consultantImg: "projects/towers/t11/t.jpg",
      constructorName: "Dubai walls",
      constructorImg: "projects/towers/t11/r.png",
      meters: 0,
      type: "international",
      country: "UAE",
    },
    {
      category: "Towers",
      mainImg: "projects/towers/t12/1.jpg",
      projectName: "Centeral Park Tower",
      consultantName: "sigmaart",
      consultantImg: "projects/towers/t12/t.jpg",
      constructorName: "AQTS",
      constructorImg: "projects/towers/t12/r.jpg",
      meters: 0,
      type: "international",
      country: "UAE",
    },
    {
      category: "Towers",
      mainImg: "projects/towers/t13/1.jpg",
      projectName: "Rose 10",
      consultantName: "Bel-Yoahah",
      consultantImg: "projects/towers/t13/t.jpg",
      constructorName: "Eastern International",
      constructorImg: "projects/towers/t13/r.jpg",
      meters: 0,
      type: "international",
      country: "UAE",
    },
    {
      category: "Towers",
      mainImg: "projects/towers/t14/1.jpg",
      projectName: "Khalifa Khamees Matter ",
      consultantName: "EDMAC",
      consultantImg: "projects/towers/t14/t.jpg",
      constructorName: "lord",
      constructorImg: "projects/towers/t14/r.jpg",
      meters: 0,
      type: "international",
      country: "UAE",
    },
    {
      category: "Towers",
      mainImg: "projects/towers/t15/1.jpg",
      projectName: "charitable society fujairah",
      consultantName: "Talal Nawfal",
      consultantImg: "projects/towers/t15/t.jpg",
      constructorName: "FNCT",
      constructorImg: "projects/towers/t15/r.jpg",
      meters: 0,
      type: "international",
      country: "UAE",
    },
    {
      category: "Towers",
      mainImg: "projects/towers/t16/1.jpg",
      projectName: "Ebraheim Ali Abdullah ",
      consultantName: "FEDC",
      consultantImg: "projects/towers/t16/t.jpg",
      constructorName: "Skyline",
      constructorImg: "projects/towers/t16/r.jpg",
      meters: 0,
      type: "international",
      country: "UAE",
    },
    {
      category: "Towers",
      mainImg: "projects/towers/t17/1.jpg",
      projectName: "Clouds 9",
      consultantName: "Crown",
      consultantImg: "projects/towers/t17/t.jpg",
      constructorName: "MESC",
      constructorImg: "projects/towers/t17/r.jpg",
      meters: 0,
      type: "international",
      country: "UAE",
    },
    {
      category: "Towers",
      mainImg: "projects/towers/t18/1.jpg",
      projectName: "Naresh Kumar Building Ajman",
      consultantName: "AL Nakheel",
      consultantImg: "projects/towers/t18/t.jpg",
      constructorName: "La Casa",
      constructorImg: "projects/towers/t18/r.jpg",
      meters: 0,
      type: "international",
      country: "UAE",
    },
    {
      category: "Towers",
      mainImg: "projects/towers/t19/1.jpg",
      projectName: "Qurtaba Tower Ajman",
      consultantName: "AL Nakheel",
      consultantImg: "projects/towers/t19/t.jpg",
      constructorName: "Al Alaa",
      constructorImg: "projects/towers/t19/r.jpg",
      meters: 0,
      type: "international",
      country: "UAE",
    },
    {
      category: "Towers",
      mainImg: "projects/towers/t20/1.jpg",
      projectName: "Globel Gulf 2 Dubai",
      consultantName: "Dimensions",
      consultantImg: "projects/towers/t20/t.jpg",
      constructorName: "DUBCO",
      constructorImg: "projects/towers/t20/r.jpg",
      meters: 0,
      type: "international",
      country: "UAE",
    },
    {
      category: "Towers",
      mainImg: "projects/towers/t21/1.jpg",
      projectName: "Goshi Residence Tower Dubailand",
      consultantName: "NEXT",
      consultantImg: "projects/towers/t21/t.jpg",
      constructorName: "BEST",
      constructorImg: "projects/towers/t21/r.jpg",
      meters: 0,
      type: "international",
      country: "UAE",
    },
  ],
  Villages: [
    {
      category: "Villages",
      mainImg: "projects/villages/v1/1.png",
      projectName: "LamaR BAUSHER",
      consultantName: "HP",
      consultantImg: "projects/consultants/bt1.png",
      constructorName: "larsen & toubro",
      constructorImg: "projects/constructors/gr1.png",
      meters: 345,
      type: "International",
      country: "Oman",
    },
    {
      category: "Villages",
      mainImg: "projects/villages/v2/1.jpg",
      projectName: "smart village",
      consultantName: "shaker",
      consultantImg: "projects/consultants/ht2.png",
      constructorName: "siemens",
      constructorImg: "projects/constructors/mr1.png",
      meters: 960,
      type: "national",
      country: "egypt",
    },
    {
      category: "Villages",
      mainImg: "projects/villages/v3/1.jpg",
      projectName: "beverly hills",
      consultantName: "ACE",
      consultantImg: "projects/consultants/etct3.png",
      constructorName: "al mokaweloon al arab",
      constructorImg: "projects/constructors/edr1.png",
      meters: 350,
      type: "national",
      country: "egypt",
    },
  ],
};

function App() {
  useEffect(() => {
    if (navigator.userAgent.match(/samsung/i)) {
      alert(
        "Your browser (Samsung Internet) may not show this website's colors correctly in Dark Mode." +
          "Consider using a standards-compliant browser." +
          "We Recommend Google Chrome or Microsoft Edge"
      );
    }
    window.scrollTo(0, 0);
  }, []);

  const [hash, setHash] = useState();

  const scrollToProject = useCallback(() => {
    if (hash !== undefined) {
      const proj = document.getElementById(hash);
      if (proj) {
        setTimeout(() => {
          proj.scrollIntoView({
            behavior: "smooth",
            block: "center",
            inline: "center",
          });
        }, 10);
      } else {
        window.scrollTo(0, 0);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [hash]);

  const sliding = useCallback((sv, abb, limit, go, come, cb, rcb, to) => {
    setTimeout(() => {
      const x = document.getElementById(sv + abb);
      x.style.animationName = go;

      if (sv === limit) {
        const xx = document.getElementById(0 + abb);
        xx.style.animationName = come;
        rcb();
      } else {
        const ss = document.getElementById(sv + 1 + abb);
        ss.style.animationName = come;
        cb();
      }
    }, to);
  }, []);

  const addPaddingWhenNoBanner = useCallback((container) => {
    const padding = document.getElementById("nvb").clientHeight * 1.1;
    container.style.paddingTop = `${padding}px`;
  }, []);

  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Navbar />
        <Sidebar />
        <Routes>
          <Route path="/" element={<Home sliding={sliding} />} />
          <Route path="/index" element={<Home sliding={sliding} />} />
          <Route path="/Aboutus" element={<Aboutus />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Blog" element={<Blog sliding={sliding} />} />
          <Route path="/e1" element={<E1 />} />
          <Route path="/e2" element={<E2 />} />
          <Route path="/e3" element={<E3 sliding={sliding} />} />
          <Route path="/e4" element={<E4 sliding={sliding} />} />
          <Route path="/lsba" element={<Lsba sliding={sliding} />} />
          <Route path="/lsb2" element={<Lsb2 sliding={sliding} />} />
          <Route path="/llb" element={<Llb sliding={sliding} />} />
          <Route path="/lsbpro" element={<Lsbpro sliding={sliding} />} />
          <Route
            path="/Projects"
            element={<Projects setHash={setHash} all={all} />}
          />
          <Route
            path="/Projects/:project"
            element={
              <Project
                scrollToProject={scrollToProject}
                add={addPaddingWhenNoBanner}
                all={all}
              />
            }
          />
        </Routes>
        <Footer />
      </Suspense>
    </Router>
  );
}

export default App;

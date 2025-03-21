import { useEffect, useState, useCallback, lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./styles/styles.css";
import "animate.css/animate.min.css";
import { Slide, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Loading from "./Loading";
import Errorp from "./Errorp";
import RouteChangeHandler from "./RouteChangeHandler";
const ProductPage = lazy(() => import("./Product"));
const EventPage = lazy(() => import("./Event"));
const Home = lazy(() => import("./Home"));
const Projects = lazy(() => import("./Projects"));
const Project = lazy(() => import("./Project"));
const Contact = lazy(() => import("./Contact"));
const Aboutus = lazy(() => import("./Aboutus"));
const Blog = lazy(() => import("./Blog"));
const Navbar = lazy(() => import("./components/Navbar"));
const Footer = lazy(() => import("./components/footer"));
const Sidebar = lazy(() => import("./components/Sidebar"));

const ProjectsData = {
  Banks: [
    {
      category: "Banks",
      mainImg: "/projects/banks/b1/1.webp",
      projectName: "Central Bank of Oman",
      consultantName: "HP",
      consultantImg: "/projects/consultants/bt1.webp",
      constructorName: "aladrak",
      constructorImg: "/projects/constructors/br1.webp",
      meters: 705,
      type: "International",
      country: "Oman",
    },
    {
      category: "Banks",
      mainImg: "/projects/banks/b2/1.webp",
      projectName: "bank muscat",
      consultantName: "atkins",
      consultantImg: "/projects/consultants/bt2.webp",
      constructorName: "galfar",
      constructorImg: "/projects/constructors/br2.webp",
      meters: 190,
      type: "International",
      country: "Oman",
    },
    {
      category: "Banks",
      mainImg: "/projects/banks/b3/1.jpeg",
      projectName: "Ahly United Bank",
      consultantName: "inter-Desing",
      consultantImg: "/projects/consultants/bt3.webp",
      constructorName: "Detac",
      constructorImg: "/projects/constructors/br3.webp",
      meters: 600,
      type: "national",
      country: "Egypt",
    },
  ],
  Education: [
    {
      category: "Education",
      mainImg: "/projects/education/ed1/1.webp",
      projectName: "Helwan university",
      consultantName: "dr.salam",
      consultantImg: "/projects/consultants/edt1.webp",
      constructorName: "almokaweloon al arab",
      constructorImg: "/projects/constructors/edr1.webp",
      meters: 590,
      type: "national",
      country: "Egypt",
    },
    {
      category: "Education",
      mainImg: "/projects/education/ed2/1.webp",
      projectName: "Additional Block Girls Primary school",
      consultantName: "ministry of education bahrain",
      consultantImg: "/projects/consultants/edt2.webp",
      constructorName: "EWA",
      constructorImg: "/projects/constructors/edr2.webp",
      meters: 0,
      type: "international",
      country: "Bahrain",
    },
    {
      category: "Education",
      mainImg: "/projects/education/ed3/1.webp",
      projectName: "additional academic block for girls intermediate school",
      consultantName: "ministry of education bahrain",
      consultantImg: "/projects/consultants/edt2.webp",
      constructorName: "EWA",
      constructorImg: "/projects/constructors/edr2.webp",
      meters: 0,
      type: "international",
      country: "Bahrain",
    },
    {
      category: "Education",
      mainImg: "/projects/education/ed4/1.webp",
      projectName:
        "additional academic block sports hall for girls primary school",
      consultantName: "ministry of education bahrain",
      consultantImg: "/projects/consultants/edt2.webp",
      constructorName: "EWA",
      constructorImg: "/projects/constructors/edr2.webp",
      meters: 0,
      type: "international",
      country: "Bahrain",
    },
  ],
  Etc: [
    {
      category: "Etc",
      mainImg: "/projects/etc/etc1/1.webp",
      projectName: "COC-CCC",
      consultantName: "consultant",
      consultantImg: "/projects/consultants/etct1.webp",
      constructorName: "constructor",
      constructorImg: "/projects/constructors/etcr1.webp",
      meters: 12725,
      type: "national",
      country: "Egypt",
    },
    {
      category: "Etc",
      mainImg: "/projects/etc/etc2/1.webp",
      projectName: "Giza System",
      consultantName: "ezzo",
      consultantImg: "/projects/consultants/etct2.webp",
      constructorName: "detac",
      constructorImg: "/projects/constructors/br3.webp",
      meters: 0,
      type: "national",
      country: "Egypt",
    },
    {
      category: "Etc",
      mainImg: "/projects/etc/etc3/1.webp",
      projectName: "tahrir square garage",
      consultantName: "ACE",
      consultantImg: "/projects/consultants/etct3.webp",
      constructorName: "al mokaweloon al arab",
      constructorImg: "/projects/constructors/edr1.webp",
      meters: 968,
      type: "national",
      country: "Egypt",
    },
    {
      category: "Etc",
      mainImg: "/projects/etc/etc4/1.webp",
      projectName: "Lekhwiya-Qatar",
      consultantName: "ECG",
      consultantImg: "/projects/consultants/etct4.webp",
      constructorName: "KCT",
      constructorImg: "/projects/constructors/etcr4.webp",
      meters: 650,
      type: "international",
      country: "Oman",
    },
    {
      category: "Etc",
      mainImg: "/projects/etc/etc5/1.jpeg",
      projectName: "Eastern tobacco company",
      consultantName: "Eng.Abdo El Shahat",
      consultantImg: "/logo.webp",
      constructorName: "Detac",
      constructorImg: "/projects/constructors/br3.webp",
      meters: 67050,
      type: "national",
      country: "Egypt",
    },
  ],
  // Exhibitions: [],
  Factories: [
    {
      category: "Factories",
      mainImg: "/projects/factories/f1/1.webp",
      projectName: "BMIC",
      consultantName: "cummins",
      consultantImg: "/projects/consultants/ft1.webp",
      constructorName: "cummins",
      constructorImg: "/projects/constructors/fr1.webp",
      meters: 300,
      type: "national",
      country: "egypt",
    },
    {
      category: "Factories",
      mainImg: "/projects/factories/f2/1.webp",
      projectName: "water plant area duqm oman",
      consultantName: "L&T",
      consultantImg: "/projects/consultants/ft2.webp",
      constructorName: "ACTS",
      constructorImg: "/projects/constructors/fr2.webp",
      meters: 0,
      type: "international",
      country: "oman",
    },
  ],
  Gov: [
    {
      category: "Gov",
      mainImg: "/projects/gov/g1/1.webp",
      projectName: "ministry of manpower",
      consultantName: "Huckle",
      consultantImg: "/projects/consultants/gt1.webp",
      constructorName: "larsen & toubro",
      constructorImg: "/projects/constructors/br1.webp",
      meters: 1081,
      type: "national",
      country: "egypt",
    },
    {
      category: "Gov",
      mainImg: "/projects/gov/g2/1.webp",
      projectName: "prisidency of the council of ministers",
      consultantName: "consultant",
      consultantImg: "/projects/consultants/gt2.webp",
      constructorName: "orascom",
      constructorImg: "/projects/constructors/br2.webp",
      meters: 0,
      type: "national",
      country: "egypt",
    },
    {
      category: "Gov",
      mainImg: "/projects/gov/g3/1.webp",
      projectName: "ministries complex new capital egypt",
      consultantName: "consultant",
      consultantImg: "/projects/consultants/gt3.webp",
      constructorName: "constructor",
      constructorImg: "/projects/constructors/br3.webp",
      meters: 24065,
      type: "national",
      country: "Egypt",
    },
    {
      category: "Gov",
      mainImg: "/projects/gov/g4/1.webp",
      projectName: "egypt parlimant",
      consultantName: "consultant",
      consultantImg: "/projects/consultants/gt4.webp",
      constructorName: "al mokaweloon al arab",
      constructorImg: "/projects/constructors/edr1.webp",
      meters: 970,
      type: "national",
      country: "egypt",
    },
    {
      category: "Gov",
      mainImg: "/projects/gov/g5/1.webp",
      projectName: "new capital ",
      consultantName: "consultant",
      consultantImg: "/projects/consultants/gt5.webp",
      constructorName: "constructor",
      constructorImg: "/projects/constructors/br5.webp",
      meters: 34085,
      type: "national",
      country: "egypt",
    },
    {
      category: "Gov",
      mainImg: "/projects/gov/g6/1.webp",
      projectName: "civilization museum",
      consultantName: "crown home",
      consultantImg: "/projects/consultants/gt6.webp",
      constructorName: "hassan allam",
      constructorImg: "/projects/constructors/br6.webp",
      meters: 3135,
      type: "national",
      country: "Egypt",
    },
  ],
  Hospitals: [
    {
      category: "Hospitals",
      mainImg: "/projects/hospitals/hos1/1.webp",
      projectName: "gulf medical university and hospital",
      consultantName: "HOSMAC",
      consultantImg: "/projects/consultants/host1.webp",
      constructorName: "THUMBAY",
      constructorImg: "/projects/constructors/hosr1.webp",
      meters: 0,
      type: "International",
      country: "UAE",
    },
  ],
  Hotels: [
    {
      category: "Hotels",
      mainImg: "/projects/hotels/h1/1.webp",
      projectName: "anantara",
      consultantName: "ECG",
      consultantImg: "/projects/consultants/etct4.webp",
      constructorName: "KCT",
      constructorImg: "/projects/constructors/etcr4.webp",
      meters: 445,
      type: "International",
      country: "Qatar",
    },
    {
      category: "Hotels",
      mainImg: "/projects/hotels/h2/1.webp",
      projectName: "choueifat hotel",
      consultantName: "Shaker",
      consultantImg: "/projects/consultants/ht2.webp",
      constructorName: "amlak",
      constructorImg: "/projects/constructors/hr2.webp",
      meters: 6350,
      type: "national",
      country: "egypt",
    },
    {
      category: "Hotels",
      mainImg: "/projects/hotels/h3/1.jpeg",
      projectName: "porto marina",
      consultantName: "Crown Home",
      consultantImg: "/projects/consultants/gt6.webp",
      constructorName: "amer",
      constructorImg: "/projects/constructors/hr3.webp",
      meters: 2240,
      type: "national",
      country: "Egypt",
    },
    {
      category: "Hotels",
      mainImg: "/projects/hotels/h4/1.webp",
      projectName: "raya plaza",
      consultantName: "Shaker",
      consultantImg: "/projects/consultants/ht2.webp",
      constructorName: "ABB",
      constructorImg: "/projects/constructors/hr4.webp",
      meters: 1004,
      type: "national",
      country: "Egypt",
    },
    {
      category: "Hotels",
      mainImg: "/projects/hotels/h5/1.webp",
      projectName: "City Max Hotels",
      consultantName: "arkiplan",
      consultantImg: "/projects/consultants/ht5.webp",
      constructorName: "Chirag",
      constructorImg: "/projects/constructors/hr5.webp",
      meters: 0,
      type: "international",
      country: "UAE",
    },
  ],
  Malls: [
    {
      category: "Malls",
      mainImg: "/projects/malls/m1/1.webp",
      projectName: "The Polygon",
      consultantName: "shaker",
      consultantImg: "/projects/consultants/ht2.webp",
      constructorName: "siemens",
      constructorImg: "/projects/constructors/mr1.webp",
      meters: 1324,
      type: "national",
      country: "egypt",
    },
    {
      category: "Malls",
      mainImg: "/projects/malls/m2/1.webp",
      projectName: "forty west",
      consultantName: "shaker",
      consultantImg: "/projects/consultants/ht2.webp",
      constructorName: "hassan allam",
      constructorImg: "/projects/constructors/gr6.webp",
      meters: 460,
      type: "national",
      country: "egypt",
    },
    {
      category: "Malls",
      mainImg: "/projects/malls/m3/1.jpeg",
      projectName: "Carrefour",
      consultantName: "shaker",
      consultantImg: "/projects/consultants/ht2.webp",
      constructorName: "siemens",
      constructorImg: "/projects/constructors/mr1.webp",
      meters: 465,
      type: "national",
      country: "egypt",
    },
    {
      category: "Malls",
      mainImg: "/projects/malls/m4/1.jpeg",
      projectName: "Mirage Mall",
      consultantName: "KE",
      consultantImg: "/projects/consultants/mt4.webp",
      constructorName: "detac",
      constructorImg: "/projects/constructors/br3.webp",
      meters: 1045,
      type: "national",
      country: "egypt",
    },
    {
      category: "Malls",
      mainImg: "/projects/malls/m5/1.webp",
      projectName: "DAMAC park Avenue",
      consultantName: "KA",
      consultantImg: "/projects/consultants/mt5.webp",
      constructorName: "detac",
      constructorImg: "/projects/constructors/br3.webp",
      meters: 320,
      type: "national",
      country: "egypt",
    },
    {
      category: "Malls",
      mainImg: "/projects/malls/m6/1.webp",
      projectName: "Capital Business Parks",
      consultantName: "KA",
      consultantImg: "/projects/consultants/mt5.webp",
      constructorName: "durrah",
      constructorImg: "/projects/constructors/mr6.webp",
      meters: 180,
      type: "national",
      country: "egypt",
    },
    {
      category: "Malls",
      mainImg: "/projects/malls/m7/1.webp",
      projectName: "The dubai mall fashion atrium expansion",
      consultantName: "WSP",
      consultantImg: "/projects/consultants/mt7.webp",
      constructorName: "SP",
      constructorImg: "/projects/constructors/mr7.webp",
      meters: 0,
      type: "international",
      country: "UAE",
    },
    {
      category: "Malls",
      mainImg: "/projects/malls/m8/1.webp",
      projectName: "al araimi boulivard mall",
      consultantName: "AEB",
      consultantImg: "/projects/consultants/mt8.webp",
      constructorName: "UNIQUE",
      constructorImg: "/projects/constructors/mr8.webp",
      meters: 0,
      type: "international",
      country: "Oman",
    },
  ],
  TechCenters: [
    {
      category: "TechCenters",
      mainImg: "/projects/techCenters/tc1/1.webp",
      projectName: "NN1",
      consultantName: "consultant",
      consultantImg: "/projects/consultants/tct1.webp",
      constructorName: "orascom",
      constructorImg: "/projects/constructors/gr2.webp",
      meters: 7720,
      type: "national",
      country: "Egypt",
    },
    {
      category: "TechCenters",
      mainImg: "/projects/techCenters/tc2/1.webp",
      projectName: "NN2",
      consultantName: "consultant",
      consultantImg: "/projects/consultants/tct1.webp",
      constructorName: "hassan allam",
      constructorImg: "/projects/constructors/gr6.webp",
      meters: 5205,
      type: "national",
      country: "Egypt",
    },
    {
      category: "TechCenters",
      mainImg: "/projects/techCenters/tc3/1.webp",
      projectName: "Etisalat",
      consultantName: "KE",
      consultantImg: "/projects/consultants/mt4.webp",
      constructorName: "conserv",
      constructorImg: "/projects/constructors/tcr3.webp",
      meters: 870,
      type: "national",
      country: "Egypt",
    },
    {
      category: "TechCenters",
      mainImg: "/projects/techCenters/tc4/1.webp",
      projectName: "Vodafone",
      consultantName: "shaker",
      consultantImg: "/projects/consultants/ht2.webp",
      constructorName: "ABB",
      constructorImg: "/projects/constructors/hr4.webp",
      meters: 280,
      type: "national",
      country: "Egypt",
    },
  ],
  Towers: [
    {
      category: "Towers",
      mainImg: "/projects/towers/t1/1.webp",
      projectName: "el mazroei tower",
      consultantName: "consultair",
      consultantImg: "/projects/consultants/tt1.webp",
      constructorName: "JAMS",
      constructorImg: "/projects/constructors/tr1.webp",
      meters: 440,
      type: "iternational",
      country: "UAE",
    },
    {
      category: "Towers",
      mainImg: "/projects/towers/t2/1.webp",
      projectName: "al katami tower fujairah",
      consultantName: "Emirates Engineering Consulting",
      consultantImg: "/projects/consultants/tt2.webp",
      constructorName: "JAMS",
      constructorImg: "/projects/constructors/tr1.webp",
      meters: 100,
      type: "iternational",
      country: "UAE",
    },
    {
      category: "Towers",
      mainImg: "/projects/towers/t3/1.webp",
      projectName: "al baraha",
      consultantName: "EHAF",
      consultantImg: "/projects/consultants/tt3.webp",
      constructorName: "CRC",
      constructorImg: "/projects/constructors/tr3.webp",
      meters: 450,
      type: "iternational",
      country: "Qatar",
    },
    {
      category: "Towers",
      mainImg: "/projects/towers/t4/1.webp",
      projectName: "al jasra twin tower",
      consultantName: "EHAF",
      consultantImg: "/projects/consultants/tt3.webp",
      constructorName: "CRC",
      constructorImg: "/projects/constructors/tr3.webp",
      meters: 884,
      type: "iternational",
      country: "Qatar",
    },
    {
      category: "Towers",
      mainImg: "/projects/towers/t5/1.webp",
      projectName: "shaali tower",
      consultantName: "KWEC",
      consultantImg: "/projects/consultants/tt5.webp",
      constructorName: "MEC",
      constructorImg: "/projects/constructors/tr5.webp",
      meters: 425,
      type: "iternational",
      country: "UAE",
    },
    {
      category: "Towers",
      mainImg: "/projects/towers/t6/1.webp",
      projectName: "zafranah tower",
      consultantName: "NEXT",
      consultantImg: "/projects/consultants/tt6.webp",
      constructorName: "BEMCO",
      constructorImg: "/projects/constructors/tr6.webp",
      meters: 830,
      type: "iternational",
      country: "UAE",
    },
    {
      category: "Towers",
      mainImg: "/projects/towers/t7/1.webp",
      projectName: "smouha towers",
      consultantName: "egyptian armed forces engineering authority",
      consultantImg: "/projects/consultants/tt7.webp",
      constructorName: "hassan allam",
      constructorImg: "/projects/constructors/gr6.webp",
      meters: 640,
      type: "national",
      country: "egypt",
    },
    {
      category: "Towers",
      mainImg: "/projects/towers/t8/1.webp",
      projectName: "marina mix",
      consultantName: "AEB",
      consultantImg: "/projects/consultants/tt8.webp",
      constructorName: "Metrix",
      constructorImg: "/projects/constructors/tr8.webp",
      meters: 290,
      type: "national",
      country: "Egypt",
    },
    {
      category: "Towers",
      mainImg: "/projects/towers/t9/1.webp",
      projectName: "oasis tower 2",
      consultantName: "Canadian Consultant",
      consultantImg: "/projects/towers/t9/t.webp",
      constructorName: "gulfasia",
      constructorImg: "/projects/towers/t9/r.webp",
      meters: 0,
      type: "international",
      country: "UAE",
    },
    {
      category: "Towers",
      mainImg: "/projects/towers/t10/1.webp",
      projectName: "clock tower",
      consultantName: "Proarc",
      consultantImg: "/projects/towers/t10/t.webp",
      constructorName: "kahrab",
      constructorImg: "/projects/towers/t10/r.webp",
      meters: 0,
      type: "international",
      country: "UAE",
    },
    {
      category: "Towers",
      mainImg: "/projects/towers/t11/1.webp",
      projectName: "aka residence",
      consultantName: "POE",
      consultantImg: "/projects/towers/t11/t.webp",
      constructorName: "Dubai walls",
      constructorImg: "/projects/towers/t11/r.webp",
      meters: 0,
      type: "international",
      country: "UAE",
    },
    {
      category: "Towers",
      mainImg: "/projects/towers/t12/1.webp",
      projectName: "Centeral Park Tower",
      consultantName: "sigmaart",
      consultantImg: "/projects/towers/t12/t.webp",
      constructorName: "AQTS",
      constructorImg: "/projects/towers/t12/r.webp",
      meters: 0,
      type: "international",
      country: "UAE",
    },
    {
      category: "Towers",
      mainImg: "/projects/towers/t13/1.webp",
      projectName: "Rose 10",
      consultantName: "Bel-Yoahah",
      consultantImg: "/projects/towers/t13/t.webp",
      constructorName: "Eastern International",
      constructorImg: "/projects/towers/t13/r.webp",
      meters: 0,
      type: "international",
      country: "UAE",
    },
    {
      category: "Towers",
      mainImg: "/projects/towers/t14/1.webp",
      projectName: "Khalifa Khamees Matter ",
      consultantName: "EDMAC",
      consultantImg: "/projects/towers/t14/t.webp",
      constructorName: "lord",
      constructorImg: "/projects/towers/t14/r.webp",
      meters: 0,
      type: "international",
      country: "UAE",
    },
    {
      category: "Towers",
      mainImg: "/projects/towers/t15/1.webp",
      projectName: "charitable society fujairah",
      consultantName: "Talal Nawfal",
      consultantImg: "/projects/towers/t15/t.webp",
      constructorName: "FNCT",
      constructorImg: "/projects/towers/t15/r.webp",
      meters: 0,
      type: "international",
      country: "UAE",
    },
    {
      category: "Towers",
      mainImg: "/projects/towers/t16/1.webp",
      projectName: "Ebraheim Ali Abdullah ",
      consultantName: "FEDC",
      consultantImg: "/projects/towers/t16/t.webp",
      constructorName: "Skyline",
      constructorImg: "/projects/towers/t16/r.webp",
      meters: 0,
      type: "international",
      country: "UAE",
    },
    {
      category: "Towers",
      mainImg: "/projects/towers/t17/1.webp",
      projectName: "Clouds 9",
      consultantName: "Crown",
      consultantImg: "/projects/towers/t17/t.webp",
      constructorName: "MESC",
      constructorImg: "/projects/towers/t17/r.webp",
      meters: 0,
      type: "international",
      country: "UAE",
    },
    {
      category: "Towers",
      mainImg: "/projects/towers/t18/1.webp",
      projectName: "Naresh Kumar Building Ajman",
      consultantName: "AL Nakheel",
      consultantImg: "/projects/towers/t18/t.webp",
      constructorName: "La Casa",
      constructorImg: "/projects/towers/t18/r.webp",
      meters: 0,
      type: "international",
      country: "UAE",
    },
    {
      category: "Towers",
      mainImg: "/projects/towers/t19/1.webp",
      projectName: "Qurtaba Tower Ajman",
      consultantName: "AL Nakheel",
      consultantImg: "/projects/towers/t19/t.webp",
      constructorName: "Al Alaa",
      constructorImg: "/projects/towers/t19/r.webp",
      meters: 0,
      type: "international",
      country: "UAE",
    },
    {
      category: "Towers",
      mainImg: "/projects/towers/t20/1.webp",
      projectName: "Globel Gulf 2 Dubai",
      consultantName: "Dimensions",
      consultantImg: "/projects/towers/t20/t.webp",
      constructorName: "DUBCO",
      constructorImg: "/projects/towers/t20/r.webp",
      meters: 0,
      type: "international",
      country: "UAE",
    },
    {
      category: "Towers",
      mainImg: "/projects/towers/t21/1.webp",
      projectName: "Goshi Residence Tower Dubailand",
      consultantName: "NEXT",
      consultantImg: "/projects/towers/t21/t.webp",
      constructorName: "BEST",
      constructorImg: "/projects/towers/t21/r.webp",
      meters: 0,
      type: "international",
      country: "UAE",
    },
  ],
  Villages: [
    {
      category: "Villages",
      mainImg: "/projects/villages/v1/1.webp",
      projectName: "LamaR BAUSHER",
      consultantName: "HP",
      consultantImg: "/projects/consultants/bt1.webp",
      constructorName: "larsen & toubro",
      constructorImg: "/projects/constructors/gr1.webp",
      meters: 345,
      type: "International",
      country: "Oman",
    },
    {
      category: "Villages",
      mainImg: "/projects/villages/v2/1.webp",
      projectName: "smart village",
      consultantName: "shaker",
      consultantImg: "/projects/consultants/ht2.webp",
      constructorName: "siemens",
      constructorImg: "/projects/constructors/mr1.webp",
      meters: 960,
      type: "national",
      country: "egypt",
    },
    {
      category: "Villages",
      mainImg: "/projects/villages/v3/1.webp",
      projectName: "beverly hills",
      consultantName: "ACE",
      consultantImg: "/projects/consultants/etct3.webp",
      constructorName: "al mokaweloon al arab",
      constructorImg: "/projects/constructors/edr1.webp",
      meters: 350,
      type: "national",
      country: "egypt",
    },
  ],
};
const Slidere3 = function Slidere3() {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    fade: false,
    cssEase: "ease",
    arrows: false,
    pauseOnHover: false,
  };
  const slides = [
    {
      img: "/blog/ve31.webp",
      loading: "eager",
    },
    {
      img: "/blog/ve32.webp",
      loading: "lazy",
    },
    {
      img: "/blog/ve33.webp",
      loading: "lazy",
    },
    {
      img: "/blog/ve34.webp",
      loading: "lazy",
    },
    {
      img: "/blog/ve35.webp",
      loading: "lazy",
    },
  ];

  return (
    <div className="eventintroanim">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={`SlideImg ${index + 1}`}>
            <img
              className="slide-image-body"
              src={slide.img}
              alt={`Slide ${index + 1}`}
              loading={slide.loading}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};
const Slidere4 = function Slidere4() {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    fade: false,
    cssEase: "ease",
    arrows: false,
    pauseOnHover: false,
  };
  const slides = [
    {
      img: "/blog/ve41.webp",
      loading: "eager",
    },
    {
      img: "/blog/ve42.webp",
      loading: "lazy",
    },
    {
      img: "/blog/ve43.webp",
      loading: "lazy",
    },
    {
      img: "/blog/ve44.webp",
      loading: "lazy",
    },
    {
      img: "/blog/ve45.webp",
      loading: "lazy",
    },
  ];

  return (
    <div className="eventintroanim">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={`SlideImg ${index + 1}`}>
            <img
              className="slide-image-body"
              src={slide.img}
              alt={`Slide ${index + 1}`}
              loading={slide.loading}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};
const EventsData = [
  {
    name: "CHINT Lectrobar Cairo Seminar",
    description:
      "On September 11th, Lectrobar celebrated a strategic partnership with the Chinese company CHNT for the production of low-voltage panels at The Westin Hotel. The event featured distinguished consultants, highlighting collaborative efforts in advancing cutting-edge electrical solutions. This significant collaboration underscores Lectrobar&apos;s commitment to innovation and global partnerships in the field of electrical engineering.",
    isVideo: true,
    video:
      "https://drive.google.com/file/d/1JN8mscx39b_l7Ofb46rwT8g80UsuxK1-/preview",
    isSlider: false,
    slider: <></>,
    images: [
      "/blog/e11.webp",
      "/blog/e12.webp",
      "/blog/e13.webp",
      "/blog/e14.webp",
      "/blog/e15.webp",
      "/blog/e16.webp",
    ],
  },
  {
    name: "CHINT Lectrobar Borg El-Arab New Factory Opening",
    description:
      "On September 7th, Lectrobar and the Chinese company CHNT collaborated to produce low-voltage panels. The Minister of Electricity, the Governor of Alexandria, along with distinguished consultants, gathered to celebrate this significant partnership, marking an important advancement in electrical solutions.",
    isVideo: true,
    video:
      "https://drive.google.com/file/d/1eceLQecgXeWblp3RJ_k3iSRhiz1bjbic/preview",
    isSlider: false,
    slider: <></>,
    images: [
      "/blog/e21.webp",
      "/blog/e22.webp",
      "/blog/e23.webp",
      "/blog/e24.webp",
      "/blog/e25.webp",
      "/blog/e26.webp",
    ],
  },
  {
    name: "Lectrobar Exhibition 2023",
    description:
      " Lectrobar enjoyed a strong presence at the International Manufacturing Convention & Exhibition held in Cairo from October 28th to 30th, drawing eager attendees. Visitors were keen to explore our advanced products, particularly our busbars and low-voltage panels, as we shared insights into our manufacturing history and highlighted our collaboration with the esteemed Chinese company CHNT. The event was further distinguished by the presence of President Abdelfatah El Sisi, underscoring the significance of our contributions to the industry. This provided a unique opportunity for networking and emphasized Lectrobar&apos;s commitment to innovation, solidifying our position as an industry leader.",
    isVideo: false,
    video: "",
    isSlider: true,
    slider: <Slidere3 />,
    images: [
      "/blog/e31.webp",
      "/blog/e32.webp",
      "/blog/e33.webp",
      "/blog/e34.webp",
      "/blog/e35.webp",
      "/blog/e36.webp",
    ],
  },
  {
    name: "Lectrobar Exhibition 2022",
    description:
      "Lectrobar left a lasting impression at the Egypt Energy Expo in Cairo from October 28th to 30th, where our flagship product, the busbar, attracted keen interest from attendees. As we delved into our manufacturing history, the event served as a valuable opportunity for networking, emphasizing Lectrobar&apos;s commitment to innovation, and firmly establishing us as a leader in the industry.",
    isVideo: false,
    video: "",
    isSlider: true,
    slider: <Slidere4 />,
    images: [
      "/blog/e41.webp",
      "/blog/e42.webp",
      "/blog/e43.webp",
      "/blog/e44.webp",
      "/blog/e45.webp",
      "/blog/e46.webp",
    ],
  },
];
const ProductsData = {
  llb: {
    name: "Lectrobar Sandwich Busduct (LLB)",
    link: "/LLBCatalog.pdf",
    img1: "/llbc.jpeg",
    description1: (
      <span>
        Since 1975, Lectro has manufactured and installed hundreds of thousands
        of meters of busducts for large and small projects , both for the
        domestic market and for exports around the globe.
        <br />
        The production takes place in a state of the art facility, using latest
        generation precision techniques including CNC, automation systems and
        robotics. Lectro products have been type tested by DEKRA laboratories of
        the Netherlands.
        <br />
        Lectro busduct systems contain high quality components and are trusted
        for their high safety factor and long life. Lectro Bimetal range,
        «series LSB A» busduct provide currents from 250A to 5500A.
        <br />
        We pride ourselves in delivering systems which exceed the expectation of
        our customers, both in terms of quality and in the level of customer
        service we provide.
      </span>
    ),
    img2: "/llb1.jpeg",
    description2: (
      <span>
        Enclosure: The enclosures are 3 or 6 meters long and are made from a
        special aluminum profile. They are used as continuous earth and offer a
        standard degree of protection IP43, IP54, or IP55.
        <br />
        Conductors These are copper bars that are double insulated with suitable
        cross-section.
        <br />
        End Box This is used to terminate busduct elbows and is available to
        meet requirements for quick directional changes.
        <br />
        Feed Box It is equipped with a suitable terminal strip according to the
        size of the conductor and can either be a standard product or come with
        circuit breakers that have the same rating as the busduct as an option.
        <br />
      </span>
    ),
    img3: "/llb2.jpeg",
    description3: (
      <span>
        <strong>Assembly:</strong>
        <br />
        It describes how busduct enclosures can be connected both mechanically
        and electrically in a quick manner. Electrical connections are made
        using a plug connector, as illustrated in the accompanying figure.
        <br />
        <strong>Suspension:</strong>
        <br />
        The busduct enclosures are supported by adjustable hangers that allow
        for quick surface mounting along a ceiling or beam. It mentions that the
        spacing between suspension points is 2 meters. The adjustable nature of
        the hangers means that the lighting level can be changed even after
        assembly.
        <br />
        <strong>Outlets:</strong>
        <br />
        Outlets are distributed regularly at intervals of one meter or as per
        the client&apos;s requirements. There are two types of socket outlets
        available, rated up to 16 A 2P+E and up to 32 A 3P+E. The sockets can
        also be equipped with fuses as an option.
        <br />
        The image also shows a graphical representation of how a plug connector
        is used to establish an electrical connection between components of the
        busduct system.
      </span>
    ),
  },
  lsb2: {
    name: "Lectrobar Sandwich Busduct (LSB II)",
    link: "/LSBII.pdf",
    img1: "/lsb2c.jpeg",
    description1: (
      <span>
        Lectro has manufactured and installed hundreds of thousands of meters of
        busducts for large and small projects since 1975, both for the domestic
        market and for exports around the globe. The production takes place in a
        state of the art facility, using latest generation precision techniques
        including CNC, automation systems and robotics. Lectro products have
        been type tested by DEKRA laboratories of the Netherlands. Lectro
        busduct systems contain high quality components and are trusted for
        their high safety factor and long life. Lectro newest range, The «series
        LSB II» busduct provide currents from 300A to 6400A. We pride ourselves
        in delivering systems which exceed the expectation of our customers,
        both in terms of quality and in the level of customer service we
        provide.
      </span>
    ),
    img2: "/lsb21.jpeg",
    description2: (
      <span>
        The bolts are insulated with Teflon Coated Fiberglass and passed through
        the joint in a Teflon tube to eliminate any problems arising from joint
        bolts. Joint blocks are used to ensure parallel joints of bars and
        complete mechanical jointing using non-flammable (V -0) Polybutylene
        Terephthalate UL listed (RTI :140 oC,Dielectric Strength 23kV/mm).
      </span>
    ),
    img3: "/lsb22.jpeg",
    description3: (
      <span>
        Double head bolts are used as optional. One head breaks at the required
        torque so no need for torque wrenches. Smart bolts can be used also as
        optional for critical sites. Using smart bolts results in less fatigue
        for installers, no repeated torque wrench calibration, no sample
        re-tightening, no turn-of-nut confirmation required. Installers can
        easily identify and focus on loose bolts to re-tighten. The ability to
        visually inspect fasteners also creates safer working conditions
        particularly in elevated structures and areas exposed to hazardous
        materials.
      </span>
    ),
  },
  lsba: {
    name: "Lectrobar Sandwich Busduct (LSBA)",
    link: "/AluminumCataloglite.pdf",
    img1: "/lsbac.jpeg",
    description1: (
      <span>
        Since 1975, Lectro has manufactured and installed hundreds of thousands
        of meters of busducts for large and small projects , both for the
        domestic market and for exports around the globe.
        <br />
        The production takes place in a state of the art facility, using latest
        generation precision techniques including CNC, automation systems and
        robotics. Lectro products have been type tested by DEKRA laboratories of
        the Netherlands.
        <br />
        Lectro busduct systems contain high quality components and are trusted
        for their high safety factor and long life. Lectro Bimetal range,
        «series LSB A» busduct provide currents from 250A to 5500A.
        <br />
        We pride ourselves in delivering systems which exceed the expectation of
        our customers, both in terms of quality and in the level of customer
        service we provide.
      </span>
    ),
    img2: "/lsba1.jpeg",
    description2: (
      <span>
        <strong>Joints:</strong>
        <br />
        Joints in all ratings are of a two bolt patent design, which can be
        checked for tightness without de-energizing the system. This design
        ensures excellent contact between each set of the busbars and the joint.
        This method exerts more than two tons of pressure on overlapping bus
        bars at each bolt. This force is distributed over the contact area by
        two pairs of large diameter spring steel conical shape washers. These
        washers ensure maintenance free joint.
      </span>
    ),
    img3: "/lsba2.jpeg",
    description3: (
      <span>
        Joint alignment is made by two bolts instead of one bolt in the single
        bolt design. This design ensures the correct installation of the busduct
        joint even with non skilled labor. The joint temperature is less than
        rest of the busduct due to the specially designed heat sinks and contact
        surface. Figure A shows the contact resistance at different torque with
        the washers. The tightening torque of joint bolt does not run down after
        initial accomodation, and is maintained at a level that ensures
        stability of contact resistance and temperature rise.
      </span>
    ),
  },
  lsbpro: {
    name: "Lectrobar Sandwich Busduct (LSB PRO)",
    link: "/lsbpro.pdf",
    img1: "/lsbproc.jpeg",
    description1: (
      <span>
        Lectro has manufactured and installed hundreds of thousands of meters of
        busducts for large and small projects since 1975, both for the domestic
        market and for exports around the globe. The production takes place in a
        state of the art facility, using latest generation precision techniques
        including CNC, automation systems and robotics. Lectro products have
        been type tested by DEKRA laboratories of the Netherlands. Lectro
        busduct systems contain high quality components and are trusted for
        their high safety factor and long life. Lectro newest range, The «series
        LSB PRO» busduct provide currents from 1000A to 6400A. We pride
        ourselves in delivering systems which exceed the expectation of our
        customers, both in terms of quality and in the level of customer service
        we provide.
      </span>
    ),
    img2: "/lsbpro1.jpeg",
    description2: (
      <span>
        <strong>Busbar and Insulation:</strong>
        <br />
        Lectrobars are fabricated from high strength pure electrolytic copper
        with suitable cross section tin coated at contacts ( conductivity better
        than 99.5%). Tin coating provides surface protection and good contact.
      </span>
    ),
    img3: "/lsbpro2.jpeg",
    description3: (
      <span>
        Lectrobar busducts have a sandwich type non-ventilated configuration.
        The non-ventilated housing design excludes potential points of
        penetration by moisture and dust. Busbars for plug-in applications, have
        full size welded conductor tabs. This design extends the contact
        surfaces outside of the busduct casing and into the plug-in outlet. By
        this design, true sandwich configuration is maintained throughout the
        entire busduct length for both feeder and plug-in. This will eliminate
        the need to seperate or flare the conductor bars at the plug-in opening.
      </span>
    ),
  },
};

const debounce = (func, delay) => {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func(...args);
    }, delay);
  };
};

function App() {
  const [hash, setHash] = useState();
  const [loading, setLoading] = useState(false);

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
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [hash]);

  const notify = useCallback((e, msg) => {
    toast[e](msg, {
      position: "top-center",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Slide,
    });
  }, []);

  useEffect(() => {
    if (navigator.userAgent.match(/samsung/i)) {
      alert(
        "Your browser (Samsung Internet) may not show this website's colors correctly in Dark Mode." +
          "Consider using a standards-compliant browser." +
          "We Recommend Google Chrome or Microsoft Edge"
      );
    }
  }, []);

  const showMenu = useCallback(() => {
    document.getElementById("vbtn").style.display = "none";
    document.getElementById("hbtn").style.display = "flex";
    let ul = document.getElementById("nvbrul1");
    ul.style.overflow = "visible";
    ul.style.width = "150px";
    ul.style.opacity = 1;
  }, []);
  const hideMenu = useCallback(() => {
    const hbtn = document.getElementById("hbtn") || null;
    const vbtn = document.getElementById("vbtn") || null;
    const ul = document.getElementById("nvbrul1") || null;
    if (hbtn && vbtn && ul) {
      hbtn.style.display = "none";
      vbtn.style.display = "flex";
      ul.style.overflow = "hidden";
      ul.style.width = 0;
      ul.style.opacity = 0;
    }
  }, []);

  return (
    <Router>
      <ToastContainer />
      <RouteChangeHandler setLoading={setLoading} hideMenu={hideMenu} />
      {loading ? (
        <Loading />
      ) : (
        <>
          <Suspense fallback={<Loading />}>
            <Navbar
              debounce={debounce}
              showMenu={showMenu}
              hideMenu={hideMenu}
            />
            <Sidebar />
            <Routes>
              <Route path="*" element={<Errorp />} />
              <Route
                path="/"
                element={<Home Slider={Slider} debounce={debounce} />}
              />
              <Route
                path="/index"
                element={<Home Slider={Slider} debounce={debounce} />}
              />
              <Route path="/Aboutus" element={<Aboutus />} />
              <Route
                path="/Contact"
                element={<Contact notify={notify} debounce={debounce} />}
              />
              <Route
                path="/Products/:product"
                element={
                  <ProductPage Slider={Slider} ProductsData={ProductsData} />
                }
              />
              <Route
                path="/Projects"
                element={
                  <Projects setHash={setHash} ProjectsData={ProjectsData} />
                }
              />
              <Route
                path="/Projects/:project"
                element={
                  <Project
                    scrollToProject={scrollToProject}
                    ProjectsData={ProjectsData}
                  />
                }
              />
              <Route
                path="/Blog"
                element={<Blog Slider={Slider} debounce={debounce} />}
              />
              <Route
                path="/Blog/:event"
                element={<EventPage EventsData={EventsData} />}
              />
            </Routes>
          </Suspense>
          <Footer />
        </>
      )}
    </Router>
  );
}

export default App;

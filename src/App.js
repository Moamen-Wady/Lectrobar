import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './styles.css'
import Home from './Home';
import Projects from './Projects';
import Contact from './Contact';
import Lsba from './lsba';
import Lsb2 from './lsb2';
import Llb from './llb';
import Lsbpro from './lsbpro';
import Aboutus from './Aboutus';
import Blog from './Blog';
import E1 from './e1';
import E2 from './e2';
import E3 from './e3';
import E4 from './e4';
import Villages from './villages';
import Education from './education';
import TechCenters from './techCenters';
import Etc from './etc';
import Banks from './banks';
import Malls from './malls';
import Hotels from './hotels';
import Towers from './towers';
import Factories from './factories';
import Gov from './gov';
import Hospitals from './hospitals';
import Navbar from './components/Navbar';
import Footer from './components/footer';
import Sidebar from './components/Sidebar';

function App() {
  useEffect(
    () => {
      if ( navigator.userAgent.match( /samsung/i ) ) {
        alert( "Your browser (Samsung Internet) may not show this website's colors correctly in Dark Mode with setting: 'use dark mode: always/when phone dark mode is on' or when option: 'dark theme sites' is checked. Please choose 'light theme websites' or consider using a standards-compliant browser instead. \n\n" +
          "We recommend Firefox, Microsoft Edge, or Google Chrome." );
      };
      window.scrollTo( 0, 0 );
    }
    , []
  )
  var [ hash, setHash ] = useState()
  function scrollToProj() {
    if ( hash !== undefined ) {
      var proj = document.getElementById( hash )
      if ( proj !== null ) {
        setTimeout(
          () => {
            proj.scrollIntoView( { behavior: 'smooth', block: 'center', inline: 'center' } )
          }, 10
        )
      }
      else
        window.scrollTo( 0, 0 )
    }
    else {
      window.scrollTo( 0, 0 )
    }
  }
  function sliding( sv, abb, limit, go, come, cb, rcb, to ) {
    setTimeout(
      () => {
        var x = document.getElementById( sv + abb );
        x.style.animationName = go
        if ( sv == limit ) {
          var xx = document.getElementById( 0 + abb );
          xx.style.animationName = come
        }
        else {
          var ss = document.getElementById( ( sv + 1 ) + abb );
          ss.style.animationName = come
        }
        if ( sv == limit ) rcb()
        else cb()
      }, to
    )
  }
  function addPaddingWhenNoBanner( container ) {
    var padding = document.getElementById( 'nvb' ).clientHeight * 1.1
    container.style.paddingTop = padding + 'px'
  }
  return (
    <Router>
      <Navbar />
      <Sidebar />
      <Routes>
        <Route path='/index' element={ <Home sliding={ sliding } /> } />
        <Route path='/' element={ <Home sliding={ sliding } /> } />
        <Route path='/Aboutus' element={ <Aboutus /> } />
        <Route path='/Contact' element={ <Contact /> } />
        <Route path='/Blog' element={ <Blog sliding={ sliding } /> } />
        <Route path='/e1' element={ <E1 /> } />
        <Route path='/e2' element={ <E2 /> } />
        <Route path='/e3' element={ <E3 sliding={ sliding } /> } />
        <Route path='/e4' element={ <E4 sliding={ sliding } /> } />
        <Route path='/lsba' element={ <Lsba sliding={ sliding } /> } />
        <Route path='/lsb2' element={ <Lsb2 sliding={ sliding } /> } />
        <Route path='/llb' element={ <Llb sliding={ sliding } /> } />
        <Route path='/lsbpro' element={ <Lsbpro sliding={ sliding } /> } />
        <Route path='/Projects' element={ <Projects setHash={ setHash } /> } />
        <Route path='/Banks' element={ <Banks scrollToProj={ scrollToProj } add={ addPaddingWhenNoBanner } /> } />
        <Route path='/Education' element={ <Education scrollToProj={ scrollToProj } add={ addPaddingWhenNoBanner } /> } />
        <Route path='/Etc' element={ <Etc scrollToProj={ scrollToProj } add={ addPaddingWhenNoBanner } /> } />
        <Route path='/Factories' element={ <Factories scrollToProj={ scrollToProj } add={ addPaddingWhenNoBanner } /> } />
        <Route path='/Gov' element={ <Gov scrollToProj={ scrollToProj } add={ addPaddingWhenNoBanner } /> } />
        <Route path='/Hospitals' element={ <Hospitals scrollToProj={ scrollToProj } add={ addPaddingWhenNoBanner } /> } />
        <Route path='/Hotels' element={ <Hotels scrollToProj={ scrollToProj } add={ addPaddingWhenNoBanner } /> } />
        <Route path='/Malls' element={ <Malls scrollToProj={ scrollToProj } add={ addPaddingWhenNoBanner } /> } />
        <Route path='/TechCenters' element={ <TechCenters scrollToProj={ scrollToProj } add={ addPaddingWhenNoBanner } /> } />
        <Route path='/Towers' element={ <Towers scrollToProj={ scrollToProj } add={ addPaddingWhenNoBanner } /> } />
        <Route path='/Villages' element={ <Villages scrollToProj={ scrollToProj } add={ addPaddingWhenNoBanner } /> } />
      </Routes>
      <Footer />
    </Router >
  );
}
export default App;
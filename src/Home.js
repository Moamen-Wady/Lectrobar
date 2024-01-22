import './styles/Home.css'
import Banner from './components/banner'
import { memo, useEffect, useState } from 'react'
import useIntersectionObserver from '@react-hook/intersection-observer'
import { useRef } from 'react'
import { Link } from 'react-router-dom'
import "animate.css/animate.min.css";
import { AnimationOnScroll } from 'react-animation-on-scroll'

var IntroA = memo( function IntroA( { sliding } ) {
  var [ intro, setIntro ] = useState( 0 )
  var [ bb, setbb ] = useState( 1 )
  useEffect(
    () => {
      sliding( intro, "i", 5, "go", "come", () => { setIntro( intro + 1 ); setbb( bb + 1 ) }, () => { setIntro( 0 ); setbb( bb + 1 ) }, 3000 );
    }
    , [ bb ]
  )
  return (
    <AnimationOnScroll animateOnce={ false } animateIn="animate__fadeInDown">
      <div className='homeintrocont'>
        <h1>Welcome to Lectrobar</h1>
        <div className='homeintro'>
          <div>
            <h1><i>We deliver Systems that Exceed our Customers&apos; Expectations!</i></h1>
            <p>
              Lectro Bar Group, which includes Lectro Bar Egypt and Lectro Bar Gulf,
              is a distinguished manufacturer that specializes in producing high-quality,
              tested Bus Ducts. These Bus Ducts are rigorously tested according to the new
              IEC61439 criteria and have earned the prestigious KEMA KEUR quality mark,
              demonstrating Lectrobar&apos;s commitment to excellence and quality assurance with the date of establishment.
            </p>
          </div>
          <div className='homeintroanim'>
            <div id={ 0 + "i" }>
              <img src='inan1.jpg' alt='' />
            </div>
            <div id={ 1 + "i" }>
              <img src='inan2.jpg' alt='' />
            </div>
            <div id={ 2 + "i" }>
              <img src='inan3.jpg' alt='' />
            </div>
            <div id={ 3 + "i" }>
              <img src='inan4.jpg' alt='' />
            </div>
            <div id={ 4 + "i" }>
              <img src='inan5.jpg' alt='' />
            </div>
          </div>
        </div>
      </div>
    </AnimationOnScroll>
  )
} )
var DynCount = memo( function DynCount() {
  var [ a, setA ] = useState( 0 )
  var [ b, setB ] = useState( 0 )
  var [ c, setC ] = useState( 0 )
  var [ d, setD ] = useState( 0 )
  var [ e, setE ] = useState( 0 )
  var [ f, setF ] = useState( 0 )
  var [ ind, setind ] = useState( 0 );
  const containerRef = useRef()
  const { isIntersecting } = useIntersectionObserver( containerRef )
  if ( isIntersecting ) {
    if ( ind == 0 ) {
      var widtA = 1;
      var widtB = 1;
      var widtC = 1;
      var widtD = 1;
      var widtE = 1;
      var widtF = 1;
      setind( 1 );
      var idA = setInterval( frameA, 10 );
      var idB = setInterval( frameB, 10 );
      var idC = setInterval( frameC, 10 );
      var idD = setInterval( frameD, 10 );
      var idE = setInterval( frameE, 10 );
      var idF = setInterval( frameF, 100 );
    }
    function frameA() {
      if ( widtA >= 600 ) {
        clearInterval( idA );
        setA( 600 );
      } else {
        widtA = widtA + 6;
        setA( widtA );
      }
    }
    function frameB() {
      if ( widtB >= 10000 ) {
        clearInterval( idB );
        setB( 10000 );
      } else {
        widtB = widtB + 100;
        setB( widtB );
      }
    }
    function frameC() {
      if ( widtC >= 1000 ) {
        clearInterval( idC );
        setC( 1000 )
      } else {
        widtC = widtC + 10;
        setC( widtC );
      }
    }
    function frameD() {
      if ( widtD >= 15000 ) {
        clearInterval( idD );
        setD( 15000 );
      } else {
        widtD = widtD + 150;
        setD( widtD );
      }
    }
    function frameE() {
      if ( widtE >= 3000 ) {
        clearInterval( idE );
        setE( 3000 );
      } else {
        widtE = widtE + 30;
        setE( widtE );
      }
    }
    function frameF() {
      if ( widtF >= 19 ) {
        clearInterval( idF );
        setF( 19 )
      } else {
        widtF = widtF + 1
        setF( widtF );
      }
    }
  }
  return (
    <>
      <hr ref={ containerRef } style={ { width: 90 + '%', color: 'darkblue' } } />
      <div className='homecoun'>
        <p ><b>{ b }+</b>Succefully Completed Projects</p>
        <p ><b>{ a }+</b>Highly Specialised & Skilled Workforce</p>
        <p ><b>{ c }+</b>Projects outside Egypt</p>
        <p ><b>{ d }+</b>Meters Produced Per Month</p>
        <p ><b>{ e }+</b>Meters Exported Annually</p>
        <p ><b>{ f }+</b>Countries We Export To</p>
      </div>
    </>
  )
} )
var Filter = memo( function Filter() {
  var [ filter, setFilter ] = useState( 0 )
  const fsetter = ( e ) => {
    const x = e.target
    setFilter( x.slot )
  }
  return (
    <AnimationOnScroll animateOnce={ false } animateIn="animate__fadeIn" className='homefilterp'>
      <div className='homedk'>
        <img src='dk.jpeg' alt='' />
        <p>Lectro has manufactured and installed hundreds of thousands of meters of busducts for large and small projects since 1975, both for the domestic market and for exports around the globe. The production takes place in a state of the art facility, using latest generation precision techniques including CNC, automation systems and robotics. Lectro products have been type tested by DEKRA laboratories of the Netherlands. Lectro busduct systems contain high quality components and are trusted for their high safety factor and long life.</p>
      </div>

      <div className='homesidefcont'>
        <div className='homesidef'>
          <div className='hometypef' onClick={ fsetter } slot='0'><p slot='0' >Busduct</p></div>
          <div className='hometypef' onClick={ fsetter } slot='1'><p slot='1' >Low Voltage Panels</p></div>
          <div className='hometypef' onClick={ fsetter } slot='2'><p slot='2' >Fuses and Switches</p></div>
          <div className='hometypef' onClick={ fsetter } slot='3'><p slot='3' >Ring</p></div>
          <div className='hometypef' onClick={ fsetter } slot='4'><p slot='4' >Transformers</p></div>
        </div>
        { filter == 0 &&
          <>
            <div className='homeprodbus'>
              <div>
                <b>Busduct</b>
                <p> In electric power distribution, a bus duct (also called busway) is a sheet metal duct or also cast resin insulated containing either copper or aluminium busbars for the purpose of conducting a substantial current of electricity. It is an alternative means of conducting electricity to power cables or cable bus.
                </p>
              </div>
              <div><div><Link to='llb' ><img src='llb.jpg' alt='' /></Link></div><p>LLB</p></div>
              <div><div><Link to='/lsba' ><img src='lsba.jpg' alt='' /></Link></div><p>LSB A</p></div>
              <div><div><Link to='/lsb2' ><img src='lsb2.jpg' alt='' /></Link></div><p>LSB II</p></div>
              <div><div><Link to='/lsbpro' ><img src='lsbpro.jpg' alt='' /></Link></div><p>LSB PRO</p></div>
            </div>
          </>
        }
        { filter == 1 &&
          <>
            <div className='homeprodlowv'>
              <div>
                <b>Low Voltage Panels</b>
                <p>Low voltage panel is a component of an electrical distribution system that divides an electrical power feed into branch circuits while providing a protective fuse or circuit breaker for each circuit in a common enclosure.
                </p></div>
              <div><div><img src='lowv.jpg' alt='' /></div></div>
            </div>
          </>
        }
        { filter == 2 &&
          <>
            <div className='homeprodfuse'>
              <div>
                <b>Fuses And Switches</b>
                <p>The purpose of a switch or a fuse is to break or connect an electric circuit, but they must be correctly connected in the home. A switch or a fuse in an electrical circuit is always connected to the live wire so that the socket or appliance is not live when switched off.
                </p></div>
              <div><div><img src='sw.jpg' alt='' /></div></div>
            </div>
          </>
        }
        { filter == 3 &&
          <>
            <div className='homeprodimg'>
              {/* <div><div><img src='maint.jpg' alt='' /></div><p>LSB A</p></div>
                      <div><div><img src='te.jpg' alt='' /></div><p>LSB PRO</p></div>
                      <div><div><img src='supp.jpg' alt='' /></div><p>LSB II</p></div>
                      <div><div><img src='tech.jpg' alt='' /></div><p>LLB</p></div>
                      <div><div><p style={ { visibility: 'hidden' }'>Low Voltage Panels</p><img src='lowv.jpg' alt='' /></div><p>Low Voltage Panels</p></div>
                    <div><div><p style={ { visibility: 'hidden' }'>Low Voltage Panels</p><img src='sw.jpg' alt='' /></div><p>Fuses and Switches</p></div> */}
              <b>Coming Soon</b>
            </div>
          </>
        }
        { filter == 4 &&
          <>
            <div className='homeprodimg'>
              {/* <div><div><img src='tech.jpg' alt='' /></div><p>LLB</p></div>
                      <div><div><img src='maint.jpg' alt='' /></div><p>LSB A</p></div>
                      <div><div><img src='te.jpg' alt='' /></div><p>LSB II</p></div>
                      <div><div><img src='supp.jpg' alt='' /></div><p>LSB PRO</p></div>
                      <div><div><p style={ { visibility: 'hidden' }'>Low Voltage Panels</p><img src='lowv.jpg' alt='' /></div><p>Low Voltage Panels</p></div>
                    <div><div><p style={ { visibility: 'hidden' }'>Low Voltage Panels</p><img src='sw.jpg' alt='' /></div><p>Fuses and Switches</p></div> */}
              <b>Coming Soon</b>
            </div>
          </>
        }
      </div>
    </AnimationOnScroll>

  )
} )
var Clients = memo( function Clients() {
  var [ cli, setCli ] = useState( 1 )
  var [ cliv, setCliv ] = useState( 0 )

  function cliprv() {
    if ( cli == 1 ) {
      document.getElementById( `sslide26` ).style.animationName = 'gotoleft'
    }
    else {
      document.getElementById( `sslide` + `${ cli - 1 }` ).style.animationName = 'gotoleft'
    }
  }
  function clinxt() {
    if ( cli == 25 ) {
      document.getElementById( `sslide` + `${ cli }` ).style.animationName = 'midtoleft'
      document.getElementById( `sslide` + `${ cli + 1 }` ).style.animationName = 'righttomid'
      document.getElementById( `sslide` + `${ 1 }` ).style.animationName = 'comefromright'
    }
    else if ( cli == 26 ) {
      document.getElementById( `sslide` + `${ cli }` ).style.animationName = 'midtoleft'
      document.getElementById( `sslide` + `${ 1 }` ).style.animationName = 'righttomid'
      document.getElementById( `sslide` + `${ 2 }` ).style.animationName = 'comefromright'
    }
    else {
      document.getElementById( `sslide` + `${ cli }` ).style.animationName = 'midtoleft'
      document.getElementById( `sslide` + `${ cli + 1 }` ).style.animationName = 'righttomid'
      document.getElementById( `sslide` + `${ cli + 2 }` ).style.animationName = 'comefromright'
    }
  }
  function nclincr() {
    if ( cli == 26 ) { setCli( 1 ); }
    else { setCli( cli + 1 ); }
  }
  function xcliprv() {
    if ( cli == 26 ) {
      document.getElementById( `sslide1` ).style.animationName = 'gotoright'
    }
    else {
      document.getElementById( `sslide` + `${ cli + 1 }` ).style.animationName = 'gotoright'
    }
  }
  function xclinxt() {
    if ( cli == 1 ) {
      document.getElementById( `sslide25` ).style.animationName = 'comefromleft'
      document.getElementById( `sslide26` ).style.animationName = 'lefttomid'
      document.getElementById( `sslide1` ).style.animationName = 'midtoright'
    }
    else if ( cli == 2 ) {
      document.getElementById( `sslide26` ).style.animationName = 'comefromleft'
      document.getElementById( `sslide1` ).style.animationName = 'lefttomid'
      document.getElementById( `sslide2` ).style.animationName = 'midtoright'
    }
    else {
      document.getElementById( `sslide` + `${ cli - 2 }` ).style.animationName = 'comefromleft'
      document.getElementById( `sslide` + `${ cli - 1 }` ).style.animationName = 'lefttomid'
      document.getElementById( `sslide` + `${ cli }` ).style.animationName = 'midtoright'
    }
  }
  function nclidcr() {
    if ( cli == 1 ) { setCli( 26 ); }
    else { setCli( cli - 1 ); }
  }
  const clifwd = () => {
    cliprv();
    clinxt();
    nclincr();
  }
  const clibwd = () => {
    xcliprv();
    xclinxt();
    nclidcr();
  }
  useEffect(
    () => {
      setTimeout( () => {
        document.getElementById( 'sleft' ).click()
        setCliv( prev => prev + 1 )
      }, 2000 );
    }, [ cliv ]
  )
  return (
    <AnimationOnScroll animateOnce={ false } animateIn="animate__fadeInDown">
      <div className='homeintrocont'>
        <h1>Clients</h1>
        <div className='homeclients'>
          <div className='homeclientsimg'>
            <button id='sleft' className='homebtn' onClick={ clifwd }> <img src='l.png' alt=' ' /> </button>
            <div className='sslide' id='sslide1' >
              <img src='/clients/c1.jpg' alt='' />
            </div>
            <div className='sslide' id='sslide2' >
              <img src='/clients/c2.jpg' alt='' />
            </div>
            <div className='sslide' id='sslide3' >
              <img src='/clients/c3.jpg' alt='' />
            </div>
            <div className='sslide' id='sslide4' >
              <img src='/clients/c4.jpg' alt='' />
            </div>
            <div className='sslide' id='sslide5' >
              <img src='/clients/c5.jpg' alt='' />
            </div>
            <div className='sslide' id='sslide6' >
              <img src='/clients/c6.jpg' alt='' />
            </div>
            <div className='sslide' id='sslide7' >
              <img src='/clients/c7.jpeg' alt='' />
            </div>
            <div className='sslide' id='sslide8' >
              <img src='/clients/c8.jpeg' alt='' />
            </div>
            <div className='sslide' id='sslide9' >
              <img src='/clients/c9.jpeg' alt='' />
            </div>
            <div className='sslide' id='sslide10' >
              <img src='/clients/c10.jpeg' alt='' />
            </div>
            <div className='sslide' id='sslide11' >
              <img src='/clients/c11.jpeg' alt='' />
            </div>
            <div className='sslide' id='sslide12' >
              <img src='/clients/c12.jpeg' alt='' />
            </div>
            <div className='sslide' id='sslide13' >
              <img src='/clients/c13.jpeg' alt='' />
            </div>
            <div className='sslide' id='sslide14' >
              <img src='/clients/c14.jpeg' alt='' />
            </div>
            <div className='sslide' id='sslide15' >
              <img src='/clients/c15.jpeg' alt='' />
            </div>
            <div className='sslide' id='sslide16' >
              <img src='/clients/c26.png' alt='' />
            </div>
            <div className='sslide' id='sslide17' >
              <img src='/clients/c27.jpg' alt='' />
            </div>
            <div className='sslide' id='sslide18' >
              <img src='/clients/c18.jpeg' alt='' />
            </div>
            <div className='sslide' id='sslide19' >
              <img src='/clients/c19.jpeg' alt='' />
            </div>
            <div className='sslide' id='sslide20' >
              <img src='/clients/c30.png' alt='' />
            </div>
            <div className='sslide' id='sslide21' >
              <img src='/clients/c21.jpeg' alt='' />
            </div>
            <div className='sslide' id='sslide22' >
              <img src='/clients/c29.png' alt='' />
            </div>
            <div className='sslide' id='sslide23' >
              <img src='/clients/c23.jpeg' alt='' />
            </div>
            <div className='sslide' id='sslide24' >
              <img src='/clients/c24.jpeg' alt='' />
            </div>
            <div className='sslide' id='sslide25' >
              <img src='/clients/c25.jpeg' alt='' />
            </div>
            <div className='sslide' id='sslide26' >
              <img src='/clients/c31.png' alt='' />
            </div>
            <button id='sright' className='homebtn' onClick={ clibwd }> <img src='r.png' alt=' ' /> </button>
          </div>
        </div>
      </div>
    </AnimationOnScroll>
  )

} )

export default function Home( { sliding } ) {
  useEffect( () => {
    window.scrollTo( 0, 0 )
  }
    , [] )
  return (
    <div className='homewrap'>
      <Banner sliding={ sliding } />
      <IntroA sliding={ sliding } />
      <DynCount />

      <div className='homeintrocont'>
        <h1>Products</h1>
        <div className='homeproducts'>
          <AnimationOnScroll animateOnce={ false } animateIn="animate__fadeInDown">
            <h1><i>What is a Busduct System?</i></h1>
            <p>
              A busduct system is a modular electrical transmission system used for the purpose to distribute and transport electrical power. Commonly used in commercial and industrial settings, a busduct system provides an alternative method of power distribution system to the traditional cabling system with a variety of benefits over power cables.
            </p>
            <p>
              Structurally, a busduct system is a prefabricated electrical distribution system containing either copper or aluminium busbars in a metal enclosure that is constructed to distribute electrical power to the right and needed place such as transformer – switchboard or switchboard – main sub board connection.            </p>
          </AnimationOnScroll>
          <Filter />
        </div>
      </div>

      <AnimationOnScroll animateOnce={ false } animateIn="animate__fadeIn" >
        <div className='homeintrocont'>
          <h1>Services</h1>
          <div className='homeserv'>
            <div className='homeservimg'>
              <div>
                <div className='homeserv1'>
                  <div><p>Maintenance</p></div>
                  <img src='servmaint.JPG' alt='' />
                </div>
                <div className='homeserv2'>
                  <div><p>Supply</p></div>
                  <img src='servsupp.JPG' alt='' />
                </div>
                <div className='homeserv3'>
                  <div><p>Technical Support</p></div>
                  <img src='servtech.JPG' alt='' />
                </div>
              </div>
              <div>
                <div className='homeserv4'>
                  <div><p>Install</p></div>
                  <img src='servinstall.JPG' alt='' />
                </div>
              </div>
              <div>
                <div className='homeserv5'>
                  <div><p>Value Engineering</p></div>
                  <img src='servve.JPG' alt='' />
                </div>
                <div className='homeserv6'>
                  <div><p>Test and Commisioning</p></div>
                  <img src='servtest.JPG' alt='' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </AnimationOnScroll>
      <Clients />
    </div >
  )
}


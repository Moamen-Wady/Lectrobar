import React from 'react'
import './styles/lsb2.css'
import Pbanner from './components/pbanner'
import { useEffect } from 'react'
export default function Lsb2( { sliding } ) {
    useEffect( () => {
        window.scrollTo( 0, 0 )
    }
        , [] )

    return (
        <div>
            <Pbanner sliding={ sliding } />
            <h1 className='lsb2h1'>Lectrobar Sandwich Busduct (LSB II)</h1>
            <div className='lsb2ltcont'>
                <p className='lsb2txtcont'>
                    <a href='/LSBII.pdf' target='_blank'>
                        <img src='lsb2c.jpeg' alt='' className='lsb2imgcont' />
                    </a>
                    <span>
                        Lectro has manufactured and installed hundreds of thousands of meters of busducts for large and small projects since
                        1975, both for the domestic market and for exports around the globe.
                        The production takes place in a state of the art facility, using latest generation precision techniques including CNC,
                        automation systems and robotics. Lectro products have been type tested by DEKRA laboratories of the Netherlands.
                        Lectro busduct systems contain high quality components and are trusted for their high safety factor and long life.
                        Lectro newest range, The «series LSB II» busduct provide currents from 300A to 6400A.
                        We pride ourselves in delivering systems which exceed the expectation of our customers, both in terms of quality and in
                        the level of customer service we provide.
                    </span>
                </p>
            </div>
            <div className='lsb2rtcont'>
                <p className='lsb2txtcont'>
                    <img src='lsb21.jpeg' alt='' className='lsb2imgcont' />
                    <span>
                        The bolts are insulated with Teflon Coated Fiberglass and
                        passed through the joint in a Teflon tube to eliminate any
                        problems arising from joint bolts. Joint blocks are used to
                        ensure parallel joints of bars and complete mechanical
                        jointing using non-flammable (V -0) Polybutylene
                        Terephthalate UL listed (RTI :140 oC,Dielectric Strength
                        23kV/mm).
                    </span>
                </p>
            </div>
            <div className='lsb2ltcont'>
                <p className='lsb2txtcont'>
                    <img src='lsb22.jpeg' alt='' className='lsb2imgcont' />
                    <span>
                        Double head bolts are used as optional. One head breaks at
                        the required torque so no need for torque wrenches. Smart
                        bolts can be used also as optional for critical sites. Using smart
                        bolts results in less fatigue for installers, no repeated torque
                        wrench calibration, no sample re-tightening, no turn-of-nut
                        confirmation required. Installers can easily identify and focus
                        on loose bolts to re-tighten. The ability to visually inspect
                        fasteners also creates safer working conditions particularly in
                        elevated structures and areas exposed to hazardous
                        materials.
                    </span>
                </p>
            </div>

            
        </div>
    )
}

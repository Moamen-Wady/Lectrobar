import React, { useEffect } from 'react'
import './styles/llb.css'
import Pbanner from './components/pbanner'
export default function Llb( { sliding } ) {
    useEffect( () => {
        window.scrollTo( 0, 0 )
    }
        , [] )

    return (
        <div>
            <Pbanner sliding={ sliding } />
            <h1 className='llbh1'>Lectrobar Sandwich Busduct (LLB)</h1>
            <div className='llbltcont'>
                <p className='llbtxtcont'>
                    <a href='/LLBCatalog.pdf' target='_blank'>
                        <img src='llbc.jpeg' alt='' className='llbimgcont' />
                    </a>
                    <span>
                        Since 1975, Lectro has manufactured and installed hundreds of thousands of meters of busducts for large and
                        small projects , both for the domestic market and for exports around the globe.<br />
                        The production takes place in a state of the art facility, using latest generation precision techniques including
                        CNC, automation systems and robotics. Lectro products have been type tested by DEKRA laboratories of the
                        Netherlands.<br />
                        Lectro busduct systems contain high quality components and are trusted for their high safety factor and long life.
                        Lectro Bimetal range, «series LSB A» busduct provide currents from 250A to 5500A.<br />
                        We pride ourselves in delivering systems which exceed the expectation of our customers, both in terms of quality
                        and in the level of customer service we provide.
                    </span>
                </p>
            </div>
            <div className='llbrtcont'>
                <p className='llbtxtcont'>
                    <img src='llb1.jpeg' alt='' className='llbimgcont' />
                    <span>
                        Enclosure: The enclosures are 3 or 6 meters
                        long and are made from a special aluminum profile.
                        They are used as continuous earth and offer a standard
                        degree of protection IP43, IP54, or IP55.<br />
                        Conductors These are copper bars that are double insulated with suitable cross-section.<br />
                        End Box This is used to terminate
                        busduct elbows and is available to meet
                        requirements for quick directional changes.<br />
                        Feed Box It is equipped with a suitable terminal
                        strip according to the size of the conductor and can either
                        be a standard product or come with circuit breakers
                        that have the same rating as the busduct as an option.<br />
                    </span>
                </p>
            </div>
            <div className='llbltcont'>
                <p className='llbtxtcont'>
                    <img src='llb2.jpeg' alt='' className='llbimgcont' />
                    <span>
                        <strong>Assembly:</strong><br />
                        It describes how busduct enclosures can be connected both mechanically
                        and electrically in a quick manner.
                        Electrical connections are made using a plug connector,
                        as illustrated in the accompanying figure.
                        <strong>Suspension:</strong><br />
                        The busduct enclosures are supported by adjustable hangers that allow for quick surface mounting along a ceiling or beam.

                        It mentions that the spacing between suspension points is 2 meters.

                        The adjustable nature of the hangers means that the lighting level can be changed even after assembly.

                        <strong>Outlets:</strong><br />
                        Outlets are distributed regularly at intervals of one meter or as per the client's requirements.

                        There are two types of socket outlets available, rated up to 16 A 2P+E and up to 32 A 3P+E.

                        The sockets can also be equipped with fuses as an option.<br />

                        The image also shows a graphical representation of how a plug connector is used to establish an electrical connection between components of the busduct system.
                    </span>
                </p>
            </div>
            
        </div >
    )
}

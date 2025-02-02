import { useEffect } from 'react'
import './styles/lsba.css'
import Pbanner from './components/pbanner'
export default function Lsba( { sliding } ) {
    useEffect( () => {
        window.scrollTo( 0, 0 )
    }
        , [] )

    return (
        <div>
            <Pbanner sliding={ sliding } />
            <h1 className='lsbah1'>Lectrobar Sandwich Busduct (LSBA)</h1>
            <div className='lsbaltcont'>
                <p className='lsbatxtcont'>
                    <a href='/AluminumCataloglite.pdf' target='_blank'>
                        <img src='lsbac.jpeg' alt='' className='lsbaimgcont' />
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
            {/* <img src='/gdwl.jpg' alt='' className='lsbagdwl' /> */}
            <div className='lsbartcont'>
                <p className='lsbatxtcont'>
                    <img src='lsba1.jpeg' alt='' className='lsbaimgcont' />
                    <span>
                        {/* <strong>Busducts</strong><br />
                        <b><i>Busduct Versus Cable and Trays</i></b><br />
                        <b>Flexibility:</b><br />
                        Reusable, Expandable.<br />
                        -Tap-off units enable the drawing down of additional power to be easy and compact<br />
                        -Modular design of busducts means that the distribution supply can be easily changed<br />
                        -Can be easily dismantled, relocated and reused.<br /> */}
                        <b>Joints:</b><br />
                        Joints in all ratings are of a two bolt patent design,
                        which can be checked for tightness without
                        de-energizing the system. This design ensures
                        excellent contact between each set of the busbars and
                        the joint. This method exerts more than two tons of
                        pressure on overlapping bus bars at each bolt. This
                        force is distributed over the contact area by two pairs of
                        large diameter spring steel conical shape washers.
                        These washers ensure maintenance free joint.
                    </span>
                </p>
            </div>
            <div className='lsbaltcont'>
                <p className='lsbatxtcont'>
                    <img src='lsba2.jpeg' alt='' className='lsbaimgcont' />
                    <span>
                        Joint alignment is made by two bolts instead of one bolt in
                        the single bolt design. This design ensures the correct
                        installation of the busduct joint even with non skilled labor.
                        The joint temperature is less than rest of the busduct due
                        to the specially designed heat sinks and contact surface.
                        Figure A shows the contact resistance at different torque
                        with the washers. The tightening torque of joint bolt does
                        not run down after initial accomodation, and is maintained
                        at a level that ensures stability of contact resistance and
                        temperature rise.
                    </span>
                </p>
            </div>
            
        </div >
    )
}

import React, { useEffect } from 'react'
import './project1.css'
export default function Gov( { scrollToProj, add } ) {
    useEffect( () => {
        scrollToProj()
        add( document.getElementById( 'project1container' ) );
    }
        , [] )
    var govsArr = [
        {
            mainImg: 'projects/gov/g1/1.jpg',
            projectName: 'ministry of manpower',
            consultantName: 'Huckle',
            consultantImg: 'projects/consultants/gt1.png',
            constructorName: 'larsen & toubro',
            constructorImg: 'projects/constructors/br1.png',
            meters: '1081 Meters',
            type: 'national',
            country: 'egypt'
        },
        {
            mainImg: 'projects/gov/g2/1.png',
            projectName: 'prisidency of the council of ministers',
            consultantName: 'consultant',
            consultantImg: 'projects/consultants/gt2.png',
            constructorName: 'orascom',
            constructorImg: 'projects/constructors/br2.png',
            meters: '24065 Meters',
            type: 'national',
            country: 'egypt'
        },
        {
            mainImg: 'projects/gov/g3/1.png',
            projectName: 'ministries complex new capital egypt',
            consultantName: 'consultant',
            consultantImg: 'projects/consultants/gt3.png',
            constructorName: 'constructor',
            constructorImg: 'projects/constructors/br3.png',
            meters: '24065 Meters',
            type: 'national',
            country: 'Egypt'
        },
        {
            mainImg: 'projects/gov/g4/1.jpg',
            projectName: 'egypt parlimant',
            consultantName: 'consultant',
            consultantImg: 'projects/consultants/gt4.png',
            constructorName: 'al mokaweloon al arab',
            constructorImg: 'projects/constructors/edr1.png',
            meters: '970 Meters',
            type: 'national',
            country: 'egypt'
        },
        {
            mainImg: 'projects/gov/g5/1.jpg',
            projectName: 'new capital ',
            consultantName: 'consultant',
            consultantImg: 'projects/consultants/gt5.png',
            constructorName: 'constructor',
            constructorImg: 'projects/constructors/br5.png',
            meters: '34085 Meters',
            type: 'national',
            country: 'egypt'
        },
        {
            mainImg: 'projects/gov/g6/1.jpg',
            projectName: 'civilization museum',
            consultantName: 'crown home',
            consultantImg: 'projects/consultants/gt6.jpg',
            constructorName: 'hassan allam',
            constructorImg: 'projects/constructors/br6.png',
            meters: '3135 Meters',
            type: 'national',
            country: 'Egypt'
        }
    ]
    return (
        <>
            <div className='project1container' id='project1container'>
                <h1>Governmental Org.</h1>
                {
                    govsArr.map(
                        ( gov ) => {
                            return (
                                <div className='project1project' id={ gov.projectName }>
                                    <div className='project1imgcont'>
                                        <img className='project1mainimg' src={ gov.mainImg } alt='' />
                                    </div>
                                    <div className='project1datacont'>
                                        <h2> { gov.projectName }</h2>
                                        <ul>
                                            <li>-{ gov.consultantName }<img src={ gov.consultantImg } alt='' /></li>
                                            <li>-{ gov.constructorName }<img src={ gov.constructorImg } alt='' /></li>
                                            <li>-{ gov.meters }</li>
                                            <li>-{ gov.type + `( ${ gov.country } )` }</li>
                                        </ul>
                                    </div>
                                </div>

                            )
                        }
                    )
                }
            </div>

        </>

    )
}

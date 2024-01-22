import React, { useEffect } from 'react'
import './project1.css'
export default function Villages( { scrollToProj, add } ) {
    useEffect( () => {
        scrollToProj()
        add( document.getElementById( 'project1container' ) );
    }
        , [] )
    var villsArr = [
        {
            mainImg: 'projects/villages/v1/1.png',
            projectName: 'LamaR BAUSHER',
            consultantName: 'HP',
            consultantImg: 'projects/consultants/bt1.png',
            constructorName: 'larsen & toubro',
            constructorImg: 'projects/constructors/gr1.png',
            meters: 345,
            type: 'International',
            country: 'Oman'
        },
        {
            mainImg: 'projects/villages/v2/1.jpg',
            projectName: 'smart village',
            consultantName: 'shaker',
            consultantImg: 'projects/consultants/ht2.png',
            constructorName: 'siemens',
            constructorImg: 'projects/constructors/mr1.png',
            meters: 960,
            type: 'national',
            country: 'egypt'
        },
        {
            mainImg: 'projects/villages/v3/1.jpg',
            projectName: 'beverly hills',
            consultantName: 'ACE',
            consultantImg: 'projects/consultants/etct3.png',
            constructorName: 'al mokaweloon al arab',
            constructorImg: 'projects/constructors/edr1.png',
            meters: 350,
            type: 'national',
            country: 'egypt'
        }
    ]

    return (
        <>
            <div className='project1container' id='project1container'>
                <h1>Villages</h1>
                {
                    villsArr.map(
                        ( vill ) => {
                            return (
                                <div className='project1project' id={ vill.projectName }>
                                    <div className='project1imgcont'>
                                        <img className='project1mainimg' src={ vill.mainImg } alt='' />
                                    </div>
                                    <div className='project1datacont'>
                                        <h2> { vill.projectName }</h2>
                                        <ul>
                                            <li>-{ vill.consultantName }<img src={ vill.consultantImg } alt='' /></li>
                                            <li>-{ vill.constructorName }<img src={ vill.constructorImg } alt='' /></li>
                                            <li>-{ vill.meters } Meters</li>
                                            <li>-{ vill.type + `( ${ vill.country } )` }</li>
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

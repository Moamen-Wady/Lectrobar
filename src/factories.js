import React, { useEffect } from 'react'
import './project1.css'
export default function Factories( { scrollToProj, add } ) {
    useEffect( () => {
        scrollToProj()
        add( document.getElementById( 'project1container' ) );
    }
        , [] )
    var fsArr = [
        {
            mainImg: 'projects/factories/f1/1.png',
            projectName: 'BMIC',
            consultantName: 'cummins',
            consultantImg: 'projects/consultants/ft1.png',
            constructorName: 'cummins',
            constructorImg: 'projects/constructors/fr1.png',
            meters: '300 Meters',
            type: 'national',
            country: 'egypt'
        },
        {
            mainImg: 'projects/factories/f2/1.jpg',
            projectName: 'WATER PLANT AREA DUQM OMAN',
            consultantName: 'L&T',
            consultantImg: 'projects/consultants/ft2.jpg',
            constructorName: 'ACTS',
            constructorImg: 'projects/constructors/fr2.jpg',
            meters: '5700 Amperes',
            type: 'international',
            country: 'oman'
        }
    ]
    return (
        <>
            <div className='project1container' id='project1container'>
                <h1>Factories</h1>
                {
                    fsArr.map(
                        ( f ) => {
                            return (
                                <div className='project1project' id={ f.projectName }>
                                    <div className='project1imgcont'>
                                        <img className='project1mainimg' src={ f.mainImg } alt='' />
                                    </div>
                                    <div className='project1datacont'>
                                        <h2> { f.projectName }</h2>
                                        <ul>
                                            <li>-{ f.consultantName }<img src={ f.consultantImg } alt='' /></li>
                                            <li>-{ f.constructorName }<img src={ f.constructorImg } alt='' /></li>
                                            <li>-{ f.meters }</li>
                                            <li>-{ f.type + `( ${ f.country } )` }</li>
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

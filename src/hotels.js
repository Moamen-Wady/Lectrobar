import React, { useEffect } from 'react'
import './project1.css'
export default function Hotels( { scrollToProj, add } ) {
    useEffect( () => {
        scrollToProj()
        add( document.getElementById( 'project1container' ) );
    }
        , [] )
    var hotelsArr = [
        {
            mainImg: 'projects/hotels/h1/1.jpg',
            projectName: 'anantara',
            consultantName: 'ECG',
            consultantImg: 'projects/consultants/etct4.png',
            constructorName: 'KCT',
            constructorImg: 'projects/constructors/etcr4.png',
            meters: '445 Meters',
            type: 'International',
            country: 'Qatar'
        },
        {
            mainImg: 'projects/hotels/h2/1.png',
            projectName: 'choueifat hotel',
            consultantName: 'Shaker',
            consultantImg: 'projects/consultants/ht2.png',
            constructorName: 'amlak',
            constructorImg: 'projects/constructors/hr2.png',
            meters: '6350 Meters',
            type: 'national',
            country: 'egypt'
        },
        {
            mainImg: 'projects/hotels/h3/1.jpeg',
            projectName: 'porto marina',
            consultantName: 'Crown Home',
            consultantImg: 'projects/consultants/gt6.jpg',
            constructorName: 'amer',
            constructorImg: 'projects/constructors/hr3.png',
            meters: '2240 Meters',
            type: 'national',
            country: 'Egypt'
        },
        {
            mainImg: 'projects/hotels/h4/1.jpg',
            projectName: 'raya plaza',
            consultantName: 'Shaker',
            consultantImg: 'projects/consultants/ht2.png',
            constructorName: 'ABB',
            constructorImg: 'projects/constructors/hr4.png',
            meters: '1004 Meters',
            type: 'national',
            country: 'Egypt'
        },
        {
            mainImg: 'projects/hotels/h5/1.jpg',
            projectName: 'City Max Hotels',
            consultantName: 'arkiplan',
            consultantImg: 'projects/consultants/ht5.jpg',
            constructorName: 'Chirag',
            constructorImg: 'projects/constructors/hr5.jpg',
            meters: '217 Meters',
            type: 'international',
            country: 'UAE'
        }
    ]
    return (
        <>
            <div className='project1container' id='project1container'>
                <h1>Hotels</h1>
                {
                    hotelsArr.map(
                        ( hotel ) => {
                            return (
                                <div className='project1project' id={ hotel.projectName }>
                                    <div className='project1imgcont'>
                                        <img className='project1mainimg' src={ hotel.mainImg } alt='' />
                                    </div>
                                    <div className='project1datacont'>
                                        <h2> { hotel.projectName }</h2>
                                        <ul>
                                            <li>-{ hotel.consultantName }<img src={ hotel.consultantImg } alt='' /></li>
                                            <li>-{ hotel.constructorName }<img src={ hotel.constructorImg } alt='' /></li>
                                            <li>-{ hotel.meters }</li>
                                            <li>-{ hotel.type + `( ${ hotel.country } )` }</li>
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

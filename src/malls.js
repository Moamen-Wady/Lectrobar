import React, { useEffect } from 'react'
import './project1.css'
export default function Malls( { scrollToProj, add } ) {
    useEffect( () => {
        scrollToProj()
        add( document.getElementById( 'project1container' ) );
    }
        , [] )
    var mallsArr = [
        {
            mainImg: 'projects/malls/m1/1.png',
            projectName: 'The Polygon',
            consultantName: 'shaker',
            consultantImg: 'projects/consultants/ht2.png',
            constructorName: 'siemens',
            constructorImg: 'projects/constructors/mr1.png',
            meters: '1324 Meters',
            type: 'national',
            country: 'egypt'
        },
        {
            mainImg: 'projects/malls/m2/1.png',
            projectName: 'FORTY WEST',
            consultantName: 'shaker',
            consultantImg: 'projects/consultants/ht2.png',
            constructorName: 'hassan allam',
            constructorImg: 'projects/constructors/gr6.jpg',
            meters: '460 Meters',
            type: 'national',
            country: 'egypt'
        },
        {
            mainImg: 'projects/malls/m3/1.jpeg',
            projectName: 'Carrefour',
            consultantName: 'shaker',
            consultantImg: 'projects/consultants/ht2.png',
            constructorName: 'siemens',
            constructorImg: 'projects/constructors/mr1.png',
            meters: '465 Meters',
            type: 'national',
            country: 'egypt'
        },
        {
            mainImg: 'projects/malls/m4/1.jpeg',
            projectName: 'Mirage Mall',
            consultantName: 'KE',
            consultantImg: 'projects/consultants/mt4.png',
            constructorName: 'detac',
            constructorImg: 'projects/constructors/br3.png',
            meters: '1045 Meters',
            type: 'national',
            country: 'egypt'
        },
        {
            mainImg: 'projects/malls/m5/1.jpg',
            projectName: 'DAMAC park Avenue',
            consultantName: 'KA',
            consultantImg: 'projects/consultants/mt5.png',
            constructorName: 'detac',
            constructorImg: 'projects/constructors/br3.png',
            meters: '320 Meters',
            type: 'national',
            country: 'egypt'
        },
        {
            mainImg: 'projects/malls/m6/1.jpg',
            projectName: 'Capital Business Parks',
            consultantName: 'KA',
            consultantImg: 'projects/consultants/mt5.png',
            constructorName: 'durrah',
            constructorImg: 'projects/constructors/mr6.png',
            meters: '180 Meters',
            type: 'national',
            country: 'egypt'
        },
        {
            mainImg: 'projects/malls/m7/1.jpg',
            projectName: 'The DUBAI MALL FASHION ATRIUM EXPANSION',
            consultantName: 'WSP',
            consultantImg: 'projects/consultants/mt7.jpg',
            constructorName: 'SP',
            constructorImg: 'projects/constructors/mr7.png',
            meters: '4000 Amperes',
            type: 'international',
            country: 'UAE'
        },
        {
            mainImg: 'projects/malls/m8/1.jpg',
            projectName: 'AL ARAIMI BOULIVARD MALL',
            consultantName: 'AEB',
            consultantImg: 'projects/consultants/mt8.jpg',
            constructorName: 'UNIQUE',
            constructorImg: 'projects/constructors/mr8.jpg',
            meters: '7300 Amperes',
            type: 'international',
            country: 'Oman'
        }
    ]

    return (
        <>
            <div className='project1container' id='project1container'>
                <h1>Malls</h1>

                {
                    mallsArr.map(
                        ( mall ) => {
                            return (
                                <div className='project1project' id={ mall.projectName }>
                                    <div className='project1imgcont'>
                                        <img className='project1mainimg' src={ mall.mainImg } alt='' />
                                    </div>
                                    <div className='project1datacont'>
                                        <h2> { mall.projectName }</h2>
                                        <ul>
                                            <li>-{ mall.consultantName }<img src={ mall.consultantImg } alt='' /></li>
                                            <li>-{ mall.constructorName }<img src={ mall.constructorImg } alt='' /></li>
                                            <li>-{ mall.meters }</li>
                                            <li>-{ mall.type + `( ${ mall.country } )` }</li>
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

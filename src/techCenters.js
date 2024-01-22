import React, { useEffect } from 'react'
import './project1.css'
export default function TechCenters( { scrollToProj, add } ) {
    useEffect( () => {
        scrollToProj()
        add( document.getElementById( 'project1container' ) );
    }
        , [] )
    var tcsArr = [
        {
            mainImg: 'projects/techCenters/tc1/1.png',
            projectName: 'NN1',
            consultantName: 'consultant',
            consultantImg: 'projects/consultants/tct1.png',
            constructorName: 'orascom',
            constructorImg: 'projects/constructors/gr2.png',
            meters: 7720,
            type: 'national',
            country: 'Egypt'
        },
        {
            mainImg: 'projects/techCenters/tc2/1.png',
            projectName: 'NN2',
            consultantName: 'consultant',
            consultantImg: 'projects/consultants/tct1.png',
            constructorName: 'hassan allam',
            constructorImg: 'projects/constructors/gr6.jpg',
            meters: 5205,
            type: 'national',
            country: 'Egypt'
        },
        {
            mainImg: 'projects/techCenters/tc3/1.jpg',
            projectName: 'Etisalat',
            consultantName: 'KE',
            consultantImg: 'projects/consultants/mt4.png',
            constructorName: 'conserv',
            constructorImg: 'projects/constructors/tcr3.png',
            meters: 870,
            type: 'national',
            country: 'Egypt'
        },
        {
            mainImg: 'projects/techCenters/tc4/1.jpg',
            projectName: 'Vodafone',
            consultantName: 'shaker',
            consultantImg: 'projects/consultants/ht2.png',
            constructorName: 'ABB',
            constructorImg: 'projects/constructors/hr4.png',
            meters: 280,
            type: 'national',
            country: 'Egypt'
        }
    ]

    return (
        <>
            <div className='project1container' id='project1container'>
                <h1>Tech Centers</h1>

                {
                    tcsArr.map(
                        ( tc ) => {
                            return (
                                <div className='project1project' id={ tc.projectName }>
                                    <div className='project1imgcont'>
                                        <img className='project1mainimg' src={ tc.mainImg } alt='' />
                                    </div>
                                    <div className='project1datacont'>
                                        <h2> { tc.projectName }</h2>
                                        <ul>
                                            <li>-{ tc.consultantName }<img src={ tc.consultantImg } alt='' /></li>
                                            <li>-{ tc.constructorName }<img src={ tc.constructorImg } alt='' /></li>
                                            <li>-{ tc.meters } Meters</li>
                                            <li>-{ tc.type + `( ${ tc.country } )` }</li>
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

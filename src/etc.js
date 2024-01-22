import React, { useEffect } from 'react'
import './project1.css'
export default function Etc( { scrollToProj, add } ) {
    useEffect( () => {
        scrollToProj()
        add( document.getElementById( 'project1container' ) );
    }
        , [] )
    var etcArr = [
        {
            mainImg: 'projects/etc/etc1/1.png',
            projectName: 'COC-CCC',
            consultantName: 'consultant',
            consultantImg: 'projects/consultants/etct1.png',
            constructorName: 'constructor',
            constructorImg: 'projects/constructors/etcr1.png',
            meters: '12725 Meters',
            type: 'national',
            country: 'Egypt'
        },
        {
            mainImg: 'projects/etc/etc2/1.jpg',
            projectName: 'Giza System',
            consultantName: 'ezzo',
            consultantImg: 'projects/consultants/etct2.png',
            constructorName: 'detac',
            constructorImg: 'projects/constructors/br3.png',
            meters: '2630 Amperes',
            type: 'national',
            country: 'Egypt'
        },
        {
            mainImg: 'projects/etc/etc3/1.jpg',
            projectName: 'tahrir square garage',
            consultantName: 'ACE',
            consultantImg: 'projects/consultants/etct3.png',
            constructorName: 'al mokaweloon al arab',
            constructorImg: 'projects/constructors/edr1.png',
            meters: '968 Meters',
            type: 'national',
            country: 'Egypt'
        },
        {
            mainImg: 'projects/etc/etc4/1.jpg',
            projectName: 'Lekhwiya-Qatar',
            consultantName: 'ECG',
            consultantImg: 'projects/consultants/etct4.png',
            constructorName: 'KCT',
            constructorImg: 'projects/constructors/etcr4.png',
            meters: '650 Meters',
            type: 'international',
            country: 'Oman'
        },
        {
            mainImg: 'projects/etc/etc5/1.jpeg',
            projectName: 'Eastern tobacco company',
            consultantName: 'Eng.Abdo El Shahat',
            consultantImg: '',
            constructorName: 'Detac',
            constructorImg: 'projects/constructors/br3.png',
            meters: '67050 Meters',
            type: 'national',
            country: 'Egypt'
        }
    ]


    return (
        <>
            <div className='project1container' id='project1container'>
                <h1>Etc</h1>
                {
                    etcArr.map(
                        ( etc ) => {
                            return (
                                <div className='project1project' id={ etc.projectName }>
                                    <div className='project1imgcont'>
                                        <img className='project1mainimg' src={ etc.mainImg } alt='' />
                                    </div>
                                    <div className='project1datacont'>
                                        <h2> { etc.projectName }</h2>
                                        <ul>
                                            <li>-{ etc.consultantName }<img src={ etc.consultantImg } alt='' /></li>
                                            <li>-{ etc.constructorName }<img src={ etc.constructorImg } alt='' /></li>
                                            <li>-{ etc.meters }</li>
                                            <li>-{ etc.type + `( ${ etc.country } )` }</li>
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

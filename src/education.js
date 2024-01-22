import React, { useEffect } from 'react'
import './project1.css'
export default function Education( { scrollToProj, add } ) {
    useEffect( () => {
        scrollToProj()
        add( document.getElementById( 'project1container' ) );
    }
        , [] )
    var eduArr = [
        {
            mainImg: 'projects/education/ed1/1.jpg',
            projectName: 'Helwan university',
            consultantName: 'dr. salam',
            consultantImg: 'projects/consultants/edt1.png',
            constructorName: 'almokaweloon al arab',
            constructorImg: 'projects/constructors/edr1.png',
            meters: '590 Meters',
            type: 'national',
            country: 'Egypt'
        },
        {
            mainImg: 'projects/education/ed2/1.jpg',
            projectName: 'Additional Block Girls Primary school',
            consultantName: 'ministry of education bahrain',
            consultantImg: 'projects/consultants/edt2.jpg',
            constructorName: 'EWA',
            constructorImg: 'projects/constructors/edr2.jpg',
            meters: '800 Amperes',
            type: 'international',
            country: 'Bahrain'
        },
        {
            mainImg: 'projects/education/ed3/1.jpg',
            projectName: 'ADDITIONAL ACADEMIC BLOCK FOR GIRTS INTERMEDIATE SCHOOL',
            consultantName: 'ministry of education bahrain',
            consultantImg: 'projects/consultants/edt2.jpg',
            constructorName: 'EWA',
            constructorImg: 'projects/constructors/edr2.jpg',
            meters: '800 Amperes',
            type: 'international',
            country: 'Bahrain'
        },
        {
            mainImg: 'projects/education/ed4/1.jpg',
            projectName: 'ADDITIONAL ACADEMIC BLOCK SPORTS HALL FOR GIRLS PRIMARY SCHOOL',
            consultantName: 'ministry of education bahrain',
            consultantImg: 'projects/consultants/edt2.jpg',
            constructorName: 'EWA',
            constructorImg: 'projects/constructors/edr2.jpg',
            meters: '700 Amperes',
            type: 'international',
            country: 'Bahrain'
        },
    ]
    return (
        <>
            <div className='project1container' id='project1container'>
                <h1>Education</h1>
                {
                    eduArr.map(
                        ( edu ) => {
                            return (
                                <div className='project1project' id={ edu.projectName }>
                                    <div className='project1imgcont'>
                                        <img className='project1mainimg' src={ edu.mainImg } alt='' />
                                    </div>
                                    <div className='project1datacont'>
                                        <h2> { edu.projectName }</h2>
                                        <ul>
                                            <li>-{ edu.consultantName }<img src={ edu.consultantImg } alt='' /></li>
                                            <li>-{ edu.constructorName }<img src={ edu.constructorImg } alt='' /></li>
                                            <li>-{ edu.meters }</li>
                                            <li>-{ edu.type + `( ${ edu.country } )` }</li>
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

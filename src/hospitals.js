import React, { useEffect } from 'react'
import './project1.css'
export default function Hospitals( { scrollToProj, add } ) {
    useEffect( () => {
        scrollToProj()
        add( document.getElementById( 'project1container' ) );
    }
        , [] )
    var hospitalsArr = [
        {
            mainImg: 'projects/hospitals/hos1/1.jpg',
            projectName: 'GULF MEDICAL UNIVERSITY AND HOSPITAL',
            consultantName: 'HOSMAC',
            consultantImg: 'projects/consultants/host1.jpg',
            constructorName: 'THUMBAY',
            constructorImg: 'projects/constructors/hosr1.jpg',
            meters: '203 Meters',
            type: 'International',
            country: 'UAE'
        }
    ]
    return (
        <>
            <div className='project1container' id='project1container'>
                <h1>Hospitals</h1>
                {
                    hospitalsArr.map(
                        ( hos ) => {
                            return (
                                <div className='project1project' id={ hos.projectName }>
                                    <div className='project1imgcont'>
                                        <img className='project1mainimg' src={ hos.mainImg } alt='' />
                                    </div>
                                    <div className='project1datacont'>
                                        <h2> { hos.projectName }</h2>
                                        <ul>
                                            <li>-{ hos.consultantName }<img src={ hos.consultantImg } alt='' /></li>
                                            <li>-{ hos.constructorName }<img src={ hos.constructorImg } alt='' /></li>
                                            <li>-{ hos.meters }</li>
                                            <li>-{ hos.type + `( ${ hos.country } )` }</li>
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

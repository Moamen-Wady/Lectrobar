import React, { useEffect } from 'react'
import './project1.css'
export default function Towers( { scrollToProj, add } ) {
    useEffect( () => {
        scrollToProj()
        add( document.getElementById( 'project1container' ) );
    }
        , [] )
    var tsArr = [
        {
            mainImg: 'projects/towers/t1/1.png',
            projectName: 'el mazroei tower',
            consultantName: 'consultair',
            consultantImg: 'projects/consultants/tt1.png',
            constructorName: 'JAMS',
            constructorImg: 'projects/constructors/tr1.jpg',
            meters: '440 Meters',
            type: 'iternational',
            country: 'UAE'
        },
        {
            mainImg: 'projects/towers/t2/1.png',
            projectName: 'al katami tower fujairah',
            consultantName: 'Emirates Engineering Consulting',
            consultantImg: 'projects/consultants/tt2.png',
            constructorName: 'JAMS',
            constructorImg: 'projects/constructors/tr1.jpg',
            meters: '100 Meters',
            type: 'iternational',
            country: 'UAE'
        },
        {
            mainImg: 'projects/towers/t3/1.jpg',
            projectName: 'al baraha',
            consultantName: 'EHAF',
            consultantImg: 'projects/consultants/tt3.png',
            constructorName: 'CRC',
            constructorImg: 'projects/constructors/tr3.png',
            meters: '450 Meters',
            type: 'iternational',
            country: 'Qatar'
        },
        {
            mainImg: 'projects/towers/t4/1.png',
            projectName: 'al jasra twin tower',
            consultantName: 'EHAF',
            consultantImg: 'projects/consultants/tt3.png',
            constructorName: 'CRC',
            constructorImg: 'projects/constructors/tr3.png',
            meters: '884 Meters',
            type: 'iternational',
            country: 'Qatar'
        },
        {
            mainImg: 'projects/towers/t5/1.jpg',
            projectName: 'shaali tower',
            consultantName: 'KWEC',
            consultantImg: 'projects/consultants/tt5.png',
            constructorName: 'MEC',
            constructorImg: 'projects/constructors/tr5.png',
            meters: '425 Meters',
            type: 'iternational',
            country: 'UAE'
        },
        {
            mainImg: 'projects/towers/t6/1.jpg',
            projectName: 'zafranah tower',
            consultantName: 'NEXT',
            consultantImg: 'projects/consultants/tt6.png',
            constructorName: 'BEMCO',
            constructorImg: 'projects/constructors/tr6.png',
            meters: '830 Meters',
            type: 'iternational',
            country: 'UAE'
        },
        {
            mainImg: 'projects/towers/t7/1.jpg',
            projectName: 'smouha towers',
            consultantName: 'egyptian armed forces engineering authority',
            consultantImg: 'projects/consultants/tt7.jpg',
            constructorName: 'hassan allam',
            constructorImg: 'projects/constructors/gr6.jpg',
            meters: '640 Meters',
            type: 'national',
            country: 'egypt'
        },
        {
            mainImg: 'projects/towers/t8/1.png',
            projectName: 'marina mix',
            consultantName: 'AEB',
            consultantImg: 'projects/consultants/tt8.jpg',
            constructorName: 'Metrix',
            constructorImg: 'projects/constructors/tr8.png',
            meters: '290 Meters',
            type: 'national',
            country: 'Egypt'
        },
        /*/////////////////////*/
        /*/////////////////////*/
        /*/////////////////////*/
        /*/////////////////////*/
        {
            mainImg: 'projects/towers/t9/1.png',
            projectName: 'OASIS TOWER2',
            consultantName: 'Canadian Consultant',
            consultantImg: 'projects/towers/t9/t.jpg',
            constructorName: 'gulfasia',
            constructorImg: 'projects/towers/t9/r.jpg',
            meters: '4100 Amperes',
            type: 'international',
            country: 'UAE'
        },
        {
            mainImg: 'projects/towers/t10/1.jpg',
            projectName: 'CLOCK TOWER',
            consultantName: 'Proarc',
            consultantImg: 'projects/towers/t10/t.jpg',
            constructorName: 'kahrab',
            constructorImg: 'projects/towers/t10/r.jpg',
            meters: '3150 Amperes',
            type: 'international',
            country: 'UAE'
        },
        {
            mainImg: 'projects/towers/t11/1.jpg',
            projectName: 'AKA RESIDENCE',
            consultantName: 'POE',
            consultantImg: 'projects/towers/t11/t.jpg',
            constructorName: 'Dubai walls',
            constructorImg: 'projects/towers/t11/r.png',
            meters: '1200 Amperes',
            type: 'international',
            country: 'UAE'
        },
        {
            mainImg: 'projects/towers/t12/1.jpg',
            projectName: 'Centeral Park Tower',
            consultantName: 'sigmaart',
            consultantImg: 'projects/towers/t12/t.jpg',
            constructorName: 'AQTS',
            constructorImg: 'projects/towers/t12/r.jpg',
            meters: '310 Meters',
            type: 'international',
            country: 'UAE'
        },
        {
            mainImg: 'projects/towers/t13/1.jpg',
            projectName: 'Rose 10',
            consultantName: 'Bel-Yoahah',
            consultantImg: 'projects/towers/t13/t.jpg',
            constructorName: 'Eastern International',
            constructorImg: 'projects/towers/t13/r.jpg',
            meters: '295 Meters',
            type: 'international',
            country: 'UAE'
        },
        {
            mainImg: 'projects/towers/t14/1.jpg',
            projectName: 'Khalifa Khamees Matter ',
            consultantName: 'EDMAC',
            consultantImg: 'projects/towers/t14/t.jpg',
            constructorName: 'lord',
            constructorImg: 'projects/towers/t14/r.jpg',
            meters: '4000 Amperes',
            type: 'international',
            country: 'UAE'
        },
        {
            mainImg: 'projects/towers/t15/1.jpg',
            projectName: 'CHARITABLE SOCIETY FUJAIRAH',
            consultantName: 'Talal Nawfal',
            consultantImg: 'projects/towers/t15/t.jpg',
            constructorName: 'FNCT',
            constructorImg: 'projects/towers/t15/r.jpg',
            meters: '3200 Amperes',
            type: 'international',
            country: 'UAE'
        },
        {
            mainImg: 'projects/towers/t16/1.jpg',
            projectName: 'Ebraheim Ali Abdullah ',
            consultantName: 'FEDC',
            consultantImg: 'projects/towers/t16/t.jpg',
            constructorName: 'Skyline',
            constructorImg: 'projects/towers/t16/r.jpg',
            meters: '2250 Amperes',
            type: 'international',
            country: 'UAE'
        },
        {
            mainImg: 'projects/towers/t17/1.jpg',
            projectName: 'Clouds 9',
            consultantName: 'Crown',
            consultantImg: 'projects/towers/t17/t.jpg',
            constructorName: 'MESC',
            constructorImg: 'projects/towers/t17/r.jpg',
            meters: '143 Meters',
            type: 'international',
            country: 'UAE'
        },
        {
            mainImg: 'projects/towers/t18/1.jpg',
            projectName: 'Naresh Kumar Building Ajman',
            consultantName: 'AL Nakheel',
            consultantImg: 'projects/towers/t18/t.jpg',
            constructorName: 'La Casa',
            constructorImg: 'projects/towers/t18/r.jpg',
            meters: '130 Meters',
            type: 'international',
            country: 'UAE'
        },
        {
            mainImg: 'projects/towers/t19/1.jpg',
            projectName: 'Qurtaba Tower Ajman',
            consultantName: 'AL Nakheel',
            consultantImg: 'projects/towers/t19/t.jpg',
            constructorName: 'Al Alaa',
            constructorImg: 'projects/towers/t19/r.jpg',
            meters: '240 Meters',
            type: 'international',
            country: 'UAE'
        },
        {
            mainImg: 'projects/towers/t20/1.jpg',
            projectName: 'Globel Gulf 2 Dubai',
            consultantName: 'Dimensions',
            consultantImg: 'projects/towers/t20/t.jpg',
            constructorName: 'DUBCO',
            constructorImg: 'projects/towers/t20/r.jpg',
            meters: '731 Meters',
            type: 'international',
            country: 'UAE'
        },
        {
            mainImg: 'projects/towers/t21/1.jpg',
            projectName: 'Goshi Residence Tower Dubailand',
            consultantName: 'NEXT',
            consultantImg: 'projects/towers/t21/t.jpg',
            constructorName: 'BEST',
            constructorImg: 'projects/towers/t21/r.jpg',
            meters: '110 Meters',
            type: 'international',
            country: 'UAE'
        }
    ]
    return (
        <>
            <div className='project1container' id='project1container'>
                <h1>Towers</h1>
                {
                    tsArr.map(
                        ( t ) => {
                            return (
                                <div className='project1project' id={ t.projectName }>
                                    <div className='project1imgcont'>
                                        <img className='project1mainimg' src={ t.mainImg } alt='' />
                                    </div>
                                    <div className='project1datacont'>
                                        <h2> { t.projectName }</h2>
                                        <ul>
                                            <li>-{ t.consultantName }<img src={ t.consultantImg } alt='' /></li>
                                            <li>-{ t.constructorName }<img src={ t.constructorImg } alt='' /></li>
                                            <li>-{ t.meters }</li>
                                            <li>-{ t.type + `( ${ t.country } )` }</li>
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

import React, { useEffect } from 'react'
import './project1.css'

export default function Banks( { scrollToProj, add } ) {
    useEffect( () => {
        scrollToProj();
        add( document.getElementById( 'project1container' ) );
    }
        , [] )
    var banksArr = [
        {
            mainImg: 'projects/banks/b1/1.jpg',
            projectName: 'Central Bank of Oman',
            consultantName: 'HP',
            consultantImg: 'projects/consultants/bt1.png',
            constructorName: 'aladrak',
            constructorImg: 'projects/constructors/br1.png',
            meters: 705,
            type: 'International',
            country: 'Oman'
        },
        {
            mainImg: 'projects/banks/b2/1.jpg',
            projectName: 'bank muscat',
            consultantName: 'atkins',
            consultantImg: 'projects/consultants/bt2.png',
            constructorName: 'galfar',
            constructorImg: 'projects/constructors/br2.png',
            meters: 190,
            type: 'International',
            country: 'Oman'
        },
        {
            mainImg: 'projects/banks/b3/1.jpeg',
            projectName: 'Ahly United Bank',
            consultantName: 'inter-Desing',
            consultantImg: 'projects/consultants/bt3.jpg',
            constructorName: 'Detac',
            constructorImg: 'projects/constructors/br3.png',
            meters: 600,
            type: 'national',
            country: 'Egypt'
        }
    ]
    return (
        <>
            <div className='project1container' id='project1container'>
                <h1>Banks</h1>
                {
                    banksArr.map(
                        ( bank ) => {
                            return (
                                <div className='project1project' id={ bank.projectName }>
                                    <div className='project1imgcont'>
                                        <img className='project1mainimg' src={ bank.mainImg } alt='' />
                                    </div>
                                    <div className='project1datacont'>
                                        <h2> { bank.projectName }</h2>
                                        <ul>
                                            <li>-{ bank.consultantName }<img src={ bank.consultantImg } alt='' /></li>
                                            <li>-{ bank.constructorName }<img src={ bank.constructorImg } alt='' /></li>
                                            <li>-{ bank.meters } Meters</li>
                                            <li>-{ bank.type + `( ${ bank.country } )` }</li>
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

import React, { memo, useEffect } from 'react'
import './banner.css'
import { Link } from 'react-router-dom'
import { useState, useCallback } from 'react';

export default memo( function Banner( { sliding } ) {

    var [ m, setm ] = useState( 0 )
    var [ b, setb ] = useState( 1 )

    useEffect(
        () => {
            sliding( m, "", 5, "go", "come", () => { setm( m + 1 ); setb( b + 1 ) }, () => { setm( 0 ); setb( b + 1 ) }, 3000 );
        }
        , [ b ]
    )
    const tryfwd = useCallback( () => {
        var x = document.getElementById( m );
        x.style.animationName = 'go'
        if ( m + 1 == 6 ) {
            var xx = document.getElementById( 0 );
            xx.style.animationName = 'come'
        }
        else {
            var xx = document.getElementById( m + 1 );
            xx.style.animationName = 'come'
        }

        if ( m == 5 ) { setm( 0 ) }
        else { setm( m + 1 ) }
    }
    )
    const trybwd = useCallback( () => {
        var x = document.getElementById( m );
        x.style.animationName = 'rgo'
        if ( m == 0 ) {
            var xx = document.getElementById( 5 );
            xx.style.animationName = 'rcome'
        }
        else {
            var xx = document.getElementById( m - 1 );
            xx.style.animationName = 'rcome'
        }

        if ( m == 0 ) { setm( 5 ) }
        else { setm( m - 1 ) }
    }
    )

    return (
        <div className='banw' id='banw'>
            <header className='head'>
                <div className='slz' id={ 0 } style={ { position: 'absolute', } }>
                    <img src='1.jpg' alt='' className='bg' />
                </div>
                <div className='slz' id={ 1 } style={ { position: 'absolute', } }>
                    <img src='2.jpg' alt='' className='bg' />
                </div>
                <div className='slz' id={ 2 } style={ { position: 'absolute', } }>
                    <img src='3.jpg' alt='' className='bg' />
                </div>
                <div className='slz' id={ 3 } style={ { position: 'absolute', } }>
                    <img src='4.jpg' alt='' className='bg' />
                </div>
                <div className='slz' id={ 4 } style={ { position: 'absolute', } }>
                    <img src='5.jpg' alt='' className='bg' />
                </div>
                <div className='slz' id={ 5 } style={ { position: 'absolute', } }>
                    <img src='6.jpg' alt='' className='bg' />
                </div>
            </header>
            <div className='btmportion'>
                <div className='leftp1'>
                    <div>
                        <span>
                            <pre>At Lectrobar Quality Comes First</pre>
                        </span>
                    </div>
                </div>
                <div className='leftp2'>
                    <Link to='/Blog'>Our News</Link>
                </div>
            </div>
            <button id='btnbannerleft' onClick={ trybwd } className='btnbanner bleft'> <img src='l.png' alt='' /> </button>
            <button id='btnbannerright' onClick={ tryfwd } className='btnbanner bright'> <img src='r.png' alt='' /> </button>
        </div>
    )
}
)
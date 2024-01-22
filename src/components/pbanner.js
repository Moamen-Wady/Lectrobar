import React, { memo, useEffect } from 'react'
import './pbanner.css'

import { useState, useCallback } from 'react';

export default memo( function Pbanner( { sliding } ) {

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
        <div className='productsbanw' id='banw'>
            <header className='productshead' >
                <div className='productsslz' id={ 0 } style={ { position: 'absolute', } }>
                    <img src='pr1.jpeg' alt='' className='productsbg' />
                </div>
                <div className='productsslz' id={ 1 } style={ { position: 'absolute', } }>
                    <img src='pr2.jpeg' alt='' className='productsbg' />
                </div>
                <div className='productsslz' id={ 2 } style={ { position: 'absolute', } }>
                    <img src='pr3.jpeg' alt='' className='productsbg' />
                </div>
                <div className='productsslz' id={ 3 } style={ { position: 'absolute', } }>
                    <img src='pr4.jpeg' alt='' className='productsbg' />
                </div>
                <div className='productsslz' id={ 4 } style={ { position: 'absolute', } }>
                    <img src='pr5.jpeg' alt='' className='productsbg' />
                </div>
                <div className='productsslz' id={ 5 } style={ { position: 'absolute', } }>
                    <img src='pr6.jpeg' alt='' className='productsbg' />
                </div>
            </header>
            <button id='btnbannerleft' onClick={ trybwd } className='productsbtnbanner bleft'> <img src='l.png' alt='' /> </button>
            <button id='btnbannerright' onClick={ tryfwd } className='productsbtnbanner bright'> <img src='r.png' alt='' /> </button>
        </div>
    )
}
)
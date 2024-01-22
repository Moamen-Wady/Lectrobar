import React, { memo } from 'react'
import './vidbanner.css'
import useIntersectionObserver from '@react-hook/intersection-observer'
import { useRef } from 'react'


export default memo( function VidBanner() {
    const containerRef = useRef()
    const lockRef = useRef( false )
    const { isIntersecting } = useIntersectionObserver( containerRef )
    if ( isIntersecting ) {
        lockRef.current = true
    }

    return (
        <div className='vidbanw' id='banw'>
            <header className='vidhead'>
                <h1 className='vidh1'>About Lectrobar</h1>
                <div className='vidvid' ref={ containerRef }>
                    <img src='btw.png' alt='' />
                    { lockRef.current && (
                        <video autoPlay muted loop>
                            <source src='lectro.mp4' type='video/mp4'></source>
                        </video>
                    ) }
                </div>
            </header>
        </div>
    )
}
)
import { useEffect, useState } from 'react'
import './e1.css'
import { AnimationOnScroll } from 'react-animation-on-scroll'

export default function E1() {
    useEffect( () => {
        window.scrollTo( 0, 0 )
    }
        , [] )

    return (
        <div className='e1cont'>
            <h1>CHINT Lectrobar Cairo Seminar</h1>
            <AnimationOnScroll animateOnce={ false } animateIn="animate__fadeInDown">
                <div className='e1main'>
                    <div className='e1txt'>
                        <p>
                            On September 11th, Lectrobar celebrated a strategic partnership with
                            the Chinese company CHNT for the production of
                            low-voltage panels at The Westin Hotel. The event
                            featured distinguished consultants, highlighting
                            collaborative efforts in advancing cutting-edge
                            electrical solutions. This significant collaboration
                            underscores Lectrobar's commitment to innovation and
                            global partnerships in the field of electrical engineering.
                        </p>
                    </div>
                    <div className='e1vid'>
                        <iframe src="https://drive.google.com/file/d/1JN8mscx39b_l7Ofb46rwT8g80UsuxK1-/preview" allow="autoplay"></iframe>
                    </div>
                </div>
            </AnimationOnScroll>

            <AnimationOnScroll animateOnce={ false } animateIn="animate__fadeInDown">
                <div className='e1pics'>
                    <div><img className='e1img' src='/blog/e11.jpg' alt='' /></div>
                    <div><img className='e1img' src='/blog/e12.jpg' alt='' /></div>
                    <div><img className='e1img' src='/blog/e13.jpg' alt='' /></div>
                    <div><img className='e1img' src='/blog/e14.jpg' alt='' /></div>
                    <div><img className='e1img' src='/blog/e15.jpg' alt='' /></div>
                    <div><img className='e1img' src='/blog/e16.jpg' alt='' /></div>
                </div>
            </AnimationOnScroll>
            
        </div>
    )
}

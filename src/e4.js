import React, { useEffect, useState } from 'react'
import './e4.css'
import { AnimationOnScroll } from 'react-animation-on-scroll'

export default function E4( { sliding } ) {
    var [ intro3, setIntro3 ] = useState( 0 )

    useEffect( () => {
        window.scrollTo( 0, 0 );
    }
        , [] )
    useEffect( () => {
        sliding( intro3, "ei4", 4, "go", "come", () => setIntro3( intro3 + 1 ), () => setIntro3( 0 ), 3000 )
    }
        , [ intro3 ] )

    return (
        <div className='e4cont'>
            <h1>Lectrobar Exhibition 2023</h1>
            <AnimationOnScroll animateOnce={ false } animateIn="animate__fadeInDown">
                <div className='e4main'>
                    <div className='e4txt'>
                        <p>
                            Lectrobar left a lasting impression at the Egypt
                            Energy Expo in Cairo from October 28th to 30th,
                            where our flagship product, the busbar, attracted
                            keen interest from attendees. As we delved into our
                            manufacturing history, the event served as a valuable
                            opportunity for networking, emphasizing Lectrobar's
                            commitment to innovation, and firmly establishing us
                            as a leader in the industry.
                        </p>
                    </div>
                    <div className='e4vid'>
                        <div className='e4slider'>
                            <div className='e4introanim'>
                                <div id={ 0 + "ei4" }>
                                    <img src='/blog/ve41.jpg' alt='' />
                                </div>
                                <div id={ 1 + "ei4" }>
                                    <img src='/blog/ve42.jpg' alt='' />
                                </div>
                                <div id={ 2 + "ei4" }>
                                    <img src='/blog/ve43.jpg' alt='' />
                                </div>
                                <div id={ 3 + "ei4" }>
                                    <img src='/blog/ve44.jpg' alt='' />
                                </div>
                                <div id={ 4 + "ei4" }>
                                    <img src='/blog/ve45.jpg' alt='' />
                                </div>
                            </div>
                        </div>
                        {/* <iframe src="https://drive.google.com/file/d/1JN8mscx39b_l7Ofb46rwT8g80UsuxK1-/preview" allow="autoplay"></iframe> */ }
                    </div>
                </div>
            </AnimationOnScroll>

            <AnimationOnScroll animateOnce={ false } animateIn="animate__fadeInDown">
                <div className='e4pics'>
                    <div><img className='e4img' src='/blog/e41.jpg' alt='' /></div>
                    <div><img className='e4img' src='/blog/e42.jpg' alt='' /></div>
                    <div><img className='e4img' src='/blog/e43.jpg' alt='' /></div>
                    <div><img className='e4img' src='/blog/e44.jpg' alt='' /></div>
                    <div><img className='e4img' src='/blog/e45.jpg' alt='' /></div>
                    <div><img className='e4img' src='/blog/e46.jpg' alt='' /></div>
                </div>
            </AnimationOnScroll>

        </div>
    )
}

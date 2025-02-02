import { useEffect, useState } from 'react'
import './e3.css'
import { AnimationOnScroll } from 'react-animation-on-scroll'

export default function E3( { sliding } ) {
    let [ intro3, setIntro3 ] = useState( 0 )


    useEffect( () => {
        window.scrollTo( 0, 0 );
    }
        , [] )
    useEffect( () => {
        sliding( intro3, "ei3", 4, "go", "come", () => setIntro3( intro3 + 1 ), () => setIntro3( 0 ), 3000 )
    }
        , [ intro3 ] )

    return (
        <div className='e3cont'>
            <h1>Lectrobar Exhibition 2023</h1>
            <AnimationOnScroll animateOnce={ false } animateIn="animate__fadeInDown">
                <div className='e3main'>
                    <div className='e3txt'>
                        <p>
                            Lectrobar enjoyed a strong presence at the International
                            Manufacturing Convention & Exhibition held in Cairo from
                            October 28th to 30th, drawing eager attendees. Visitors were
                            keen to explore our advanced products, particularly our busbars
                            and low-voltage panels, as we shared insights into our manufacturing
                            history and highlighted our collaboration with the esteemed Chinese
                            company CHNT. The event was further distinguished by the presence of
                            President Abdelfatah El Sisi, underscoring the significance of our
                            contributions to the industry. This provided a unique opportunity for
                            networking and emphasized Lectrobar's commitment to innovation,
                            solidifying our position as an industry leader.
                        </p>
                    </div>
                    <div className='e3vid'>
                        <div className='e3slider'>
                            <div className='e3introanim'>
                                <div id={ 0 + "ei3" }>
                                    <img src='/blog/ve31.jpg' alt='' />
                                </div>
                                <div id={ 1 + "ei3" }>
                                    <img src='/blog/ve32.jpg' alt='' />
                                </div>
                                <div id={ 2 + "ei3" }>
                                    <img src='/blog/ve33.jpg' alt='' />
                                </div>
                                <div id={ 3 + "ei3" }>
                                    <img src='/blog/ve34.jpg' alt='' />
                                </div>
                                <div id={ 4 + "ei3" }>
                                    <img src='/blog/ve35.jpg' alt='' />
                                </div>
                            </div>
                        </div>

                        {/* <iframe src="https://drive.google.com/file/d/1JN8mscx39b_l7Ofb46rwT8g80UsuxK1-/preview" allow="autoplay"></iframe> */ }
                    </div>
                </div>
            </AnimationOnScroll>

            <AnimationOnScroll animateOnce={ false } animateIn="animate__fadeInDown">
                <div className='e3pics'>
                    <div><img className='e3img' src='/blog/e31.jpg' alt='' /></div>
                    <div><img className='e3img' src='/blog/e32.jpg' alt='' /></div>
                    <div><img className='e3img' src='/blog/e33.jpg' alt='' /></div>
                    <div><img className='e3img' src='/blog/e34.jpg' alt='' /></div>
                    <div><img className='e3img' src='/blog/e35.jpg' alt='' /></div>
                    <div><img className='e3img' src='/blog/e36.jpg' alt='' /></div>
                </div>
            </AnimationOnScroll>
            
        </div>
    )
}

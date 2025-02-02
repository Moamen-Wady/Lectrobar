import { useEffect, useState } from 'react'
import './e2.css'
import { AnimationOnScroll } from 'react-animation-on-scroll'

export default function E2() {
    useEffect( () => {
        window.scrollTo( 0, 0 )
    }
        , [] )


    return (
        <div className='e2cont'>
            <h1>CHINT Lectrobar Borg El-Arab New Factory Opening</h1>
            <AnimationOnScroll animateOnce={ false } animateIn="animate__fadeInDown">
                <div className='e2main'>
                    <div className='e2txt'>
                        <p>
                            On September 7th, Lectrobar and the Chinese company CHNT
                            collaborated to produce low-voltage panels.
                            The Minister of Electricity, the Governor of Alexandria,
                            along with distinguished consultants, gathered to celebrate
                            this significant partnership, marking an important advancement
                            in electrical solutions.
                        </p>
                    </div>
                    <div className='e2vid'>
                        <iframe src="https://drive.google.com/file/d/1eceLQecgXeWblp3RJ_k3iSRhiz1bjbic/preview" allow="autoplay"></iframe>
                    </div>
                </div>
            </AnimationOnScroll>

            <AnimationOnScroll animateOnce={ false } animateIn="animate__fadeInDown">
                <div className='e2pics'>
                    <div><img className='e2img' src='/blog/e21.jpg' alt='' /></div>
                    <div><img className='e2img' src='/blog/e22.jpg' alt='' /></div>
                    <div><img className='e2img' src='/blog/e23.jpg' alt='' /></div>
                    <div><img className='e2img' src='/blog/e24.jpg' alt='' /></div>
                    <div><img className='e2img' src='/blog/e25.jpg' alt='' /></div>
                    <div><img className='e2img' src='/blog/e26.jpg' alt='' /></div>
                </div>
            </AnimationOnScroll>
            
        </div>
    )
}

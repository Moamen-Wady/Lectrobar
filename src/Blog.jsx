import  { memo, useEffect, useState } from 'react'
import Blogb from './components/Blogb'
import './styles/blog.css'
import { Link } from 'react-router-dom'
import { AnimationOnScroll } from 'react-animation-on-scroll'

export default memo( function Blog( { sliding } ) {
    useEffect(
        () => {
            window.scrollTo( 0, 0 )
        }, []
    )

    let [ intro1, setIntro1 ] = useState( 0 )
    let [ intro2, setIntro2 ] = useState( 0 )
    let [ intro3, setIntro3 ] = useState( 0 )
    let [ intro4, setIntro4 ] = useState( 0 )

    useEffect(
        () => {
            sliding( intro1, "i1", 5, "go", "come", () => setIntro1( intro1 + 1 ), () => setIntro1( 0 ), 3000 )
            sliding( intro2, "i2", 5, "go", "come", () => setIntro2( intro2 + 1 ), () => setIntro2( 0 ), 3000 )
            sliding( intro3, "i3", 5, "go", "come", () => setIntro3( intro3 + 1 ), () => setIntro3( 0 ), 3000 )
            sliding( intro4, "i4", 5, "go", "come", () => setIntro4( intro4 + 1 ), () => setIntro4( 0 ), 3000 )
        }
        , [ intro1 ]
    )
    useEffect(
        () => {
            let ver1 = document.getElementById( 'ver1' )
            let ver2 = document.getElementById( 'ver2' )
            let ver3 = document.getElementById( 'ver3' )
            let hor1 = document.getElementById( 'hor1' )
            let hor2 = document.getElementById( 'hor2' )
            let hor3 = document.getElementById( 'hor3' )
            let hor4 = document.getElementById( 'hor4' )
            let bev1 = document.getElementById( 'bev1' )
            let blogcircle1 = document.getElementById( 'blogcircle1' )
            let blogcirclecont1 = document.getElementById( 'blogcirclecont1' )
            hor1.style.width = ( bev1.clientWidth * 0.1 + blogcirclecont1.clientWidth * 0.02 ).toString() + 'px'
            hor2.style.width = ( bev1.clientWidth * 0.1 + blogcirclecont1.clientWidth * 0.02 ).toString() + 'px'
            hor3.style.width = ( bev1.clientWidth * 0.1 + blogcirclecont1.clientWidth * 0.02 ).toString() + 'px'
            hor4.style.width = ( bev1.clientWidth * 0.1 + blogcirclecont1.clientWidth * 0.02 ).toString() + 'px'
            ver1.style.right = ( blogcircle1.clientWidth + hor1.clientWidth + 1 ).toString() + 'px'
            ver1.style.height = bev1.clientHeight.toString() + 'px'
            ver2.style.right = ( blogcircle1.clientWidth + hor1.clientWidth + 1 ).toString() + 'px'
            ver2.style.height = bev1.clientHeight.toString() + 'px'
            ver3.style.right = ( blogcircle1.clientWidth + hor1.clientWidth + 1 ).toString() + 'px'
            ver3.style.height = bev1.clientHeight.toString() + 'px'
        } )
    return (
        <div>
            <Blogb />
            <AnimationOnScroll animateOnce={ true } animateIn="animate__fadeIn">
                <div id='bev1' className='blogevent'>
                    <div className='blogcirclecont' id='blogcirclecont1'>
                        <div className='blogcircle' id='blogcircle1'>
                            <p>28-10-2023</p>
                            <div className='blogvert' id='ver1' ></div>
                            <div className='bloghor' id='hor1' ></div>
                        </div>
                    </div>

                    <div className='blogslider'>
                        <div className='blogintroanim'>
                            <div id={ 0 + "i3" }>
                                <img src='/blog/blog31.jpg' alt='' />
                            </div>
                            <div id={ 1 + "i3" }>
                                <img src='/blog/blog32.jpg' alt='' />
                            </div>
                            <div id={ 2 + "i3" }>
                                <img src='/blog/blog33.jpg' alt='' />
                            </div>
                            <div id={ 3 + "i3" }>
                                <img src='/blog/blog34.jpg' alt='' />
                            </div>
                            <div id={ 4 + "i3" }>
                                <img src='/blog/blog35.jpg' alt='' />
                            </div>
                            <div id={ 5 + "i3" }>
                                <img src='/blog/blog36.jpg' alt='' />
                            </div>
                        </div>
                        <h1>Lectrobar Exhibition 2023</h1>
                        <Link to='/e3' className='blogmorelink'>More</Link>
                    </div>
                </div>
            </AnimationOnScroll>

            <AnimationOnScroll animateOnce={ true } animateIn="animate__fadeIn">
                <div id='bev1' className='blogevent'>
                    <div className='blogcirclecont' id='blogcirclecont1'>
                        <div className='blogcircle' id='blogcircle1'>
                            <p>11-9-2023</p>
                            <div className='blogvert' id='ver2' ></div>
                            <div className='bloghor' id='hor2' ></div>
                        </div>
                    </div>

                    <div className='blogslider'>
                        <div className='blogintroanim'>
                            <div id={ 0 + "i1" }>
                                <img src='/blog/blog1.jpg' alt='' />
                            </div>
                            <div id={ 1 + "i1" }>
                                <img src='/blog/blog2.jpg' alt='' />
                            </div>
                            <div id={ 2 + "i1" }>
                                <img src='/blog/blog3.jpg' alt='' />
                            </div>
                            <div id={ 3 + "i1" }>
                                <img src='/blog/blog4.jpg' alt='' />
                            </div>
                            <div id={ 4 + "i1" }>
                                <img src='/blog/blog5.jpg' alt='' />
                            </div>
                            <div id={ 5 + "i1" }>
                                <img src='/blog/blog6.jpg' alt='' />
                            </div>
                        </div>
                        <h1>CHINT Lectrobar Cairo Seminar</h1>
                        <Link to='/e1' className='blogmorelink'>More</Link>
                    </div>
                </div>
            </AnimationOnScroll>

            <AnimationOnScroll animateOnce={ false } animateIn="animate__fadeIn">
                <div className='blogevent'>
                    <div className='blogcirclecont'>
                        <div className='blogcircle'>
                            <p>7-9-2023</p>
                            <div className='blogvert' id='ver3' ></div>
                            <div className='bloghor' id='hor3' ></div>
                        </div>
                    </div>
                    <div className='blogslider'>
                        <div className='blogintroanim'>
                            <div id={ 0 + "i2" }>
                                <img src='/blog/blog21.jpg' alt='' />
                            </div>
                            <div id={ 1 + "i2" }>
                                <img src='/blog/blog22.jpg' alt='' />
                            </div>
                            <div id={ 2 + "i2" }>
                                <img src='/blog/blog23.jpg' alt='' />
                            </div>
                            <div id={ 3 + "i2" }>
                                <img src='/blog/blog24.jpg' alt='' />
                            </div>
                            <div id={ 4 + "i2" }>
                                <img src='/blog/blog25.jpg' alt='' />
                            </div>
                            <div id={ 5 + "i2" }>
                                <img src='/blog/blog26.jpg' alt='' />
                            </div>
                        </div>
                        <h1>CHINT Lectrobar Borg El-Arab New Factory Opening</h1>
                        <Link to='/e2' className='blogmorelink'>More</Link>
                    </div>
                </div>
            </AnimationOnScroll>

            <AnimationOnScroll animateOnce={ false } animateIn="animate__fadeIn">
                <div className='blogevent'>
                    <div className='blogcirclecont'>
                        <div className='blogcircle'>
                            <p>28-10-2022</p>
                            <div className='bloghor' id='hor4' ></div>
                        </div>
                    </div>
                    <div className='blogslider'>
                        <div className='blogintroanim'>
                            <div id={ 0 + "i4" }>
                                <img src='/blog/blog41.jpg' alt='' />
                            </div>
                            <div id={ 1 + "i4" }>
                                <img src='/blog/blog42.jpg' alt='' />
                            </div>
                            <div id={ 2 + "i4" }>
                                <img src='/blog/blog43.jpg' alt='' />
                            </div>
                            <div id={ 3 + "i4" }>
                                <img src='/blog/blog44.jpg' alt='' />
                            </div>
                            <div id={ 4 + "i4" }>
                                <img src='/blog/blog45.jpg' alt='' />
                            </div>
                            <div id={ 5 + "i4" }>
                                <img src='/blog/blog46.jpg' alt='' />
                            </div>
                        </div>
                        <h1>Lectrobar Exhibition 2022</h1>
                        <Link to='/e4' className='blogmorelink'>More</Link>
                    </div>
                </div>
            </AnimationOnScroll>

        </div>
    )
}
)
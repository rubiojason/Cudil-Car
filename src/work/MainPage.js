import React, { useEffect, useRef } from 'react'
import NavComponent from './NavComponent'; 
import gsap from 'gsap'; 
import { ScrollTrigger } from 'gsap/ScrollTrigger'; 
import Carousel from 'react-elastic-carousel'
gsap.registerPlugin(ScrollTrigger); 

function MainPage() {

    //carousel 
    const breakPoints = [
        { width: 1, itemsToShow: 1 },
        { width: 650, itemsToShow: 2 },
        { width: 1200, itemsToShow: 3 },
        { width: 1500, itemsToShow: 4 },
      ];

    //useRef 
    const titleAnim = useRef(null); 
    const buttonAnim = useRef(null); 
    const leftAnim = useRef(null); 
    const rightAnim = useRef(null); 

    const car1TextAnim = useRef(null); 
    const car2TextAnim = useRef(null); 
    const car3TextAnim = useRef(null); 
    const car4TextAnim = useRef(null); 

    const bottomNav1 = useRef(null); 
    const bottomNav2 = useRef(null); 
    const bottomNav3 = useRef(null); 

    //useEffect d
    useEffect(() => {
        gsap.fromTo(titleAnim.current, {opacity: 0, y: -35}, {opacity: 1, y: 0, duration: 1, delay: 0.5}); 
        gsap.fromTo(buttonAnim.current, {opacity: 0, y: 35}, {opacity: 1, y: 0, duration: 0.75, delay: 0.5}); 

        gsap.fromTo(leftAnim.current, {opacity: 0, y: -45}, {opacity: 1, y: 0, duration: 1, delay: 1}); 
        gsap.fromTo(rightAnim.current, {opacity: 0, y: -45}, {opacity: 1, y: 0, duration: 1, delay: 1})

        gsap.fromTo(bottomNav1.current, {autoAlpha: 0}, {duration: 1, autoAlpha: 1, ease: 'none', 
                                        scrollTrigger: {id: 'ello', trigger: bottomNav1.current, 
                                        start: 'top bottom-=100px', toggleActions: 'play none none reverse', 
                                        markers: false}}); 

        gsap.fromTo(bottomNav2.current, {autoAlpha: 0}, {duration: 1, autoAlpha: 1, ease: 'none', 
                                        scrollTrigger: {id: 'ello', trigger: bottomNav2.current, 
                                        start: 'top bottom-=100px', toggleActions: 'play none none reverse', 
                                        markers: false}}); 

        gsap.fromTo(bottomNav3.current, {autoAlpha: 0}, {duration: 1, autoAlpha: 1, ease: 'none', 
                                        scrollTrigger: {id: 'ello', trigger: bottomNav3.current, 
                                        start: 'top bottom-=100px', toggleActions: 'play none none reverse', 
                                        markers: false}}); 

        gsap.fromTo(car1TextAnim.current, {autoAlpha: 0, x: -35}, {duration: 1, autoAlpha: 1, ease: 'none', x: 0, 
                                          scrollTrigger: {id: 'ello', trigger: car1TextAnim.current, 
                                          start: 'top bottom-=100px', toggleActions: 'play none none reverse', 
                                          markers: false}}); 

        gsap.fromTo(car2TextAnim.current, {autoAlpha: 0, x: -35}, {duration: 1, autoAlpha: 1, ease: 'none', x: 0, 
                                          scrollTrigger: {id: 'ello', trigger: car2TextAnim.current, 
                                          start: 'top bottom-=100px', toggleActions: 'play none none reverse', 
                                          markers: false}}); 

        gsap.fromTo(car3TextAnim.current, {autoAlpha: 0, x: -35}, {duration: 1, autoAlpha: 1, ease: 'none', x: 0, 
                                          scrollTrigger: {id: 'ello', trigger: car3TextAnim.current, 
                                          start: 'top bottom-=100px', toggleActions: 'play none none reverse', 
                                          markers: false}});
                                          
        gsap.fromTo(car4TextAnim.current, {autoAlpha: 0, x: -35}, {duration: 1, autoAlpha: 1, ease: 'none', x: 0, 
                                          scrollTrigger: {id: 'ello', trigger: car4TextAnim.current, 
                                          start: 'top bottom-=100px', toggleActions: 'play none none reverse', 
                                          markers: false}}); 

    }, [titleAnim, buttonAnim]); 

    return (
        <div className="page-container">

            <NavComponent/>

            <div className="main-top-page">
                <div className="main-top-content">
                    <div className="main-top-mid-div">
                        <h2 ref={titleAnim}>Cudil Air</h2>
                        <button ref={buttonAnim}>Click Me</button>
                    </div>
                    <div className="main-top-bottom-div">
                        <div ref={leftAnim}>
                            <h4>range</h4>
                            <h3>500 mi</h3>
                        </div>
                        <div ref={rightAnim}>
                            <h4>Max Power</h4>
                            <h3>950 hp</h3>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="main-mid-page">

                <div className="main-mid-car-container">
                    <div className="car-img">
                        <img alt="" src="https://www.lucidmotors.com/static/c7ff376df1c4b25a661c7413ddf09911/pure-v4-web.png" />
                    </div>
                    <div className="car-info" ref={car1TextAnim}>
                        <h2>AirPure</h2>
                        <p>From $70,000 / 500hp / 406 mi range</p>
                    </div>
                </div>

                <div className="main-mid-car-container">
                    <div className="car-img">
                        <img alt="" src="https://www.lucidmotors.com/static/f88afcd3e921898b1acd4059ea305f00/dream-edition-v4-web.png" />
                    </div>
                    <div className="car-info" ref={car2TextAnim}>
                        <h2>Air Dream Edition</h2>
                        <p>$150,000 / 1000 hp / 500 mi range</p>
                    </div>
                </div>

                <div className="main-mid-car-container">
                    <div className="car-img">
                        <img alt="" src="https://www.lucidmotors.com/static/5e380ae74f374629831dd38061653ebd/grand-touring-v4-web.png" />
                    </div>
                    <div className="car-info" ref={car3TextAnim}>
                        <h2>Air Grand Touring</h2>
                        <p>$130,000 / 800 hp / 500 mi range</p>
                    </div>
                </div>

                <div className="main-mid-car-container">
                    <div className="car-img">
                        <img alt="" src="https://www.lucidmotors.com/static/d26f5f612a0a2e57e1113a85a5a9e7ef/touring-v4-web.png" />
                    </div>
                    <div className="car-info" ref={car4TextAnim}>
                        <h2>Air Touring</h2>
                        <p>$80,000 / 600 hp / 400 mi range</p>
                    </div>
                </div>

            </div>

            <div className="main-bottom-page">
            <div className="main-bottom-carousel">
                <Carousel breakPoints={breakPoints}>

                    <div className="main-bottom-carousel-div-content">
                        <div className="main-carousel-img">
                            <img alt="" src="https://images.pexels.com/photos/3608056/pexels-photo-3608056.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
                        </div>
                        <h3 className="main-carousel-info">
                            Ut laborum nulla quis et elit sit occaecat eu magna laborum voluptate.
                        </h3>
                    </div>

                            {/*<div className="main-bottom-carousel-block">1</div>*/}

                    <div className="main-bottom-carousel-div-content">
                        <div className="main-carousel-img">
                            <img alt="" src="https://images.pexels.com/photos/1181555/pexels-photo-1181555.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
                        </div>
                        <h3 className="main-carousel-info">
                            Ut laborum nulla quis et elit sit occaecat eu magna laborum voluptate.
                        </h3>
                    </div>

                    {/*{/*<div className="main-bottom-carousel-block">1</div>*/}

                    <div className="main-bottom-carousel-div-content">
                        <div className="main-carousel-img">
                            <img alt="" src="https://images.pexels.com/photos/3861437/pexels-photo-3861437.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
                        </div>
                        <h3 className="main-carousel-info">
                            Ut laborum nulla quis et elit sit occaecat eu magna laborum voluptate.
                        </h3>
                    </div>

                    {/*<div className="main-bottom-carousel-block">1</div>*/}

                     <div className="main-bottom-carousel-div-content">
                        <div className="main-carousel-img">
                            <img alt="" src="https://images.pexels.com/photos/3862634/pexels-photo-3862634.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
                        </div>
                        <h3 className="main-carousel-info">
                            Ut laborum nulla quis et elit sit occaecat eu magna laborum voluptate.
                        </h3>
                    </div>

                    <div className="main-bottom-carousel-div-content">
                        <div className="main-carousel-img">
                            <img alt="" src="https://images.pexels.com/photos/2330137/pexels-photo-2330137.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
                        </div>
                        <h3 className="main-carousel-info">
                            Ut laborum nulla quis et elit sit occaecat eu magna laborum voluptate.
                        </h3>
                    </div>

                    <div className="main-bottom-carousel-div-content">
                        <div className="main-carousel-img">
                            <img alt="" src="https://images.pexels.com/photos/430208/pexels-photo-430208.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
                        </div>
                        <h3 className="main-carousel-info">
                            Ut laborum nulla quis et elit sit occaecat eu magna laborum voluptate.
                        </h3>
                    </div>

                    <div className="main-bottom-carousel-div-content">
                        <div className="main-carousel-img">
                            <img alt="" src="https://images.pexels.com/photos/326501/pexels-photo-326501.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
                        </div>
                        <h3 className="main-carousel-info">
                            Ut laborum nulla quis et elit sit occaecat eu magna laborum voluptate.
                        </h3>
                    </div>

                    <div className="main-bottom-carousel-div-content">
                        <div className="main-carousel-img">
                            <img alt="" src="https://images.pexels.com/photos/3861437/pexels-photo-3861437.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
                        </div>
                        <h3 className="main-carousel-info">
                            Ut laborum nulla quis et elit sit occaecat eu magna laborum voluptate.
                        </h3>
                    </div>

                    <div className="main-bottom-carousel-div-content">
                        <div className="main-carousel-img">
                            <img alt="" src="https://images.pexels.com/photos/2156/sky-earth-space-working.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
                        </div>
                        <h3 className="main-carousel-info">
                            Ut laborum nulla quis et elit sit occaecat eu magna laborum voluptate.
                        </h3>
                    </div>

                </Carousel>
            </div>
            </div>

            <div className="main-bottom-nav">
                <div className="main-bottom-nav-grid-display">
                    <div className="main-bottom-nav-content" ref={bottomNav1}>
                        <h3>Cudil Air</h3>
                        <div id="main-rec"></div>

                        <ul>
                            <span>Discover Air</span>
                            <span>Design Yours</span>
                            <span>Reserve Now</span>
                        </ul>

                    </div>
                    <div className="main-bottom-nav-content" ref={bottomNav2}>
                        <h3>Cudil Motors</h3>
                        <div id="main-rec"></div>

                        <ul>
                            <span>Company</span>
                            <span>Leadership</span>
                            <span>Careers</span>
                            <span>Stories</span>
                            <span>Future Models</span>
                        </ul>

                    </div>
                    <div className="main-bottom-nav-content" ref={bottomNav3}>
                        <h3>More</h3>
                        <div id="main-rec"></div>

                        <ul>
                            <span>Purchase & Ownership</span>
                            <span>FAQ</span>
                            <span>Contact Us</span>
                            <span>Locations</span>
                            <span>Events</span>
                            <span>Media Room</span>
                        </ul>

                    </div>   
                </div>

                <p id="main-terms">Privacy / Terms / Code of Conduct</p>

            </div>
        </div>
    )
}

export default MainPage

import React, { useRef, useEffect } from 'react'
import gsap from 'gsap'; 

function NavComponent() {

    //useRef 
    const navAnim = useRef(null); 

    //usEffect 
    useEffect(() => {
        gsap.fromTo(navAnim.current, {opacity: 0, y: -35}, {opacity: 1, y: 0, duration: 0.75, delay: 2.5})
    }, [navAnim]); 

    return (
        <div>
            <nav className="nav-container" ref={navAnim}>

                <div className="nav-text">Cars</div>
                <div className="nav-text">Breeze</div>

                <div className="middle-text">Cudil</div>

                <div className="nav-text">Ascent</div>

                <button className="nav-button">
                    <div className="nav-button-container">
                        <div className="nav-button-rec"></div>
                        <div className="nav-button-rec"></div>
                        <div className="nav-button-rec"></div>
                    </div>
                </button>

            </nav>
        </div>
    )
}

export default NavComponent

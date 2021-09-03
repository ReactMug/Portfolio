import React from 'react'
import './GetTouchText.css'
function GetTouchText() {
    function Open() {
        window.open("https://github.com/ReactMug", "Gitub");
    }
    return (
        <div className='getTouchText'>
            <button onClick={Open} className='getTouch__Button'>
                See More
            </button >
            <div className='getTouch__text'>
                <h1 >
                    Get in Touch
                </h1>
                <p>
                    Let's build something together :)
                </p>
            </div>
        </div>
    )
}

export default GetTouchText

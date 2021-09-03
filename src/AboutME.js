import React from 'react'
import './AboutME.css'
import PersonalImage from './image/Personal.jpg'
function AboutME() {
    return (
        <div >
            <div className='about__me' >
                <h1> About Me  </h1>
                <h3> Get to know me :) </h3>
            </div>
            <div className='about__More'>
                <div>
                    <img
                     style={{height:'600px',}}
                        alt=''
                        src={PersonalImage}
                    />
                </div>
                <div className='about__MoreTexts'>
                    <h1 style={{ color: '#00cbf0', fontWeight: 700, paddingBottom: '20px' }}>Who am i ? </h1>
                    <h2 style={{ color: '#ffffff', fontWeight: 700, paddingBottom: '20px' }}>I'm Aqeel Developer, a React & Flutter Developer Android & IOS</h2>
                    <span style={{ color: '#7F8287', fontSize: '18px', paddingBottom: '20px' }}>i'm have been developing mobile & Web apps for over 4 years now  </span>
                    <hr style={{ margin: '20px 0', backgroundColor: "#424242" }} />
                    <span style={{ color: '#00cbf0', fontSize: '15px', }}>Technologies I have worked with:</span>
                    <p style={{color: 'white', fontSize: '16px', paddingTop: '10px'}}>
                        ➤ Dart &nbsp; ➤ Flutter &nbsp; ➤ Node-JS &nbsp; ➤ React &nbsp; ➤ React-Native
                    </p>
                    <hr style={{ margin: '20px 0', backgroundColor: "#424242" }} />
                    <button>
                        Resume
                    </button>
                </div>
            </div>
        </div>
    )
}

export default AboutME

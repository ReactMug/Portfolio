import React from 'react'
import './FlipCard.css';
function FlipCard(props) {
    function Open() {
        window.open('https://www.fiverr.com/chonalex?up_rollout=true', 'Fiverr')
    }
    function Youtube() {
        window.open('https://www.youtube.com/c/FlutterBaba', 'Youtube')
    }
    return (
        <div class="flip-card">
            <div class="flip-card-inner">
                <div class="flip-card-front">
                    <img style={{ textAlign: 'center', height: '150px', paddingTop: '30px', fill: 'orange' }} src={props.icon} alt='' />
                    <h3 style={{ paddingTop: '20px', color: 'white', letterSpacing: 2 }} >{props.title} </h3>
                </div>
                <div class="flip-card-back">
                    <p style={{ paddingTop: '15px',paddingBottom:'15px', fontSize: '12px',  fontWeight: '300' }}>{props.backTitle}</p>
                    <p style={{ textAlign: 'left', paddingLeft: '12px', fontSize: '10px', letterSpacing: 3, fontWeight: '300' }}>{props.backSubTitle}</p>
                    <button onClick={Youtube}> Details</button>
                    <hr style={{ marginTop: '10px', }} />
                    <div className='flip-card__button'>
                    <button onClick={Open}> HIRE ME </button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default FlipCard



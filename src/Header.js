import React from 'react'
import './Header.css'
function Header() {
    return (
            <div className='header__container'>
                <h2 className='header__left'>
                    {'<Aqeel/>'}
                </h2>
                <div className='header__right' >
                    <button className='header__button'> HOME</button>
                    <button className='header__button'>ABOUT </button>
                    <button className='header__button'>SERVICES</button>
                    <button className='header__button'> PROJECTS </button>
                    <button className='header__button'> CONTACT</button>
                    <button className='header__resumeButton'> RESUME</button>
                </div>               
            </div>
    )
}

export default Header

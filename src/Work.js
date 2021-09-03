import React from 'react'
import './Work.css'
function Work(props) {
    return (
        <div onClick={props.onClick} className="work">
            <img src={(props.src)} alt="Avatar" className="work__img" />
            <div className="work__overlay">
                <div className="work__text">{props.title}</div>
                <div className="work__subtitle">{props.subTitle}</div>
            </div>
        </div>
    )
}

export default Work

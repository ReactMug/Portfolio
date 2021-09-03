import React from 'react'
import './GetTouch.css';
function GetTouch(props) {
  return (
    <div className='getTouch'>

      <div className='getTouch__PerInfo'>
        {
        (  props.icon)
        }
        <h3> {props.title} </h3>
        <p className='getTouch__subtitle'> {props.subTitle} </p>
      </div>
    </div>
  )
}

export default GetTouch

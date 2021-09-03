import React from 'react'
import GetTouch from './GetTouch'
import './GetTouchs.css'
import GetTouchText from './GetTouchText';
import PhoneIcon from '@material-ui/icons/Phone';
import HomeIcon from '@material-ui/icons/Home';
import EmailIcon from '@material-ui/icons/Email';
function GetTouchs() {
    return (
        <div >
            <GetTouchText />
            <div className='getTouchs__container'>
                <GetTouch 
                subTitle={'Balochistan,Pakistan'}
                 title={'Location'}
                icon={(<HomeIcon  className='getTouch__icon'/>)} />
                <GetTouch 
                title={'Phone'}
                subTitle={'(+92) 3352580282'}
                icon={(<PhoneIcon  className='getTouch__icon'/>)} />
                <GetTouch 
                title={'Mail'}
                subTitle={'Attibaloch30@gmail.com'}
                icon={(<EmailIcon  className='getTouch__icon'/>)} />
            </div>
            <div className='getToch__endPoint'>
                <p> Developed in 💙 with &nbsp;</p>
                <div className='getTouch__textButton'>
                    <p> React </p>
                </div>
            </div>
        </div>
    )
}

export default GetTouchs

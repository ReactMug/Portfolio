import React from 'react'
import './MiddlePart.css'
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import IconButton from '@material-ui/core/IconButton';
import PersonalImage from './image/Personal.jpg'
function MiddlePart() {
    function Open() {
        window.open("https://www.facebook.com/profile.php?id=100068433738282", "fb");
    }
    function OpenGitHub(){
        window.open('https://github.com/ReactMug','github')
    }
    function OpenLinkedIn(){
        window.open('https://www.linkedin.com/in/atti-baloch-b76977213/','Linked-in')
    }

    return (
        <div className='middlepart'>
            <div className='middle__text'>
              
                    <h1 className='middle__portfolio'>WELCOME TO MY PORTFOLIO!👋 </h1>
               
                <div className='middle__Name'>
                    <h1>  AQEEL</h1>
                    <h1>  DEVELOPER</h1>
                    <h3>  ➤ React ,&nbsp; React-Native & &nbsp;Flutter &nbsp;(&nbsp;D-E-V&nbsp;)</h3>
                </div>
                <div className='middle__icons'>
                    <IconButton  onClick={Open} >
                        <FacebookIcon style={{ color: 'white',}} />
                    </IconButton>
                    <IconButton>
                        <InstagramIcon style={{ color: 'white' }} />
                    </IconButton>
                    <IconButton>
                        <TwitterIcon style={{ color: 'white' }} />
                    </IconButton>
                    <IconButton onClick={OpenLinkedIn}>
                        <LinkedInIcon style={{ color: 'white' }} />
                    </IconButton>
                    <IconButton onClick={OpenGitHub}>
                        <GitHubIcon style={{ color: 'white' }} />
                    </IconButton>
                </div>
            </div>
            <div >
                <img
                     style={{height:'730px'}}
                    alt=''
                    src={PersonalImage}
                />
            </div>
        </div>

    )
}

export default MiddlePart

import React from 'react'
import './SingleCard.css'
import FlipCard from './FlipCard';
import Code from './image/Svg/code.svg';
import Prototype from './image/Svg/prototyping.svg'
import Ux from './image/Svg/ux.svg'
import Blog from './image/Svg/blog.svg'
import Mobile from './image/Svg/mobile.svg'
function SingleCard() {
   let message=`- Splash Screen \n\n- Firebase Auth/Cloud \n\n- REST APIs \n\n- Map integration and more...!`
   let secMessage=`- Adobe XD \n\n- Mobile & Web designs \n\n- Interactive UI designs \n\n- Responsiveness \n\n- Promo Videos and more..!`
   let thirdMessage=`- Rapid Prototype via React-Native \n\n - Rapid Prototype via Flutter \n\n - Rapid Prototype via React \n\n- Working MVP \n\n- Quick & Working prototype`
   let fourMessage=`- Medium blogs \n\n- Soothing header images \n\n- SEO friendly \n\n- Researched topics and more..! `
   let fivMessage=`- Awesome README.md \n\n - Well documented \n\n - Header images and more...!`
   return (
        <div className='singleCard'>
            <div className='singleCard__topPart'>
                <FlipCard
                backSubTitle={message}
                backTitle='Web-App , Android & IOS App developemnt via Flutter , React & React Native'
                    title='FULL APP DEVELOPMENT'
                    icon={Mobile} />
                <FlipCard
                backSubTitle={secMessage}
                    backTitle='Modern UI/UX Designing'
                    title='UI/UX Designing'
                    icon={Ux}
                />
                <FlipCard
                    backSubTitle={thirdMessage}
                    backTitle='Rapid Prototyping'
                    title='Rapid Prototyping'
                    icon={Prototype}
                />
            </div>
            <div className='singleCard__bottomPart'>
                <FlipCard
                backSubTitle={fourMessage}
                backTitle={'Technical Blog writing'}
                    title='Teachnical Blog Writing'
                    icon={Blog}
                />
                <FlipCard
                backTitle="Open source GitHub Projects"
                backSubTitle={fivMessage}
                    title='Open Source - Github'
                    icon={Code}
                />
            </div>
        </div>
    )
}

export default SingleCard

import React from 'react'
import Work from './Work';
import './Works.css'
import FirstImage from './image/Works/first.jpg'
import ThirdImage from './image/Works/third.png'
import FourImage from './image/Works/four.jpg'
import FiveImage from './image/Works/five.jpeg'
import SixImage from './image/Works/six.png'
import Eight from './image/Works/eight.jpg'
function firstVideo() {
    window.open('https://covid-19-tracker-15486.web.app/', 'covid')
}
function SecVideo() {
    window.open('https://clone-9584a.web.app/', 'github')
}
function ThirdVideo() {
    window.open('https://netflix-clone-8cd68.web.app/', 'github')
}
function FourVideo() {
    window.open('https://todo-firebase-49417.web.app/', 'github')
}
function FiveVideo() {
    window.open('https://clone-6e660.web.app/', 'github')
}
function SixVideo() {
    window.open('https://tinder-clone-f0dc8.web.app/', 'github')
}
function Works() {
    return (
        /// line-height:3.5em;
        <div >
            <div className='works'>
                <Work
                    onClick={firstVideo}
                    title={'COVID-19 TRACKER'}
                    subTitle={'Web-Application via React,world-wide cases - death - recovered'}
                    src={FirstImage} />
                <Work
                    onClick={SecVideo}
                    title={'INSTAGRAM-CLONE '}
                    subTitle={'Web-Application via React - Upload images comments friend images'}
                    src={Eight} />
                <Work
                    subTitle={'Web-Application it\'s all data come from APIs Click to Play Trailer'}
                    onClick={ThirdVideo}
                    title={'NETFLIX-CLONE'}
                    src={ThirdImage} />
                <Work
                    subTitle={'Web-Application here you can input your task update & delete'}
                    onClick={FourVideo}
                    title={'TODO-APPLICATION'}
                    src={FourImage} />
                <Work
                    subTitle={'Web-Application here we search the on search input you get your channel '}
                    onClick={FiveVideo}
                    title={'YOUTUBE-CLONE'}
                    src={FiveImage} />
                <Work
                    subTitle={'Web-Application it\'s Tinder-Clone you can chat with your fave one.'}
                    onClick={SixVideo}
                    title={'TINDER-CLONE'}
                    src={SixImage} />
            </div>
        </div>
    )
}

export default Works

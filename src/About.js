import React from 'react';
import ReactDOM from 'react-dom';
import './About.css';

const MyImage = 'https://doggo.ninja/IBf0BT.png';

const About = () => {
    return (
        <div className= 'About'>
            <div className='about-container'>
                <h1 className='about-title'>About Me</h1>
            </div>
            
            <div>
                <img className='myPic' src={MyImage} alt='My Pic' />
            </div>

            <div className='about-me'>
                <p>lorem ipsum dolor sit.</p>
            </div>
        </div>
    )
}

export default About
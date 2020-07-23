import React from 'react';
import ReactDOM from 'react-dom';
import './About.css';
import './AbtCodingJourney';
import AbtCodingJourney from './AbtCodingJourney';

const MyImage = 'https://doggo.ninja/IBf0BT.png';

const About = () => {
    return (
        <>
            <div id='about' className='about-container'>
                <h1 className='about-title'>About Me</h1>
            
            
            <img className='myPic' src={MyImage} alt='My Pic' />

            <div className='about-me'>
                <p><text className='txt1'>Hi! I'm Faisal Sayed</text><text className='txt2'> also</text><text className='txt3'> known as Fayd.</text><text className='txt4'> I'm 15</text><text className='txt5'> and I love to code and make games.</text><text className='txt6'> I've learnt</text><text className='txt7'> HTML, CSS,</text><text className='txt8'> JSX, python, </text>
                <text className='txt9'>Javascript and React Js.</text><text className='txt4'> I love Javascript and React</text><text className='txt3'> the most.</text><text className='txt7'> I can build </text><text className='txt1'>sweet looking front-end websites! </text>
                <text className='txt6'>I am also a Hack Clubber!</text><text className='txt9'> I love to play games,</text><text className='txt2'> make gaming videos</text><text className='txt8'> and have fun with it. </text>
                </p>
            </div>
            <AbtCodingJourney />
            </div>
        </>
    )
}

export default About
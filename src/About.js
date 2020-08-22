import React from 'react';
import './About.css';
import './AbtCodingJourney';
import AbtCodingJourney from './AbtCodingJourney';
import MyPic from './MyPic';

const About = () => {
    return (
        <div id='about' className='about-container'>
            <h1 className='about-title'>About Me</h1>
            <MyPic />
            <div className='about-me'>
                <p><span className='txt1'>Hi! I'm Faisal Sayed</span><span className='txt2'> also</span><span className='txt3'> known as Fayd.</span><span className='txt4'> I'm 15</span><span className='txt5'> and I love to code and make games.</span><span className='txt6'> I've learnt</span><span className='txt7'> HTML, CSS,</span><span className='txt8'> JSX, python, </span>
                    <span className='txt9'>Javascript and React Js.</span><span className='txt4'> I love Javascript and React</span><span className='txt3'> the most.</span><span className='txt7'> I can build </span><span className='txt1'>sweet looking front-end websites! </span>
                    <span className='txt6'>I am also a Hack Clubber!</span><span className='txt9'> I love to play games,</span><span className='txt2'> make gaming videos</span><span className='txt8'> and have fun with it. </span>
                </p>
            </div>
            <AbtCodingJourney />
        </div>
    )
}

export default About
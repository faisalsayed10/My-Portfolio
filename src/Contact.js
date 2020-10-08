import React from 'react';
import './Contact.css';

const twitterImg = 'https://doggo.ninja/trFALM.png';
const twitterLink = 'https://twitter.com/faisalsayed05';
const instaImg = 'https://doggo.ninja/fPZ4cO.png';
const instaLink = 'https://instagram.com/faydthnx';
const slackImg = 'https://doggo.ninja/OYK5zh.png';
const slackLink = 'https://app.slack.com/client/T0266FRGM/C0EA9S0A0/user_profile/U014ND5P1N2';
const githubImg = 'https://doggo.ninja/HSdTk9.png';
const githubLink = 'https://github.com/faisalsayed10';
const freeCodeCampImg = 'https://doggo.ninja/hFEPlc.png';
const freeCodeCampLink = 'https://www.freecodecamp.org/faisal.sayed05';
const mailLogo = 'https://doggo.ninja/uSFqAk.png';
const mailLink = 'mailto:faisal.sayed502@gmail.com';
const scbookLogo = 'https://doggo.ninja/JlpYkL.svg';
const scbookLink = 'https://scrapbook.hackclub.com/fayd';

const Contact = () => {
    return(
        <>
            <div className='contact-me'>
                <h1 id='contact' className='contact-title'>Contact Me</h1>
                <div className='social-container'>
                    <a className='social-link' rel="noopener noreferrer" target='_blank' href={twitterLink}><img className='twitter-img social-img' alt='' src={twitterImg}></img></a>
                    <a className='social-link' rel="noopener noreferrer" target='_blank' href={instaLink}><img className='insta-img social-img' alt='' src={instaImg}></img></a>
                    <a className='social-link' rel="noopener noreferrer" target='_blank' href={slackLink}><img className='slack-img social-img' alt='' src={slackImg}></img></a>
                    <a className='social-link' rel="noopener noreferrer" target='_blank' href={githubLink}><img className='github-img social-img' alt='' src={githubImg}></img></a>
                    <a className='social-link' rel="noopener noreferrer" target='_blank' href={freeCodeCampLink}><img className='fcc-img social-img' alt='' src={freeCodeCampImg}></img></a>
                    <a className='social-link' rel="noopener noreferrer" target='_blank' href={scbookLink}><img className='fcc-img social-img' alt='' src={scbookLogo}></img></a>
                    <a className='social-link' rel="noopener noreferrer" target='_blank' href={mailLink}><img className='mail-img social-img' alt='' src={mailLogo}></img></a>
                </div>
            </div>
        </>
    )
}

export default Contact;

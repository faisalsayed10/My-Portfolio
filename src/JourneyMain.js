import React from 'react';
import './journeyMain.css';
import './Outro';
import Outro from './Outro';

const JourneyMain = () => {
    const fccLink = 'https://freecodecamp.org';
    const codeOrgLink = 'https://code.org';
    const buildBoxLink = 'https://buildbox.com';
    const js30Link = 'https://javascript30.com'
    const hackClubLink = 'https://hackclub.com';
    const freeCodeCampImg = 'https://doggo.ninja/hFEPlc.png';
    const codeOrgImg = 'https://doggo.ninja/ifc3WD.png'
    const buildboxImg = 'https://doggo.ninja/t32Hsh.png'
    const js30Img = 'https://doggo.ninja/sDOuEg.png';
    const hackClubLogo = 'https://doggo.ninja/VU7xE9.png';
    // const back = 'https://doggo.ninja/6vW5MH.png';
    return (
        <div className='Journey'>
            <h1 className='my-journey'>My Coding Journey</h1>
            {/* <a className='back' href={'/'}><img className='back-img' src={back}></img></a> */}
            <div className='web-links'>
                <a className='web-link' target='_blank' href={fccLink}><img className='fcc-img web-img' src={freeCodeCampImg}></img></a>
                <a className='web-link' target='_blank' href={codeOrgLink}><img className='codeOrg-img web-img' src={codeOrgImg}></img></a>
                <a className='web-link' target='_blank' href={hackClubLink}><img className='hackclub-img web-img' src={hackClubLogo}></img></a>
                <a className='web-link' target='_blank' href={js30Link}><img className='js30-img web-img' src={js30Img}></img></a>
                <a className='web-link' target='_blank' href={buildBoxLink}><img className='bbImg-img web-img' src={buildboxImg}></img></a>
            </div>
            <h2 className='age'>Age 12 - 2017</h2>
            <h3 className='journey-desc'>When I was 12 years old I found this website called Code.org. 
                It was really a fun website and I started liking it. 
                I completed nearly all of their courses in 2-3 months 
                and then I moved to freeCodeCamp.org to learn more about Web Development. 
                They also had great self-explainatory tutorials through which 
                I learnt HTML, CSS, Bootstrap, Jquery and Javascript in a single year!
            </h3>
            <h2 className='age'>Age 13 - 2018</h2>
            <h3 className='journey-desc'>I started Learning Javascript and there's a thing called objects in it. 
            I was badly confused with objects and Javascript started getting hard for me. Few days later, 
            I went to codechef.com to try solving some challenges and I wasn't able to get through those, they were hard.
            I realised that my problem solving skills are worst, I was much dissapointed and eventually left programming.
            I didn't code of do anything for a whole year. I was sad.
            </h3>
            <h2 className='age'>Age 14 - 2019</h2>
            <h3 className='journey-desc'>
                I loved playing games. And I hated coding and programming at this point. I thought that coding is not
                for me. I played Minecraft, PUBG, Half-Life and many more games. I loved them, they were great!
            </h3>
            <h2 className='age'>Age 15 - 2020</h2>
            <h3 className='journey-desc'>
                It was the month of March when I saw this advertisement of Buildbox which gave us the ability
                to make games without coding. I kinda liked the idea about this and started trying to build my very 
                first game. But developing this game changed me, there came many problems in front of me and I solved them
                easily. I realised that I'm more expert in Visual Scripting. I finished building the game in July. Yeah, it took
                me very long to do it. Yet the output was a very basic platformer game.
            </h3>
            <h2 className='age'>How Hack Club Changed Me</h2>
            <h3 className='journey-desc'>
                In the same year in June, I found Hack Club which later became the best place for me!
                I met people who were younger than me but more experts and professional programmers way better than me.
                This made me arise again and start programming again! Now, programming totally changed for me.
                Even if I am stuck anywhere, there are awesome people in Hack Club who are always ready to help you!
                I did the Js30 course by WesBos(He's the best guy in the world). Later,
                I learnt React JS in July and started out to build my portfolio website. TO BE CONTINUED...
            </h3>
            <h2 className='age'>Final Words</h2>
            <h3 className='journey-desc'>
                If you are reading this and you do want to become a programmer or a developer, there might come many obstacles
                 and problems in your life and code, but never lose hope. Always keep learning and build stuff like crazy!
                 Also don't ever forget to join Hack Club. Its the best ever place on the internet and you are most welcome!
                 If you happen to be in the Hack Club Slack, drop me a DM!
            </h3>
            <h1 className='back'><a className='back' href='/'>Go Back</a></h1>
        </div>
    )
}

export default JourneyMain;
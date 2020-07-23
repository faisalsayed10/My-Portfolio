import React from 'react';
import ReactDOM from 'react-dom';
import './Project.css';
import './MinorProjects.js';
import MinorProjects from './MinorProjects.js';

const Projects = () => {
    const projectImage1 = 'https://bit.ly/3eJFvBU';
    const projectLink1 = 'https://codepen.io/Faisalsayed05/full/GQwwaR';
    const projectImage2 = 'https://doggo.ninja/p5OrIe.png';
    const projectImage3 = 'https://doggo.ninja/n3Sw87.png';
    const projectLink3 = 'https://crassh.webflow.io';
    const sample_image = 'https://bit.ly/2ZLR3Rf';
    return(
        <>
            <div id='project' className='project-container'>
                <h1 className='projects-title'>My Projects</h1>
            

            <div className='project-cards'>
                <div className='cards card-1'>
                    {/* <a className="removeClass" href={projectLink1} target='_blank'>
                        <img className='prj-img-1 prj-img' src={projectImage1} alt='Mahatma Gandhi'></img>
                        <h1 className='card1-title'>Mahatma Gandhi Tribute Page</h1>
                        <h1 className='card1-desc'>This was my first ever website which I made with HTML and CSS.</h1>
                    </a> */}
                    <h1 className='cmng-soon'>Coming Soon</h1>
                </div>
                <div className='cards card-2'>
                    <img className='prj-img-2 prj-img' src={projectImage2}></img>
                    <h1 className='card2-title'>Rius</h1>
                    <h1 className='card2-desc'>This is my first ever built indie game for Android.
                     This is a platformer game which revolves around the journey of Rius.</h1>
                </div>
                <div className='cards card-3'>
                    <a className="removeClass" href={projectLink3} target='_blank'>
                        <img className='prj-img-3 prj-img' src={projectImage3}></img>
                        <h1 className='card2-title'>Crassh</h1>
                        <h1 className='card2-desc'>A Website Made With Webflow</h1>
                        <h1 className='card2-desc'>Following <a className='removeClass' target='_blank' href='https://designcode.io/webflow-course'>This</a> Course</h1>
                    </a>
                </div>
                </div>
            
            
            <div className='minor-proj'>
                <h1 className='minor-proj-title'>My Other Minor Projects</h1>
                <MinorProjects />
            </div>
            </div>
        </>
    )
}

export default Projects
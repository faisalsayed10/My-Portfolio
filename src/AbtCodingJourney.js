import React from 'react';
import { Link } from 'react-router-dom';

const AbtCodingJourney = () => {
    return(
        <>
            <div className='coding-journey'>
                <h1 className='coding-journey-title'>My Coding Journey</h1>

                <div className='coding-journey-desc'>
                    <p><span className='txt1'>When I was 12 years old,</span><span className='txt2'> I found this website called </span><span className='txt3'><a target='_blank' className='removeClass' href='http://code.org'>Code.org</a></span>
                        . <span className='tx4'>It was really</span> <span className='txt5'>a fun website</span> <span className='txt6'>and I started liking it.</span> <span className='txt7'>I completed nearly all</span> <span className='txt8'>of their courses in 2-3 months</span> 
                        <span className='txt9'> and then </span> <span className='txt6'>I moved to</span> <span className='txt4'><a target='_blank' className='removeClass' href='http://freecodecamp.org'>freeCodeCamp.org</a></span> 
                        <span className='txt1'> to learn more</span> <span className='txt2'>about Web Development.</span> <span className='txt8'>They also had great self-explainatory tutorials</span> <span className='txt7'>through which I</span> <span className='txt3'>learnt HTML, CSS, Bootstrap, Jquery and Javascript in a
                         single year!</span> <span className='txt9'>But this was just the start...</span>
                    </p>
                    <p><span className='txt1'><Link className='removeClass' to='/journey'>Read More Here</Link>.</span></p>
                </div>
            </div>
        </>
    )
}

export default AbtCodingJourney;

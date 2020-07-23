import React from 'react';


const AbtCodingJourney = () => {
    return(
        <>
            <div className='coding-journey'>
                <h1 className='coding-journey-title'>My Coding Journey</h1>

                <div className='coding-journey-desc'>
                    <p><text className='txt1'>When I was 12 years old,</text><text className='txt2'> I found this website called </text><text className='txt3'><a target='_blank' className='removeClass' href='http://code.org'>Code.org</a></text>
                        . <text className='tx4'>It was really</text> <text className='txt5'>a fun website</text> <text className='txt6'>and I started liking it.</text> <text className='txt7'>I completed nearly all</text> <text className='txt8'>of their courses in 2-3 months</text> 
                        <text className='txt9'> and then </text> <text className='txt6'>I moved to</text> <text className='txt4'><a target='_blank' className='removeClass' href='http://freecodecamp.org'>freeCodeCamp.org</a></text> 
                        <text className='txt1'>to learn more</text> <text className='txt2'>about Web Development.</text> <text className='txt8'>They also had great self-explainatory tutorials</text> <text className='txt7'>through which I</text> <text className='txt3'>learnt HTML, CSS, Bootstrap, Jquery and Javascript in a
                         single year!</text> <text className='txt9'>But this was just the start...</text>
                    </p>
                    <text className='txt1'><p><a target='_blank' className='removeClass' href='/journey'>Read More Here</a>.</p></text>
                </div>
            </div>
        </>
    )
}

export default AbtCodingJourney;
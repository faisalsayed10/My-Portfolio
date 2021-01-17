import React from 'react';
import './Nav.css';

function Nav() {


  return (
    <>
      <div id='home'></div>
        <nav className='Navbar'>
            <h1 className='child'>Scroll <span role="img" aria-label="emoji">👇</span></h1>
        </nav>

        <nav className='main-nav'>
          <ul className="elements">
            <li><a className="nav-el" href='#home'>Home</a></li>
            <li><a className="nav-el" href='#about'>About</a></li>
            <li><a className="nav-el" href='#project'>Projects</a></li>
            <li><a className="nav-el" href='#contact'>Contact</a></li>
          </ul>
      </nav>
    </>
  );
}

export default Nav;

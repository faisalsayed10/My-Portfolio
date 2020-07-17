import React from 'react';
import './Nav.css';

function Nav() {
  return (
    <>

      <div className='Navbar1'>
        <nav className='Nav1'>
          <h1 className='nav1-child'>Welcome</h1>
        </nav>
      </div>

      <div className='Navbar2'>

        <nav className='Nav2'>
            <a href='#home' className='nav2-child current'>Home</a>
            <a href='#about' className='nav2-child'>About</a>
            <a href='#project' className='nav2-child'>Projects</a>
            <a href='#contact' className='nav2-child'>Contact</a>
        </nav>

      </div>
    </>
  );
}

export default Nav;

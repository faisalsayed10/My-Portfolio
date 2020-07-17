import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Nav from './Nav';
import Intro from './Intro';
import About from './About';

const MainBody = () => {
  return(
  <div className='main-body'>
    <Nav />
    <Intro />
    <About />
  </div>
  )
}

ReactDOM.render(
    <MainBody />,
  document.getElementById('root')
);

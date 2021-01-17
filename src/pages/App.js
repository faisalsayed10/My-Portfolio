import React from 'react';
import '../index.css';
import Nav from '../components/Nav';
import Intro from '../components/Intro';
import About from '../components/About';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Outro from '../components/Outro';

const App = () => {
  return(
  <div className='main-body'>
    <Nav />
    <Intro />
    <About />
    <Projects />
    <Contact />
    <Outro />
  </div>
  )
}

export default App;



import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom'
import MainBody from './MainBody';
import JourneyMain from './JourneyMain';
import ProjectPage from './ProjectPage';

const Index = () => {
  return (
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Route path='/' exact component={MainBody} />
        <Route path='/journey' exact component={JourneyMain} />
        <Route path='/projects' exact component={ProjectPage} />
      </BrowserRouter>
    )
  }
  
  ReactDOM.render(
      <Index />,
    document.getElementById('root')
  );
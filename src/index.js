import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom'
import MainBody from './MainBody';
import JourneyMain from './JourneyMain';

const Index = () => {
  return (
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Route path='/' exact component={MainBody} />
        <Route path='/journey' exact component={JourneyMain} />
      </BrowserRouter>
    )
  }
  
  ReactDOM.render(
      <Index />,
    document.getElementById('root')
  );
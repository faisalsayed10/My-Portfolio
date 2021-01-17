import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom'
import App from './pages/App';
import ProjectPage from './pages/ProjectPage';

const Index = () => {
  return (
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Route path='/' exact component={App} />
        <Route path='/projects' exact component={ProjectPage} />
      </BrowserRouter>
    )
  }
  
  ReactDOM.render(
      <Index />,
    document.getElementById('root')
  );
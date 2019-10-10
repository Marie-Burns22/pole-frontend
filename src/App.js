import React from 'react';
import {Route, Switch } from 'react-router-dom'

import './assets/css/main.css'

import Navbar from './PageLayout/Navbar';
import Foot from './PageLayout/Foot';
import Header from './PageLayout/Header';
import AboutContainer from './about/AboutContainer';
import ServiceContainer from './Services/ServiceContainer';
import ArticleContainer from './News/ArticleContainer';
// import Signup from './User/Signup';



function App() {
  return (
    <div>
      <Header />
      <Navbar />
      <Switch>
        <Route exact path="/" component={AboutContainer} />
        <Route exact path="/about" component={AboutContainer} />
        <Route exact path="/services" component={ServiceContainer} />
        <Route exact path="/news" component={ArticleContainer} />
      </Switch>
      <Foot />
    </div>
  );
}

export default App;

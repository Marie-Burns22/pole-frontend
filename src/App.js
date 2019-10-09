import React from 'react';
import {Route, Switch } from 'react-router-dom'

import './assets/css/main.css'

import Navbar from './Navbar';
import Foot from './Foot';
import Header from './Header';
import About from './about/About';
import ServiceContainer from './ServiceContainer';
import ArticleContainer from './ArticleContainer';



function App() {
  return (
    <div>
      <Header />
      <Navbar />
      <Switch>
        <Route exact path="/" component={About} />
        <Route exact path="/about" component={About} />
        <Route exact path="/services" component={ServiceContainer} />
        <Route exact path="/news" component={ArticleContainer} />
      </Switch>
      <Foot />
    </div>
  );
}

export default App;

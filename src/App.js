import React, {Component} from 'react';

import {Route, Switch, Link } from 'react-router-dom'
import './assets/css/main.css'

import Navbar from './PageLayout/Navbar';
import Foot from './PageLayout/Foot';
import AboutContainer from './about/AboutContainer';
import ServiceContainer from './Services/ServiceContainer';
import ArticleContainer from './News/ArticleContainer';
import ClassBookingForm from './bookingRequests/ClassBookingForm';

class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      sidebarVisible: false,
    };
  }

  toggleSidebarVisibility = () => this.setState({ sidebarVisible: !this.state.sidebarVisible });

    render() {
      return (
        <div id="body" className={this.state.sidebarVisible ? 'homepage navPanel-visible' : ''}>

          <div id="titleBar">
            <a href="#navPanel" onClick={this.toggleSidebarVisibility} className="toggle"></a>
          </div>

          <div id="navPanel">
            <nav>
              <Link to="/" className="link depth-0"
                style={{ WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)' }}>
                <span className="indent-0"></span>Home
						  </Link>

              <Link to="about" className="link depth-1"
                style={{ WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)' }}>
                <span className="indent-1"></span>About
						  </Link>

              <Link to="services" className="link depth-1"
                style={{ WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)' }}>
                <span className="indent-1"></span>Services
						  </Link>

              <Link to="services" className="link depth-2"
                style={{ WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)' }}>
                <span className="indent-2"></span>Service Descriptions
						  </Link>

              <Link to="/booking" className="link depth-2"
                style={{ WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)' }}>
                <span className="indent-2"></span>Book Private Sessions
						  </Link>

              <Link to="news" className="link depth-1"
                style={{ WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)' }}>
                <span className="indent-1"></span>News
						  </Link>


            </nav>
          </div>
          <div id="page-wrapper">
          <Navbar />
          <Switch>
            <Route exact path="/" component={AboutContainer} />
            <Route exact path="/about" component={AboutContainer} />
            <Route exact path="/services" component={ServiceContainer} />
            <Route exact path="/news" component={ArticleContainer} />
            <Route exact path="/booking" component={ClassBookingForm} />
          </Switch>
          <Foot />
        </div>
        </div>
      );
    }
}

export default App;

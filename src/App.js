import React, {Component} from 'react';
import {Route, Switch, Link, withRouter, Redirect } from 'react-router-dom'
import './assets/css/main.css'
import Navbar from './PageLayout/Navbar';
import Foot from './PageLayout/Foot';
import AboutContainer from './about/AboutContainer';
import ServiceContainer from './Services/ServiceContainer';
import NewsContainer from './News/NewsContainer';
import ClassBookingForm from './bookingRequests/ClassBookingForm';
import EventBookingForm from './bookingRequests/EventBookingForm';

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
          <div onClick={this.toggleSidebarVisibility} className="toggle"></div>
        </div>
        <div id="navPanel">
          <nav>
            <Link to="/" className="link depth-0"
              onClick={this.toggleSidebarVisibility}
              style={{ WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)' }}>
              <span className="indent-0"></span>Home
            </Link>

            <Link to="/about" className="link depth-1"
              onClick={this.toggleSidebarVisibility}
              style={{ WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)' }}>
              <span className="indent-1"></span>About
            </Link>

            <Link to="/services" className="link depth-1"
              onClick={this.toggleSidebarVisibility}
              style={{ WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)' }}>
              <span className="indent-1"></span>Services
            </Link>

            <Link to="/infoForm" className="link depth-2"
              onClick={this.toggleSidebarVisibility}
              style={{ WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)' }}>
              <span className="indent-2"></span>Request Services
            </Link>

            <a href="https://app.acuityscheduling.com/schedule.php?owner=18520153" target="_blank" rel="noopener noreferrer" className="link depth-2"
              onClick={this.toggleSidebarVisibility}
              style={{ WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)' }}>
              <span className="indent-2"></span>Book Private Sessions
            </a>

            <Link to="/news" className="link depth-1"
              onClick={this.toggleSidebarVisibility}
              style={{ WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)' }}>
              <span className="indent-1"></span>News
            </Link>
          </nav>
        </div>
        <div id="page-wrapper">
          <Navbar />
          <Switch>
            <Route exact path="/" component={AboutContainer} />
            <Route path="/about" component={AboutContainer} />
            <Route path="/services" component={ServiceContainer} />
            <Route path="/news" component={NewsContainer} />
            <Route path="/booking" component={ClassBookingForm} />
            <Route path="/infoForm" component={EventBookingForm} />
            <Route path="*"><Redirect to="/about" /></Route>
          </Switch>
          <Foot />
        </div>
      </div>
    );
  }
}
export default withRouter(App);

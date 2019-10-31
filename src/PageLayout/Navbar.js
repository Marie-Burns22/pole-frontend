import React, { Component } from 'react'
import {NavLink, withRouter} from "react-router-dom"

class Navbar extends Component {

    constructor(props){
        super(props);
        this.state = { dropDownVisible: false };
    }

    toggleDropDownVisible = (visible) => { this.setState({dropDownVisible: visible})}

    render() {
        return (
            <section id="header">
                {/* Logo */}
                <h1><img className="full-logo" src="./images/Logo-Black-NoBackground.png" alt="" /></h1>
                {/* navbar */}
                <nav id="nav">
                    <ul>
                        {/* <li className="current"><NavLink to="/" >Home</NavLink></li> */}
                        <li><NavLink activeClassName="current" exact to="/about">About</NavLink></li>
                        <li><NavLink activeClassName="current" exact to="/services">Services</NavLink></li>
                        {/* <li><NavLink activeClassName="current" exact to="/booking">Book Private Session</NavLink></li> */}
                        <li><a href="https://app.acuityscheduling.com/schedule.php?owner=18520153" target="_blank" rel="noopener noreferrer">Book Private Session</a></li>
                        <li><NavLink activeClassName="current" exact to="/infoForm">Request Services</NavLink></li>
                        <li><NavLink activeClassName="current" exact to="/news">News and Testimonials</NavLink></li>
                    </ul>
                </nav>                
            </section>
        )
    }
}

export default (withRouter(Navbar));
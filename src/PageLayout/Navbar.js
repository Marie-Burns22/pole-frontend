import React, { Component } from 'react'
import {NavLink} from "react-router-dom"

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
                        <li className="current"><NavLink to="/" >Home</NavLink></li>
                        <li><NavLink to="/">About</NavLink></li>
                        
                        <li className="opener"
                            onMouseOver={() => this.toggleDropDownVisible(true)}
                            onMouseLeave={() => this.toggleDropDownVisible(false)}>
                            <a href="javascript:void(0)">Services</a>
                            <ul className={"dropotron level-0 center" + (this.state.dropDownVisible ? ' visible' : '')}>
                                <li><NavLink to="/services">Services</NavLink></li>
                                <li><NavLink to="/booking">Book Private Session</NavLink></li>
                            </ul>
                        </li>
                        <li><NavLink to="/news">News</NavLink></li>
                    </ul>
                </nav>                
            </section>
        )
    }
}

export default Navbar;
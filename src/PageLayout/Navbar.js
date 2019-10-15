import React, { Component } from 'react'
import {NavLink} from "react-router-dom"

class Navbar extends Component {

    render() {
        return (
            <section id="header">
                <h1><img className="full-logo" src="./images/Logo-Black-NoBackground.png" alt="" /></h1>
                <nav id="nav">
                    <ul>
                        <li className="current"><NavLink to="/" >Home</NavLink></li>
                        <li><NavLink to="/">About</NavLink></li>
                        <li><NavLink to="/services">Services</NavLink></li>
                        <li><NavLink to="/news">News</NavLink></li>
                    </ul>
                </nav>                
            </section>
        )
    }
}

export default Navbar;
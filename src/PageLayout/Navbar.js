import React, { Component } from 'react'
import {NavLink} from "react-router-dom"

class Navbar extends Component {
    render() {
        return (

                <nav id="nav">
                    <ul>
                        <li className="current"><NavLink to="/about" >Home</NavLink></li>
                        <li><NavLink to="/">About</NavLink></li>
                        <li><NavLink to="/services">Services</NavLink></li>
                        <li><NavLink to="/news">News</NavLink></li>
                    </ul>
                </nav>                

        )
    }
}

export default Navbar;
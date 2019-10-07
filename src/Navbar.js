import React, { Component } from 'react'

class Navbar extends Component {
    render() {
        return (
            <div>
                <nav id="nav">
                    <ul>
                        <li className="current"><a href="index.html">Home</a></li>
                        <li><a href="left-sidebar.html">About</a></li>
                        <li><a href="right-sidebar.html">Classes</a></li>
                        <li><a href="no-sidebar.html">News</a></li>
                        <li><a href="no-sidebar.html">Book Sessions</a></li>
                    </ul>
                </nav>                
            </div>
        )
    }
}

export default Navbar;
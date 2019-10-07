import React, { Component } from 'react'

class Navbar extends Component {
    render() {
        return (
            <div>
                Navbar Component
                <nav id="nav">
                    <ul>
                        <li className="current"><a href="index.html">Home</a></li>
                        <li>
                            <a href="#">Dropdown</a>
                            <ul>
                                <li><a href="#">Navbar li</a></li>

                                <li>
                                    <a href="#">Phasellus consequat</a>
                                    <ul>
                                        <li><a href="#">Magna phasellus</a></li>
                                        <li><a href="#">Etiam dolore nisl</a></li>
                                        <li><a href="#">Veroeros feugiat</a></li>
                                        <li><a href="#">Nisl sed aliquam</a></li>
                                        <li><a href="#">Dolore adipiscing</a></li>
                                    </ul>
                                </li>
                                <li><a href="#">Veroeros feugiat</a></li>
                            </ul>
                        </li>
                        <li><a href="left-sidebar.html">Left Sidebar</a></li>
                        <li><a href="right-sidebar.html">Right Sidebar</a></li>
                        <li><a href="no-sidebar.html">No Sidebar</a></li>
                    </ul>
                </nav>                
            </div>
        )
    }
}

export default Navbar;
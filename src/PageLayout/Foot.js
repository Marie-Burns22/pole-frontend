import React, { Component } from 'react'

class Foot extends Component {
    render() {
        return (
            <section id="footer">
                <div className="container">
                    <div className="row">
                        <div className="col-4 col-12-medium">
                            <img className="image featured" src="images/Logo-White-NoBackground.png" alt="" />
                        </div>
                       
                        <div className="col-4 col-12-medium">
                            <section>
                                <header>
                                    <h3>Find me on social media</h3>
                                </header>
                                <ul className="social">
                                    <li><a className="icon brands fa-facebook-f" href="/"><span className="label">Facebook</span></a></li>
                                    <li><a className="icon brands fa-twitter" href="/"><span className="label">Twitter</span></a></li>
                                    <li><a className="icon brands fa-linkedin-in" href="/"><span className="label">LinkedIn</span></a></li>
                                </ul>
                                <ul className="contact">
                                    <li>
                                        <h3>Address</h3>
                                        <p>
                                            Miami, FL 33186
                                        </p>
                                    </li>
                                    <li>
                                        <h3>Mail</h3>
                                        <p><a href="#">info@vegasinmiamipole.com</a></p>
                                    </li>
                                </ul>
                            </section>
                        </div>
                    </div>
                </div>
            <div className="col-12">
                <div id="copyright">
                    <ul className="links">
                        <li>&copy; Untitled. All rights reserved.</li><li>Website Template Design: <a href="http://html5up.net">HTML5 UP</a></li><li>Website Built by: <a href="mariecburns.com">Marie Burns</a></li>
                    </ul>
                </div>
            </div>
        </section>
        );
    }
}

export default Foot;


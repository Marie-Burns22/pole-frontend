import React, { Component } from 'react'
import Main from './Main';

class Foot extends Component {
    render() {
        return (

            <body className="homepage is-preload" id="page-wrapper">
                <section id="footer">
                    <div className="container">
                        <div className="row">
                            <div className="col-8 col-12-medium">
                                <section>
                                    <header>
                                        <h2>Footer</h2>
                                    </header>
                                    <ul className="dates">
                                        <li>
                                            <span className="date">Jan Foot <strong>27</strong></span>
                                            <h3><a href="#">Lorem dolor sit amet veroeros</a></h3>
                                            <p>These can be turned into a article link Component.</p>
                                        </li>
                                        <li>
                                            <span className="date">Jan <strong>23</strong></span>
                                            <h3><a href="#">Ipsum sed blandit nisl consequat</a></h3>
                                            <p>Blandit phasellus lorem ipsum dolor tempor sapien tortor hendrerit adipiscing feugiat lorem.</p>
                                        </li>
                                    </ul>
                                </section>
                            </div>
                            <div className="col-4 col-12-medium">
                                <section>
                                    <header>
                                        <h2>What's this all about? Footer</h2>
                                    </header>
                                    <a href="#" className="image featured"><img src="images/pic10.jpg" alt="" /></a>
                                    <p>
                                        This is <strong>Dopetrope</strong> a free, fully responsive HTML5 site template by
										<a href="http://twitter.com/ajlkn">AJ</a> for <a href="http://html5up.net/">HTML5 UP</a> It's released for free under
										the <a href="http://html5up.net/license/">Creative Commons Attribution</a> license so feel free to use it for any personal or commercial project &ndash; just don't forget to credit us!
									</p>
                                    <footer>
                                        <ul className="actions">
                                            <li><a href="#" className="button">Find out more</a></li>
                                        </ul>
                                    </footer>
                                </section>
                            </div>
                            <div className="col-4 col-6-medium col-12-small">
                                <section>
                                    <header>
                                        <h2>Pole Event Links</h2>
                                    </header>
                                    <ul className="divided">
                                        <li><a href="#">Lorem ipsum dolor sit amet sit veroeros</a></li>
                                        <li><a href="#">Sed et blandit consequat sed tlorem blandit</a></li>
                                    </ul>
                                </section>
                            </div>
                            <div className="col-4 col-6-medium col-12-small">
                                <section>
                                    <header>
                                        <h2>Local Organizations</h2>
                                    </header>
                                    <ul className="divided">
                                        <li><a href="#">Lorem ipsum dolor sit amet sit veroeros</a></li>
                                        <li><a href="#">Sed et blandit consequat sed tlorem blandit</a></li>
                                        
                                    </ul>
                                </section>
                            </div>
                            <div className="col-4 col-12-medium">
                                <section>
                                    <header>
                                        <h2>Find me on social media</h2>
                                    </header>
                                    <ul className="social">
                                        <li><a className="icon brands fa-facebook-f" href="#"><span className="label">Facebook</span></a></li>
                                        <li><a className="icon brands fa-twitter" href="#"><span className="label">Twitter</span></a></li>
                                        <li><a className="icon brands fa-dribbble" href="#"><span className="label">Dribbble</span></a></li>
                                        <li><a className="icon brands fa-tumblr" href="#"><span className="label">Tumblr</span></a></li>
                                        <li><a className="icon brands fa-linkedin-in" href="#"><span className="label">LinkedIn</span></a></li>
                                    </ul>
                                    <ul className="contact">
                                        <li>
                                            <h3>Address</h3>
                                            <p>
                                                Miami, Florida
											</p>
                                        </li>
                                        <li>
                                            <h3>Mail</h3>
                                            <p><a href="#">someone@untitled.tld</a></p>
                                        </li>
                                        <li>
                                            <h3>Phone</h3>
                                            <p>(800) 000-0000</p>
                                        </li>
                                    </ul>
                                </section>
                            </div>

                        </div>
                    </div>

                <div className="col-12">

   {/* <!-- Copyright --> */}
                    <div id="copyright">
                        <ul className="links">
                            <li>&copy; Untitled. All rights reserved.</li><li>Webseit Template Design: <a href="http://html5up.net">HTML5 UP</a></li><li>Website Built by: <a href="mariecburns.com">Marie Burns</a></li>
                        </ul>
                    </div>

            </div>

            </section>
            </body>


        );
    }
}

export default Foot;


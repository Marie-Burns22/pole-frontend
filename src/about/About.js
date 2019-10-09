import React, { Component } from 'react'
import Header from '../Header'
import AboutContainer from './AboutContainer'

class About extends Component {
    render() {
        return (
            <div>
                {/* <Header /> */}
                <section id="banner">
                    <header>
                        <h2>About Ms. Vegas</h2>
                        <p>Big. Bendy. Balanced.</p>
                    </header>
                </section>
                <section id="intro" className="container">
                    <div className="row">
                        <div className="col-6">
                            <section className="first">
                                <header>
                                    <h2>Who is Ms. Vegas?</h2>
                                </header>
                                <p>Ms. Vegas is a seasoned poleformer who has made appearances in a variety of competitions and showcases for nearly a decade. Known for her dynamic stage presence and extreme flexibility, Ms. Vegas' signature backbend tricks have captivated audiences for years. From the stages of Polecon, USPDF and PSO to the television set on NBC's America's Got Talent - Ms. Vegas is proud to offer her years of experience to educate others. Her talent as a performer make her style distinct and her career in education gives her the skills to be a thoughtful and engaging instructor. She has been choreographing and competitively successful for many years and is excited to share her passion with other dancers.</p>
                            </section>
                        </div>
                        <div className="col-6">
                            <section className="second">
                                <header>
                                    <h2>Awards</h2>
                                </header>
                                <AboutContainer />
                                {/* <ul>
                                    <li>Kiss My Curves 2019 - Pro Flow Diva Winner, Fierce Diva (advanced) 2nd place</li>
                                    <li>PSO Golden Gate Pole Championships - Level 3 Silver and Bronze (Low Flow and Entertainment)</li>
                                    <li>The list will go on, but you will enter them from your dashboard.</li>

                                </ul> */}
                            </section>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-4 col-12-medium">
                            <section className="first">
                                <i className="icon solid featured fa-cog"></i>
                                <header>
                                    <h2>Classes</h2>
                                </header>
                                <p>Descriptions of classes overall.</p>
                                <ul className="actions">
                                    <li><a href="#" className="button alt sm">Learn More</a></li>
                                </ul>
                            </section>
                        </div>
                        <div className="col-4 col-12-medium">
                            <section className="middle">
                                <i className="icon solid featured alt fa-bolt"></i>
                                <header>
                                    <h2>Event Hosting and Peformances</h2>
                                </header>
                                <p>Nisl amet dolor sit ipsum veroeros sed blandit consequat veroeros et magna tempus.</p>
                                <ul className="actions">
                                    <li><a href="#" className="button alt sm">Learn More</a></li>
                                </ul>
                            </section>
                        </div>
                        <div className="col-4 col-12-medium">
                            <section className="last">
                                <i className="icon solid featured alt2 fa-star"></i>
                                <header>
                                    <h2>News and Events</h2>
                                </header>
                                <p>Nisl amet dolor sit ipsum veroeros sed blandit consequat veroeros et magna tempus.</p>
                                <ul className="actions">
                                    <li><a href="#" className="button alt">Learn More</a></li>
                                </ul>
                            </section>
                        </div>
                    </div>
                    {/* <footer>
                        <ul className="actions">
                            <li><a href="#" className="button large">Get Started</a></li>
                            <li><a href="#" className="button alt large">Learn More</a></li>
                        </ul>
                    </footer> */}
                </section>
 
            </div>
        )
    }
}

export default About;
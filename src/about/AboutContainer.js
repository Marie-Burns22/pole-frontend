import React, { Component } from 'react'
import AwardsList from './AwardsList'
import { Link} from 'react-router-dom'

class AboutContainer extends Component {
    render() {
        return (
            <div id="page-wrapper">
            <section id="header">
                <section id="banner">
                    <header>
                        <h2>About Ms. Vegas</h2>
                        <p>Big. Bendy. Balanced.</p>
                    </header>
                </section>
                <section id="intro" className="container">
                    <div className="row">
                        <div className="col-6 col-12-medium">
                            <section className="first">
                                <header>
                                    <h2>Who is Ms. Vegas?</h2>
                                </header>
                                <p>Ms. Vegas is a seasoned poleformer who has made appearances in a variety of competitions and showcases for nearly a decade. Known for her dynamic stage presence and extreme flexibility, Ms. Vegas' signature backbend tricks have captivated audiences for years. From the stages of Polecon, USPDF and PSO to the television set on NBC's America's Got Talent - Ms. Vegas is proud to offer her years of experience to educate others. Her talent as a performer make her style distinct and her career in education gives her the skills to be a thoughtful and engaging instructor. She has been choreographing and competitively successful for many years and is excited to share her passion with other dancers.</p>
                            </section>
                        </div>
                        <div className="col-6 col-12-medium">
                            <section className="last">
                                <header>
                                    <h2>Awards</h2>
                                </header>
                                <AwardsList />
                            </section>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-4 col-12-medium">
                            <section className="first">
                                <i className="icon solid featured fa-cog"></i>
                                <header>
                                    <h2>Private Sessions and Workshops</h2>
                                </header>
                                <p>Ms. Vegas offers quality, affordable and customized individual instruction. Whether you're near or far, you can take advantage of the training she offers online and in person. Push your flexibility to the next level, work on building and perfecting your routines, discover creative floor work or perfect pole moves - Ms. Vegas is happy to help you wherever you are in your fitness journey.
                                With every lesson comes the Ms. Vegas guarantee to focus on you and your growth! You will not be disappointed in her energy, attention to the client, customization, and the fun and effective workouts she trains.</p>
                                <ul className="actions">
                                    <li><Link to="/services">Learn More</Link></li>
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
                                    <li><Link to="/services">Learn More</Link></li>
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
                                    <li><Link to="/news">News</Link></li>
                                </ul>
                            </section>
                        </div>
                    </div>
                </section>
            </section>
            </div>
        )
    }
}

export default AboutContainer;
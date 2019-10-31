import React, { Component } from 'react'
import AwardsList from './AwardsList'
import { Link, withRouter} from 'react-router-dom'
import VideoContainer from '../videos/VideoContainer';

class AboutContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false,
            blurbs: []
        }
    }

    componentDidMount() {
        fetch('https://vmpole.herokuapp.com/api/v1/blurbs', {
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            }
        })
        .then(response => response.json())
        .then(
            (result) => {
                this.setState({
                    isLoaded: true,
                    blurbs: result.data
                });
            },
            (error) => {
                this.setState({
                    isLoaded: true,
                    error
                });
            }
        )
    }

    render() {
        const {error, isLoaded, blurbs} = this.state;
        
        if (error) {
            return (
                <header>
                    <h2> Error: {error.message}</h2>
                </header>
            )
        } else if (!isLoaded) {
            return <h2>Loading</h2>
        } else if (!blurbs || blurbs === undefined || blurbs.length === 0) {
            return <h2>Welcome to Ms. Vegas in Miami! Please use the navigation bar to learn more about services and request bookings.</h2>
        } else {
            const about = blurbs.find(blurb => blurb.id === "1").attributes
            const services = blurbs.find(blurb => blurb.id === "2").attributes
            const events = blurbs.find(blurb => blurb.id === "3").attributes
            const news = blurbs.find(blurb => blurb.id === "4").attributes

            return (
                <div id="page-wrapper">
                    <section id="banner">
                        <header>
                            <h2>About Ms. Vegas</h2>
                            <p>Big. Bendy. Balanced.</p>
                        </header>
                    </section>
                
                    <section id="header">
                        <section id="intro" className="container">
                            <div className="row">
                                <div className="col-6 col-12-medium">
                                    <section className="first">
                                        <header>
                                            <h2>{about.title}</h2>
                                        </header>
                                        <p>{about.content}</p>
                                            <p><img className="image featured" src={about.img} alt="dancer"></img></p>
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
                                        {(services.img) ? <p><img className="image featured" src={services.img} alt="dancer"></img></p> : <i className="icon solid featured fa-cog"></i>}
                                        <header>
                                            <h2>{services.title}</h2>
                                        </header>
                                        <p>{services.content}</p>
                                        <br/>
                                        <ul className="actions">
                                            <li><Link className="button btn-sm icon solid center" to="/services">Learn More</Link></li>
                                        </ul>
                                    </section>
                                </div>
                                <div className="col-4 col-12-medium">
                                    <section className="middle">
                                        {(events.img) ? <p><img className="image featured" src={events.img} alt="dancer"></img></p> : <i className="icon solid featured alt fa-bolt"></i>}
                                        <header>
                                            <h2>{events.title}</h2>
                                        </header>
                                        <p>{events.content}</p>
                                        <br/>
                                        <ul className="actions">
                                            <li><Link className="button btn-sm icon solid center" to="/services">Learn More</Link></li>
                                        </ul>
                                    </section>
                                </div>
                                <div className="col-4 col-12-medium">
                                    <section className="last">
                                        {(news.img) ? <p><img className="image featured" src={news.img} alt="dancer"></img></p> : <i className="icon solid featured alt2 fa-star"></i>}
                                        <header>
                                            <h2>{news.title}</h2>
                                        </header>
                                        <p>{news.content}</p>
                                        <br/>
                                        <ul className="actions">
                                            <li><Link className="button btn-sm icon solid center" to="/news">Read More</Link></li>
                                        </ul>
                                    </section>
                                </div>
                            </div>
                        </section>
                        <VideoContainer />
                    </section>
                </div>
            )
         }
    }
}

export default withRouter(AboutContainer);
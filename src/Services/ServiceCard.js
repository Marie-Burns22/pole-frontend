import React, { Component } from 'react'
import {Link} from 'react-router-dom'

class ServiceCard extends Component {
    render() {
        return (
            <div className="col-4 col-6-medium col-12-small">
                <section className="box">
                    <a href="/booking" className="image featured"><img src={this.props.service.img} alt="Dancer" /></a>
                    <header>
                        <h3>{this.props.service.name}</h3>
                    </header>
                    <p>{this.props.service.description}</p>
                    <footer>
                        <ul className="actions">
                            { this.props.id === "2" || this.props.id === "6"
                            ?
                            <span><Link exact to="/infoForm" className="button btn-sm alt icon solid center block">Request Info</Link></span>
                            :
                            <span><a href="https://app.acuityscheduling.com/schedule.php?owner=18520153" target="_blank" rel="noopener noreferrer" className="button btn-sm icon solid center block">Book</a></span>
                            }  
                        </ul>
                    </footer>
                </section>
            </div>
        )
    }
}

export default ServiceCard;
import React, { Component } from 'react'
import {Link} from 'react-router-dom'

class ClassCard extends Component {
    render() {
        return (
            <div className="col-4 col-6-medium col-12-small">
                <section className="box">
                    <a href="/booking" className="image featured"><img src="images/pic02.jpg" alt="" /></a>
                    <header>
                        <h3>{this.props.service.name}</h3>
                    </header>
                    <p>{this.props.service.description}</p>
                    <footer>
                        <ul className="actions">
                           <span><li><Link exact to="/infoForm" className="button btn-sm icon solid center">Request Info</Link>
                            <Link exact to="/booking" className="button btn-sm alt icon solid center">Book Private</Link></li></span>
                        </ul>
                    </footer>
                </section>
            </div>
        )
    }
}

export default ClassCard;
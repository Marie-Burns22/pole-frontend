import React, { Component } from 'react'
import {Link} from 'react-router-dom'

class ClassCard extends Component {
    render() {
        return (
            <div className="col-4 col-6-medium col-12-small">
                <section className="box">
                    <a href="/booking" class="image featured"><img src="images/pic02.jpg" alt="" /></a>
                    <header>
                        <h3>Service Name</h3>
                    </header>
                    <p>Class description</p>
                    <footer>
                        <ul className="actions">
                            <li><a href="/booking" className="button alt">Schedule</a></li>
                            <li><Link to="/booking" className="button alt">Schedule</Link></li>
                        </ul>
                    </footer>
                </section>
            </div>
        )
    }
}

export default ClassCard;
import React, { Component } from 'react'

class ClassCard extends Component {
    render() {
        return (
            <div className="col-4 col-6-medium col-12-small">
                <section className="box">
                    <a href="#" className="image featured"><img src="./images/pic01.jpg" alt="" /></a>
                    <header>
                        <h3>Service Name</h3>
                    </header>
                    <p>Class description</p>
                    <footer>
                        <ul className="actions">
                            <li><a href="#" className="button alt">Schedule</a></li>
                        </ul>
                    </footer>
                </section>
            </div>
        )
    }
}

export default ClassCard;
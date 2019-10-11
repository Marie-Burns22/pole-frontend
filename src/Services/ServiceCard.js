import React, { Component } from 'react'

class ServiceCard extends Component {
    render() {
        return (
            <div className="col-4 col-6-medium col-12-small">
                <section className="box">
                    <img src="images/pic02.jpg" alt="" />
                    <header>
                        <h3>Service Name</h3>
                    </header>
                    <p>Service description</p>
                    <footer>
                        <ul className="actions">
                            <li><a href="#" className="button alt">Find out more</a></li>
                        </ul>
                    </footer>
                </section>
            </div>
        )
    }
}

export default ServiceCard;
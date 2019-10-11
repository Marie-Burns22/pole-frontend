import React, { Component } from 'react'
import ClassCard from './ClassCard'
import ServiceCard from './ServiceCard'

class ServiceContainer extends Component {
    render() {
        return (
        <div>
            <section id="banner">
                <header>
                    <h2>Services</h2>
                </header>
            </section>
            <section id="main">
                <div className="container">
                    <div className="row">
                        <div className="col-12">


                            <header className="major">
                                <h2>Private Sessions and Workshops</h2> 
                            </header>
                                <div className="row">
                                <ClassCard />
                                <ClassCard />
                                <ClassCard />
                            </div>
                        </div>
                    </div>
                </div>


            </section>
        </div>
        )
    }
}

export default ServiceContainer;

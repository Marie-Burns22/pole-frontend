import React, { Component } from 'react'
import ClassCard from './ClassCard'
import ServiceCard from './ServiceCard'

class ServiceContainer extends Component {
    render() {
        return (
            <div>
                <section>
                    <header className="major">
                        <h2>Classes</h2> 
                    </header>
                    <div className="row">
                        <ClassCard />
                        <ClassCard />
                        <ClassCard />
                    </div>

                    <header className="major">
                        <h2>Event Hosting and Performances</h2>
                    </header>
                    <div className="row">
                        <ServiceCard />
                        <ServiceCard />
                        <ServiceCard />
                    </div>
                </section>

            </div>
        )
    }
}

export default ServiceContainer;

import React, { Component } from 'react'
import ServiceCard from './ServiceCard'

class ServiceContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false,
            services: []
        }
    }

    componentDidMount() {
        fetch('https://vmpole.herokuapp.com/api/v1/courses', {
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
                        services: result.data
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
        const { error, isLoaded, services } = this.state;
        const classCards = services.map(a => (
            <ServiceCard key={a.id} service={a.attributes} id={a.id} />
        ))
        if (error) {
            return (
                <header>
                    <h2>Error: {error.message}</h2>
                </header>
            )
        } else if (!isLoaded) {
            return <div>Loading....</div>
        } else if (!services || services === undefined || services.length === 0) {
            return <h2>There are no services descriptions currently available online. Please email info@vegasinmiamipole.com for more information.</h2>
        } else {
            return (
            <div>
                <section id="main">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <header className="major">
                                    <h2>Private Sessions, Workshops, and More!</h2> 
                                </header>
                                    <div className="row">
                                    {classCards}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            )
        }
    }  
}

export default ServiceContainer;

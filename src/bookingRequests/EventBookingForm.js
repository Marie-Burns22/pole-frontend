import React, { Component } from 'react';

class EventBookingForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: "",
            lastName: "",
            email: "",
            serviceId: "",
            error: null,
            isLoaded: false,
            services: [],
            status: ""
        };
    }

        componentDidMount() {
            fetch('https://vmpole.herokuapp.com/api/v1/courses', {
            credentials: "include",
            method: 'GET',
            headers: {
                "Content-Type": "application/json"}
            })
            .then(res => res.json())
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
    

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit = event => {
        event.preventDefault();
        // formspree submissions
        const form = event.target;
        const data = new FormData(form);
        const xhr = new XMLHttpRequest();
        xhr.open(form.method, form.action);
        xhr.setRequestHeader("Accept", "application/json");
        xhr.onreadystatechange = () => {
            if (xhr.readyState !== XMLHttpRequest.DONE) return;
            if (xhr.status === 200) {
                form.reset();
                this.setState({ status: "SUCCESS" });
            } else {
                this.setState({ status: "ERROR" });
            }
        };
        xhr.send(data);
    }

    render() {
        const { status } = this.state;
        const { error, isLoaded, services } = this.state;
        if (error) {
            return (
                <section id="main">
                    <div> Error: {error.message}</div>;
                </section>
            )    
        } else if ( status === "SUCCESS") {
            return (
                <section id="main">
                    <h2>Thank you for your booking request! Ms. Vegas will respond shortly with more information.</h2>
                </section>
                )
        } else if (!isLoaded) {
            return <div> Loading...</div>;
        } else if (!services || services === undefined || services.length ===0) {
            return (
                <section id="main">
                    <div className="container">
                        <h2 className="major"> I am so glad you would like more information. Our form is currently being updated. Please email info@vegasinmiamipole.com for more information.</h2>
                    </div>
                </section>
            )
        } else {
            return (
                <section id="footer">
                    <div className="inner container">
                    <h2 className="major">Request a Service:</h2>
                    <p> Please use this form to request services. Include any specifics dates, events, or questions you have and Ms. Vegas will respond.</p>
                        <form onSubmit={this.handleSubmit} method="POST" action="https://formspree.io/mnerqevx">
                        <div className="fields">
                            <div className="field">
                                <label htmlFor="firstName">First Name</label>
                                <input type="text"
                                    name='firstName'
                                    placeholder='First Name'
                                    id="firstName"
                                    value={this.state.firstName}
                                    onChange={this.handleChange}
                                />
                            </div>

                            <div className="field">
                                <label htmlFor="lastName">Last Name</label>
                                <input type="text"
                                    name='lastName'
                                    placeholder='Last Name'
                                    id="lastName"
                                    value={this.state.lastName}
                                    onChange={this.handleChange}
                                />
                            </div>

                            <div className="field">
                                <label htmlFor="email">Email</label>
                                <input type="email"
                                    name='email'
                                    placeholder='Email'
                                    id="email"
                                    value={this.state.email}
                                    onChange={this.handleChange}
                                />
                            </div>

                            <div className="field">
                                <label htmlFor="serviceId">Which service are you interested in?</label>
                                <select onChange={this.handleChange} name='serviceId' placeholder="Available Services" value={this.state.serviceId}>
                                    <option selected>Select a Service</option>
                                    {services.map(s => 
                                    (
                                        <option value={s.id} key={s.id}>{s.attributes.name}</option>
                                    )) }
                                </select>
                            </div>

                        </div>
                            {status === "SUCCESS" 
                            ? 
                            <p>Thanks!</p> 
                            : 
                            // <button>Submit</button>
                            <ul className="actions">
                                <li><input type='submit' value="Send Message" /></li>
                            </ul>
                            }
                            {status === "ERROR" && <p>Ooops! There was an error.</p>}
                    </form>
                </div>
            </section>
            )
        }
    }
}

export default EventBookingForm;
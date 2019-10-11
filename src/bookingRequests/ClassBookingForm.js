import React, { Component } from 'react';

class ClassBookingForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: "",
            lastName: "",
            email: "",
            timeSlotId: "",
            error: null,
            isLoaded: false,
            timeSlots: [],
            status: ""
        };
    }

        componentDidMount() {
            fetch('https://vmpole.herokuapp.com/api/v1/time_slots', {
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
                        timeSlots: result.data
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

        // Change status from available to requested in API
        let id = this.state.timeSlotId
        console.log("handle submit id:", id)
        fetch(`https://vmpole.herokuapp.com/api/v1/time_slots/${id}`, {
            credentials: "include",
            method: "PATCH",
            headers: {
                "Content-Type": "application/json", 
                "Accept": "application/json"
            },
            body: JSON.stringify({
                status: "requested"
            })
        })
        .then(response => response.json())
        .then(
            (result) => {
                this.setState({
                    isLoaded: true,
                    timeSlots: result.data
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
        const { status } = this.state;
        const DATE_OPTIONS = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' };
        const { error, isLoaded, timeSlots } = this.state;
        if (error) {
            return (
                <section id="main">
                    <div> Error: {error.message}</div>;
                </section>
            )    
        } else if ( status === "SUCCESS") {
            return (
                <section id="main">
                    <h2>Thank you for your booking request! Ms. Vegas will contact you shortly with payment information and confirmation.</h2>
                </section>
                )
        } else if (!isLoaded) {
            return <div> Loading...</div>;
        } else if (!this.state.timeSlots || this.state.timeSLots === undefined || this.state.timeSlots.length ===0) {
            return (
                <section id="main">
                    <div className="container">
                        <h2 className="major"> I am so glad you would like to book a private session! Due to high-demand, all appointments are currently booked. Please email <a href="#">info@vegasinmiamipole.com</a> so we can create more availables time and ensure that they works for your schedule.</h2>
                    </div>
                </section>
            )
        } else {
            return (
                <section id="main">
                <h2 className="major">Book A Private Session</h2>
                <p>Use this form to book a private session. Ms. Vegas will reply with payment directions. Once the payment is processed your appointment will be reserved and confirmed.</p>
                <p> Please use the workshop and event booking form for those services</p>
                    <form onSubmit={this.handleSubmit} method="POST" action="https://formspree.io/mogkngpm">
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
                            <label htmlFor="timeSlotId">Choose an avaliable time:</label>
                            <select onChange={this.handleChange} name='timeSlotId' placeholder="Date and Time" value={this.state.timeSlotId}>
                                <option selected>Select an available time</option>
                                {timeSlots.map(t => 
                                (
                                    <option value={t.id} key={t.id}>{(new Date(t.attributes.date)).toLocaleDateString('en-US', DATE_OPTIONS)} at {t.attributes.time} {t.attributes.am_pm}</option>
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
            </section>
            )
        }
    }
}

export default ClassBookingForm;
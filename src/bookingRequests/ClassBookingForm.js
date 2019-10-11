import React, { Component } from 'react';
// import { connect } from 'react-redux';
import axios from "axios"
import { tsExternalModuleReference } from '@babel/types';
// import { userPostFetch } from '../redux/actions';

class ClassBookingForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: "",
            lastName: "",
            timeSlot: "",
            error: null,
            isLoaded: false,
            timeSlots: []
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
                        isLoaded: tsExternalModuleReference,
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
        event.preventDefault()
        // this.props.userPostFetch(this.state)
    }

    render() {
        const DATE_OPTIONS = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' };
        const { error, isLoaded, timeSlots } = this.state;
        if (error) {
            return <div> Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div> Loading...</div>;
        } else {
            return (
            <main className="inner container">
                <h2 className="major">Book A Private Session</h2>
                <p>Use this form to book a private session. Ms. Vegas will reply with payment directions. Once the payment is processed your appointment will be reserved and confirmed.</p>
                <p> Please use the workshop and event booking form for those services</p>
                <form onSubmit={this.handleSubmit} method="POST" action="https://formspree.io/mcburns2222@gmail.com">
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
                            <label htmlFor="timeSlot">Choose an avaliable time:</label>
                            <select onChange={this.handleChange} name='timeSlot'>
                                {timeSlots.map(t => 
                                (
                                    <option key={t.id}>{(new Date(t.attributes.date)).toLocaleDateString('en-US', DATE_OPTIONS)} at {t.attributes.time} {t.attributes.am_pm}</option>
                                )) }
                            </select>
                        </div>

                    </div>

                    <input type='submit' />
                </form>
            </main>
            )
        }
    }
}

// const mapDispatchToProps = dispatch => ({
//     userPostFetch: userInfo => dispatch(userPostFetch(userInfo))
// })

// export default connect(null, mapDispatchToProps)(Signup);
export default ClassBookingForm;
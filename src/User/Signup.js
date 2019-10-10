import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { userPostFetch } from '../redux/actions';

class Signup extends Component {
    state = {
        firstName: "",
        lastName: "",
        password: "",
        email: ""
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
        return (
            <div className="inner container">
            <form onSubmit={this.handleSubmit}>
                <h1 className="major">Sign Up For An Account</h1>

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
                            <label htmlFor="password">Password</label>
                            <input type="Password"
                                name='password'
                                placeholder='Password'
                                id="password"
                                value={this.state.password}
                                onChange={this.handleChange}
                            />
                        </div>

                </div>

                <input type='submit' />
            </form>
        </div>
        )
    }
}

// const mapDispatchToProps = dispatch => ({
//     userPostFetch: userInfo => dispatch(userPostFetch(userInfo))
// })

// export default connect(null, mapDispatchToProps)(Signup);
export default Signup;
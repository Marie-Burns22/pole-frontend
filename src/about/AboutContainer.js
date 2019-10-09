import React, { Component } from 'react'

class AboutContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            awards: []
        }
    }

    componentDidMount() {
        fetch('https://https://vmpole.herokuapp.com/api/v1/awards', {
            credentials: "include",
            method: 'GET',
            headers: {
                
                "Content-Type": "application/json"
            },
        }) 
        .then(r => r.json())
        .then(awards => {
            if (awards.error) {
                alert(awards.error)
            } else {
                this.setState({ awards: awards.data})
            }
        })
    }

    render() {
        return (
            <div>
                {this.state.awards.map(award => (
                    <p>{award.attributes.competition}</p>
                ))}
            </div>
        )
    }
}

export default AboutContainer;
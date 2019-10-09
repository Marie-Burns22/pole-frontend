import React, { Component } from 'react'

class AwardsList extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            awards: []
        }
    }

    componentDidMount() {
        fetch('https://vmpole.herokuapp.com/api/v1/awards', {
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
                    this.setState({ awards: awards.data })
                }
            })
    }

    render() {
        return (
            <div>
                <ul>
                    {this.state.awards.map(a => (
                    <li>{a.attributes.competition} - {a.attributes.year} - {a.attributes.award} </li>
                    ))}
                </ul>
            </div>
        )
    }
    
    
}

export default AwardsList;
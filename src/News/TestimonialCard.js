import React, { Component } from 'react'

class TestimonialCard extends Component {
    render() {
        return (
            <div>
                <div className="col-6 col-12-small">
                    <section className="box">
                        <header>
                        <blockquote>{this.props.testimonial.content}</blockquote>
                        </header>
                        <h4><em> ~ {this.props.testimonial.author}</em></h4>
                    </section>
                </div>
            </div>
        )
    }
}

export default TestimonialCard;
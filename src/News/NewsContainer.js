import React, { Component } from 'react'
import ArticleCard from './ArticleCard'
import TestimonialCard from './TestimonialCard';

class NewsContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            articlesLoaded: false,
            articles: [],
            testimonialsLoaded:false,
            testimonials: []
        }
    }

    componentDidMount(){
        fetch('https://vmpole.herokuapp.com/api/v1/articles', {
            credentials: "include",
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
                    articlesLoaded: true,
                    articles: result.data
                });
            },
            (error) => {
                this.setState({
                    articlesLoaded: true,
                    error
                });
            }
        )

        fetch('https://vmpole.herokuapp.com/api/v1/testimonials', {
            credentials: "include",
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
                        testimonialsLoaded: true,
                        testimonials: result.data
                    });
                },
                (error) => {
                    this.setState({
                        testimonialsLoaded: true,
                        error
                    });
                }
            )
    }

    render() {
        const { error, articlesLoaded, articles, testimonials } = this.state;
        const articleCards = articles.map(a => (
            <ArticleCard key={a.id} article={a.attributes} id={a.id} />
        ))
        const testimonialCards = testimonials.map(t => (
            <TestimonialCard key={t.id} testimonial={t.attributes} id={t.id} />
        ))
        if (error) {
            return (
                <section id="banner">
                    <header>
                        <h2>Error: {error.message}</h2>
                    </header>
                </section>
            )
        } else if (!articlesLoaded) {
            return <div> Loading...</div>
        } else if (!articles || articles === undefined || articles.length === 0) {
            return <h2> Please check out the About page or Services since there is no news at this time.</h2>
        } else {
            return (
            <div>
                <section id="main">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <section>
                                    <header className="major">
                                        <h2>News</h2>
                                    </header>
                                    <div className="row">
                                        {articleCards}
                                    </div>
                                </section>
                            </div>
                        </div>
                    </div>
                </section>

                {/* <section id="main"> */}
                    <div className="container">        
                        <div className="row">
                            <div className="col-12">
                                <section>
                                    <header className="major">
                                        <h2>Testimonials</h2>
                                    </header>
                                    <div className="row">
                                        {testimonialCards}
                                    </div>
                                </section>

                            </div>
                        </div>
                    </div>                            
                {/* </section> */}
            </div>
            )
        }
    }
}

export default NewsContainer;
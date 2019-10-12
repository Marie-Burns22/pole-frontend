import React, { Component } from 'react'
import ArticleCard from './ArticleCard'

class ArticleContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false,
            articles: []
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
                    isLoaded: true,
                    articles: result.data
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
        const { error, isLoaded, articles } = this.state;
        const articleCards = articles.map(a => (
            <ArticleCard key={a.id} article={a.attributes} id={a.id} />
        ))
        if (error) {
            return (
                <section id="banner">
                    <header>
                        <h2>Error: {error.message}</h2>
                    </header>
                </section>
            )
        } else if (!isLoaded) {
            return (<div> Loading...</div>)
        } else if (!articles || articles === undefined || articles.length === 0) {
            return (<h2> Please check out the About page or Services since there is no news at this time.</h2>)
        } else {
            return (
            <div>
                <section id="banner">
                    <header>
                        <h2>Ms. Vegas in the News</h2>
                        <p>Big. Bendy. Balanced.</p>
                    </header>
                </section>
                <section id="main">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <section>
                                    <header className="major">
                                        <h2>What is Ms. Vegas up to?</h2>
                                    </header>
                                    <div className="row">
                                        {articleCards}
                                    </div>
                                </section>

                            </div>
                        </div>
                    </div>                            
                </section>
            </div>
            )
        }
    }
}

export default ArticleContainer;
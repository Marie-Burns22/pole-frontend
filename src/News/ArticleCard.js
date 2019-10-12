import React, { Component } from 'react'

class ArticleCard extends Component {
    render() {
        return (
            <div>
                <div className="col-6 col-12-small">
                    <section className="box">
                        <a href="#" className="image featured"><img src="images/pic08.jpg" alt="" /></a>
                        <header>
                            <h3>{this.props.article.title}</h3>
                            <p>{this.props.article.published}</p>
                        </header>
                        <p>{this.props.article.content}</p>
                        <footer>
                            <ul className="actions">
                                <li><a href="#" className="button icon solid fa-file-alt">Share</a></li>
                                <li><a href="#" className="button alt icon solid fa-comment">Comments</a></li>
                            </ul>
                        </footer>
                    </section>
                </div>
            </div>
        )
    }
}

export default ArticleCard;
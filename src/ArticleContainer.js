import React, { Component } from 'react'
import ArticleCard from './ArticleCard'

class News extends Component {
    render() {
        return (
            <div>
                <div className="col-12">
                    <section>
                        <header className="major">
                            <h2>Ms.Vegas in the News</h2>
                        </header>
                        <div className="row">
                            <ArticleCard />
                            <ArticleCard />
                        </div>
                    </section>

                </div>
            </div>
        )
    }
}

export default News;
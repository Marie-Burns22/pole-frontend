import React, { Component } from 'react'
import ArticleCard from './ArticleCard'

class ArticleContainer extends Component {
    render() {
        return (
            <div>
                <section id="banner">
                    <header>
                        <h2>Ms. Vegas in the News</h2>
                        {/* <p>Big. Bendy. Balanced.</p> */}
                    </header>
                </section>
                <section id="main">
                    <div className="container">
                        <div className="row">
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
                    </div>                            
                </section>
            </div>
        )
    }
}

export default ArticleContainer;
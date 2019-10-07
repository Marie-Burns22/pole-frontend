import React, { Component } from 'react'

class News extends Component {
    render() {
        return (
            <div>
                News
                <div className="col-12">

                    {/* <!-- Blog --> */}
                    <section>
                        <header className="major">
                            <h2>Ms.Vegas in the News</h2>
                        </header>
                        <div className="row">
                            <div className="col-6 col-12-small">
                                <section className="box">
                                    <a href="#" className="image featured"><img src="images/pic08.jpg" alt="" /></a>
                                    <header>
                                        <h3>Article Title</h3>
                                        <p>Date Posted</p>
                                    </header>
                                    <p>This is where you write about yourself. We could also call this a blog. The red continue reading button would go to the full article, or we could remove that and just list all the articles on one page.</p>
                                    <footer>
                                        <ul className="actions">
                                            <li><a href="#" className="button icon solid fa-file-alt">Continue Reading</a></li>
                                            <li><a href="#" className="button alt icon solid fa-comment">33 comments</a></li>
                                        </ul>
                                    </footer>
                                </section>
                            </div>
                            <div className="col-6 col-12-small">
                                <section className="box">
                                    <a href="#" className="image featured"><img src="images/pic09.jpg" alt="" /></a>
                                    <header>
                                        <h3>Another article</h3>
                                        <p>Date Posted</p>
                                    </header>
                                    <p>You will add the title, date, and content from your admin dashboard. It won't be pretty there, but should be easy.  We can also add a comment form or like button if you want people to be able to leave comments or likes.</p>
                                    <footer>
                                        <ul className="actions">
                                            <li><a href="#" className="button icon solid fa-file-alt">Continue Reading</a></li>
                                            <li><a href="#" className="button alt icon solid fa-comment">33 comments</a></li>
                                        </ul>
                                    </footer>
                                </section>
                            </div>
                        </div>
                    </section>

                </div>
            </div>
        )
    }
}

export default News;
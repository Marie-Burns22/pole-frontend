import React, { Component } from 'react'
import ServiceContainer from './ServiceContainer';
import News from './ArticleContainer';

import './assets/css/main.css'

class Main extends Component{
    render() {
        return (
            <div>
                {/* <!-- Main --> */}
                <section id="main">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <ServiceContainer />

                            </div>
                            <News />
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default  Main;
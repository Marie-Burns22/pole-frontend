import React, { Component } from 'react'
import ServiceContainer from './ServiceContainer';
import News from './News';

import './assets/css/main.css'

class Main extends Component{
    render() {
        return (
            <div>
                {/* <!-- Main --> */}
                <section id="main">
                    <div class="container">
                        <div class="row">
                            <div class="col-12">
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
import React from 'react'

export default function VideoCard() {
    return (
        <div>
            <div className="col-4 col-6-medium col-12-small">
                <section className="box">
                    <div className="embed-responsive embed-responsive-16by9">
                        <iframe title="Embeds Page" width="560" height="315" src="https://www.youtube.com/embed/L_XuPWTVAyw" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="true"></iframe>
                    </div>
                    <header>
                        <h3>Video Title</h3>
                    </header>
                    <p>Video description</p>
                </section>
            </div>
        </div>
    )
}
import React, { Component } from 'react'
import VideoCard from './VideoCard'

class VideoContainer extends Component {
    render() {
        return (
            <div>
                <header>
                    <h2>Performance Videos</h2>
                </header>
                <VideoCard />
            </div>
        )
    }
}

export default VideoContainer;
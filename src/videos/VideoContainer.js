import React, { Component } from 'react'
import VideoCard from './VideoCard'

class VideoContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false,
            videos: []
        }
    }

    componentDidMount() {
        fetch('https://vmpole.herokuapp.com/api/v1/videos', {
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
                        videos: result.data
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
        const { error, isLoaded, videos } = this.state;
        const videoCards = videos.map(v => (
            <VideoCard key={v.id} video={v.attributes} id={v.id} />
        ))
        if (error) {
            return (
                <header>
                    <h2>Error: {error.message}</h2>
                </header>
            )
        } else if (!isLoaded) {
            return <h2>Loading....</h2>
        } else if (!videos || videos ===  undefined || videos.length === 0) {
            return <h2> Find Ms. Vegas on Social Media! Links below. </h2>
        } else {
            return (
                <div>
                    <header>
                        <h2>Performance Videos</h2>
                    </header>
                    {videoCards}
                </div>
            )
        }
    }
}

export default VideoContainer;
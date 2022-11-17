import Carousel from 'react-bootstrap/Carousel';
import React, { Component } from "react";
import YoutubeEmbed from './YoutubeEmbed';
import { getUserEmail } from '../../utils/authHelper';

class MediaSlideshow extends Component {

    state = {
        data: this.props.data
    }

    componentDidMount() {
        let userFavorites = [];
        let tasteDiveResults = [];
        fetch(`${process.env.REACT_APP_API_URL}/api/media/getMediaForUser/${getUserEmail()}`)
            .then((response) => response.json())
            .then((data) => {
                data.forEach((mediaItem) => {
                    userFavorites.push(mediaItem.mediaName)
                })
            })
            .then(() => userFavorites.forEach((favorite) => {
                fetch(`${process.env.REACT_APP_API_URL}/api/tasteDive/related?MediaName=${favorite}`, {
                    method: "GET",
                })
                    .then((response) => response.json())
                    .then((apiData) => {
                        let parsedData = JSON.parse(apiData.body)
                        parsedData.Similar.Results.forEach((result) => {
                            if (result.yID) {
                                tasteDiveResults.push(result)
                            }
                        })

                        const shuffled = tasteDiveResults.sort(() => 0.5 - Math.random());
                        let selected = shuffled.slice(0, 3);
                        this.setState({ data: selected })
                    })

            }))



    }

    render() {
        return (
            <div className="Slideshow container mb-3">
                <Carousel variant="dark" interval={null}>
                    {this.state.data.map((media, idx) => (
                        <Carousel.Item key={idx}>
                            <YoutubeEmbed embedId={media.yID} />
                            <Carousel.Caption>
                                <h5>{media.Name}</h5>
                            </Carousel.Caption>
                        </Carousel.Item>))}
                </Carousel>
            </div>
        );
    }
}

export default MediaSlideshow;
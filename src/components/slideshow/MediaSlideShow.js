import Carousel from 'react-bootstrap/Carousel';
import React, { Component } from "react";
import tasteDiveGetRelatedMedia from "../../utils/tasteDiveGetRelatedMedia"
import {tasteDiveResults} from "../../utils/tasteDiveResults"
import YouTube from "react-youtube";
class MediaSlideshow extends Component {

    state = {
        data: []
    }

    componentDidMount() {
        let userFavorites = [];
        let tasteDiveResults = [];
        fetch(`${process.env.REACT_APP_API_URL}/api/media/getAllMedia`)
            //on success of the fetch request, turn the response that came back into JSON
            .then((response) => response.json())
            //on success of turnig the response into JSON (data we can work with), lets add that data to state
            .then((data) => {
                console.log(data);
                
                data.forEach((mediaItem) => {
                    userFavorites.push(mediaItem.mediaName)
                })
            })
        
            .then(() => userFavorites.forEach((favorite) => {
                console.log(`${process.env.REACT_APP_API_URL}/api/tasteDive/related?MediaName=${favorite}&info=1&limit=100&verbose=1`)
                fetch(`${process.env.REACT_APP_API_URL}/api/tasteDive/related?MediaName=${favorite}`, {
                    method: "GET", 
                })
                    //on success of the fetch request, turn the response that came back into JSON
                    .then((response) => response.json())
                    //on success of turnig the response into JSON (data we can work with), lets add that data to state
                    .then((apiData) => {
                        let parsedData = JSON.parse(apiData.body)
                        console.log(parsedData)
                        parsedData.Similar.Results.forEach((result) => {
                            tasteDiveResults.push(result)
                            
                        })
                        this.setState({data: tasteDiveResults})
                        console.log("State: " + JSON.stringify(this.state))
                    })
                            
            }))
    

}

    render() {
        return (
            <div className="Slideshow container mb-3">
                <Carousel variant="dark">
                    {this.state.data.map((media, idx) => (
                    <Carousel.Item key={idx}>
                        <img
                            className="d-block w-100"
                            src="https://via.placeholder.com/800x400"
                            alt="First slide"
                        /> 
                        <Carousel.Caption>
                            <h5>{media.Name}</h5>
                            <h4>{media.wUrl}</h4>
                            <h3>{media.yUrl}</h3>
                            <h2>{media.yID}</h2>
                            <p>{media.wTeaser}</p>

                        </Carousel.Caption>
                    </Carousel.Item>))}
                </Carousel>
            </div>
        );
    }
}

export default MediaSlideshow;
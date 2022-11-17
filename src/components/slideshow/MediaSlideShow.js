import Carousel from 'react-bootstrap/Carousel';
import React, { Component } from "react";
import tasteDiveGetRelatedMedia from "../../utils/tasteDiveGetRelatedMedia"
import {tasteDiveResults} from "../../utils/tasteDiveResults"
import YoutubeEmbed from './YoutubeEmbed';
class MediaSlideshow extends Component {

    state = {
        data: []
    }

    componentDidMount() {
        let userFavorites = [];
        let tasteDiveResults = [];
        fetch(`${process.env.REACT_APP_API_URL}/api/media/getMediaForUser/${getUserEmail()}`)
            //on success of the fetch request, turn the response that came back into JSON
            .then((response) => response.json())
            //on success of turnig the response into JSON (data we can work with), lets add that data to state
            .then((data) => {
                console.log(data);
                
                data.forEach((mediaItem) => {
                    userFavorites.push(mediaItem.mediaName)
                })
            })
            ////////////////////////////////////Steve////////////////////////////////////////////////////
            //The below should work for the grid cards as well, it calls out tasteDive based off what
            //Was returned from our backend for the user's favorites. 
            //        let userFavorites = []; <--- Items from our backend are added to this.
            //        let tasteDiveResults = []; <---- Items from tasteDive.
            //
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
                            if(result.yID) {
                                tasteDiveResults.push(result)
                            }
                            
                        })
                        this.setState({data: tasteDiveResults})
                        console.log("State: " + JSON.stringify(this.state))
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
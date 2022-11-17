import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import React, { Component } from "react";
import { getUserEmail } from '../../utils/authHelper';

class UserMediaGridCards extends Component {

    state = {
        data: []
    }

    componentDidMount() {

        fetch(`${process.env.REACT_APP_API_URL}/api/media/getMediaForUser/${getUserEmail()}`)
            //on success of the fetch request, turn the response that came back into JSON
            .then((response) => response.json())
            //on success of turnig the response into JSON (data we can work with), lets add that data to state
            .then((data) => {
                console.log(data);
                this.setState({ data: data })
            })

    }

    handleFavorite = (event) => {

        console.log(event.target.id)
        fetch(`${process.env.REACT_APP_API_URL}/api/media/deleteUserMedia?medianame=${event.target.id}&email=${getUserEmail()}`, {
            method: "DELETE",
        })
        fetch(`${process.env.REACT_APP_API_URL}/api/media/getMediaForUser/${getUserEmail()}`)
            //on success of the fetch request, turn the response that came back into JSON
            .then((response) => response.json())
            //on success of turnig the response into JSON (data we can work with), lets add that data to state
            .then((data) => {
                console.log(data);
                this.setState({ data: data })
            })
    }

    render() {
        if (this.state.data.length !== 0) {
            return (
                <div className="MediaGridCards container mb-3">
                    <Row xs={1} lg={4} className="g-4">
                        {this.state.data.map((media, idx) => (
                            <Col key={idx}>
                                <Card>
                                    <Card.Img variant="top" src="https://via.placeholder.com/300" />
                                    <Card.Body>
                                        <Card.Title>{media.mediaName}</Card.Title>
                                        <Card.Text>
                                            Media Rating: {media.mediaRating}
                                        </Card.Text>
                                        <div><span>Click to delete favorite: </span>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fillRule="currentColor" className="bi" viewBox="0 0 16 16">
                                            <path id={media.mediaName} onClick={this.handleFavorite} fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z" />
                                        </svg>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </div>
            );
        } else {
            return <span>Loading...</span>
        }
    }
}

export default UserMediaGridCards;
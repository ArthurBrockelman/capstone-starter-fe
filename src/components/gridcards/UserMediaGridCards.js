import Row from 'react-bootstrap/Row';
import Container from "react-bootstrap/Container"
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import React, { Component } from "react";
import { getUserEmail } from '../../utils/authHelper';
import { withRouter } from "react-router-dom";

class UserMediaGridCards extends Component {

    state = {
        data: []
    }

    populateUserFavorites() {

        fetch(`${process.env.REACT_APP_API_URL}/api/media/getMediaForUser/${getUserEmail()}`)
            //on success of the fetch request, turn the response that came back into JSON
            .then((response) => response.json())
            //on success of turnig the response into JSON (data we can work with), lets add that data to state
            .then((data) => {
                console.log(data);
                this.setState({ data: data })
            })
    }

    componentDidMount() {

        this.populateUserFavorites()

    }

    handleFavoriteDelete = (event) => {

        console.log(`${process.env.REACT_APP_API_URL}/api/media/deleteUserMedia?medianame=${event.target.id}&email=${getUserEmail()}`)
        fetch(`${process.env.REACT_APP_API_URL}/api/media/deleteUserMedia?medianame=${event.target.id}&email=${getUserEmail()}`, {
            method: "DELETE",
        })
        .then((results) => results.json())
        .then((data) => {  
            this.populateUserFavorites()
        })
    }

    render() {
        console.log(this.props)
        if (this.state.data.length !== 0) {
            return (
                <div className="MediaGridCards container mb-3">
                    <Container>
                        <Row>
                            <h1>Favorites</h1>
                        </Row>
                        <Row>
                            <p>See a list of your favorites below, this will inform the user feed you are shown.</p>
                        </Row>
                        <Row xs={1} lg={4} className="g-4">
                            {this.state.data.map((media, idx) => (
                                <Col key={idx}>
                                    <Card>
                                        <Card.Img variant="top" src="images/lichen4.jpg" />
                                        <Card.Body>
                                            <Card.Title>{media.mediaName}</Card.Title>
                                            <Card.Text>
                                                Media Rating: {media.mediaRating}
                                            </Card.Text>
                                            <div><span>Click to delete favorite: </span>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fillRule="currentColor" className="bi" viewBox="0 0 16 16">
                                                <path id={media.mediaName} onClick={this.handleFavoriteDelete} fillRule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z" />
                                            </svg>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            ))}
                        </Row>
                    </Container>
                </div>
            );
        } else {
            return <span>No favorites to show at the moment.</span>
        }
    }
}

export default withRouter(UserMediaGridCards);
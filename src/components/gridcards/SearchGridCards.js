import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import React, { Component } from "react";
import { getUserEmail } from '../../utils/authHelper';
import YoutubeEmbed from '../slideshow/YoutubeEmbed';

class SearchGridCards extends Component {

    state = {
        searchData: this.props.searchData
    }

    handleFavorite = (event) => {

        console.log(event.target.id)
        fetch(`${process.env.REACT_APP_API_URL}/api/media/createMedia`, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: "POST",
            body: JSON.stringify({
                email: getUserEmail(),
                mediaName: event.target.id,
                mediaRating: 5,
                createDateTime: new Date(),
            })
        })
    }

    render() {
        if (this.state.searchData.length !== 0) {
            return (
                <div className="MediaGridCards container mb-3">
                    <Row xs={1} lg={1} className="g-4">
                        {this.state.searchData.map((media, idx) => (
                            <Col key={idx}>
                                <Card>
                                    {/* <Card.Img variant="top" src="https://via.placeholder.com/300" /> */}
                                    <YoutubeEmbed embedId={media.yID} />
                                    <Card.Body>
                                        <Card.Title>{media.Name}</Card.Title>
                                        <Card.Text>
                                            {media.wTeaser}
                                        </Card.Text>
                                        <div>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fillRule="currentColor" className="bi" viewBox="0 0 16 16">
                                                <path id={media.Name} onClick={this.handleFavorite} fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z" />
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
            return <span> Getting your data...</span>
        }
    }
}

export default SearchGridCards;
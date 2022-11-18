import Header from "../../components/header/Header";
import React, { Component } from "react";
import MediaSlideshow from "../../components/slideshow/MediaSlideShow";
import { isAuthenticated } from "../../utils/authHelper"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

class UserFeed extends Component {

    state = {

    }

    render() {

        return (
            <div className="UserFeed">
            
              <Header isAuthenticated={isAuthenticated()}/>
              <Container>
                <Row>
                  <h1>User Feed</h1>
                </Row>
                <Row>
                  <p>Below is a feed of videos based off of your favorite selections.</p>
                </Row>
                <Row>
                  <MediaSlideshow data={[]}/>
                </Row>
              </Container>
            </div>
          );

    }
}

export default UserFeed;
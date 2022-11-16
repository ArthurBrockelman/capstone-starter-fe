import Slideshow from "../../components/slideshow/Slideshow";
import React, { Component } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import UserMediaGridCards from "../../components/gridcards/UserMediaGridCards";
import Sidebar from "../../components/sideBar/sideBar";
import MediaSlideshow from "../../components/slideshow/MediaSlideShow"
import SearchBar from "../../components/searchBar/searchBar";
import { isAuthenticated } from "../../utils/authHelper";

class SelectAndShow extends Component {

    state = {
        selectedView: "",
        isAuthenticated: isAuthenticated()
    }

    render() {
        return (
            <div className="Home">

                <Container>
                    <Row>
                        <SearchBar />
                    </Row>
                    <Row>
                        <Col xs={3}><Sidebar /></Col>
                        <Col xs={9}><MediaSlideshow /></Col>
                    </Row>
                    {this.state.isAuthenticated ? <UserMediaGridCards /> : null}
                </Container>

            </div>
        );
    }
}

export default SelectAndShow;


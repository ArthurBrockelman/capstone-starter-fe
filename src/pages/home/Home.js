import Header from "../../components/header/Header";
import React, { Component } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { isAuthenticated } from "../../utils/authHelper";

class Home extends Component {

  render() {
    return (
      <div className="Home">

        <Header isAuthenticated={isAuthenticated()} />
        <Container>
          <Row>
            <Col></Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Home;

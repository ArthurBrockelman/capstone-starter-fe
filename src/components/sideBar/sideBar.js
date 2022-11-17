import React from "react";
import {Nav} from "react-bootstrap";
import { withRouter } from "react-router";
//import "../../sideBar.css"

const Side = props => {
    return (
        <>
            <Nav className="col-md-12 d-none d-md-block bg-light sidebar" variant="pills"
            defaultActiveKey="/"
            >
                <div className="sidebar-sticky"></div>
            <Nav.Item>
                <Nav.Link>User Feed</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="link-1">Favorites</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="link-2">Search</Nav.Link>
            </Nav.Item>
            </Nav>
          
        </>
        );
  };
  const Sidebar = withRouter(Side);
  export default Sidebar
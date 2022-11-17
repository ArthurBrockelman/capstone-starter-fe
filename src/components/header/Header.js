import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link, withRouter } from 'react-router-dom';
import UserNav from './UserNav';

function Header(props) {

  return (
    <div className="Navbar mb-3">
      <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
        <Navbar.Brand as={Link} to="/">Lichentrope</Navbar.Brand>
        <Nav.Link as={Link} to="/search">
            Search
        </Nav.Link>
        <Nav.Link as={Link} to="/userfeed">
            User Feed
        </Nav.Link>
        <Nav.Link as={Link} to="/favorites">
            Favorites
        </Nav.Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav activeKey={props.location.pathname} className="ml-auto">
            <UserNav
              isAuthenticated={props.isAuthenticated}
            />
          </Nav>

        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default withRouter(Header);

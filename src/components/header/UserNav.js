import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link, withRouter } from 'react-router-dom';

import { connect } from "react-redux";
import * as authActions from "../../redux/actions/auth";
import { bindActionCreators } from "redux";


import AuthService from "../../authService";

function UserNav(props) {

  let client = new AuthService();

  let handleSignOut = (event) => {
    client.logout(props.auth.token).then((response) => {
      // handle success
      localStorage.removeItem('auth');
      props.actions.logout()
      props.history.push(props.location.pathname)
    })
      .catch((error) => {
        console.log(error)
      })
  }

  let userNav = (
    <>
      <Navbar.Text className="font-weight-bold mx-3">
        Welcome, Guest
      </Navbar.Text>
      <Nav.Link as={Link} to="/login" href="/login">Sign in</Nav.Link>
      <Nav.Link as={Link} to="/register" href="/register">Register</Nav.Link>
      <NavDropdown title="Analytics" id="basic-nav-dropdown" alignRight>
      <NavDropdown.Item href="UserList">User List</NavDropdown.Item>
      <NavDropdown.Divider />
      <NavDropdown.Item href="UserCreationDateCounts">User Creation Date Trends</NavDropdown.Item>
      <NavDropdown.Item href="UserCreationDateCountsChart">User Creation Date Trends Chart</NavDropdown.Item>
      <NavDropdown.Divider />
      <NavDropdown.Item href="UserFavoriteList">User Favorites Activity</NavDropdown.Item>
      <NavDropdown.Divider />
      <NavDropdown.Item href="MediaNameCounts">Popular Artists</NavDropdown.Item>
      <NavDropdown.Item href="MediaNameCountsChart">Popular Artists Chart</NavDropdown.Item>
      <NavDropdown.Divider />
      <NavDropdown.Item href="MediaRatingCounts">Media Rating Counts</NavDropdown.Item>
      <NavDropdown.Item href="MediaRatingCountsChart">Media Rating Counts Chart</NavDropdown.Item>
      <NavDropdown.Divider />
      <NavDropdown.Item href="SearchHistoryList">Search History</NavDropdown.Item>
      </NavDropdown>  
    </>
  )
  if (props.isAuthenticated) {
    userNav = (
      <>
        <Navbar.Text className="font-weight-bold mx-3">
          Hello, {props.auth.email}
        </Navbar.Text>
        <Nav.Link as={Link} to={`/updateuser/${props.auth.email}`} href={`/updateuser/${props.auth.email}`}> Edit Profile</Nav.Link>
        <Nav.Link onClick={handleSignOut}>Sign Out</Nav.Link>
        <NavDropdown title="Analytics" id="basic-nav-dropdown" alignRight>
      <NavDropdown.Item href="UserList">User List</NavDropdown.Item>
      <NavDropdown.Divider />
      <NavDropdown.Item href="UserCreationDateCounts">User Creation Date Trends</NavDropdown.Item>
      <NavDropdown.Item href="UserCreationDateCountsChart">User Creation Date Trends Chart</NavDropdown.Item>
      <NavDropdown.Divider />
      <NavDropdown.Item href="UserFavoriteList">User Favorites Activity</NavDropdown.Item>
      <NavDropdown.Divider />
      <NavDropdown.Item href="MediaNameCounts">Popular Artists</NavDropdown.Item>
      <NavDropdown.Item href="MediaNameCountsChart">Popular Artists Chart</NavDropdown.Item>
      <NavDropdown.Divider />
      <NavDropdown.Item href="MediaRatingCounts">Media Rating Counts</NavDropdown.Item>
      <NavDropdown.Item href="MediaRatingCountsChart">Media Rating Counts Chart</NavDropdown.Item>
      <NavDropdown.Divider />
      <NavDropdown.Item href="SearchHistoryList">Search History</NavDropdown.Item>
      </NavDropdown>  
      </>
    )
  }

  return userNav;
}

function mapStateToProps(state) {
  return {
    auth: state.auth,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(authActions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(UserNav));

import Header from "../../components/header/Header";
import Slideshow from "../../components/slideshow/Slideshow";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import UserMediaGridCards from "../../components/gridcards/UserMediaGridCards";
import Sidebar from "../../components/sideBar/sideBar";
import MediaSlideshow from "../../components/slideshow/MediaSlideShow"
import { isAuthenticated } from "../../utils/authHelper";

function Home(props) {
  return (
    <div className="Home">
        
        <Header isAuthenticated={isAuthenticated()} />
        <Container>
          <Row>
            <Col xs={3}><Sidebar /></Col>
            <Col xs={9}><MediaSlideshow/></Col>
          </Row>
          {isAuthenticated() ? <UserMediaGridCards /> : null}
        </Container>
    </div>
  );
}

export default Home;

//import the boostrap compents we will be using on this form
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function SearchBar({ handleSubmit, onChange, searchTerm }) {

    return (
        <div className="UserForm container">
            <Form onSubmit={handleSubmit}>
                <Container>
                    <Row>
                        <Col>
                            <Form.Group controlId="searchTerm">
                                <Form.Control required minLength="2" value={searchTerm} onChange={onChange} type="text" />
                            </Form.Group >
                        </Col>
                        <Col>
                            <Button variant="primary" type="submit" >
                                Submit
                            </Button>
                        </Col>
                    </Row>
                </Container>
            </Form>
        </div>
    )

}

export default SearchBar

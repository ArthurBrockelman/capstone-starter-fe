//import the boostrap compents we will be using on this form
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function SearchBar({ handleSubmit, onChange, searchTerm }) {

    return (
        <div className="UserForm container">
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="searchTerm">
                    <Form.Control required minLength="2" value={searchTerm} onChange={onChange} type="text" placeholder="" />
                </Form.Group >
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    )

}

export default SearchBar

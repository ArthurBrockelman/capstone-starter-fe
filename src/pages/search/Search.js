import Header from "../../components/header/Header";
import React, { Component } from "react";
import SearchBar from "../../components/searchBar/searchBar";
import { isAuthenticated, getUserEmail } from "../../utils/authHelper";
import SearchGridCards from "../../components/gridcards/SearchGridCards";
import { Alert } from "react-bootstrap";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

class Search extends Component {

    state = {
        selectedView: "",
        isAuthenticated: isAuthenticated(),
        searchTerm: "",
        tasteDiveData: [],
        noResults: false,
    }

    searchSubmit = (event) => {
        
        event.preventDefault()
        let searchTerm = event.target.searchTerm.value;
        let tasteDiveResults = [];

        fetch(`${process.env.REACT_APP_API_URL}/api/tasteDive/related?MediaName=${searchTerm}`, {
            method: "GET",
        })
            .then((response) => response.json())
            .then((apiData) => {
                let parsedData = JSON.parse(apiData.body)
                parsedData.Similar.Results.forEach((result) => {
                    if (result.yID) {
                        tasteDiveResults.push(result)
                    }

                })
                this.setState({ tasteDiveData: tasteDiveResults })    
                if(tasteDiveResults.length === 0) {
                    this.setState({noResults: true})
                } else {
                    this.setState({noResults: false})
                }
            })
        fetch(`${process.env.REACT_APP_API_URL}/api/history/addSearchHistory`, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: "POST",
            body: JSON.stringify({
                email: getUserEmail(),
                searchTerm: searchTerm,
                searchDate: new Date(),
                resultCount: this.state.tasteDiveData.length
            })
        })
    
        this.setState({searchTerm: ""})
        
    }

    searchOnChange = (event) => {
        this.setState({noResults: false});
        this.setState({ searchTerm: event.target.value })
    }

    render() {

        return (
            <div className="Search">
                <Header isAuthenticated={isAuthenticated()}/>
                <Container>
                <Row>
                    <SearchBar handleSubmit={this.searchSubmit} onChange={this.searchOnChange} searchTerm={this.state.searchTerm} />
                </Row>
                <Row>
                    {this.state.noResults ? <Alert variant="danger">No search results, try again!</Alert> : null}
                </Row>
                <Row>
                    {this.state.tasteDiveData.length !== 0 ? <SearchGridCards searchData={this.state.tasteDiveData} /> : null}
                </Row>
                </Container>
            </div>
        );

    }
}

export default Search;
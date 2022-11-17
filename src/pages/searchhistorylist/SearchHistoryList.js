
import React, { Component } from "react";
import Header from "../../components/header/Header";
import Table from 'react-bootstrap/Table';

class SearchHistoryList extends Component {

    state = {
        searchhistory:[] 
    }

    //perfect opportunity to reachout to an api and get data because
    //this runs when the component shows
    componentDidMount(){
        console.log("ComponentDidMount - calling getSearchHistoryList")
        this.getSearchHistoryList()
    }

    getSearchHistoryList = () => {

        console.log("calling get SearchHistoryList")
        //get API url from the environment variables http://localhost:2727
        const apiURL = process.env.REACT_APP_API_URL
        console.log("apiURL is ", apiURL)
        
        fetch(`${apiURL}/api/history/getsearchhistory`)
            .then((results) => results.json())
            .then((dataFromTheAPI) => {
                console.log("userfromapi " + dataFromTheAPI)
                this.setState(
                    {
                        searchhistory: dataFromTheAPI
                    }
                )
            })
            .catch((error) => {
                console.log("there was a problemo with SearchHistoryList " + error)
            });
    }

render() {
    console.log("inside render ")
    console.log(this.state.searchhistory.map)
    console.log("inside render - printed user.map ")

    return (
        <div className="SearchHistoryList">

        <Header/>

    <h3 className="text-center" >Search History</h3>
      
        <Table hover striped>
        <thead>
        <tr>
        <th>Email</th>
        <th>Search Term</th>
        <th>Search Date</th>
        <th>Number of Results</th>
        <th>Creation Date</th>
        </tr>
        </thead>
         <tbody>
         {this.state.searchhistory.map((user, idx) =>{
    return(
    <tr>
      <td>{user.email}</td>
      <td>{user.searchTerm}</td>
      <td>{user.searchDate}</td>
      <td>{user.resultCount}</td>
      <td>{user.createDateTime}</td>
    </tr>
    )
    }
    )}
         </tbody>
        </Table>
        </div>
    )
}

}


export default SearchHistoryList
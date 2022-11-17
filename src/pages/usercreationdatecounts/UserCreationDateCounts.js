import React, { Component } from "react";
import Header from "../../components/header/Header";
import Table from 'react-bootstrap/Table';

class UserCreationDateCounts extends Component {

    state = {
        user:[] 
    }

    //perfect opportunity to reachout to an api and get data because
    //this runs when the component shows
    componentDidMount(){
        console.log("ComponentDidMount - calling getUserFavoriteList")
        this.getUserFavoriteList()
    }

    getUserFavoriteList = () => {

        console.log("calling api/users/getAllUserCreationDateCounts")
        //get API url from the environment variables http://localhost:2727
        const apiURL = process.env.REACT_APP_API_URL
        console.log("apiURL is ", apiURL)
        
        fetch(`${apiURL}/api/users/getAllUserCreationDateCounts`)
            .then((results) => results.json())
            .then((dataFromTheAPI) => {
                console.log("userfromapi " + dataFromTheAPI)
                this.setState(
                    {
                        user: dataFromTheAPI
                    }
                )
            })
            .catch((error) => {
                console.log("there was a problemo with UserFavoriteList " + error)
            });
    }

render() {
    console.log("inside render ")
    console.log(this.state.user.map)
    console.log("inside render - printed user favorite map ")

    return (
        <div className="UserCreationDateCounts">

        <Header/>

    <h3 className="text-center" >User Creation Date Trends</h3>
      
        <Table hover striped>
        <thead>
        <tr>
        <th>Date</th>
        <th>Count</th>
        </tr>
        </thead>
         <tbody>
         {this.state.user.map((user, idx) =>{
    return(
    <tr>
      <td>{user._id}</td>
      <td>{user.count}</td>
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


export default UserCreationDateCounts

import React, { Component } from "react";
import Header from "../../components/header/Header";
import Table from 'react-bootstrap/Table';

class UserList extends Component {

    state = {
        user:[] 
    }

    //perfect opportunity to reachout to an api and get data because
    //this runs when the component shows
    componentDidMount(){
        console.log("ComponentDidMount - calling getUserList")
        this.getUserList()
    }

    getUserList = () => {

        console.log("calling getUserList")
        //get API url from the environment variables http://localhost:2727
        const apiURL = process.env.REACT_APP_API_URL
        console.log("apiURL is ", apiURL)
        
        fetch(`${apiURL}/api/users`)
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
                console.log("there was a problemo with UserList " + error)
            });
    }

render() {
    console.log("inside render ")
    console.log(this.state.user.map)
    console.log("inside render - printed user.map ")

    return (
        <div className="UserList">

        <Header/>

    <h3 className="text-center" >User List</h3>
      
        <Table hover striped>
        <thead>
        <tr>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Email</th>
        <th>Date Created</th>
        </tr>
        </thead>
         <tbody>
         {this.state.user.map((user, idx) =>{
    return(
    <tr>
      <td>{user.firstName}</td>
      <td>{user.firstName}</td>
      <td>{user.email}</td>
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


export default UserList
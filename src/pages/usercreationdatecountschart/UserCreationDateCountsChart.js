import React, { Component } from "react";
import Header from "../../components/header/Header";
import {  XAxis, YAxis,  LineChart, Line, Tooltip, Legend} from "recharts";

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
    console.log("inside render - printed user favorite mapxxxx ")

    return (
        <div className="UserFavoriteList">
        <Header/>
        <h3 className="text-center" >User Creation Date Trends Chart</h3>
        <LineChart width={750} height={750} data={this.state.user} 
        margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
        >
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="count" stroke="#0095FF" activeDot={{ r: 8 }} />
        <XAxis dataKey="_id" ></XAxis>
        <YAxis/>
        </LineChart>
        </div>
    );
}

}


export default UserCreationDateCounts
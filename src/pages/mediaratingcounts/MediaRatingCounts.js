import React, { Component } from "react";
import Header from "../../components/header/Header";
import Table from 'react-bootstrap/Table';

class MediaRatingCounts extends Component {

    state = {
        usermedia:[] 
    }

    //perfect opportunity to reachout to an api and get data because
    //this runs when the component shows
    componentDidMount(){
        console.log("ComponentDidMount - calling getUserFavoriteList")
        this.getUserFavoriteList()
    }

    getUserFavoriteList = () => {

        console.log("calling getUserFavoriteList")
        //get API url from the environment variables http://localhost:2727
        const apiURL = process.env.REACT_APP_API_URL
        console.log("apiURL is ", apiURL)
        
        fetch(`${apiURL}/api/media/getAllMediaRatingCounts`)
            .then((results) => results.json())
            .then((dataFromTheAPI) => {
                console.log("userfromapi " + dataFromTheAPI)
                this.setState(
                    {
                        usermedia: dataFromTheAPI
                    }
                )
            })
            .catch((error) => {
                console.log("there was a problemo with UserFavoriteList " + error)
            });
    }

render() {
    console.log("inside render ")
    console.log(this.state.usermedia.map)
    console.log("inside render - printed user favorite map ")

    return (
        <div className="UserFavoriteList">
        <Header/>
        <h3 className="text-center" >User Rating Counts</h3>
      
        <Table hover striped>
        <thead>
        <tr>
        <th>Rating</th>
        <th>Count</th>
        </tr>
        </thead>
         <tbody>
         {this.state.usermedia.map((usermedia, idx) =>{
    return(
    <tr>
      <td>{usermedia.mediaRating}</td>
      <td>{usermedia.count}</td>
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


export default MediaRatingCounts
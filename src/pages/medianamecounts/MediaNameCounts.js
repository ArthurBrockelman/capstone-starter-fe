import React, { Component } from "react";
import Header from "../../components/header/Header";
import Table from 'react-bootstrap/Table';

class MediaNameCounts extends Component {

    state = {
        usermedia:[] 
    }

    //perfect opportunity to reachout to an api and get data because
    //this runs when the component shows
    componentDidMount(){
        console.log("ComponentDidMount - calling MediaNameCounts")
        this.getAllMediaNameCounts()
    }

    getAllMediaNameCounts = () => {

        console.log("calling getAllMediaNameCounts")
        //get API url from the environment variables http://localhost:2727
        const apiURL = process.env.REACT_APP_API_URL
        console.log("apiURL is ", apiURL)
        
        fetch(`${apiURL}/api/media/getAllMediaNameCounts`)
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
        <h3 className="text-center">Favorite Music Counts</h3>
      
        <Table hover striped>
        <thead>
        <tr>
        <th>Artist</th>
        <th>Count</th>
        </tr>
        </thead>
         <tbody>
         {this.state.usermedia.map((usermedia, idx) =>{
    return(
    <tr>
      <td>{usermedia.mediaName}</td>
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


export default MediaNameCounts
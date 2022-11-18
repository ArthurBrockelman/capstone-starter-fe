import React, { Component } from "react";
import Header from "../../components/header/Header";
//import Table from 'react-bootstrap/Table';
import { BarChart, Tooltip, Legend, Bar, XAxis, YAxis} from "recharts";

class MediaNameCountsChart extends Component {

   

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
            console.log("inside render for chart")
            return (
            <div className="UserFavoriteList">
            <Header/>
            <h3 className="text-center" >Favorite Music Counts</h3>
        
            <BarChart width={2000} height={800} data={this.state.usermedia}>
            <Bar dataKey="count" fill="blue" />
            <XAxis dataKey="mediaName" />
            <YAxis/>
            <Tooltip />
            <Legend />
            </BarChart>
            </div>
        );
        } 

}


export default MediaNameCountsChart
import React, { Component } from "react";
import Header from "../../components/header/Header";
import { BarChart, Bar,  XAxis, YAxis, Tooltip, Legend} from "recharts";

class MediaRatingCountsChart extends Component {

    COLORS = ["#8884d8", "#82ca9d", "#FFBB28", "#FF8042", "#AF19FF"];

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
    console.log("inside render for chart")
    return (
    <div className="UserFavoriteList">
    <Header/>
    <h3 className="text-center" >User Rating Counts</h3>

    <BarChart width={600} height={600} data={this.state.usermedia}>
    <Bar dataKey="count" fill="green" />
    <XAxis dataKey="mediaRating" />
    <YAxis/>
    <Tooltip />
    <Legend />
    </BarChart>
    </div>
);
}  


}


export default MediaRatingCountsChart
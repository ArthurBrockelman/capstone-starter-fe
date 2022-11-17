import Header from "../../components/header/Header";
import React, { Component } from "react";
import MediaSlideshow from "../../components/slideshow/MediaSlideShow";
import { isAuthenticated } from "../../utils/authHelper"
class UserFeed extends Component {

    state = {

    }

    render() {

        return (
            <div className="UserFeed">
                
              <Header isAuthenticated={isAuthenticated()}/>
              <MediaSlideshow data={[]}/>
            </div>
          );

    }
}

export default UserFeed;
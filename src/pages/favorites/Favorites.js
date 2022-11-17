import Header from "../../components/header/Header";
import React, { Component } from "react";
import UserMediaGridCards from "../../components/gridcards/UserMediaGridCards";
import { isAuthenticated } from "../../utils/authHelper";

class Favorites extends Component {

    render() {

        return (
            <div className="Favorites">
              <Header isAuthenticated={isAuthenticated()}/>
              <UserMediaGridCards />
            </div>
          );

    }
}

export default Favorites;
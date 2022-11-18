import { Switch, Route } from "react-router-dom";

//import Home from "./pages/home/Home";
import Protected from "./pages/protected/Protected";
import Login from "./pages/login/Login";
import NotFound from "./pages/notFound/NotFound";
import Register from "./pages/register/Register";
import UpdateUser from "./pages/updateUser/UpdateUser";
import Analytics from "./pages/analytics/Analytics";
import UserFeed from "./pages/userfeed/UserFeed"
import Search from "./pages/search/Search";
import Favorites from "./pages/favorites/Favorites";
import UserList from "./pages/userlist/UserList";
import UserFavoriteList from "./pages/userfavoritelist/UserFavoriteList";
import SearchHistoryList from "./pages/searchhistorylist/SearchHistoryList";
import MediaRatingCounts from "./pages/mediaratingcounts/MediaRatingCounts";
import MediaRatingCountsChart from "./pages/mediaratingcountschart/MediaRatingCountsChart";
import MediaNameCounts from "./pages/medianamecounts/MediaNameCounts";
import MediaNameCountsChart from "./pages/medianamecountschart/MediaNameCountsChart";
import UserFavoriteRatingChart from "./pages/userfavoriteratingchart/UserFavoriteRatingChart";
import UserCreationDateCounts from "./pages/usercreationdatecounts/UserCreationDateCounts";
import UserCreationDateCountsChart from "./pages/usercreationdatecountschart/UserCreationDateCountsChart";
import UserList2 from "./pages/userlist2/UserList2";



function App() {
  return (
    <div className="App">
      <Switch>
        <Route
          exact
          path="/"
          component={Search}
        />
        <Route
          exact
          path="/login"
          component={Login}
        />
        <Route
          exact
          path="/register"
          component={Register}
        />
        <Route
          exact
          path="/updateuser/:email"
          component={UpdateUser}
        />
        <Route
          exact
          path="/protected"
          component={Protected}
        />
        <Route
          exact
          path="/analytics"
          component={Analytics}
        />
        <Route
          exact
          path="/userfeed"
          component={UserFeed}
        />
        <Route
          exact
          path="/favorites"
          component={Favorites}
        />
        <Route
          exact
          path="/search"
          component={Search}
        />
        <Route
          exact
          path="/userlist"
          component={UserList}
        />
          <Route
          exact
          path="/usercreationdatecounts"
          component={UserCreationDateCounts}
        />
                  <Route
          exact
          path="/usercreationdatecountschart"
          component={UserCreationDateCountsChart}
        />
          <Route
          exact
          path="/userfavoritelist"
          component={UserFavoriteList}
        />
          <Route
          exact
          path="/searchhistorylist"
          component={SearchHistoryList}
        />
        <Route
          exact
          path="/medianamecounts"
          component={MediaNameCounts}
        />
        <Route
          exact
          path="/medianamecountschart"
          component={MediaNameCountsChart}
        />
         <Route
          exact
          path="/mediaratingcounts"
          component={MediaRatingCounts}
        />
        <Route
          exact
          path="/mediaratingcountschart"
          component={MediaRatingCountsChart}
        />
          <Route
          exact
          path="/userfavoriteratingchart"
          component={UserFavoriteRatingChart}
        />
        <Route
          exact
          path="/userlist2"
          component={UserList2}
        />
        <Route
          exact
          path="*"
          component={NotFound}
        />
      </Switch>
    </div>
  );
}

export default App;

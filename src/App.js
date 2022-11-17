import { Switch, Route } from "react-router-dom";

import Home from "./pages/home/Home";
import Protected from "./pages/protected/Protected";
import Login from "./pages/login/Login";
import NotFound from "./pages/notFound/NotFound";
import Register from "./pages/register/Register";
import UpdateUser from "./pages/updateUser/UpdateUser";
import Analytics from "./pages/analytics/Analytics";
import UserList from "./pages/userlist/UserList";
import UserFavoriteList from "./pages/userfavoritelist/UserFavoriteList";
import SearchHistoryList from "./pages/searchhistorylist/SearchHistoryList";
import MediaRatingCounts from "./pages/mediaratingcounts/MediaRatingCounts";
import MediaRatingCountsChart from "./pages/mediaratingcountschart/MediaRatingCountsChart";
import UserFavoriteRatingChart from "./pages/userfavoriteratingchart/UserFavoriteRatingChart";
import UserList2 from "./pages/userlist2/UserList2";



function App() {
  return (
    <div className="App">
      <Switch>
        <Route
          exact
          path="/"
          component={Home}
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
          path="/userlist"
          component={UserList}
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

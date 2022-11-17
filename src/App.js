import { Switch, Route } from "react-router-dom";

import Home from "./pages/home/Home";
import Protected from "./pages/protected/Protected";
import Login from "./pages/login/Login";
import NotFound from "./pages/notFound/NotFound";
import Register from "./pages/register/Register";
import UpdateUser from "./pages/updateUser/UpdateUser";
import Analytics from "./pages/analytics/Analytics";
import UserFeed from "./pages/userfeed/UserFeed"
import Search from "./pages/search/Search";
import Favorites from "./pages/favorites/Favorites";

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
          path="*"
          component={NotFound}
        />
      </Switch>
    </div>
  );
}

export default App;

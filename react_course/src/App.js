import AllMeetupsPage from "./Pages/AllMeetups";
import FavoritesPage from "./Pages/Favorites";
import NewMeetUpPage from "./Pages/NewMeetUp";
import { Route, Switch } from "react-router-dom";
import Layout from "./Components/Layout/Layout";

function App() {
  //localhost:3000/

  return (
    <Layout>
      <Switch>
        <Route path="/" exact={true}>
          <AllMeetupsPage />
        </Route>
        <Route path="/new-meetup">
          <NewMeetUpPage />
        </Route>
        <Route path="/favorites">
          <FavoritesPage />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;

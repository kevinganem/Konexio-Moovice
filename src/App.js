// REACT
import React from "react";
// ROUTER
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
// PAGES
import Home from "./pages/Home";
import Weekly from "./pages/Weekly";
import WeeklyBattle from "./pages/WeeklyBattle";
import Popular from "./pages/Popular";
import PopularBattle from "./pages/PopularBattle";
import Favorites from "./pages/Favorites";
import NotFound from "./pages/NotFound";
// COMPONENTS
import Card from "./components/Card";
// BOOTSTRAP
import "bootstrap/dist/css/bootstrap.min.css";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <nav>
          <Link className="p-2" to="/">
            Home
          </Link>
          <Link className="p-2" to="/weekly">
            Weekly
          </Link>
          <Link className="p-2" to="/weekly-battle">
            WeeklyBattle
          </Link>
          <Link className="p-2" to="/popular">
            Popular
          </Link>
          <Link className="p-2" to="/popular-battle">
            PopularBattle
          </Link>
          <Link className="p-2" to="/favorites">
            Favorites
          </Link>
        </nav>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/weekly" component={Weekly} />
          <Route exact path="/weekly-battle" component={WeeklyBattle} />
          <Route exact path="/popular" component={Popular} />
          <Route exact path="/popular-battle" component={PopularBattle} />
          <Route exact path="/favorites" component={Favorites} />
          <Route path="*" component={NotFound} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;

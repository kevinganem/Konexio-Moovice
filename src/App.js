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
// BOOTSTRAP
import "bootstrap/dist/css/bootstrap.min.css";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <nav className="nav justify-content-center p-3 fs-3">
          <Link className="p-2 nav-item nav-link" to="/">
            Home
          </Link>
          <Link className="p-2 nav-item nav-link" to="/weekly">
            Weekly
          </Link>
          <Link className="p-2 nav-item nav-link" to="/weekly-battle">
            WeeklyBattle
          </Link>
          <Link className="p-2 nav-item nav-link" to="/popular">
            Popular
          </Link>
          <Link className="p-2 nav-item nav-link" to="/popular-battle">
            PopularBattle
          </Link>
          <Link className="p-2 nav-item nav-link" to="/favorites">
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

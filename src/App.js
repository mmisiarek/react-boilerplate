import React from "react";
import { hot } from "react-hot-loader";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Home from "../pages/Home";
import Recipe from "../pages/Recipe";
import NotFound from "../pages/NotFound";

const App = () => (
    <Router>
        <div className="App">
            <h1> Hello, World!</h1>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/recipe/123">Recipe for pizza</Link>
                </li>
            </ul>
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/recipe/:id">
                    <Recipe />
                </Route>
                {/* <Route path="*">
                    <NotFound />
                </Route> */}
            </Switch>
        </div>
    </Router>
);

export default hot(module)(App);

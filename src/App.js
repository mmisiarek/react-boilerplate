import React, { Suspense } from "react";
import { hot } from "react-hot-loader";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import GlobalStylees from "./styles/GlobalStyles";

// import Home from "../pages/Home";
const Home = React.lazy(() => import("../pages/Home"));
const Recipe = React.lazy(() => import("../pages/Recipe"));
const NotFound = React.lazy(() => import("../pages/NotFound"));

const App = () => (
    <>
        <GlobalStylees />
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
                <Suspense fallback={<div>Loading...</div>}>
                    <Switch>
                        <Route exact path="/">
                            <Home />
                        </Route>
                        <Route path="/recipe/:id">
                            <Recipe />
                        </Route>
                        <Route path="*">
                            <NotFound />
                        </Route>
                    </Switch>
                </Suspense>
            </div>
        </Router>
    </>
);

export default hot(module)(App);

import './vendors/bootstrap/css/bootstrap.min.css';
import './vendors/bootstrap/bootstrap.min.css';
import './vendors/fontawesome/css/all.min.css';

import React from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";
import HelloWorld from "./components/a6/HelloWorld";
import Practice from "./components/a6/Practice";
import Build from "./components/a6/Build";
import HomeScreen from './components/a6/Build/HomeScreen/HomeScreen';
import ExploreScreen from "./components/a6/Build/ExploreScreen/ExploreScreen";

function App() {
    return (
        <Router>
            <div className="container">
                <Route path="/a6/hello">
                    <HelloWorld/>
                </Route>
                <Route path="/a6/practice">
                    <Practice/>
                </Route>
                <Route path="/a6/build">
                    <Build/>
                </Route>
                <Route path="/a6/twitter/home">
                    <HomeScreen/>
                </Route>
                <Route path="/a6/twitter/explore">
                    <ExploreScreen/>
                </Route>
            </div>
        </Router>
    );
}

export default App;





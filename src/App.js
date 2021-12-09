import './vendors/bootstrap/css/bootstrap.min.css';
import './vendors/bootstrap/bootstrap.min.css';
import './vendors/fontawesome/css/all.min.css';

import React from "react";
import {BrowserRouter as Router, Link, Route} from "react-router-dom";
import Build from "./components/a8/Build";
import Practice from "./components/a8/Practice"
import Challenge from "./components/a8/Challenge"
import who from "./reducers/who";
import tweets from "./reducers/tweets";
import {combineReducers, createStore} from "redux";
import {Provider} from "react-redux";
import profile from "./reducers/profile";
import A9 from "./a9";

const reducer = combineReducers({tweets: tweets, who, profile})
const store = createStore(reducer);

function App() {
    return (
        <Provider store={store}>
            <Router>
                <div className="container">

                    <Link to="/a8/practice">A8</Link> |
                    <Link to="/a9/practice">A9</Link>


                    <Route path={["/a8", "/a8/practice"]} exact={true}>
                        <Practice/>
                    </Route>
                    <Route path="/a8/twitter">
                        <Build/>
                    </Route>
                    <Route path={["/a8/twitter/profile", "/a8/twitter/EditProfile"]}>
                        <Challenge/>
                    </Route>

                    <Route path="/a9">
                        <A9/>
                    </Route>

                </div>
            </Router>
        </Provider>

    );
}

export default App;





import './vendors/bootstrap/css/bootstrap.min.css';
import './vendors/bootstrap/bootstrap.min.css';
import './vendors/fontawesome/css/all.min.css';

import React from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";
import Build from "./components/a7/Build";
import Practice from "./components/a7/Practice"
import Challenge from "./components/a7/Challenge"
import who from "./reducers/who";
import tweets from "./reducers/tweets";
import {combineReducers, createStore} from "redux";
import {Provider} from "react-redux";
import profile from "./reducers/profile";

const reducer = combineReducers({tweets: tweets, who, profile})
const store = createStore(reducer);

function App() {
    return (
        <Provider store={store}>
            <Router>
                <div className="container">
                    <Route path={["/a7", "/a7/practice"]} exact={true}>
                        <Practice/>
                    </Route>
                    <Route path="/a7/twitter">
                        <Build/>
                    </Route>
                    <Route path={["/a7/twitter/profile", "/a7/twitter/EditProfile"]}>
                        <Challenge/>
                    </Route>
                </div>
            </Router>
        </Provider>

    );
}

export default App;





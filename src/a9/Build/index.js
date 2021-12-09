import React from "react";
import {Route} from "react-router-dom";
import HomeScreen from './HomeScreen/HomeScreen.js';
import ExploreScreen from "./ExploreScreen/ExploreScreen.js";
// import who from "../../../reducers/who";
// import {combineReducers, createStore} from "redux";
// import {Provider} from "react-redux";
// import tweets from "../../../reducers/tweets";

// const reducer = combineReducers({tweets:tweets, who})
// const store = createStore(reducer);
const Build = () => {
    return(
            <div>
                <Route path={["/", "/a9/twitter", "/a9/twitter/home"]} exact={true} component={HomeScreen}/>
                <Route path="/a9/twitter/explore" exact={true} component={ExploreScreen}/>
            </div>
    );
};
export default Build;


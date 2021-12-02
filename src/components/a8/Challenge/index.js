import React from "react";
import {Route} from "react-router-dom";
import ProfileScreen from "./ProfileScreen/ProfileScreen";
import EditProfileScreen from "./EditProfileScreen/EditProfileScreen";

const Challenge = () => {
    return(
        <div>
            <Route path={"/a8/twitter/profile"} exact={true} component={ProfileScreen}/>
            <Route path="/a8/twitter/EditProfile" exact={true} component={EditProfileScreen}/>
        </div>
    );
};
export default Challenge;
import React from "react";
import "./profile.css";
import {useDispatch} from "react-redux";
// import profileInit from "../../../../reducers/profile";
import {useSelector} from "react-redux";
import TweetListItem from "../../Build/TweetList/TweetListItem";
import ProfileItem from "./ProfileItem";
const selectProfiles = (state) => state.profile;

const Profile = () => {
    const profiles = useSelector(selectProfiles);


    return(
        <ul className="list-group">
            {
                profiles.map(profile =>
                    <ProfileItem profile={profile}/>
                )
            }
        </ul>
    )
};


export default Profile;
import React, {useEffect} from "react";
import "./profile.css";
// import {useDispatch} from "react-redux";
// import profileInit from "../../../../reducers/profile";
import {useDispatch, useSelector} from "react-redux";
// import TweetListItem from "../../Build/TweetList/TweetListItem";
import ProfileItem from "./ProfileItem";
import {fetchProfile} from "../../../../services/profileService";


const selectProfiles = (state) => state.profile;

const Profile = () => {
    const profiles = useSelector(selectProfiles);
    const dispatch = useDispatch();
    useEffect(() => fetchProfile(dispatch), [])

    return(
        <ul className="list-group">A
                    {/*<ProfileItem profile={profiles}/>*/}

            {
                profiles.map(profile =>
                    <ProfileItem profile={profile}/>
                )
            }
        </ul>
    )
};


export default Profile;
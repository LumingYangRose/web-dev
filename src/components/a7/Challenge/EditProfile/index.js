import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
const selectAllProfiles = (state) => state.profile;
const EditProfile = (
    {
        profileInit = {
            userName: 'Luming Yang',
            handle: "@Luming84748003",
            profilePicture: "/images/cat_avatar",
            bannerPicture: "twitter_bg.png",
            bio: "Coding is cool.",
            location: "Houston, TX",
            dateOfBirth: "Sep 9, 1999",
            dateJoined: "4/2009",
            website:"",
            followingCount: "11",
            followersCount: "4",
        }
    }
) => {
    const profile = useSelector(selectAllProfiles);
    let [editProfile, setEditProfile] = useState('');
    const dispatch = useDispatch();
    const saveClickHandler = () => {
        const action = {
            type:'update-profile',
            editProfile
        }
        dispatch({type: 'update-profile', profile});
        // dispatch(action);
        window.open("/a7/twitter/profile");
    }

    const nameChangeHandler = (event) => {
        const nameValue = event.target.value;
        const newName = {
            userName: nameValue
        };
        console.log("changed");
        setEditProfile(newName);
    }

    const bioChangeHandler = (event) => {
        const bioValue = event.target.value;
        const newBio = {
            bio: bioValue
        };
        console.log("changed");
        setEditProfile(newBio);
    }

    const locationChangeHandler = (event) => {
        const locationValue = event.target.value;
        const newLocation = {
            location: locationValue
        };
        console.log("changed");
        setEditProfile(newLocation);
    }

    const webChangeHandler = (event) => {
        const webValue = event.target.value;
        const newWeb = {
            website: webValue
        };
        console.log("changed");
        setEditProfile(newWeb);
    }

    const dobChangeHandler = (event) => {
        const dobValue = event.target.value;
        const newDob = {
            dateOfBirth: dobValue
        };
        console.log("changed");
        setEditProfile(newDob);

    }

    return (
        <div className="pb-1 pt-1" width='100%'>
            <table>
                <tr width="100%">
                    <i className="fas fa-times"></i>
                    <span className="ps-5 fw-bold" style={{font: "1.6rem"}}> Edit profile</span>
                    <button className="btn border-light bg-white text-black  fw-bold rounded-corners-all-around wd-border-radius-20px"
                            style={{float: 'right'}}
                            onClick={saveClickHandler}>Save</button>
                </tr>

                <tr className="holder">
                    <img src="/images/twitter_bg.jpeg"   style={{width:'100%'}} alt=""/>
                    <img src="/images/cat_avatar.jpeg" width="120px" height="120px" className="rounded-circle add-on" alt=""/>
                </tr>
<br/><br/>
                <tr className="ms-3 rounded-corners-all-around border wd-border-radius-20px border-light">
                    <span className="text-secondary ms-3">Name</span>
                    <textarea
                                className="ms-1 me-1 bg-transparent -border-none form-control text-white text-primary"
                    onChange={nameChangeHandler}
                    value={editProfile.profile}>
                        {profileInit.userName}
                    </textarea>
                </tr>
                <br/>
                <tr className="ms-3 rounded-corners-all-around border wd-border-radius-20px border-light">
                    <span className="text-secondary ms-3">Bio</span>
                    <textarea
                        className="ms-1 me-1 bg-transparent -border-none form-control text-white text-primary"
                        onChange={bioChangeHandler}>
                        {profileInit.bio}
                    </textarea>
                </tr>
                <br/>
                <tr className="ms-3 rounded-corners-all-around border wd-border-radius-20px border-light">
                    <span className="text-secondary ms-3">Location</span>
                    <textarea
                        className="ms-1 me-1 bg-transparent -border-none form-control text-white text-primary"
                        onChange={locationChangeHandler}>
                        {profileInit.location}
                    </textarea>
                </tr>
                <br/>
                <tr className="ms-3 rounded-corners-all-around border wd-border-radius-20px border-light">
                    <span className="text-secondary ms-3">Website</span>
                    <textarea
                        className="ms-1 me-1 bg-transparent -border-none form-control text-white text-primary"
                        onChange={webChangeHandler}>

                    </textarea>
                </tr>
                <br/>
                <tr className="ms-3 rounded-corners-all-around border wd-border-radius-20px border-light">
                    <span className="text-secondary ms-3">Birth date</span>
                    <textarea
                        className="ms-1 me-1 bg-transparent -border-none form-control text-white text-primary"
                        onChange={dobChangeHandler}>
                        {profileInit.dateOfBirth}
                    </textarea>
                </tr>
            </table>
        </div>
    );
}

export default EditProfile;
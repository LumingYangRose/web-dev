import React, {useState} from "react";

const ProfileItem = ({profile}) => {
        const editClickHandler = () => {
            window.open('/a7/twitter/EditProfile');
        }



    return (

        <div className="pb-1 pt-1" width='100%'>
            <table>
                <tr>
                    <td className="ps-1">
                        <i className="fas fa-arrow-left pe-3"></i>


                        <span className="fw-bold ms-3">Luming</span>
                        <div className="text-secondary text-sm-left ps-5" style={{"fontSize":"0.8em"}}>12 Tweets</div>
                    </td>

                </tr>
                <tr className="holder">
                    <img src="/images/twitter_bg.jpeg"   style={{width:'100%'}} alt=""/>
                    <img src="/images/cat_avatar.jpeg" width="120px" height="120px" className="rounded-circle add-on" alt=""/>
                </tr>

                <tr width="100%">
                    <button className="btn border-light rounded-corners-all-around wd-border-radius-20px mt-2"
                            style={{float: 'right'}}
                            onClick={editClickHandler}>Edit profile</button>
                </tr>
                {/*<br/>*/}
                <tr width="100%" >
                    <h5 className="ms-3" style={{color: "white"}}>
                        {profile.userName}</h5>
                    <div className="ms-3 text-secondary less-line-space">{profile.handle}</div>
                    <div className="text-white ms-3 more-line-space">{profile.bio}</div>
                </tr>

                <tr className="mt-2">
                        <span className="ms-3">
                            <i className="fas fa-map-marker-alt me-2"></i>
                            {profile.location}
                        </span>
                    <span className="ms-3">
                            <i className="fas fa-burn me-2"></i>
                            Born {profile.dateOfBirth}
                        </span>
                    <span className="ms-3" >
                            <i className="fas fa-calendar-alt me-2"></i>
                            Joined {profile.dateJoined}
                        </span>
                </tr>

                <tr className="">
                    <span className="fw-bold mt-3 ms-3 ">{profile.followingCount}</span>
                    <span className="text-secondary"> Following</span>
                    <span className="fw-bold ms-3 ">{profile.followersCount}</span>
                    <span className="text-secondary"> Followers</span>
                </tr>


            </table>
        </div>
    );
};

export default ProfileItem;
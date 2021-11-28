import EditProfile from "../EditProfile";
import React from "react";


const EditProfileScreen = () => {
    return (
        <div className="row mt-2">
            <div className="col-2 col-md-2 col-lg-1 col-xl-2">
            </div>

            <div className="col-10 col-md-10 col-lg-7 col-xl-6"
                 >
                <EditProfile/>
            </div>
            <div className="d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4">

            </div>
        </div>
    );
}

export default EditProfileScreen;
import profileJson from './data/profile.json';

const profile = (state = profileJson, action) => {

    console.log(action.type);
    switch (action.type) {

        case 'update-profile':
            console.log("here");
            return state.map(profile => {
                if (profile.userName !== action.profile.userName) {
                    profile.user = action.profile.userName;
                }
                return profile;
        });
            // const update = state.map(editProfile => {
            //     const newProfile = state.map(editProfile => {
            //         editProfile.userName = action.editProfile.userName;
            //     });
            //     return newProfile;
                // profile.userName = "Rose";
                // if (editProfile.userName !== action.editProfile.userName) {
                //     profile.userName = action.editProfile.userName;
                // }
                // console.log(profile.userName);
                // return profile;
            // });


        default:
            return (state);
    }
};

export default profile;

import React from "react";
import NavigationSidebar from "./NavigationSidebar";
import WhoToFollowList from "./WhoToFollowList";
import PostSummaryList from "./PostSummaryList";
import ExploreScreen from "./ExploreScreen/ExploreScreen";
import HomeScreen from "./HomeScreen/HomeScreen";
const Build = () => {
    return(
        <>
            <ExploreScreen/>
            <HomeScreen/>
        </>
    )
};
export default Build;

// <NavigationSidebar active="home"/>
// <WhoToFollowList/>
// <PostSummaryList/>


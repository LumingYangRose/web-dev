import React from "react";
// import who from "./who.json";
import {useSelector} from "react-redux";
import WhoToFollowListItem from "./WhoToFollowListItem";

const whos = (state) => state.who;

const WhoToFollowList = () => {
    const who = useSelector(whos);
    return(
        <ul className="list-group ">
            <li className="list-group-item fw-bold">Who to follow</li>
            {
                who.map(who => {
                    return(
                    <WhoToFollowListItem who={who}/>
                    );
                })
            }
        </ul>
    );
}

export default WhoToFollowList;


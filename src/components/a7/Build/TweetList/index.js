import React from "react";
// import tweets from "./tweets.json";
import TweetListItem from "./TweetListItem";
import {useSelector} from "react-redux";
const selectAllTweets = (state) => state.tweets;

const TweetList = () => {
    const tweets = useSelector(selectAllTweets);
    return(
        <ul className="list-group">
            {
                tweets.map(tweet =>
                    <TweetListItem tweet={tweet}/>
                )
            }
        </ul>
    )
};
export default TweetList;

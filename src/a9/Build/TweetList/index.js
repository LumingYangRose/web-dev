import React, {useEffect, useState} from "react";
// import tweets from "./tweets.json";
import TweetListItem from "./TweetListItem";
import {useDispatch, useSelector} from "react-redux";
import twitterService from "../../services/twitterService";

const selectAllTweets = (state) => state.tweets;

const TweetList = () => {
    // const tweets = useSelector(selectAllTweets);
    // console.log(tweets);
    const dispatch = useDispatch();
    // useEffect(() => fetchAllTweets(dispatch), [])
    const [tweets, setTweets] = useState([]);
    useEffect(() =>
        twitterService.findAllTweets((dispatch), [])
            .then(tweets => setTweets(tweets)), []);
    // console.log(tweets);
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


// import twitterService from "../../services/twitterService";
//
// const TweetList = () => {
//     const [tweets, setTweets] = useState([]);
//     useEffect(() =>
//         twitterService.fetchAllTweets()
//             .then(tweets => setTweets(tweets)), []);
//     // const tweets = useSelector(selectAllTweets);
//     // const dispatch = useDispatch();
//     // useEffect(() => fetchAllTweets(dispatch), [])
//     return(
//         <ul className="list-group">
//             {
//                 tweets.map(tweet =>
//                     <TweetListItem tweet={tweet}/>
//                 )
//             }
//         </ul>
//     )
// };
export default TweetList;


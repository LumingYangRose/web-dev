import React, {useEffect, useState} from "react";
import "./tweet.css";
import {useDispatch, useSelector} from "react-redux";
import {postNewTweet, fetchAllTweets} from "../../services/twitterService";
import service from "../../services/twitterService";


const WhatsHappening = () => {
    const [tweet, setTweet] = useState('');

    // const tweets = useSelector(state => state.tweets);
    let [whatsHappening, setWhatsHappening] = useState('');
    const dispatch = useDispatch();
    // const tweetClickHandler = () => {
    //     // console.log(JSON.stringify(tweet));
    //     postNewTweet(dispatch, {
    //         // tweet
    //         // whatsHappening
    //         tweet: whatsHappening
    //     });
    // }
    const [tweets, setTweets] = useState([]);

    const createTweet = () => {
        service.postNewTweet(dispatch,{tweet: whatsHappening})
            .then(newTweets =>
                setTweets(newTweets));
            // .then(newTweet =>
            //     setTweets([
            //         newTweet,
            //         ...tweets
            //     ]));
    }

    useEffect(() =>
        service.findAllTweets()
            .then(tweets => setTweets(tweets)), []);






    // const tweetChangeHandler = (event) =>
    //     setTweet({tweet: event.target.value});
    //
    //     // setTweet({...tweet, tweet: event.target.value});
    //
    // // setTweet({...tweet, tweet: event.target.value});
    // console.log(tweet);



    const tweetChangeHandler = (event) => {
        const tweetValue = event.target.value;
        // const newTweet = {
        //     //tweet is the attribute of the tweet json object
        //     // tweet: tweetValue
        //     tweetValue
        // };
        setWhatsHappening(tweetValue);
    }


    return(
        <div className="pb-1">
            <table>
                <tr >
                    <td className="align-text-top " >
                        <img className="rounded-circle wd-avatar-image ms-3"
                             src="/images/Elon.jpeg" alt=""/>
                    </td>
                    <td  className="ps-1" style={{width:'100%'}}>
                        <textarea className="bg-transparent border-bottom border-dark form-control mb-2" style={{color: "white"}}
                                  placeholder={"What's happening?"}
                                  onChange={tweetChangeHandler}
                                  value={whatsHappening.tweet}>
                        </textarea>

                        <i className="far fa-image  ps-2 me-3 d-inline pt-1" style={{color: "#1DA1F2"}}></i>
                        <i className="fas fa-poll me-3 d-inline pt-1" style={{color: "#1DA1F2"}}></i>
                        <i className="fas fa-smile me-3 d-inline pt-1" style={{color: "#1DA1F2"}}></i>
                        <i className="fas fa-calendar me-3 d-inline pt-1" style={{color: "#1DA1F2"}}></i>
                        <button className="fa-pull-right btn btn-primary btn-block rounded-pill"
                                onClick={createTweet}>
                            {/*onClick={tweetClickHandler}>*/}

                            Tweet
                        </button>
                    </td>
                </tr>
            </table>
        </div>


);
}
export default WhatsHappening;

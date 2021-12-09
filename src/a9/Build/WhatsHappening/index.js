import React, {useState} from "react";
import "./tweet.css";
import {useDispatch, useSelector} from "react-redux";
import {postNewTweet, fetchAllTweets} from "../../services/twitterService";

const WhatsHappening = () => {
    // const tweets = useSelector(state => state.tweets);
    let [whatsHappening, setWhatsHappening] = useState('');
    const dispatch = useDispatch();
    const tweetClickHandler = () => {
        // const action = {
        //     type: 'create-tweet',
        //     whatsHappening
        // }
        // dispatch(action);
        postNewTweet(dispatch, {
            tweet: whatsHappening
        });


    }

    const tweetChangeHandler = (event) => {
        const tweetValue = event.target.value;
        const newTweet = {
            //tweet is the attribute of the tweet json object
            tweet: tweetValue
        };
        setWhatsHappening(newTweet);
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
                                onClick={tweetClickHandler}>
                            Tweet
                        </button>
                    </td>
                </tr>
            </table>
        </div>


);
}
export default WhatsHappening;

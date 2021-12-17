import posts from './data/tweets.json';

const tweets = (state = posts, action) => {
    switch (action.type) {
        case 'fetch-all-tweets':
            // console.log(JSON.stringify(action.tweets));
            return action.tweets;
            // return({
            //     tweets: action.tweets
            // })

            break;

        case 'create-tweet':
            const tweet = {
                // _id: (new Date()).getTime() + '',
                "topic": "Web Development",
                "userName": "ReactJS",
                "verified": false,
                "handle": "ReactJS",
                "time": "2h",
                // ...action.whatsHappening,
                ...action.tweet,
                "avatar-image": "../../../images/react-blue.png",
                "logo-image": "../../../images/react-blue.png",
                "stats": {

                    "comments": 321,
                    "retweets": 234,
                    "likes": 345
                },
            };
            return ([
                    tweet,
                    ...state,
                ]
            );

        case 'delete-tweet':
            console.log("entered");
            return state.filter(tweet => tweet._id !== action.tweet._id);

        case 'like-tweet':
            return state.map(tweet => {
                if(tweet._id === action.tweet._id) {
                    if(tweet.liked === true) {
                        tweet.liked = false;
                        tweet.stats.likes--;
                    } else {
                        tweet.liked = true;
                        tweet.stats.likes++;
                    }
                    return tweet;
                } else {
                    return tweet;
                }
            });

        default:
            return(state);
    }
};

export default tweets;

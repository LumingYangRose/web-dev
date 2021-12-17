//server:

const dao = require('../tweets/tweet-dao');
const {useSelector} = require("react-redux");
// let tweets = require('../../src/reducers/data/tweets.json');

module.exports = (app) => {


    // const findAllTweets = (req, res) => {
    //     res.json(tweets);
    // }
    const findAllTweets = (req, res) =>
        dao.fetchAllTweets()
            .then(tweets => res.json(tweets));

    app.get('/api/tweets', findAllTweets);

    //
    // const postNewTweet = (req, res) =>
    //     dao.createTweet(req.body)
    //         .then((insertedTweet) => res.json(insertedTweet));
    //
    // app.post('/api/tweets', postNewTweet);


    // const postNewTweet = (req, res) => {
    //     // console.log(req.body);
    //     const newTweet = {
    //         _id: (new Date()).getTime() + '',
    //         "topic": "Web Development",
    //         "userName": "ReactJS",
    //         "verified": false,
    //         "handle": "ReactJS",
    //         "time": "2h",
    //         "avatar-image": "../../../images/react-blue.png",
    //         "logo-image": "../../../images/react-blue.png",
    //         "stats": {
    //             "comments": 123,
    //             "retweets": 234,
    //             "likes": 345
    //         },
    //         ...req.body,
    //     }
    //     tweets = [
    //         newTweet,
    //         ...tweets
    //     ];
    //     // console.log(tweets);
    //     res.json(tweets);
    //     // res.json(tweets);
    //
    // }
    //
    // app.post('/api/tweets', postNewTweet);

    const postNewTweet = (req, res) => {
        // console.log(req.body);
        const newTweet = {
            // _id: (new Date()).getTime() + '',
            "topic": "Web Development",
            "userName": "ReactJS",
            "verified": false,
            "handle": "ReactJS",
            "time": "2h",
            "avatar-image": "../../../images/react-blue.png",
            "logo-image": "../../../images/react-blue.png",
            "stats": {
                "comments": 123,
                "retweets": 234,
                "likes": 345
            },
            ...req.body,
        }
        // console.log(newTweet);
        dao.createTweet(newTweet)
            .then((insertedTweet) =>
                res.json(insertedTweet));

    }
    app.post('/api/tweets', postNewTweet);

    const deleteTweet = (req, res) => {
        const id = req.params['id'];
        dao.deleteTweet(id)
            .then((status) => res.send(status));
        // tweets = tweets.filter(tweet => tweet._id !== id);
        // res.sendStatus(200);
    }
    app.delete('/api/tweets/:id', deleteTweet);


    const likeTweet = (req, res) => {
        // const id = req.params['id'];
        //
        // const tweets = dao.fetchAllTweets()
        //     .then(tweets => res.json(tweets));
        // let newTweet = {};
        // tweets.map(tweet => {
        //     if (tweet._id === id) {
        //         if (tweet.liked === true) {
        //             tweet.liked = false;
        //             tweet.stats.likes--;
        //         } else {
        //             tweet.liked = true;
        //             tweet.stats.likes++;
        //         }
        //         newTweet = tweet;
        //     }
        //     return tweet;
        // });
        const id = req.params['id'];
        // let tweet = JSON.parse(req.body);
        let tweet = req.body;
        if (tweet.liked === true) {
                tweet.liked = false;
                tweet.stats.likes--;
            } else {
                tweet.liked = true;
                tweet.stats.likes++;
            }
        dao.updateTweet(id, tweet)
            .then(status => res.send(status));
    };
    app.put('/api/tweets/:id/like', likeTweet);

    //
    // const likeTweet = (req, res) => {
    //     const id = req.params['id'];
    //     tweets = tweets.map(tweet => {
    //         if (tweet._id === id) {
    //             if (tweet.liked === true) {
    //                 tweet.liked = false;
    //                 tweet.stats.likes--;
    //             } else {
    //                 tweet.liked = true;
    //                 tweet.stats.likes++;
    //             }
    //             return tweet;
    //         } else {
    //             return tweet;
    //         }
    //     });
    //     res.sendStatus(200);
    // }
    // app.put('/api/tweets/:id/like', likeTweet);




};


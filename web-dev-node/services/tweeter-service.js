//server:

// let tweets = require('../../src/reducers/data/tweets.json');
const dao = require('../tweets/tweet-dao');

module.exports = (app) => {

    // const findAllTweets = (req, res) => {
    //     res.json(tweets);
    // }
    const findAllTweets = (req, res) => {
        // console.log(JSON.stringify(res.json(dao.findAllTweets()
        //     .then(tweets => res.json(tweets)))));
        dao.findAllTweets()
            .then(tweets => res.json(tweets));
    }


    app.get('/api/tweets', findAllTweets);

    // const postNewTweet = (req, res) => {
    //     dao.createTweet(req.body)
    //         .then((insertedTweet) => res.json(insertedTweet));
    // }

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

    // app.post('/api/tweets', postNewTweet);

    // const deleteTweet = (req, res) => {
    //     const id = req.params['id'];
    //     tweets = tweets.filter(tweet => tweet._id !== id);
    //     res.sendStatus(200);
    // }
    // app.delete('/api/tweets/:id', deleteTweet);
    //
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


const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/webdev');

const tweetSchema = mongoose.Schema({
    topic: String,
    userName: String,
    verified: {type: Boolean, defaultValue: false},
    attachments: {
        video: String
    }
}, {collection: "tweets"});

const tweetModel = mongoose.model("TweetModel", tweetSchema);

const findAllTweet = () => tweetModel.find();

findAllTweet()
    .then((data) => {
        console.log(data)
    });

const findTweetById = (id) => tweetModel.find({_id: id});

// findTweetById("61a96952059cce41e23d2b49")
//     .then(tweet => console.log(tweet));

const findTweetByUsername = (username) =>
    tweetModel.findOne({userName: username});

// findTweetByUsername('Scott Manley')
//     .then(tweet => console.log(tweet));

const deleteTweetById = (id) =>
    tweetModel.deleteOne({_id: id});

// deleteTweetById("61a96952059cce41e23d2b49")
//     .then(status => console.log(status));

const createTweet = (newTweet) =>
    tweetModel.create(newTweet);

createTweet({
        topic: 'Space',
        userName: 'Scott Manley',
        verified: true,
        handle: 'DJSnM',
        'published-date': '2020-12-10',
        time: '2 days',
        title: 'JavaScript is programming language that can run on browsers as well as desktops',
        tweet: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
        'logo-image': '../../../images/js.png',
        'avatar-image': '../../../images/js.png',
        tweets: '125K',
        stats: { comments: 123, retweets: 234, likes: 345 }
    }
)
    .then(actualTweet => console.log(actualTweet));

const updateTweet = (id, updates) =>
    tweetModel.updateOne({_id:id}, {$set: updates});

// updateTweet("61a97f0aeaf0a39fc2609459", {verified: false})
//     .then(status => console.log(status));

module.exports = {
    findTweetByUsername, findTweetById, findAllTweet, createTweet, updateTweet, deleteTweetById
}
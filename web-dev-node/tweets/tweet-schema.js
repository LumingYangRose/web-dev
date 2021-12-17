const mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost:27017/webdev');

const tweetSchema = mongoose.Schema({
    topic: String,
    // posted: {type: Date, defaultValue: Date.now},
    userName: String,
    verified: {type: Boolean, defaultValue: false},
    handle: String,
    title: String,
    tweet: String,
    attachments: {
        image: String
    },
    time: String,
    "logo-image": String,
    "avatar-image": String,
    tweets: String,
    stats: {
        comments: {type: Number, defaultValue: 0},
        retweets: {type: Number, defaultValue: 0},
        likes: {type: Number, defaultValue: 0}
    }
}, {collection: "tweets"});
tweetSchema.set('timestamps', true)
module.exports = tweetSchema;


const mongoose = require('mongoose');
const tweetSchema = require('./tweet-schema');
const tweetModel = mongoose.model('TweetModel', tweetSchema);
module.exports = tweetModel;

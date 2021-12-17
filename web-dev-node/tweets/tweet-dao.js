
const model = require('./tweet-model');
const sort = {'_id': -1}

const fetchAllTweets = () =>
    model.find({}).sort(sort);

const createTweet = (tweet) =>
    // model.insert(tweet);
    model.create(tweet);


const deleteTweet = (id) =>
    model.deleteOne({_id: id});
const updateTweet = (id, tweet) =>
    model.updateOne({_id: id},
        {$set: tweet});

module.exports = {
    fetchAllTweets,
    createTweet,
    deleteTweet, updateTweet
};

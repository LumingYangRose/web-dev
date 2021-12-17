// const mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost:27017/webdev');
//
// const tweetSchema = mongoose.Schema({
//     topic:String,
//     userName:String,
//     verified: {type: Boolean, defaultValue: false},
//     attachments:{
//         video:String
//     }
// }, {collection: "tweets"});
//
// const tweetModel = mongoose.model("TweetModel", tweetSchema);
//
// tweetModel.find().then(
//     (data) => {console.log(data)});

let uj = {
    lw: 'uf',
    nt: 'pe'
}
let aj = {
    nt: 'ht',
    gv: 'pl',
    ...uj,
}
uj = {
    ...aj,
    nt: 'bt',
    gv: 'qk'
}
console.log(uj.lw)
console.log(aj.nt)
console.log(uj.gv)

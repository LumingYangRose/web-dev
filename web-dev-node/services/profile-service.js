
let profile = require('../../src/reducers/data/profile.json');

module.exports = (app) => {

    const getCurrentProfile = (req, res) => {
        res.json(profile);
    }

    app.get('/api/profile', getCurrentProfile);
}

const model = require('./model');

const findAllMovies = () =>
    model.find();

// findAllMovies().then((data) => {console.log(data)});
const deleteMovie = (id) =>
    model.removeOne({_id: id});

const createMovie = (movie) =>
    model.create(movie);

const findMovieById = (id) =>
    model.findById(id);

const updateMovie = (id, movie) =>
    model.updateOne({_id: id},
        {$set: movie});




module.exports = {
    findAllMovies, deleteMovie, createMovie, findMovieById, updateMovie
};

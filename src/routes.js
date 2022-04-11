const express = require('express')
const routes = express.Router()

const moviesControllers = require('./controllers/moviesControllers')

routes.get('/movies', moviesControllers.index)
routes.get('/movies/filter/title/:primaryTitle', moviesControllers.index_primaryTitle)
routes.get('/movies/filter/year/:startYear', moviesControllers.index_startYear)
routes.post('/movies', moviesControllers.create)
routes.put('/movies/:tconst', moviesControllers.update)
routes.delete('/movies/:tconst', moviesControllers.delete)


routes.get('/movies_ratings', (req, res) => {
    knex('movies_ratings').then((results) => res.json(results))
})

module.exports = routes
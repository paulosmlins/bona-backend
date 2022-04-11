const knex = require('../database')

module.exports = {
  async index(req, res) {
    const results = await knex('movies')
    
    return res.json(results)
  },
  async index_primaryTitle(req, res) {
    const { primaryTitle } = req.params

    const results = await knex('movies').where({primaryTitle})
    
    return res.json(results)
  },
  async index_startYear(req, res) {
    const { startYear } = req.params

    const results = await knex('movies').where({startYear})
    
    return res.json(results)
  },
  async create(req, res, next) {
    try {
      const { tconst, titleType, primaryTitle, originalTitle, isAdult, startYear, endYear, runtimeMinutes } = req.body
      let { genres } = req.body
      genres = '{' + genres + '}'

      await knex('movies').insert({
        tconst,
        titleType,
        primaryTitle,
        originalTitle,
        isAdult,
        startYear,
        endYear,
        runtimeMinutes,
        genres
      })

      return res.status(201).send()
      
    } catch (error) {
      next(error)
    }
  },
  async update(req, res, next) {
    try {
      const { tconst, titleType, primaryTitle, originalTitle, isAdult, startYear, endYear, runtimeMinutes, genres } = req.body
      
      await knex('movies').update({
        tconst,
        titleType,
        primaryTitle,
        originalTitle,
        isAdult,
        startYear,
        endYear,
        runtimeMinutes,
        genres
      }).where({ tconst })

      return res.send()

    } catch (error) {
      next(error)
    }
  },
  async delete(req, res, next) {
    try {
      const { tconst } = req.params
      
      await knex('movies').where({ tconst }).del()

      return res.send()

    } catch (error) {
      next(error)
    }
  }
}
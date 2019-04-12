const {Bookmark} = require('../models')

module.exports = {
  async index(req, res) {
    try {
      const {songId, userId} = req.query
      const bookmark = await Bookmark.findOne({
        where: {
          SongId: songId,
          UserId: userId
        }
      })
      res.send(bookmark)
    } catch (err) {
      res.status(204).send({
        error: 'An error has occured trying to get the bookmark'
      })
    }
  }
}
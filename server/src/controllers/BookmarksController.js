const {Bookmark, Song, User} = require('../models')

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
  },
  async post(req, res) {
    try {
      const {songId, userId} = req.body
      const bookmark = await Bookmark.findOne({
        where: {
          SongId: songId,
          UserId: userId
        }
      })
      if (bookmark) {
        console.log('this song is already bookmarked')
        return res.status(400).send({
          error: 'This song is already bookmarked'
        })
      }
      const newBookmark = await Bookmark.create(req.body)
      const song = await Song.findById(songId)
      const user = await User.findById(userId)
      await newBookmark.setUser(user)
      await newBookmark.setSong(song)
      res.send(newBookmark)
    } catch (err) {
      res.status(500).send({
        error: 'An error has occured trying to create the bookmark'
      })
    }
  },
  async delete(req, res) {
    try {
      const {bookmarkId} = req.params
      console.log('Deleting bookmark', bookmarkId)
      const bookmark = await Bookmark.findByPk(bookmarkId)
      console.log('Found bookmark', bookmark)
      await bookmark.destroy()
      console.log('Removed bookmark')
      res.send(bookmark)
    } catch (err) {
      res.status(500).send({
        error: 'An error has occured trying to delete the bookmark'
      })
    }
  }
}
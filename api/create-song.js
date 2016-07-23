const createSong = require('../lib').createSong

function createSongRoute (req, res) {
  createSong().then((fileResponse) => {
    res.json(fileResponse)
  }).catch((err) => {
    console.error(err)
    res.status(500).json({message: 'An error occured while trying to generate a song'})
  })
}

module.exports = createSongRoute

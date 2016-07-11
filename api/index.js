const createSong = require('../lib').createSong
const Promise = require('bluebird')
const fs = Promise.promisifyAll(require('fs'))
const express = require('express')
const cors = require('cors')
const app = express()

app.use(cors())

// TODO: At some point before production
// var corsOptions = {
//   origin: 'http://example.com'
// };
// cors(corsOptions) after '/create-song'

function createApi () {
  app.get('/create-song', (req, res) => {
    let response
    createSong().then((fileResponse) => {
      response = fileResponse
      return fs.readFileAsync(fileResponse.fileName, 'base64')
    }).then((base) => {
      response.base = base
      fs.unlinkAsync(response.fileName)
      res.json(response)
    }).catch((err) => {
      console.error(err)
      res.status(500).json({message: 'An error occured while trying to generate a song'})

      if (response.fileName) {
        fs.unlinkAsync(response.fileName)
      }
    })
  })

  app.listen(3000)
}

module.exports = createApi

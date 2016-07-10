const createSong = require('../lib').createSong
const Promise = require('bluebird')
const fs = Promise.promisifyAll(require('fs'))
const express = require('express')
const app = express()

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
      fs.unlinkAsync(response.fileName)
      res.status(500).end()
    })
  })

  app.listen(3000)
}

module.exports = createApi

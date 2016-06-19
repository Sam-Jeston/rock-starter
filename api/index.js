const createSong = require('../lib').createSong
const Promise = require('bluebird')
const fs = Promise.promisifyAll(require('fs'))
const express = require('express')
const app = express()

app.get('/create-song', (req, res) => {
  createSong().then((file) => {
    let sendOptions = {
      root: `./`
    }

    res.sendFile(file, sendOptions, (err) => {
      if (err) res.status(500).end()
      return fs.unlinkAsync(file)
    })
  }).catch((err) => {
    console.error(err)
    res.status(500).end()
  })
})

app.listen(3000)

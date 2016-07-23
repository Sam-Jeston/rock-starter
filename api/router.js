const express = require('express')
const router = express.Router()
const createSong = require('./create-song')
const emailFile = require('./email-file')

router.route('/')
  .get((req, res) => res.json({api: 'healthy'}))

router.route('/create-song')
  .get(createSong)

router.route('/upload-file')
  .post(emailFile)

module.exports = router

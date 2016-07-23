const config = require('../config')
const apiKey = config.mailgun.key
const domain = config.mailgun.domain
const mailgun = require('mailgun-js')({apiKey: apiKey, domain: domain})
const Busboy = require('busboy')
const path = require('path')
const fs = require('fs')

function emailFile (req, res) {
  let busboy = new Busboy({ headers: req.headers })
  let savePath

  busboy.on('file', function (fieldname, file, filename, encoding, mimetype) {
    // We write the file to disc because mailgun does not accept a readable stream
    // It only takes fil paths or a buffer, wierdly
    file.on('data', function (data) {
      if (data.length > 1000000) {
        req.status(400).json({error: 'The file is larger than 1mb'})
      }
    })

    savePath = path.resolve(__dirname, filename)
    file.pipe(fs.createWriteStream(savePath))
  })

  busboy.on('finish', function () {
    let mailData = {
      from: 'Rock Starter Contributer <me@samples.mailgun.org>',
      to: 'sam.jeston@gmail.com',
      subject: 'Rock Starter Contribution',
      text: 'A user has provided a file for Rock Starter',
      attachment: savePath
    }

    // We do not upload in development
    if (config.environment === 'production') {
      mailgun.messages().send(mailData, function (err, body) {
        if (err) {
          res.status(500).json({error: 'There was an issue server -> email'})
        }

        unlink(res)
      })
    } else {
      unlink(res)
    }
  })

  function unlink (res) {
    fs.unlink(savePath, (err) => {
      if (err) {
        res.status(500).json({error: 'There was an issue server -> email'})
      }

      res.json({status: 'uploaded'})
    })
  }

  return req.pipe(busboy)
}

module.exports = emailFile

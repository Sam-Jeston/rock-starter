const express = require('express')
const cors = require('cors')
const app = express()
const router = require('./router')

app.use(cors())

// TODO: At some point before production
// var corsOptions = {
//   origin: 'http://example.com'
// };
// cors(corsOptions) after '/create-song'

function boot () {
  app.use(router)
  app.listen(3000)
}

// This export servers as the application registration on boot
module.exports = boot

let _ = require('lodash')

module.exports = { createSoxString }

function createSoxString (melody, pianoPath, destinationPath) {
  let soxNotes = _(melody)
    .values()
    .flatten()
    .reduce((previous, current) => {
      return `${previous} ${pianoPath}${current}.wav`
    }, 'sox')

  return `${soxNotes} ${destinationPath}`
}

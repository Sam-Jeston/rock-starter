let _ = require('lodash')

module.exports = { createSoxString }

function createSoxString (melody, pianoPath, destinationPath) {
  let soxNotes = _(melody)
    .values()
    .flatten()
    .reduce((previous, current) => {
      return `${previous} ${pianoPath}${current}.wav`
    }, '')

  // This command has been adjusted for 8 bar output
  return `sox ${soxNotes} ${soxNotes} ${destinationPath}`
}

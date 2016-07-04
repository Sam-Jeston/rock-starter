const Promise = require('bluebird')
const exec = require('child_process').exec
const _ = require('lodash')
const uuid = require('uuid')
const fs = Promise.promisifyAll(require('fs'))
const config = require('../config')
const generateBackingCommand = require('./backing').createSoxString
const generateMelodyCommand = require('./melody').createSoxString
const melodyRhythm = require('./melody-rhythm').generate
const melodyNotes = require('./note-generator').generate

module.exports = { createSong }

function createSong () {
  let outputName = `${uuid.v4()}.mp3`
  let backingName = `${uuid.v4()}.wav`
  let melodyName = `${uuid.v4()}.wav`
  let guitarTrack = _.sample(config.guitarTrackList)
  let drumTrack = _.sample(config.drumTrackList)
  let bassTrack = _.sample(_.filter(config.bassTrackList, {progression: guitarTrack.progression}))
  let backingSoxCommand = generateBackingCommand(
    guitarTrack.name,
    bassTrack.name,
    drumTrack.name,
    config.paths.guitar,
    config.paths.bass,
    config.paths.drum,
    backingName
  )

  let rhythm = melodyRhythm()
  let melody = melodyNotes(rhythm, guitarTrack)
  let melodySoxCommand = generateMelodyCommand(melody, config.paths.piano, melodyName)

  let generateBacking = systemPromise(backingSoxCommand)
  let generateMelody = systemPromise(melodySoxCommand)

  return Promise.all([generateBacking, generateMelody]).then(() => {
    // Now we have the backing and the melody tracks, we mix them together
    let command = `sox -m ${backingName} ${melodyName} ${outputName}`
    return systemPromise(command)
  }).then(() => {
    // Clean-up unwanted files and return the output file path
    return Promise.all([fs.unlinkAsync(backingName), fs.unlinkAsync(melodyName)])
  }).then(() => {
    return outputName
  })
}

function systemPromise (command) {
  return new Promise((resolve, reject) => {
    let systemCommand = exec(command)

    systemCommand.on('close', (code) => {
      if (code !== 0) reject('The sox command for generating a wav failed')
      resolve()
    })
  })
}

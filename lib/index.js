const Promise = require('bluebird')
const exec = require('child_process').exec
const _ = require('lodash')
const fs = Promise.promisifyAll(require('fs'))
const config = require('../config')
const generateBackingCommand = require('./backing').createSoxString
const generateMelodyCommand = require('./melody').createSoxString
const melodyRhythm = require('./melody-rhythm').generate
const melodyNotes = require('./note-generator').generate

function createSong () {
  let guitarTrack = _.sample(config.guitarTrackList)
  let drumTrack = _.sample(config.drumTrackList)
  let backingSoxCommand = generateBackingCommand(guitarTrack.name, drumTrack.name, config.paths.guitar, config.paths.drum, 'backing.wav')

  let rhythm = melodyRhythm()
  let melody = melodyNotes(rhythm, guitarTrack)
  let melodySoxCommand = generateMelodyCommand(melody, config.paths.piano, 'melody.wav')

  let generateBacking = systemPromise(backingSoxCommand)
  let generateMelody = systemPromise(melodySoxCommand)

  Promise.all([generateBacking, generateMelody]).then(() => {
    // Now we have the backing and the melody tracks, we mix them together
    let command = 'sox -m backing.wav melody.wav output.mp3'
    return systemPromise(command)
  }).then(() => {
    // Clean-up unwanted files and return the output file path
    return Promise.all([fs.unlinkAsync('backing.wav'), fs.unlinkAsync('melody.wav')])
  }).catch((err) => {
    console.error(err)
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

createSong()

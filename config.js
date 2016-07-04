let _ = require('lodash')

let paths = {
  guitar: process.env.GUITAR_LOCATION || '/home/sam/Music/guitar-exports/',
  drum: process.env.DRUM_LOCATION || '/home/sam/Music/drum-exports/',
  piano: process.env.PIANO_LOCATION || '/home/sam/Music/piano-exports/',
  bass: process.env.BASS_LOCATION || '/home/sam/Music/bass-exports/'
}

let minorProgression = {
  A: ['A', 'C', 'D', 'E'],
  C: ['C', 'E', 'F', 'G'],
  D: ['D', 'F', 'G', 'A', 'C'],
  E: ['E', 'G', 'A', 'B'],
  F: ['A', 'C', 'F', 'G'],
  G: ['A', 'B', 'D', 'G']
}

let minorProgressions = ['AFGA', 'ACGG', 'AEGF', 'AEDC', 'AFCG']

let guitarTrackList = []
_.forEach(minorProgressions, (p) => {
  _.times(3, (itr) => {
    let b = {
      name: `${p}-${itr + 1}.wav`,
      progression: p,
      firstBar: minorProgression[`${p[0]}`],
      secondBar: minorProgression[`${p[1]}`],
      thirdBar: minorProgression[`${p[2]}`],
      fourthBar: minorProgression[`${p[3]}`]
    }

    guitarTrackList.push(b)
  })
})

let bassTrackList = []
_.forEach(minorProgressions, (p) => {
  _.times(3, (itr) => {
    let b = {
      name: `${p}-${itr + 1}.wav`,
      progression: p
    }

    bassTrackList.push(b)
  })
})

let drumTrackList = _.times(16, (itr) => {
  return {
    name: `d${itr + 1}.wav`
  }
})

module.exports = { paths, minorProgression, guitarTrackList, drumTrackList, bassTrackList }

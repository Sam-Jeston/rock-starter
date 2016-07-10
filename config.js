let _ = require('lodash')

let paths = {
  drum: process.env.DRUM_LOCATION || '/home/sam/Music/drum-exports/',
  piano: process.env.PIANO_LOCATION || '/home/sam/Music/piano-exports/',
  minor: {
    guitar: process.env.GUITAR_LOCATION || '/home/sam/Music/guitar-exports/minor/',
    bass: process.env.BASS_LOCATION || '/home/sam/Music/bass-exports/minor/'
  },
  major: {
    guitar: process.env.GUITAR_LOCATION || '/home/sam/Music/guitar-exports/major/',
    bass: process.env.BASS_LOCATION || '/home/sam/Music/bass-exports/major/'
  }
}

let minorProgression = {
  'A': ['A', 'C', 'D', 'E'],
  'C': ['C', 'E', 'F', 'G'],
  'D': ['D', 'F', 'G', 'A', 'C'],
  'E': ['E', 'G', 'A', 'B'],
  'F': ['A', 'C', 'F', 'G'],
  'G': ['A', 'B', 'D', 'G']
}

let majorProgression = {
  'A': ['A', 'C#', 'D', 'E'],
  'C': ['C#', 'E', 'F#', 'G#'],
  'D': ['D', 'F#', 'G#', 'A', 'C#'],
  'E': ['E', 'G#', 'A', 'B'],
  'F': ['A', 'C#', 'F#', 'G#'],
  'G': ['A', 'B', 'D', 'G#']
}

let minorProgressions = ['AFGA', 'ACGG', 'AEGF', 'AEDC', 'AFCG']
let majorProgressions = ['AEDE', 'AEFD', 'FDAE', 'ACDF', 'AAEE']

let guitarMinorTrackList = []
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

    guitarMinorTrackList.push(b)
  })
})

let guitarMajorTrackList = []
_.forEach(majorProgressions, (p) => {
  _.times(3, (itr) => {
    let b = {
      name: `${p}-${itr + 1}.wav`,
      progression: p,
      firstBar: majorProgression[`${p[0]}`],
      secondBar: majorProgression[`${p[1]}`],
      thirdBar: majorProgression[`${p[2]}`],
      fourthBar: majorProgression[`${p[3]}`]
    }

    guitarMajorTrackList.push(b)
  })
})

let bassMinorTrackList = []
_.forEach(minorProgressions, (p) => {
  _.times(3, (itr) => {
    let b = {
      name: `${p}-${itr + 1}.wav`,
      progression: p
    }

    bassMinorTrackList.push(b)
  })
})

let bassMajorTrackList = []
_.forEach(majorProgressions, (p) => {
  _.times(3, (itr) => {
    let b = {
      name: `${p}-${itr + 1}.wav`,
      progression: p
    }

    bassMajorTrackList.push(b)
  })
})

let drumTrackList = _.times(16, (itr) => {
  return {
    name: `d${itr + 1}.wav`
  }
})

module.exports = {
  paths,
  minorProgression,
  majorProgressions,
  guitarMinorTrackList,
  guitarMajorTrackList,
  drumTrackList,
  bassMinorTrackList,
  bassMajorTrackList
}

let _ = require('lodash')

let paths = {
  tempOutput: process.env.TEMP_OUTPUT || '/home/sam/Projects/rock-starter/tmp/',
  drum: process.env.DRUM_LOCATION || '/home/sam/Dropbox/rock-samples/drum-exports/',
  piano: process.env.PIANO_LOCATION || '/home/sam/Dropbox/rock-samples/piano-exports/',
  minor: {
    guitar: process.env.GUITAR_LOCATION || '/home/sam/Dropbox/rock-samples/guitar-exports/minor/',
    bass: process.env.BASS_LOCATION || '/home/sam/Dropbox/rock-samples/bass-exports/minor/'
  },
  major: {
    guitar: process.env.GUITAR_LOCATION || '/home/sam/Dropbox/rock-samples/guitar-exports/major/',
    bass: process.env.BASS_LOCATION || '/home/sam/Dropbox/rock-samples/bass-exports/major/'
  }
}

let minorProgression = {
  'A': ['A', 'C', 'D', 'E'],
  'C': ['C', 'E', 'F', 'G'],
  'D': ['D', 'F', 'G', 'A', 'C'],
  'E': ['E', 'G', 'A', 'B'],
  'F': ['A', 'C', 'F', 'G'],
  'G': ['A', 'D', 'G']
}

let majorProgression = {
  'A': ['A', 'C#', 'D', 'E'],
  'C': ['C#', 'E', 'F#', 'G#'],
  'D': ['D', 'F#', 'G#', 'A', 'C#'],
  'E': ['E', 'G#', 'A', 'B'],
  'F': ['A', 'C#', 'F#', 'G#'],
  'G': ['A', 'B', 'D', 'G#']
}

let minorProgressions = [
  {progression: 'AFGA', human: 'i VI VII i'},
  {progression: 'ACGG', human: 'i III VII VII'},
  {progression: 'AEGF', human: 'i v VII VI'},
  {progression: 'AEDC', human: 'i v iv III'},
  {progression: 'AFCG', human: 'i VI III VII'}
]

// Add this sample -> AEFD
let majorProgressions = [
  {progression: 'AEDE', human: 'I V IV V'},
  {progression: 'FDAE', human: 'vi IV I V'},
  {progression: 'ACDF', human: 'I iii IV vi'},
  {progression: 'AAFE', human: 'I I vi V'}
]

let guitarMinorTrackList = []
_.forEach(minorProgressions, (p) => {
  _.times(3, (itr) => {
    let b = {
      name: `${p.progression}-${itr + 1}.wav`,
      progression: p.progression,
      humanProgression: p.human,
      firstBar: minorProgression[`${p.progression[0]}`],
      secondBar: minorProgression[`${p.progression[1]}`],
      thirdBar: minorProgression[`${p.progression[2]}`],
      fourthBar: minorProgression[`${p.progression[3]}`]
    }

    guitarMinorTrackList.push(b)
  })
})

let guitarMajorTrackList = []
_.forEach(majorProgressions, (p) => {
  _.times(2, (itr) => {
    let b = {
      name: `${p.progression}-${itr + 1}.wav`,
      progression: p.progression,
      humanProgression: p.human,
      firstBar: majorProgression[`${p.progression[0]}`],
      secondBar: majorProgression[`${p.progression[1]}`],
      thirdBar: majorProgression[`${p.progression[2]}`],
      fourthBar: majorProgression[`${p.progression[3]}`]
    }

    guitarMajorTrackList.push(b)
  })
})

let bassMinorTrackList = []
_.forEach(minorProgressions, (p) => {
  _.times(3, (itr) => {
    let b = {
      name: `${p.progression}-${itr + 1}.wav`,
      progression: p.progression
    }

    bassMinorTrackList.push(b)
  })
})

let bassMajorTrackList = []
_.forEach(majorProgressions, (p) => {
  _.times(2, (itr) => {
    let b = {
      name: `${p.progression}-${itr + 1}.wav`,
      progression: p.progression
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

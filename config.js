let paths = {
  guitar: '/home/sam/Music/guitar-exports/',
  drum: '/home/sam/Music/drum-exports/',
  piano: '/home/sam/Music/piano-exports/'
}

let minorProgression = {
  A: ['A', 'C', 'D', 'E'],
  B: ['B', 'D', 'E', 'F', 'G'],
  C: ['C', 'E', 'F', 'G', 'A'],
  D: ['D', 'F', 'G', 'B'],
  E: ['A', 'B', 'C', 'E', 'G'],
  F: ['A', 'C', 'D', 'F', 'G'],
  FSharp: ['A', 'C', 'D', 'F', 'G'],
  G: ['A', 'C', 'D', 'E', 'G']
}

let guitarTrackList = [
  {
    name: 'Clean-AAGG.wav',
    firstBar: minorProgression.A,
    secondBar: minorProgression.A,
    thirdBar: minorProgression.G,
    fourthBar: minorProgression.G
  }, {
    name: 'Clean-ACBG.wav',
    firstBar: minorProgression.A,
    secondBar: minorProgression.C,
    thirdBar: minorProgression.B,
    fourthBar: minorProgression.G
  }, {
    name: 'Clean-ACDD.wav',
    firstBar: minorProgression.A,
    secondBar: minorProgression.C,
    thirdBar: minorProgression.D,
    fourthBar: minorProgression.D
  }, {
    name: 'Clean-ACGG.wav',
    firstBar: minorProgression.A,
    secondBar: minorProgression.C,
    thirdBar: minorProgression.G,
    fourthBar: minorProgression.G
  }, {
    name: 'Clean-AFFG.wav',
    firstBar: minorProgression.A,
    secondBar: minorProgression.F,
    thirdBar: minorProgression.F,
    fourthBar: minorProgression.G
  }, {
    name: 'Clean-ACGG.wav',
    firstBar: minorProgression.A,
    secondBar: minorProgression.G,
    thirdBar: minorProgression.FSharp,
    fourthBar: minorProgression.F
  }
]

let drumTrackList = [
  {
    name: 'Drums-1.wav',
    style: 'To-do'
  }, {
    name: 'Drums-2.wav',
    style: 'To-do'
  }, {
    name: 'Drums-3.wav',
    style: 'To-do'
  }, {
    name: 'Drums-4.wav',
    style: 'To-do'
  }, {
    name: 'Drums-5.wav',
    style: 'To-do'
  }, {
    name: 'Drums-6.wav',
    style: 'To-do'
  }
]

module.exports = { paths, minorProgression, guitarTrackList, drumTrackList }

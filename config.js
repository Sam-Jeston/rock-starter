export let config = {
  guitarPath: '/home/sam/Music/guitar-exports/',
  drumPath: '/home/sam/Music/drum-exports/',
  painoPath: '/home/sam/Music/piano-exports/'
}

let basicNotes = ['A', 'B', 'C', 'D', 'E', 'F', 'G']
export let minorProgression = {
  A: basicNotes,
  B: basicNotes,
  C: basicNotes,
  D: basicNotes,
  E: basicNotes,
  F: basicNotes,
  G: basicNotes
}

export let guitarTrackList = [
  {
    name: 'Clean-AAGG.wav',
    bar1: minorProgression.A,
    bar2: minorProgression.A,
    bar3: minorProgression.G,
    bar4: minorProgression.G
  },
  {
    name: 'Clean-ACBG.wav',
    bar1: minorProgression.A,
    bar2: minorProgression.C,
    bar3: minorProgression.B,
    bar4: minorProgression.G
  }
]

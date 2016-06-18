let noteGenerator = require('../../lib/note-generator').generate

describe('note generator', () => {
  let rhythmObject = {
    firstBar: [1, 0.5, 1, 1, 0.5],
    secondBar: [1, 2, 1],
    thirdBar: [1, 3],
    fourthBar: [2, 1, 1]
  }

  let noteObject = {
    firstBar: ['A', 'C', 'E'],
    secondBar: ['B', 'C', 'D', 'E'],
    thirdBar: ['A', 'F', 'G', 'B'],
    fourthBar: ['A', 'B']
  }

  it('each bar should have as many notes as input by the rhythm object', () => {
    let output = noteGenerator(rhythmObject, noteObject)
    expect(output.firstBar.length).to.eql(rhythmObject.firstBar.length)
    expect(output.secondBar.length).to.eql(rhythmObject.secondBar.length)
    expect(output.thirdBar.length).to.eql(rhythmObject.thirdBar.length)
    expect(output.fourthBar.length).to.eql(rhythmObject.fourthBar.length)
  })

  it('each note selected should be one of the notes available for the bar', () => {
    let output = noteGenerator(rhythmObject, noteObject)

    _.forEach(output, (value, key) => {
      let barNotes = _.map(value, (i) => i.charAt(0))
      _.each(barNotes, (currentNote) => {
        expect(noteObject[key]).to.include(currentNote)
      })
    })
  })
})

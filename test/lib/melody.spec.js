let melody = require('../../lib/melody').createSoxString

describe('Melody generator', () => {
  let notes = {
    firstBar: ['A1', 'B0.5', 'A1', 'A1', 'B0.5'],
    secondBar: ['A1', 'C2', 'A1'],
    thirdBar: ['A1', 'D3'],
    fourthBar: ['C2', 'A1', 'A1']
  }

  it('the sox string should take the right form', () => {
    let output = melody(notes, 'test', 'output')
    let expectedOutput = 'sox testA1.wav testB0.5.wav testA1.wav testA1.wav testB0.5.wav testA1.wav testC2.wav testA1.wav testA1.wav testD3.wav testC2.wav testA1.wav testA1.wav output'
    expect(output).to.eql(expectedOutput)
  })
})

let backing = require('../../lib/backing').createSoxString

describe('Backing generator', () => {
  it('the sox string should take the right form', () => {
    let output = backing('guitarTrack', 'drumTrack', 'guitarPath/', 'drumPath/', 'destinationPath')
    let expectedOutput = 'sox -m drumPath/drumTrack guitarPath/guitarTrack destinationPath'
    expect(output).to.eql(expectedOutput)
  })
})

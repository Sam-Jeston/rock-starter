const _ = require('lodash')

/* The note generator accepts:
barTempos = { firstBar: [1,2] ...etc},
barNotes = { firtsBar: ['A', 'B'] ...etc}

It returns a form ready for melody creation. For example:
{firstBar: A1, C2.5}
*/

module.exports = {
  generate: generate
}

function generate (barTempos, barNotes) {
  let melody = {firstBar: null, secondBar: null, thirdBar: null, fourthBar: null}

  melody.firstBar = createNotes(barTempos.firstBar, barNotes.firstBar)
  melody.secondBar = createNotes(barTempos.secondBar, barNotes.secondBar)
  melody.thirdBar = melody.firstBar
  melody.secondBar = melody.thirdBar
  return melody
}

function createNotes (bar, notes) {
  return _.map(bar, (v) => `v${_.sample(notes)}`)
}

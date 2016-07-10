const _ = require('lodash')
let silenceChance = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

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
  melody.thirdBar = createNotes(barTempos.thirdBar, barNotes.fourthBar)
  melody.fourthBar = createNotes(barTempos.fourthBar, barNotes.fourthBar)
  return melody
}

function createNotes (bar, notes) {
  return _.map(bar, (v) => {
    if (v === 0.5 || v === 1) {
      let check = _.sample(silenceChance)
      if (check === 1) {
        return `Z${v}`
      }
    }

    return `${_.sample(notes)}${v}`
  })
}

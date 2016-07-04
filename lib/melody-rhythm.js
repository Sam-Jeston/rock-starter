const _ = require('lodash')

/* To begin with this function will be very simple
It will randomly generate 2 bars of a random melodic pattern.
In the future complexity will be added here
*/

module.exports = { generate }

function optionsRemaining (totalBeats) {
  let arr = []
  for (let i = 0.5; i <= (4 - totalBeats); i += 0.5) {
    if (i < 2.5) arr.push(i)
  }
  return arr
}

// create bar works by cloning tempoOptions, randomly selecting a value, adding
// it to an array, then creating a new array which only have values that would
// keep the beats of the bar less than 4
function createBar (bar, temp) {
  let options = _.clone(temp)
  let thisBeat = _.sample(options)
  bar.push(thisBeat)

  let value = bar.reduce((prev, current) => current + prev, 0)

  if (value < 4) {
    let newTemp = optionsRemaining(value)
    createBar(bar, newTemp)
  } else {
    return bar
  }
}

function generate () {
  let tempoOptions = [0.5, 1, 1.5, 2, 2.5]
  let firstBar = []
  let secondBar = []
  let thirdBar = []
  let fourthBar = []

  createBar(firstBar, tempoOptions)
  createBar(secondBar, tempoOptions)
  createBar(thirdBar, tempoOptions)
  createBar(fourthBar, tempoOptions)

  return {
    firstBar: firstBar,
    secondBar: secondBar,
    thirdBar: thirdBar,
    fourthBar: fourthBar
  }
}

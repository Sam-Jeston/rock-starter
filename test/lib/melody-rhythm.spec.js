let rhythmGenerator = require('../../lib/melody-rhythm').generate

describe('melodic rhythm', () => {
  it('each bar should contain 4 beats', () => {
    let bars = rhythmGenerator()

    let totals = _.mapValues(bars, (bar) => {
      return bar.reduce((prev, current) => current + prev, 0)
    })

    totals = _.values(totals)
    _.each(totals, (total) => {
      expect(total).to.eql(4)
    })
  })
})

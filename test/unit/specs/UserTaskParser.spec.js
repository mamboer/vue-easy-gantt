import UserTaskParser from '@/components/UserTaskParser'
import data from '../data.js'

describe('UserTaskParser.js', () => {
  let obj, rawTasks, sdate

  // create new Vue instance for every test case
  beforeEach(() => {
    rawTasks = data.items[data.items.length - 1].tasks
    sdate = data.sdate
    obj = new UserTaskParser(rawTasks, sdate)
  })

  it('should set the correct properties', () => {
    expect(obj.sdate).to.equal(sdate)
    expect(obj.items0).to.equal(rawTasks)
    expect(obj.total).to.equal(rawTasks.length)
  })

  it('should get correct "dates"', () => {
    let dates = obj.dates
    expect(dates.length).to.equal(7)
    expect(dates.includes(sdate)).to.equal(true)
  })

  it('should parse extra properties for task object', () => {
    let task = obj.items0[0]
    expect(task).to.have.property('edate')
    expect(task).to.have.property('weekday')
    expect(task).to.have.property('space')
    expect(task).to.have.property('canHasFollowingTasks')
  })

  it('should group tasks correctly', () => {
    let items = obj.items
    let count = 0
    expect(items.length).to.equal(3)
    items.forEach((item, idx) => {
      count += (Object.keys(item).length - 1) // subtract the 'sdate' property, see line 103 in UserTaskParser.js
    })
    expect(count).to.equal(rawTasks.length)
  })
})

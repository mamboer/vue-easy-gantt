import moment from 'moment'

const momentHelper = {
  getMoment (date) {
    let cache = momentHelper[date]
    if (cache) return cache
    return moment(date)
  }
}

class UserTaskParser {
  constructor (items, sdate) {
    this.sdate = sdate
    this.items0 = items
    this.total = items.length
    this.dates = this._getDates()
    this._parse()
    this.items = this._groupTasks()
  }
  _parse () {
    let items = this.items0
    items.forEach((obj, idx) => {
      let sdate1 = momentHelper.getMoment(obj.sdate)
      let d = sdate1.isoWeekday()
      // fix duration
      let duration = Math.min((7 - d + 1), obj.duration)
      // caculate the next date of end date
      sdate1.add(duration, 'days')
      obj.edate = sdate1.format('YYYY-MM-DD')
      obj.duration = duration
      obj.weekday = d
      obj.space = 7 - d - obj.duration + 1
      obj.canHasFollowingTasks = this.dates.includes(obj.edate)
    })
    this.items0 = items.sort((a, b) => a.weekday - b.weekday)
  }
  _getDates () {
    let now = momentHelper.getMoment(this.sdate)
    let i = 1
    let ret = []
    while (i < 8) {
      ret.push(now.isoWeekday(i).format('YYYY-MM-DD'))
      i++
    }
    return ret
  }
  _getNextDateOf (date) {
    let idx = this.dates.findIndex(obj => obj === date)
    if (idx === (this.dates.length - 1)) return null
    return this.dates[idx + 1]
  }
  _getFollowingTask (items, date, space, matchedItems) {
    if (space === 0 || date === null) {
      return matchedItems
    }
    let tasks = items.filter((item) => {
      return (item.sdate === date && item.duration <= space)
    })
    tasks.sort((a, b) => (b.duration - a.duration))
    let rawIdx = null
    let task = null
    if (tasks.length > 0) {
      task = tasks[0]
      rawIdx = items.findIndex((item) => {
        return item._id === task._id
      })
      // remove the selected task
      items.splice(rawIdx, 1)
      matchedItems.push(task)
      if (!task.canHasFollowingTasks) return matchedItems
      return this._getFollowingTask(items, task.edate, task.space, matchedItems)
    }
    return this._getFollowingTask(items, this._getNextDateOf(date), space - 1, matchedItems)
  }
  _groupTasks () {
    let items = this.items0.slice()
    let rows = []

    while (items.length) {
      let obj = items.shift()
      let row = {
        sdate: obj.sdate
      }
      row[obj.sdate] = obj
      if (!obj.canHasFollowingTasks) {
        rows.push(row)
        continue
      }
      let followingTasks = []
      this._getFollowingTask(items, obj.edate, obj.space, followingTasks)
      followingTasks.forEach((obj1, idx1) => {
        row[obj1.sdate] = obj1
      })
      rows.push(row)
    }

    return rows
  }
}

export default UserTaskParser

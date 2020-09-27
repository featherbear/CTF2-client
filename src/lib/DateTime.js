import { readable } from 'svelte/store'

export const getDate = () => new Date()

export function parseDelta (delta) {
  const seconds = delta / 1000
  const minutes = seconds / 60
  const hours = minutes / 60
  const days = hours / 24
  const months = days / (365 / 12)
  const years = months / 12

  // Did you know JavaScript object keys have a positional index?
  let timeCalc = {
    y: ~~years,
    m: ~~(months % 12),
    d: ~~(days % (365 / 12)),
    hr: ~~(hours % 24),
    min: ~~(minutes % 60),
    s: ~~(seconds % 60)
  }

  let idx = Object.values(timeCalc).findIndex(v => v)
  idx = idx > -1 ? idx : 5
  let str = ''
  for (let [key, val] of Object.entries(timeCalc).slice(idx, idx + 3)) {
    str += `${val} ${key} `
  }
  return str.trim()
}

export const secondAccurate = readable(new Date(), set => {
  const interval = setInterval(() => {
    set(new Date())
  }, 1000)

  return () => clearInterval(interval)
})

let minuteAccurateDate
let minuteAccurateTimer
export const minuteAccurate = readable(
  (minuteAccurateDate = new Date()),
  set => {
    ;(function setupTimer () {
      minuteAccurateTimer = setTimeout(() => {
        set((minuteAccurateDate = new Date()))
        setupTimer()
      }, 60000 - (minuteAccurateDate.getTime() % 60000))
    })()
    return () => clearInterval(minuteAccurateTimer)
  }
)

let hourAccurateDate
let hourAccurateTimer
export const hourAccurate = readable((hourAccurateDate = new Date()), set => {
  ;(function setupTimer () {
    hourAccurateTimer = setTimeout(() => {
      set((hourAccurateDate = new Date()))
      setupTimer()
    }, 3600000 - (hourAccurateDate.getTime() % 3600000))
  })()
  return () => clearInterval(hourAccurateTimer)
})

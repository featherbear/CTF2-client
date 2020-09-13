import { readable } from 'svelte/store'

export const getDate = () => new Date()

export const secondAccurate = readable(new Date(), (set) => {
  const interval = setInterval(() => {
      console.log('tick');
    set(new Date())
  }, 1000)

  return () => clearInterval(interval)
})

let minuteAccurateDate
let minuteAccurateTimer
export const minuteAccurate = readable((minuteAccurateDate = new Date()), (set) => {
  (function setupTimer () {
    minuteAccurateTimer = setTimeout(() => {
      set((minuteAccurateDate = new Date()))
      setupTimer()
    }, 60000 - minuteAccurateDate.getTime() % 60000)
  })()
  return () => clearInterval(minuteAccurateTimer)
})

let hourAccurateDate
let hourAccurateTimer
export const hourAccurate = readable((hourAccurateDate = new Date()), (set) => {
  (function setupTimer () {
    hourAccurateTimer = setTimeout(() => {
      set((hourAccurateDate = new Date()))
      setupTimer()
    }, 3600000 - hourAccurateDate.getTime() % 3600000)
  })()
  return () => clearInterval(hourAccurateTimer)
})

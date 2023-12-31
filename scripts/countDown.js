function getTimeRemaining(endtime) {
  let t = Date.parse(endtime) - Date.parse(new Date())
  let seconds = Math.floor((t / 1000) % 60)
  let minutes = Math.floor((t / 1000 / 60) % 60)
  let hours = Math.floor((t / (1000 * 60 * 60)) % 24)
  let days = Math.floor(t / (1000 * 60 * 60 * 24))
  return {
    total: t,
    days: days,
    hours: hours,
    minutes: minutes,
    seconds: seconds,
  }
}

function initializeClock(id, endtime) {
  let clock = document.getElementById(id)
  let daysSpan = clock.querySelector('.days')
  let hoursSpan = clock.querySelector('.hours')
  let minutesSpan = clock.querySelector('.minutes')
  let secondsSpan = clock.querySelector('.seconds')

  function updateClock() {
    let t = getTimeRemaining(endtime)
    if (t.days < 10) {
      daysSpan.innerHTML = `0${t.days}`
    } else {
      daysSpan.innerHTML = t.days
    }
    hoursSpan.innerHTML = ('0' + t.hours).slice(-2)
    minutesSpan.innerHTML = ('0' + t.minutes).slice(-2)
    secondsSpan.innerHTML = ('0' + t.seconds).slice(-2)
    if (t.total <= 0) {
      clearInterval(timeinterval)
    }
  }

  updateClock()
  let timeinterval = setInterval(updateClock, 1000)
}

let deadlineSectionToday = new Date(
  Date.parse(new Date()) +
    3 * 24 * 60 * 60 * 1000 +
    23 * 60 * 60 * 1000 +
    19 * 60 * 1000 +
    6 * 1000
) // for endless timer

let deadlineJBL = new Date(
  Date.parse(new Date()) +
    5 * 24 * 60 * 60 * 1000 +
    23 * 60 * 60 * 1000 +
    59 * 60 * 1000 +
    6 * 1000
) // for endless timer

initializeClock('todayCountdown', deadlineSectionToday)
initializeClock('middlePageCountdown', deadlineJBL)

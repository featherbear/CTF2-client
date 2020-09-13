
export const debounce = function (callback, duration) {
  var timer
  return function (event) {
    clearTimeout(timer)
    timer = setTimeout(function () {
      callback(event)
    }, duration)
  }
}

export const normalizeVector2 = function (vector) {
  vector.x = (vector.x / document.body.clientWidth) * 2 - 1
  vector.y = -(vector.y / window.innerHeight) * 2 + 1
}

import fetch from 'node-fetch'

export default function (base) {
  if (typeof base === 'undefined') {
    throw new Error('Not initialised')
  }
  const func = (url, opts) => fetch(base + '/' + url, opts)
  func.base = base
  return func
}

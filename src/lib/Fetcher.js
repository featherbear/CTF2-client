import fetch from 'node-fetch'

export default function (base) {
  if (typeof base === 'undefined') {
    throw new Error('Not initialised')
  }

  const func = (url, opts) => fetch(base + '/' + url, opts)
  func.base = base

  func.authHook = (scope, url, opts) =>
    func(url, opts).then(res => {
      if (res.status === 401) {
        return scope.redirect(302, '/login')
      } else if (res.status === 403) {
        return scope.error(403, 'Access denied')
      }
      return res
    })

  return func
}

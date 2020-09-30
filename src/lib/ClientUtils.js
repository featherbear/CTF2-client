export const auth = new (class {
  get token() {
    return localStorage.getItem('auth')
  }
  set token(token) {
    return localStorage.setItem('auth', token)
  }
})()

export function clientFetch(path, method, data) {
  return fetch(path, {
    method,
    headers: {
      'Content-Type': 'application/json'
    },
    ...(method.toLowerCase() != 'get'
      ? { body: JSON.stringify(data || {}) }
      : {})
  }).then(r => r.json())
}

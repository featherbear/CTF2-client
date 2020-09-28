const interval = 5000

//
import Fetcher from './Fetcher'
global.BACKEND_READY = false

export default {
  begin (ENDPOINT) {
    // Expose a fetch() wrapper for all CTF2 server endpoints
    const fetch = (global.CTF2_fetch = new Fetcher(ENDPOINT))

    /* Ping function */
    async function ping () {
      return fetch('hello').then(r => r.json())
    }

    /* Keep-alive poll */
    function poll (interval) {
      setTimeout(async () => {
        await ping()
          .then(() => {
            if (!global.BACKEND_READY) {
              console.info('Reconnected to the Project CTF² backend server')
            }
            global.BACKEND_READY = true
          })
          .catch(e => {
            if (global.BACKEND_READY) {
              console.warn('Lost connection to the Project CTF² backend server')
            }
            global.BACKEND_READY = false
          })
        poll(interval)
      }, interval)
    }

    // Initial connection
    ping()
      .then(d => {
        console.info('Connected to the Project CTF² backend server')
        global.BACKEND_READY = true
        poll(interval)
      })
      .catch(e => {
        // Handle initial error
        console.error(
          `Could not establish connection to the Project CTF² backend server, retrying in ${interval} ms`
        )
        setTimeout(() => this.begin(...arguments), interval)
      })
  }
}

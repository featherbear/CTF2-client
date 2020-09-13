import sirv from 'sirv'
import express from 'express'
import compression from 'compression'
import * as sapper from '@sapper/server'
import Fetcher from './lib/Fetcher'

const { PORT, NODE_ENV } = process.env
const dev = NODE_ENV === 'development'

require('dotenv').config()

const { CTF2_ENDPOINT } = process.env

if (!CTF2_ENDPOINT) {
  console.info('CTF2_ENDPOINT not set up! Please configure')
  process.exit(0)
} else {
  console.info(`Connecting to CTF² server at ${CTF2_ENDPOINT}`)

  const fetch = new Fetcher(CTF2_ENDPOINT)
  fetch('hello')
    .then(r => r.json())
    .then(d => {
      // Expose a fetch() wrapper for all CTF2 server endpoints
      global.CTF2_fetch = fetch
    })
    .catch(e => {
      console.error('Could not establish a connection to the server: ' + e.code)
    })
        .use(
          compression({ threshold: 0 }),
          sirv('static', { dev }),
          sapper.middleware({
            session: (req, res) => ({
              // TODO: Session
            })
          })
        )
        .listen(PORT, err => {
          if (err) console.log('error', err)
        })
    }
    )
}

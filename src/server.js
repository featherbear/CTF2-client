import sirv from 'sirv'
import express from 'express'
import compression from 'compression'
import * as sapper from '@sapper/server'
import fetch from 'node-fetch'

const { PORT, NODE_ENV } = process.env
const dev = NODE_ENV === 'development'

require('dotenv').config()

const { CTF2_ENDPOINT } = process.env

if (!CTF2_ENDPOINT) {
  console.info('CTF2_ENDPOINT not set up! Please configure')
  process.exit(0)
} else {
  console.info(`Connecting to endpoint at ${CTF2_ENDPOINT}`)
  fetch(`${CTF2_ENDPOINT}/hello`)
    .then(r => r.json())
    .then(d => {
      console.debug(d)

      return express()
        .use(
          compression({ threshold: 0 }),
          sirv('static', { dev }),
          sapper.middleware({
            session: (req, res) => {
              return ({
                CTF2_ENDPOINT,
                test: 2
              })
            }

          })
        )
        .listen(PORT, err => {
          if (err) console.log('error', err)
        })
    }
    )
}

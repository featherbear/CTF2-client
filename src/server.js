import sirv from 'sirv'
import express from 'express'
import compression from 'compression'
import * as sapper from '@sapper/server'
import { createProxyMiddleware } from 'http-proxy-middleware'
import BackendLink from './lib/BackendLink'

const { PORT, NODE_ENV } = process.env
const dev = NODE_ENV === 'development'

require('dotenv').config()

const { CTF2_ENDPOINT } = process.env

express()
  .use(
    compression({ threshold: 0 }),
    sirv('static', { dev }),
    createProxyMiddleware('/proxy', {
      target: CTF2_ENDPOINT,
      changeOrigin: true,
      pathRewrite: {
        '^/proxy': ''
      },
      logLevel: 'error'
    }),
    sapper.middleware({
      session: (req, res) => {
        return {
          // TODO: Session
        }
      }
    })
  )
  .listen(PORT, err => {
    if (err) {
      console.error('Error starting Project CTF² frontend server: ', err)
    } else {
      console.info('Project CTF² frontend server started')
    }
  })

if (!CTF2_ENDPOINT) {
  console.info('CTF2_ENDPOINT not set up! Please configure')
  process.exit(0)
} else {
  console.info(`Connecting to Project CTF² backend server at ${CTF2_ENDPOINT}`)
  BackendLink.begin(CTF2_ENDPOINT)
}

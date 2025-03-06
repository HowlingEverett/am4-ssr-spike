import * as express from 'express'
import { chromium } from 'playwright'

const app = express()

app.get('/chart-export', async (req, res) => {
  const browser = chromium.connectOverCDP('ws://localhost:3000/chrome?token=506d9fac-640b-45f1-b17d-47c5f9b933dc')
})

app.listen()

const express = require('express')
const playwright = require('playwright-core')

const app = express()

app.use('/static', express.static('src/public'))

app.get('/chart-export', async (req, res) => {
  const browser = await playwright.chromium.connect(
    'ws://localhost:3001/chromium/playwright?token=506d9fac-640b-45f1-b17d-47c5f9b933dc',
  )

  const page = await browser.newPage()

  await page.goto('http://host.docker.internal:3002/static/index.html', { waitUntil: 'networkidle' })

  const downloadPromise = page.waitForEvent('download')

  await page.evaluate(async () => {
    const exportChart = externalResolve => {
      chart.exporting.events.on('exportfinished', () => {
        setTimeout(externalResolve, 2000)
      })
      chart.exporting.export('pdf')
    }

    const startExportWhenReady = externalResolve => {
      if (chart.isReady()) {
        return exportChart(externalResolve)
      } else {
        chart.events.on('ready', exportChart)
      }
    }
    return new Promise(resolve => {
      if (document.readyState === 'complete') {
        return startExportWhenReady(resolve)
      } else {
        document.addEventListener('DOMContentLoaded', startExportWhenReady)
      }
    })
  })

  const download = await downloadPromise
  console.log(download.url())
  await download.saveAs(download.suggestedFilename())

  await new Promise(r => setTimeout(r, 3000))

  await browser.close()
  res.send('Finished exporting report')
})

app.listen(3002)

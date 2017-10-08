const express = require('express')
const { MongoClient } = require('mongodb')
const bodyParser = require('body-parser')
const url = 'mongodb://localhost/library'
const app = express()
app.use(bodyParser.json())

app.get('/notepad', (req, res) => {
  MongoClient.connect(url, (err, db) => {
    if (err) {
      console.error(err)
      res.sendStatus(500)
      process.exit(1)
    }
  })
})

app.listen(3000, () => {
  console.log('Web Api Listening on Port 3000!')
})

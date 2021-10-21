

const express = require('express')
const controller = require('./controller.js')
const app = express()
const port = 8080

app.use(express.static('/Users/jonhi1/Desktop/HRSF138/mini-apps/challenge_3/public'))

app.use(express.json());



app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

app.get('/records', (req, res) => {
  controller.get(res);
})

app.post('/records', function (req, res) {
  controller.post(res);
})

app.patch('/records/form1/:id/:name/:email/:password', function (req, res) {
  controller.patch.form1(req, res);
})

app.patch('/records/form2/:id/:address/:city/:state/:zip/:phoneNumber', function (req, res) {
  controller.patch.form2(req, res);
})
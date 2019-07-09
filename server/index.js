const express = require('express')
const colors = require('./json/colors')
const proxy = require('http-proxy-middleware')
const app = express()
const port = 3001

// console.log(colors[red]);

app.use('/api', proxy({target: 'http://localhost:3001', changeOrigin: true}))

app.get('/color/:color', (req, res) => res.json(colors[req.params.color]))

app.listen(port, () => console.log(`Example app listening on ${port}!`))

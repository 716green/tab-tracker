/*

This tutorial is the wrong versions of many packages and no longer works. This is too advanced for my current skill level.
I am ditching this lesson to start at a diffent lesson

*/
// WAS:
    // "start": "./node_modules/nodemon/bin/nodemon.js src/app.js --exec 'npm run lint && node'",
    // "lint": "./node_modules/.bin/eslint */**.js"
// NOW (Removed Linting):
  // "start": "./node_modules/nodemon/bin/nodemon.js src/app.js --exec 'npm run && node'",

// start client and server (do this in 2 separate terminal instances):
// // /client/$ npm run dev
// // /server/$ npm start

//https://youtu.be/Fa4cRMaTDUI?t=1955 (I get error, lesson doesn't)

//console.log('hello')
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

//const connect = require('connect')
const app = express()
//app.use(connect())

app.use(morgan('combine'))
app.use(bodyParser.json())
app.use(cors())




app.get('/status', (req, res) => {
  res.send({
    message: 'hello world!'
  })
})

app.listen(process.env.PORT || 8081)
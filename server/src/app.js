// WAS:
    // "start": "./node_modules/nodemon/bin/nodemon.js src/app.js --exec 'npm run lint && node'",
    // "lint": "./node_modules/.bin/eslint */**.js"
// NOW (Removed Linting):
  // "start": "./node_modules/nodemon/bin/nodemon.js src/app.js --exec 'npm run && node'",

// start client and server (do this in 2 separate terminal instances):
// // /client/$ npm run dev
// // /server/$ npm start

console.log('hello');
const express = require('express');

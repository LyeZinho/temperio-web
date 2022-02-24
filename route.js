
  const express = require('express');
  const routeApp = express.Router();
  const path = require('path');
  

  routeApp.get('/update/:temp/:hum/:flag/:nowdate/:key', (req, res) => {
    const apiKey = process.env['api_key']
    if (req.params.key == apiKey){

            const fs = require('fs')
            const dataJson = {
                temperature: req.params.hum,
                humidity: req.params.temp,
                flag: req.params.flag,
                date: req.params.nowdate
            }
            const jsonString = JSON.stringify(dataJson)
            fs.writeFile('./data.json', jsonString, err => {
                if (err) {
                    console.log('Error writing file', err)
                } else {
                    console.log('Successfully wrote file')
                }
            })
            res.send(200)
        }
        else{
            res.json({"error":"invalid-api-key"})
            res.status(511)
        }
  });


  //Rotas de entrega HTML
  

  
  routeApp.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/home.html'));
  });
  routeApp.get('/homescript', (req, res) => {
    res.sendFile(path.join(__dirname, '/functions.js'));
  });
  routeApp.get('/data', (req, res) => {
    res.sendFile(path.join(__dirname, '/data.json'));
  });
  //Rotas para receber requests API
  
  
  
  module.exports = routeApp;
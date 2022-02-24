const express = require('express');

const app = express();


const routeApp = require('./route.js')
app.use(routeApp);



/*
app.use(express.json())
app.post('/test',(req, res) =>{
  res.json(req.body)
  console.log(req.body)
})
*/

app.listen(3000, () => {
  console.log('server started');
});

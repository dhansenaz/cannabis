const express = require('express')
const bodyParser = require('body-parser')
const PORT = 4000;
const ctrl = require('./controller')

const app = express();

app.use(bodyParser.json());

app.use( express.static( `${__dirname}/../build` ) );

const path = require('path')
app.get('*', (req, res)=>{
  res.sendFile(path.join(__dirname, '../build/index.html'));
})

app.listen(PORT, () => console.log("You are running on port 4000"))

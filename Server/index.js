const express = require('express');
const app = express();
const cors = require('cors');

const port = 3010;

app.use(cors())
app.use(express.static(__dirname + '/../public'));


app.get('/', (req, res) => {
  res.send('hello')
})

app.listen(port, () => {
  console.log('listening on port :', port)
})
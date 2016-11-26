const bodyParser = require('body-parser');
const cors = require('cors');
const express = require('express');

const app = express();
const PORT = process.env.PORT || 8000;

app.use(bodyParser.json());
app.use(cors());
app.use(express.static('build'))

app.get('/api', (req, res) => {
  return res.json({"succes": "yo"});
});

app.get('*', (req, res) => {
  return res.json({"succes": "yo"});
});

app.listen(PORT, () => {
  console.log('Node app is running on port', PORT);
});

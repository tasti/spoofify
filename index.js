const bodyParser = require('body-parser');
const cors = require('cors');
const express = require('express');

const telnet = require('./telnet');
const jobmine = require('./templates/jobmine');

const app = express();
const PORT = process.env.PORT || 8000;

app.use(bodyParser.json());
app.use(cors());
app.use(express.static('build'));

app.post('/api/hillaryclinton', (req, res) => {
  // TODO
  return res.json({"status": "todo"});
});

app.post('/api/jobmine', (req, res) => {
  const {
    mailFrom,
    rcptTo,
    name,
    company,
    jobTitle,
    link,
  } = req.body;

  const body = jobmine(name, rcptTo, company, jobTitle, link);
  telnet('ceca@uwaterloo.ca', req.body.rcptTo, body);

  return res.json({"succes": true});
});

app.post('/api/nigerianprince', (req, res) => {
  // TODO
  return res.json({"status": "todo"});
});

app.post('/api/custom', (req, res) => {
  // TODO
  return res.json({"status": "todo"});
});

app.listen(PORT, () => {
  console.log('Node app is running on port', PORT);
});

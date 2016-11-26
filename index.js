const bodyParser = require('body-parser');
const cors = require('cors');
const express = require('express');

const telnet = require('./telnet');
const jobmine = require('./templates/jobmine');

const app = express();
const PORT = process.env.PORT || 8000;

app.use(bodyParser.json());
app.use(cors());
app.use(express.static('build'))

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
console.log('-body-start-');
console.log(body);
console.log('-body-end-');
  telnet('ceca@uwaterloo.ca', req.body.rcptTo, body);

  return res.json({"succes": "yo"});
});

app.post('/api/nigerianprince', (req, res) => {
  // console.log('body: ', req.body);
  // telnet(req.body.mailFrom, req.body.rcptTo, 'THIS WORKS OMG :DDD');
  // return res.json({"succes": "yo"});
});

app.post('/api', (req, res) => {
  console.log('body: ', req.body);
  telnet(req.body.mailFrom, req.body.rcptTo, 'THIS WORKS OMG :DDD');
  return res.json({"succes": "yo"});
});

app.get('*', (req, res) => {
  return res.json({"succes": "yo"});
});

app.listen(PORT, () => {
  console.log('Node app is running on port', PORT);
});

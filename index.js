const bodyParser = require('body-parser');
const cors = require('cors');
const express = require('express');

const app = express();
const PORT = process.env.PORT || 8000;

const victimName = "Meyyappan Nachiappan";
const victimEmail = "mnachiap@uwaterloo.ca";
const company = "Microsoft Corporation";
const jobTitle = "Chief Executive Officer";
const link = "http:/www.crashchrome.com/";

const body = `
From: Co-operative Education <ceca@uwaterloo.ca>
To: ${victimName} <${victimEmail}>
Subject: uW Pick Interview Slot 
Mime-Version: 1.0;
Content-Type: text/html; charset="ISO-8859-1";
Content-Transfer-Encoding: 7bit;

<html>
<body>
<p class="p1"><span class="s1">${victimName},</span></p>
<p class="p2">&nbsp;</p>
<p class="p1"><span class="s1">You&#39;ve been selected for an interview with ${company}, ${jobTitle}(#00306253). Click&nbsp;<a href="${link}"><span class="s2">here</span></a>&nbsp;to select a time slot</span><span class="s3">.</span></p>
<p class="p2">&nbsp;</p>
<p class="p1"><span class="s1">Please select an available time slot for this interview on JobMine under your &quot;Interviews&quot; link as soon as possible.</span></p>
<p class="p2">&nbsp;</p>
<p class="p1"><span class="s1">Be sure to check JobMine daily and the day of your interview so you are aware of last minute changes, interview room number/location, type of interview, etc.</span></p>
<p class="p2">&nbsp;</p>
<p class="p1"><span class="s1">PLEASE NOTE:</span></p>
<p class="p1"><span class="s1">In-person interview in the Tatham Centre</span></p>
<p class="p1"><span class="s1">arrive at least ten minutes before your scheduled interview time</span></p>
<p class="p1"><span class="s1">find a seat in the waiting area (Ground Level)</span></p>
<p class="p1"><span class="s1">watch for your name to appear on the overhead monitors</span></p>
<p class="p1"><span class="s1">when your name appears, report to the Paging Desk.</span></p>
<p class="p2">&nbsp;</p>
<p class="p1"><span class="s1">PLEASE NOTE:</span></p>
<p class="p1"><span class="s1">Make note of the time and the room number for Phone or Skype interviews as follows:</span></p>
<p class="p2">&nbsp;</p>
<p class="p1"><span class="s1">We have two Call Centres on the second floor, Call Centre 2203 and Call Centre 2201, and one Call Centre in the Lower Level.</span></p>
<p class="p2">&nbsp;</p>
<p class="p1"><span class="s1">- If your scheduled room number is TC 2203-17, proceed directly to Call Centre 2203, on the second level.</span></p>
<p class="p2">&nbsp;</p>
<p class="p1"><span class="s1">-If your scheduled room number is TC 2201A-L, proceed directly to Call Centre 2201, on the second level</span></p>
<p class="p2">&nbsp;</p>
<p class="p1"><span class="s1">-If the room number is TC 0201 or TC 0208, proceed to the Call Centre on the lower level.</span></p>

<p class="p2">&nbsp;</p>
<p class="p1"><span class="s1">Thank you.</span></p>
<p class="p2">&nbsp;</p>
<p class="p1"><span class="s1">Co-operative Education &amp; Career Action</span></p>
<p class="p1"><span class="s1">200 University Ave. West, Waterloo, Ontario, N2L 3G1</span></p>
<p class="p1"><span class="s1">519-888-4567</span></p>
</body>
</html>

.
`

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

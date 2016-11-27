import React from 'react';

import './App.css';

class App extends React.Component {
  send = () => {
    const mailFrom = document.getElementById('fromemail').value;
    const rcptTo = document.getElementById('toemail').value;
    const name = document.getElementById('toname').value;
    const company = document.getElementById('company').value;
    const jobTitle = document.getElementById('jobtitle').value;
    const link = document.getElementById('link').value;

    fetch('http://localhost:8000/api/jobmine', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        mailFrom,
        rcptTo,
        name,
        company,
        jobTitle,
        link,
      }),
    });
  };

  render() {
    return (
      <div className="App">
        <div>Spoofify</div>
        <div>(JobMine Version)</div>
        <div>From Email: <input disabled id="fromemail" placeholder="ceca@uwaterloo.ca" /></div>
        <div>To Email: <input id="toemail" /></div>
        <div>To Name: <input id="toname" /></div>
        <div>Company: <input id="company" /></div>
        <div>Job Title: <input id="jobtitle" /></div>
        <div>Link: <input id="link" /></div>
        <button onClick={this.send}>Send</button>
      </div>
    );
  }
}

export default App;

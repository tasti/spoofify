import React from 'react';

import './App.css';

class App extends React.Component {
  send = () => {
    const mailFrom = document.getElementById('from').value;
    const rcptTo = document.getElementById('to').value;
    const name = document.getElementById('toname').value;
    const company = document.getElementById('company').value;
    const jobTitle = document.getElementById('jobtitle').value;
    const link = document.getElementById('link').value;

    fetch('http://localhost:8000/api/jobmine', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        mailFrom,
        rcptTo,
        name,
        company,
        jobTitle,
        link,
      })
    });
  };

  render() {
    return (
      <div className="App">
        <div>Spoofify</div>
        From: <input id="from" />
        To: <input id="to" />
        To Name: <input id="toname" />
        Company: <input id="company" />
        Job Title: <input id="jobtitle" />
        Link: <input id="link" />
        <button onClick={this.send}>Send</button>
      </div>
    );
  }
}

export default App;

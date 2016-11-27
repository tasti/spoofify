const telnet = require('telnet-client');

const connection = new telnet();
const params = {host: 'mxer.uwaterloo.ca', port: 25, shellPrompt: /(\*+|postmaster@uwaterloo\.ca)/};

module.exports = (mailFrom, rcptTo, body) => {
  return connection.connect(params)
    .then((response) => {
      console.log(response);
    })
    .then((response) => {
      console.log(response);
      return connection.send('HELO mxer.uwaterloo.ca', {waitfor: 'you'});
    })
    .then((response) => {
      console.log(response);
      return connection.send(`MAIL FROM: ${mailFrom}`, {waitfor: 'ok'});
    })
    .then((response) => {
      console.log(response);
      return connection.send(`RCPT TO: ${rcptTo}`, {waitfor: 'ok'});
    })
    .then((response) => {
      console.log(response);
      return connection.send('DATA', {waitfor: 'itself'});
    })
    .then((response) => {
      console.log(response);
      return connection.send(`${body}\n.`, {waitfor: 'delivery'});
    })
    .then((response) => {
      console.log(response);
      return connection.send('QUIT', {waitfor: 'connection'});
    })
    .then((response) => {
      console.log(response);
      return connection.end();
    });
};

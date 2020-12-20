const moment = require('moment');

function formatMessage(username, text) {
  return {
    username,
    text,
    time: moment().add(5, 'hours').add(30, 'minutes').format('h:mm a')
  };
}

module.exports = formatMessage;

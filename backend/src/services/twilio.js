const twilio = require('twilio');

const client = new twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);

const sendSMS = (to, body) => {
  return client.messages.create({
    to,
    from: process.env.TWILIO_PHONE_NUMBER,
    body,
  });
};

module.exports = { sendSMS };
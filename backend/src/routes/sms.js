const express = require('express');
const router = express.Router();
const { sendSMS } = require('../services/twilio');

// Define route for sending SMS
router.post('/sms', (req, res) => {
  const { to, body } = req.body;
  sendSMS(to, body)
    .then(message => res.json({ success: true, message }))
    .catch(error => res.status(500).json({ success: false, error }));
});

module.exports = router;
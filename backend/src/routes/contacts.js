const express = require('express');
const router = express.Router();

// Define routes for contacts
router.get('/contacts', (req, res) => {
  res.send('Get all contacts');
});

module.exports = router;
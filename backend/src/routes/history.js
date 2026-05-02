const express = require('express');
const router = express.Router();

// Define route for SMS history
router.get('/history', (req, res) => {
  res.send('Get SMS history');
});

module.exports = router;
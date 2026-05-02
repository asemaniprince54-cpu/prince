const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use('/api', require('./routes/sms'));
app.use('/api', require('./routes/contacts'));
app.use('/api', require('./routes/history'));

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
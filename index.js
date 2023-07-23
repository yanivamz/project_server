require('dotenv').config();
const express = require('express');
const path = require('path');
const cors = require('cors')
const app = express();
const port = 5000;

app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());

app.get('/test', (req, res) => {
  res.send(process.env.NISIM);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

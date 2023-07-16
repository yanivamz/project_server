const express = require('express');
const path = require('path');
const cors = require('cors')
const app = express();
const port = 5000;

app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());

// Define routes
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.get('/about', (req, res) => {
  res.send('About page');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

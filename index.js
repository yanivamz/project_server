require('dotenv').config();
const express = require('express');
const path = require('path');
const cors = require('cors')
const app = express();
const port = 5000;
const mongoose = require('mongoose');
const Singer = require('./Singer')


const url = 'mongodb+srv://yanivamz:macabi11@cluster0.aidqfhh.mongodb.net/?retryWrites=true&w=majority';
mongoose.connect(url);

app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());

app.get('/test', (req, res) => {
  res.send(process.env.NISIM);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

const singers = new Singer ({ name: 'david', age: 25});
singers.save().then(() => console.log ('singer added..'));

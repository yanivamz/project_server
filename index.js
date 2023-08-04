require('dotenv').config();
const express = require('express');
const path = require('path');
const cors = require('cors')
const app = express();
const port = 5000;
const mongoose = require('mongoose');
const Models = require('./Models')
const { connectToMyMongoDB } = require('./db.js');

main();

async function main() {
	try {
		connectToMyMongoDB();
		await mongoose.disconnect();
	}
	catch (err) {
		console.error(err);
	}
}

app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());

app.get('/test', (req, res) => {
  res.send(process.env.NISIM);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

const models = new Models ({ name: 'yaniv', age: 33});
models.save().then(() => console.log ('model added..'));

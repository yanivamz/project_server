require('dotenv').config();
const express = require('express');
const path = require('path');
const cors = require('cors')
const app = express();
const port = 5000;
const Models = require('./Models')
const { connectToMyMongoDB } = require('./db.js');

connection();


async function connection() {
	try {
		await connectToMyMongoDB();
	}
	catch (err) {
		console.error(err);
	}
}

app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());

app.get('/models', async (req, res) => {
	try {
		const models = await Models.find();
		res.json(models);
	}
	catch (err) {
		console.error(err);
		res.sendStatus(500);
	}

});

app.get('/test', (req, res) => {
	res.send(process.env.NISIM);
});

// Start the server
app.listen(port, () => {
	console.log(`Server is running on port ${port}`);
});

//const models = new Models ({ name: 'yaniv', age: 33});
//models.save().then(() => console.log ('model added..'));

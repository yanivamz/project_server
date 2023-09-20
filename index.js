require('dotenv').config();
const express = require('express');
const path = require('path');
const cors = require('cors')
const app = express();
const port = 5000;
const { connectToMyMongoDB } = require('./db.js');
const User = require('./models/User.js');

app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());

connection();


function connection() {
	try {
		connectToMyMongoDB();
	}
	catch (err) {
		console.error(err);
	}
}



app.use('/Users', require('./routes/usersRoute.js'));
app.use('/products', require('./routes/productsRoute.js'));
app.use('/Orders', require('./routes/ordersRoute.js'));
app.use('/Categorys', require('./routes/categorysRoute.js'));

app.get('/test', (req, res) => {
	res.send(process.env.NISIM);
});

// Start the server
app.listen(port, () => {
	console.log(`Server is running on port ${port}`);
});

//const models = new Models ({ name: 'yaniv', age: 33});
//models.save().then(() => console.log ('model added..'));

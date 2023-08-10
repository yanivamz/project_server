require('dotenv').config();
const mongoose = require('mongoose');
const { connectToMyMongoDB } = require('./db.js');
const User = require('./models/User.js');
const Product = require('./models/Product.js');

main();

async function main() {
	try {
		connectToMyMongoDB();
		await initDB()
		await mongoose.disconnect();
	}
	catch (err) {
		console.error(err);
	}
}

async function initDB() {
	await deleteAll();

	await Promise.all([
		insertUser('nisim', 42),
		insertUser('shlomo', 13),
		insertUser('david', 65),
		insertProduct('milk', 10),
		insertProduct('bred', 15),
		insertProduct('shugar', 12),
		insertProduct('oliv oil', 30),
		insertProduct('solt', 8),
		insertProduct('eggs', 24),
		insertProduct('bamba', 7),
		insertProduct('bisli', 6),
		insertProduct('koka kola', 9),
	]);

	console.log('users inserted');
}

async function insertUser(name, age) {
	const user = await User.create({ name, age });
	console.log(`user saved:\n${user}`);
}

async function insertProduct(name, price) {
	const product = await Product.create({ name, price });
	console.log(`product saved:\n${product}`);
}

async function deleteAll() {
	await User.deleteMany({});
	await Product.deleteMany({});
	console.log('deletion complete');
}

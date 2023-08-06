require('dotenv').config();
const mongoose = require('mongoose');
const Models = require('./Models')
const { connectToMyMongoDB } = require('./db.js');

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
	await deleteAllModels();

	await Promise.all([
		insertModel('nisim', 42),
		insertModel('shlomo', 13),
		insertModel('david', 65),
	]);

	console.log('models inserted');
}

async function insertModel(name, age) {
	const model = await Models.create({ name, age });
	console.log(`model saved:\n${model}`);
}

async function deleteAllModels() {
	await Models.deleteMany({});
	console.log('deletion complete');
}

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
		insertProduct('חלב','חלב וביצים', 10,'/images/milk.jpg'),
		insertProduct('לחם','לחם ומאפים', 15,'/images/bread.jpg'),
		insertProduct('סוכר','תבלינים', 12,'/images/sugar.jpg'),
		insertProduct('שמן זית','שמן', 30,'/images/olive-oil.jpg'),
		insertProduct('מלח','תבלינים', 8,'/images/salt.jpg'),
		insertProduct('ביצים','חלב וביצים', 24,'/images/eggs.jpg'),
		insertProduct('במבה','חטיפים וממתקים', 7,'/images/bamba.jpg'),
		insertProduct('ביסלי','חטיפים וממתקים', 6,'/images/bisli.jpg'),
		insertProduct('קוקה קולה','משקאות', 9,'/images/coca-cola.jpg'),
		insertProduct('lemon','פירות וירקות', 5,'/images/lemon.jpg'),
		insertProduct('שום','פירות וירקות', 10,'/images/garlic.jpg'),
		insertProduct('גלידות','גלידות ושלגונים', 35,'/images/ice-cream.jpg'),
		insertProduct('נייר טואלט','נקיון וחד פעמי', 42,'/images/toilet-paper.jpg'),
		insertProduct('חמאה','חלב וביצים', 14,'/images/butter.jpg'),
		insertProduct('תפוח ירוק','פירות וירקות', 12,'/images/red-apple.jpg'),
		insertProduct('תפוח אדום','פירות וירקות', 17,'/images/green-apple.jpg'),
		insertProduct('מנגו','פירות וירקות', 11,'/images/mango.jpg')
	]);

	console.log('users inserted');
}

async function insertUser(name, age) {
	const user = await User.create({ name, age });
	console.log(`user saved:\n${user}`);
}

async function insertProduct(name, category,price, image) {
	const product = await Product.create({ name,category , price, image });
	console.log(`product saved:\n${product}`);
}

async function deleteAll() {
	await User.deleteMany({});
	await Product.deleteMany({});
	console.log('deletion complete');
}

require('dotenv').config();
const mongoose = require('mongoose');

if (process.env.MONGODB_URI) {
    mongoose.connect(process.env.MONGODB_URI);
} else {
    mongoose.connect('mongodb://localhost/musicards_db');
}

mongoose.connection.once('open', () => {
    console.log('Connected to MongoDB!');
});

mongoose.connection.on('error', (err) => {
    console.error('Oh no! You have an error!', err);
    process.exit(-1);
});

module.exports = mongoose;
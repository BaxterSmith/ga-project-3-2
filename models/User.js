const mongoose = require('../db/connection.js');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: String,
    age: Number
});

module.exports = mongoose.model('User', UserSchema);
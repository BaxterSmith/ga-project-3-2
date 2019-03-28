const mongoose = require('../db/connection.js');
const Schema = mongoose.Schema;

const CardSchema = new Schema({
    skillLevel: Number,
    category: String,
    question: String,
    answer: String
});

module.exports = mongoose.model('Card', CardSchema);
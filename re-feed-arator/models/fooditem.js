const mongoose = require('mongoose');
const itemSchema = require('./fooditemSchema');

module.exports = mongoose.model('Item', fooditemSchema);

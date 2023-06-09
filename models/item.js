const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const itemSchema = new Schema({
  name: {type: String, required: true},
  quantity: {type: Number, required: true},
});

module.exports = mongoose.model('Item', itemSchema);
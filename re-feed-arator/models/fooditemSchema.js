const Schema = require('mongoose').Schema;

const fooditemSchema = new Schema({
  name: { type: String, required: true },
  emoji: String,
}, {
  timestamps: true
});

module.exports = fooditemSchema;

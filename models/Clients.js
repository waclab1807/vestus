var mongoose = require('mongoose');

var ClientsSchema = new mongoose.Schema({
  name: String,
  lastName: String,
  note: String,
  birthDate: Date,
  address: String,
  phone: Number
});

module.exports = mongoose.model('Clients', ClientsSchema);
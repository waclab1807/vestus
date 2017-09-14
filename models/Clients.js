var mongoose = require('mongoose');

var ClientsSchema = new mongoose.Schema({
  name: String,
  lastName: String,
  note: String,
  birthDate: String,
  address: String,
  phone: Number,
  email: String,
  registerDate: Date,
  city: String,
  cardNr: String
});

module.exports = mongoose.model('Clients', ClientsSchema);

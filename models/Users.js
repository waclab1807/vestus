var mongoose = require('mongoose');

var UsersSchema = new mongoose.Schema({
  login: String,
  password: String
});

module.exports = mongoose.model('Users', UsersSchema);

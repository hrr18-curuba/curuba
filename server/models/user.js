const mongoose = require('mongoose');

const Schema = mongoose.Schema;

//Define user model
const userSchema = new Schema ({
  email: {type: String, unique: true, lowercase: true},
  password: String
});


//model class
const ModelClass = mongoose.model('user, userSchema');

module.exports = ModelClass;
'use strict';

var mongoose = require('../config/db').Mongoose,
    Schema = mongoose.Schema;

/**
  * @module  User
  * @description contain the details of User
*/

var UserSchema = new Schema({

  email: {
      type: String,
      required: true
  },
  password: {
      type: String,
      required: true
  },
  userName: {
      type: String
  }

});

UserSchema.plugin(require('passport-local-mongoose'), {
    usernameField: 'email',
    hashField: 'password',
    usernameLowerCase: true
});

var user = mongoose.model('user', UserSchema);

/** export schema */
module.exports = {
  User : user
};
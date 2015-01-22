'use strict';

var mongoose = require('mongoose'),
    bcrypt = require('bcrypt'),
    Schema = mongoose.Schema();

var UserSchema  = new Schema({
  firstname: {
    type: String,
    required: 'Enter your firstname'
  },
  lastname: {
    type: String
  },
  username: {
    type: String,
    unique: true,
    required: 'Enter a username'
  },
  email: {
    type: String,
    unique: true,
    required: 'enter  an email address'
  },
  pass: {
    type: String,
    required: true
  },
  created_on: {
    type: Date,
    defualt: Date.now
  }
});

// UserSchema.pre('save', function () {
//   var user = this;

//   bcrypt.hash()
// })
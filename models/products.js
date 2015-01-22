'use strict';

var mongoose = require('mongoose'),
    bcrypt = require('bcrypt'),
    Schema = mongoose.Schema();

var ProductSchema  = new Schema({
  name: {
    type: String,
    required: 'Enter product name'
  },
  description: {
    type: String
  },
  price: {
    type: Number,
    required: 'Enter a price'
  },
  quantity: {
    type: Number,
    default: 1
  },
  created_on: {
    type: Date,
    default: Date.now
  },
  updated_on: {
    type: Date,
    default: Date.now
  },
  seller: {
    type: Schema.ObjectId,
    ref: 'User'
  }
});

mongoose.model('Product', ProductSchema);
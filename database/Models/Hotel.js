const mongoose = require('mongoose');

const Hotel = mongoose.model(
  'Hotel',
  new mongoose.Schema({
    _id: Number,
    hotelName: String,
    photos: Array,
  })
);

module.exports = Hotel;
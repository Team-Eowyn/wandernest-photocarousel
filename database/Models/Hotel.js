const mongoose = require('mongoose');

const Hotel = mongoose.model(
  'Hotel',
  new mongoose.Schema({
    _id: Number,
    hotelName: String,
    photos:
    {
      type: mongoose.Schema.Types.Array,
      ref: 'Photo'
    }

  })
);

module.exports = Hotel;
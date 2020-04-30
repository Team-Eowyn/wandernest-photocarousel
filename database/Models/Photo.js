const mongoose = require('mongoose');

const Photo = mongoose.model(
  'Photo',
  new mongoose.Schema({
    photoPath: String,
    isManagement: Boolean,
    creator: String,
    creatorAvatar: String,
    uploadDate: Date,
    Review: String,
    Rating: Number,
  })
);

module.exports = Photo;
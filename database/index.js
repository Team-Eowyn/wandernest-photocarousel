const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/wandernest-photos', { useNewUrlParser: true, useUnifiedTopology: true });

mongoose.connection.on('connected', () => {
  console.log('Mongoose  successfully connected');
});

module.exports = {
  connection: mongoose.connection,
  Photo: require('./Models/Photo.js'),
  Hotel: require('./Models/Hotel.js')
};
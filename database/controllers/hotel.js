const db = require('../index.js');


let HotelController = {
  getAllHotels: function (callback) {
    db.Hotel.find({}, (err, results) => {
      if (err) {
        callback(err, null);
      } else {
        callback(null, results);
      }
    });
  },

  getHotelById: function (params, callback) {
    db.Hotel.findById(params.id, (err, results) => {
      if (err) {
        callback(err, null);
      } else {
        callback(null, results);
      }
    });
  }
};



module.exports = HotelController;
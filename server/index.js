const express = require('express');
const HotelController = require('../database/controllers/hotel.js');

let app = express();
app.use(express.static(__dirname + '/../public/'));
let port = 3000;


/* Hotels */
app.get('/api/hotels', (req, res) => {
  HotelController.getAllHotels((err, results) => {
    if (err) {
      res.status(400).send(err);
    } else {
      res.status(200).send(results);
    }
  });
});

app.get('/api/hotels/:id', (req, res) => {
  let params = req.params;
  HotelController.getHotelById(params, (err, results) => {
    if (err) {
      res.status(400).send(err);
    } else {
      res.status(200).send(results);
    }
  });
});

/* Server Start */
app.listen(port, function () {
  console.log(`Express listening on port [ ${port} ]`);
});


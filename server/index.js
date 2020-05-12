const express = require('express');
const HotelController = require('../database/controllers/hotel.js');
const path = require('path');

let app = express();
app.use(express.static(__dirname + '/../public/'));
let port = 3001;


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

app.get('*', (req, res) => res.sendFile(path.join(__dirname + '/../public/index.html')));


/* Server Start */
app.listen(port, function () {
  console.log(`Express listening on port [ ${port} ]`);
});

module.exports = app;
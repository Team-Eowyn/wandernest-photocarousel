const mongoose = require('mongoose');
const faker = require('faker');
const path = require('path');
const db = require('./index.js');



/* GENERATION OPTIONS */
const imgUrl = 'https://wandernest-photo-carousel.s3.us-east-2.amazonaws.com/';
const dbImageTotal = 120;
const hotelMax = 100;
const imageMax = 20;
const buckets = 6;


/*DB SEED*/
const seedData = () => {
  for (let h = 1; h < hotelMax + 1; h++) {

    let hotel = new db.Hotel({
      _id: h,
      hotelName: faker.company.companyName(),
      photos: []
    });

    let dbPhotos = [];
    let max = ((h % buckets) || buckets) * imageMax;
    let min = Math.abs(max - imageMax) + 1;

    for (let i = min; i <= max; i++) {

      let photo = {
        photoPath: `${imgUrl}Photo${i}.jpg`,
        creator: faker.name.findName(),
        creatorAvatar:faker.image.avatar(),
        uploadDate: faker.date.past().toLocaleString(),
        Review: faker.lorem.paragraph(),
        Rating: Math.ceil(Math.random() * 5),
      };
      hotel.photos.push(photo);
    }
        hotel.save().then(item => {
          console.log('Hotel #' + h + 'was created successfully');
        })
          .catch((err) => {
            console.log('Error savings hotel to DB: ', err);
        });
  }
};


seedData();




const mongoose = require('mongoose');
const faker = require('faker');
const path = require('path');
const db = require('./database');



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
      let isManagement = Math.random() >= 0.5;

      let photo = new db.Photo({
        photoPath: `${imgUrl}Photo${i}.jpg`,
        isManagement: isManagement,
        creator: isManagement ? 'Management' : faker.name.findName(),
        creatorAvatar: isManagement ? 'managementIcon' : faker.image.avatar(),
        uploadDate: faker.date.past().toLocaleString(),
        Review: faker.lorem.paragraph(),
        Rating: isManagement ? null : Math.ceil(Math.random() * 5),
      });

      dbPhotos.push(
        photo.save()
          .then(item => {
            return Promise.resolve(item);
          })
          .catch(err => {
            console.log('Error savings photo to DB: ', err);
          })
      );
    }

    Promise.all(dbPhotos)
      .then((results) => {
        hotel.photos.push(results);
        hotel.save().then(item => {
          console.log('Hotel #' + h + 'was created successfully');
        })
          .catch((err) => {
            console.log('Error savings hotel to DB: ', err);
          });
      })
      .catch((err) => {
        console.error(err);
      });
  }
};


seedData();




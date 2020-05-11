const request = require('supertest')
const app = require('../server/index.js')

describe('GET /hotels', function() {
  it('responds with 200', function() {
    return request(app)
      .get('/hotels')
      .set('Accept', 'application/json')
      .expect(200)
  });
});
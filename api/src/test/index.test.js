const server = require('../../app');
const request = require('supertest')(server);
const expect = require('chai').expect;

describe('Notes API', () => {
  describe('GET /demo', () => {
    it('Status equal 200', async () => {
      const response = await request.get('/demo');
      expect(response.status).to.eql(200);
    })
    it('Expect string equal its okey', async () => {
      const response = await request.get('/demo');
      expect(response.text).to.eql('Its okey');
    })
  });

  describe('GET /text', () => {
    it('Hay textos', async (done) => {
      const response = await request.get('/text');
      expect(response.status)
        .to
        .eql(200)
        .done((err,done) => {
          err ? done(err) : done();
        });
      
    })
  })
})

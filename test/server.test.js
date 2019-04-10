var app = require('../server/server')
var request = require('supertest')
var expect = require('chai').expect

// TODO: make tests for the other CRUD routes
// DELETE, UPDATE, PUT, GET ONE
// to run the test type mocha server/specs.js

describe('[LIONS]', function () {

  it('should get all lions', function (done) {
    request(app)
      .get('/lions')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .end(function (err, resp) {
        expect(resp.body).to.be.an('array')
        done()
      })
  })

  it('POST lion API', function (done) {
    request(app)
      .post('/lions')
      .send({
        name: 'Alice',
        age: 1,
        pride: 'Secret lion',
        gender: 'female'
      })
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(201)
      .end(function (err, res) {
        expect(res.body).to.be.an('object')
        expect(res.body.name).to.equal('Alice')
        expect(res.body.age).to.equal(1)
        expect(res.body.pride).to.equal('Secret lion')
        expect(res.body.gender).to.equal('female')
        done()
      })
  })

  it('GET lion API', function (done) {
    request(app)
      .get('/lions/1')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .end(function (err, resp) {
        expect(resp.body).to.be.an('object')
        done()
      })
  })

  it('PUT lion API', function (done) {
      request(app)
      .post('/lions')
      .send({
        name: 'Alice',
        age: 1,
        pride: 'Secret lion',
        gender: 'female'
      })
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(201)
      .end(function (err, res) {
        const lion = res.body
        request(app)
          .put('/lions/' + lion.id)
          .send({
            name: 'Bob'
          })
          .set('Accept', 'application/json')
          .expect('Content-Type', /json/)
          .expect(200)
          .end(function (err, resp) {
            expect(resp.body.name).to.equal('Bob')
            done()
          })
      })
  })

  it('DELETE lion API', function (done) {
    request(app)
      .post('/lions')
      .send({
        name: 'Alice',
        age: 1,
        pride: 'Secret lion',
        gender: 'female'
      })
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(201)
      .end(function (err, res) {
        const lion = res.body
        request(app)
          .delete('/lions/' + lion.id)
          .set('Accept', 'application/json')
          .expect('Content-Type', /json/)
          .expect(200)
          .end(function (err, resp) {
            expect(resp.body).to.eql(lion)
            done()
          })
      })
  })
})

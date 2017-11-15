var chai = require('chai');
var chaiHttp = require('chai-http');
var app = require('../app');

chai.use(chaiHttp);
var expect = chai.expect;

describe('Our First HTTP mock test', function(){

  it('testing our get api', function(done){
    chai.request(app)
      .get('/api')
      .end(function (err, res){
        expect(res).to.have.status(200);
        done();
      });
  });

  it('testing our post api', function(done){
    chai.request(app)
      .post('/api')
      .end(function (err, res){
        expect(res).to.have.status(200);
        done();
      });
  });

});
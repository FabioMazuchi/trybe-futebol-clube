import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');
import { app } from '../app';
import User from '../database/models/usersModel';
import { Response } from 'superagent';

chai.use(chaiHttp);

const { expect } = chai;

describe('POST /login SUCESSO', () => {
  const fakeUser = {
    id: 4,
    username: "User #4",
    password: "secret" 
  }
  type token = 'fake_token';

  const fakeToken: token = 'fake_token';

  let chaiHttpResponse: Response;

  before(async () => {
    sinon.stub(User, 'findOne').resolves(fakeUser as User);
  });

  after(()=>{
    (User.findOne as sinon.SinonStub).restore();
  })

  it('a requisição seja respondida com status 200 e com token de autenticação', async () => {
    chaiHttpResponse = await chai.request(app).post('/login').send({
      email: "email@email.com",
      password: "secret"
    })

    expect(chaiHttpResponse).to.have.status(200);
  });
});

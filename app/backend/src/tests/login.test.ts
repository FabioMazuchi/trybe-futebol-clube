import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');
import { app } from '../app';
import User from '../database/models/usersModel';
import { Response } from 'superagent';
import * as jwt from 'jsonwebtoken';

chai.use(chaiHttp);

const { expect } = chai;

describe('POST /login SUCESSO', () => {
  const fakeUser = {
    id: 4,
    email: "email@email.com",
    password: "secret" 
  }

  const fakeToken: unknown = 'fake_token';

  let chaiHttpResponse: Response;

  before(async () => {
    sinon.stub(User, 'findOne').resolves(fakeUser as User);
    sinon.stub(jwt, 'sign').returns(fakeToken as void)
  });

  after(()=>{
    (User.findOne as sinon.SinonStub).restore();
    (jwt.sign as sinon.SinonStub).restore();
  })

  it('a requisição seja respondida com status 200 e com token de autenticação', async () => {
    chaiHttpResponse = await chai.request(app).post('/login').send({
      email: "email@email.com",
      password: "secret"
    })

    expect(chaiHttpResponse).to.have.status(200);
    expect(chaiHttpResponse.body).to.be.deep.equal({ token: fakeToken })
  });
});

describe('POST /login ERRO', () => {
  describe('Teste campos vazio ou inválidos', () => {
    const fakeUser = {
      email: "teste@email.com",
      password: "secret" 
    }
  
    let chaiHttpResponse: Response;
  
    before(async () => {
      sinon.stub(User, 'findOne').resolves(fakeUser as User);
    });
  
    after(()=>{
      (User.findOne as sinon.SinonStub).restore();
    })
  
    it('se o login não tiver o campo "email" deve ser retornado um status 400 e a mensagem "All fields must be filled"', async () => {
      chaiHttpResponse = await chai.request(app).post('/login').send({
        email: "",
        password: "secret"
      })
  
      expect(chaiHttpResponse).to.have.status(400);
      expect(chaiHttpResponse.body).to.be.deep.equal({ message: 'All fields must be filled' });
    });
  
    it('se o login não tiver o campo "password" deve ser retornado um status 400 e a mensagem "All fields must be filled"', async () => {
      chaiHttpResponse = await chai.request(app).post('/login').send({
        email: "email@email.com",
        password: ""
      })
  
      expect(chaiHttpResponse).to.have.status(400);
      expect(chaiHttpResponse.body).to.be.deep.equal({ message: 'All fields must be filled' });
    });
  });

  describe('Teste campos incorretos', () => {
    let chaiHttpResponse: Response;
  
    before(async () => {
      sinon.stub(User, 'findOne').resolves(null);
    });
  
    after(()=>{
      (User.findOne as sinon.SinonStub).restore();
    });

    it('se o campo "email" for incorreto retorna um status 401 e a mensagem "Incorrect email or password"', async () => {
      chaiHttpResponse = await chai.request(app).post('/login').send({
        email: "email@email",
        password: "secret"
      })
  
      expect(chaiHttpResponse).to.have.status(401);
      expect(chaiHttpResponse.body).to.be.deep.equal({ message: 'Incorrect email or password' });
    });

      it('se o campo "password" for incorreto retorna um status 401 e a mensagem "Incorrect email or password"', async () => {
      chaiHttpResponse = await chai.request(app).post('/login').send({
        email: "email@email.com",
        password: "12345"
      })
  
      expect(chaiHttpResponse).to.have.status(401);
      expect(chaiHttpResponse.body).to.be.deep.equal({ message: 'Incorrect email or password' });
    });
  })
});


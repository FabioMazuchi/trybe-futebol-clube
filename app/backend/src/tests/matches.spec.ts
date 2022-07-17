import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');
import { app } from '../app';
import Matches from '../database/models/matchesModel';
import { Response } from 'superagent';
import * as jwt from 'jsonwebtoken';

chai.use(chaiHttp);

const { expect } = chai;

describe('GET /matches SUCESSO', () => {
  let chaiHttpResponse: Response;
  const fakeMatches = [{ 
    id: 1,
    homeTeam: 1,
    homeTeamGoals: 2,
    awayTeam: 3,
    awayTeamGoals: 1,
    inProgress: true,
  }
];

  before(() => {
    sinon.stub(Matches, 'findAll')
      .resolves(fakeMatches as Matches[])
  });

  after(() => {
    (Matches.findAll as sinon.SinonStub)
      .restore();
  })

  it('a requisição retorna um status 200 com a resposta [{ id: 1, homeTeam: 1, homeTeamGoals: 2, awayTeam: 3, awayTeamGoals: 1, inProgress: true,}]', async () => {
    chaiHttpResponse = await chai.request(app).get('/matches');
		
    expect(chaiHttpResponse.status).to.be.equal(200);
    expect(chaiHttpResponse.body).to.be.eql(fakeMatches)
  });
});

describe('POST /matches ERRO', () => {
  let chaiHttpResponse: Response;
  const fakeUser: unknown = {
    email: "user@email.com",
    password: "secret_password" 
  }

  const fakeMatch = { 
    id: 1,
    homeTeam: 1,
    homeTeamGoals: 2,
    awayTeam: 3,
    awayTeamGoals: 1,
    inProgress: true,
  };

  before(() => {
    sinon.stub(jwt, 'verify').returns(fakeUser as void);
    sinon.stub(Matches, 'create').resolves(fakeMatch as Matches)
  });

  after(() => {
    (Matches.create as sinon.SinonStub).restore();
    (jwt.verify as sinon.SinonStub).restore();
  })

  it('a requisição retorna um status 401 com a menagem "Token must be a valid token"', async () => {
    chaiHttpResponse = await chai.request(app).post('/matches').send({
      "homeTeam": 1,
      "awayTeam": 2, 
      "homeTeamGoals": 3,
      "awayTeamGoals": 1
    })
		
    expect(chaiHttpResponse.status).to.be.equal(401);
    expect(chaiHttpResponse.body).to.be.deep.equal({ message: 'Token must be a valid token' })
  });
});



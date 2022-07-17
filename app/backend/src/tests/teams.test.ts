import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');
import { app } from '../app';
import Teams from '../database/models/teamsModel';
import { Response } from 'superagent';

chai.use(chaiHttp);

const { expect } = chai;

describe('GET /teams SUCESSO', () => {
  let chaiHttpResponse: Response;
  const fakeTeams = [{ id: 4, teamName: 'Corinthians' }];

  before(() => {
    sinon.stub(Teams, 'findAll')
      .resolves(fakeTeams as Teams[])
  });

  after(() => {
    (Teams.findAll as sinon.SinonStub)
      .restore();
  })

  it('a requisição retorna um status 200 com a resposta [{ id: 4, teamName: "Corinthians" }]', async () => {
    chaiHttpResponse = await chai.request(app).get('/teams');
		
    expect(chaiHttpResponse.status).to.be.equal(200);
    expect(chaiHttpResponse.body).to.be.eql(fakeTeams)
  });
});

describe('GET /teams/:id SUCESSO', () => {
  let chaiHttpResponse: Response;
  const fakeTeams = [{ id: 4, teamName: 'Corinthians' }];

  before(() => {
    sinon.stub(Teams, 'findAll')
      .resolves(fakeTeams as Teams[])
  });

  after(() => {
    (Teams.findAll as sinon.SinonStub)
      .restore();
  })

  it('a requisição retorna um status 200 com a resposta [{ id: 4, teamName: "Corinthians" }]', async () => {
    chaiHttpResponse = await chai.request(app).get('/teams/4');
		
    expect(chaiHttpResponse.status).to.be.equal(200);
    expect(chaiHttpResponse.body).to.be.eql(fakeTeams)
  });
});

describe('GET /teams/:id ERRO', () => {
  let chaiHttpResponse: Response;
  const messageBody = { message: 'Team not found' };

  before(() => {
    sinon.stub(Teams, 'findByPk')
      .resolves(null)
  });

  after(() => {
    (Teams.findByPk as sinon.SinonStub)
      .restore();
  })

  it('a requisição retorna um status 400 com a mensagem "Team not found"', async () => {
    chaiHttpResponse = await chai.request(app).get('/teams/999');
		
    expect(chaiHttpResponse.status).to.be.equal(400);
    expect(chaiHttpResponse.body).to.be.deep.equal(messageBody)
  });
});



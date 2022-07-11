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
  const fakeTeams = [{ id: 123, team_name: 'Bragantino' }];

  before(() => {
    sinon.stub(Teams, 'findAll')
      .resolves(fakeTeams as Teams[]) // para async
  });

  after(() => {
    (Teams.findAll as sinon.SinonStub)
      .restore();
  })

  it('a requisição retorna um status 200 com a resposta [{ id: 123, team_name: "Bragantino" }]', async () => {
    chaiHttpResponse = await chai.request(app).get('/teams');
		
    expect(chaiHttpResponse.status).to.be.equal(200);
    expect(chaiHttpResponse.body).to.be.eql(fakeTeams)
  });
});



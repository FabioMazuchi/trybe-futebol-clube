import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');
import { app } from '../app';
import Matches from '../database/models/matchesModel';
import { Response } from 'superagent';

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



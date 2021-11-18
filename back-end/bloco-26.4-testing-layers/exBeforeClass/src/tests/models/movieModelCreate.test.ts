import { expect } from 'chai';
import { describe, it } from 'mocha';
import sinon from 'sinon';
import { MongoMemoryServer } from 'mongodb-memory-server';
import { MongoClient } from 'mongodb';
import MoviesModel from '@models/MoviesModel';

describe('Insert a new movie in DB', () => {
  const payloadMovie = {
    title: 'Example Movie',
    directedBy: 'Eric Kreis',
    releaseYear: 2015,
  };
  
  before(async () => {
    const DBServer = new MongoMemoryServer();
    const URIMock = await DBServer.getUri();
    const connectionMock = (await new MongoClient(URIMock).connect()).db('model_example');
    
    sinon.stub(MongoClient, 'connect').resolves(connectionMock);
  });

  after(async () => {
    sinon.restore();
  });

  describe('when is inserted with success', () => {
    it('returns an object', async () => {
      const response = await MoviesModel.create(payloadMovie);

      expect(response).to.be.a('object');
    });

    it('the object have the property "id" of the inserted movie', async () => {
      const response = await MoviesModel.create(payloadMovie);

      expect(response).to.have.property('id');
    });
  });
});

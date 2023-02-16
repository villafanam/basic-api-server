'use strict';

const { app } = require('../src/server');
const supertest = require('supertest');
const { sequelizeDatabase } = require('../src/models');
const request = supertest(app);

beforeAll(async () => {
  await sequelizeDatabase.sync();
});

afterAll(async () => {
  await sequelizeDatabase.drop();
});

describe('REST API', () => {
  it('creates a customer', async () => {
    let response = await request.post('/customer').send({
      name: 'Tester',
      age: 42,
      pronouns: 'they/them',
    });

    expect(response.status).toEqual(200);
    expect(response.body.name).toEqual('Tester');
    expect(response.body.age).toEqual(42);
    expect(response.body.pronouns).toEqual('they/them');
    expect(response.body.id).toBeTruthy();
  });

  it('Gets all customers', async () => {
    let response = await request.get('/customer');

    expect(response.status).toEqual(200);
    expect(response.body[0].name).toEqual('Tester');
    expect(response.body[0].age).toEqual(42);
    expect(response.body[0].pronouns).toEqual('they/them');
    expect(response.body[0].id).toBeTruthy();
  });

  it('Get one customer', async () => {
    let response = await request.get('/customer/1').query({id: 1});

    expect(response.status).toEqual(200);
    expect(response.body.name).toEqual('Tester');
    expect(response.body.age).toEqual(42);
    expect(response.body.pronouns).toEqual('they/them');
    expect(response.body.id).toBeTruthy();
  });

  it('Update one customer', async () => {
    let response = await request.put('/customer/1').query({id: 1}).send({name: 'newTester'});

    expect(response.status).toEqual(200);
    expect(response.body.name).toEqual('newTester');
    expect(response.body.age).toEqual(42);
    expect(response.body.pronouns).toEqual('they/them');
    expect(response.body.id).toBeTruthy();
  });

  it('Delete one customer', async () => {
    let response = await request.delete('/customer/1').query({id: 1});

    expect(response.status).toEqual(200);
    expect(response.text).toEqual('Customer Deleted!');
    
  });

  test('handles invalid request route', async () => {
    const response = await request.get('/foo');

    expect(response.status).toEqual(404);
  });

  test('handles invalid request method', async () => {
    const response = await request.post('/customer/1');

    expect(response.status).toEqual(404);
  });

});
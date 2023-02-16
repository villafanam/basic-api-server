# LAB - Class 03

## Project: basic-api-server

### Author: Marco Villafana

### Problem Domain  

Build a REST API using Express, by creating a proper series of endpoints that perform CRUD operations on a database, using the REST standard

### Links and Resources

- [GitHub Actions ci/cd](https://github.com/rkgallaway/server-deployment-practice-d51/actions) 
- [GitHub PR]()
- [back-end server url](http://xyz.com)


### Setup

#### `.env` requirements 

- `PORT=3001`
- `DATABASE_URL=postgres://localhost:5432/api-app`

#### How to initialize/run your application (where applicable)

- e.g. `npm start`

#### How to use your library (where applicable)

#### Features / Routes

- Feature One: Details of feature
- GET : `/customer` - Get all customers
- GET : `/customer/1` - Get one customer
- POST : `/customer` - Create a customer
- PUT : `/customer/1` - Update one customer
- Delete : `/customer/1` - Delete one customer

#### Tests

- `npm test` in terminal to run tests
- tests
  - Create a customer
  - Get all customers
  - Get one customer
  - Update one customer (Incomplete)
  - Delete one customer
  - handles invalid request route
  - handles invalid request method

#### UML

![Lab 03 UML](/assests/lab03_uml.png)

#### Attribution

[Class 03 GitHub Repo](https://github.com/codefellows/seattle-code-javascript-401d51/tree/main/class-03)

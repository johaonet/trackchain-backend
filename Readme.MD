# REST API with Node using Typescript

This is a simple REST API developed using node and express with typescript

![alt text](https://image.ibb.co/nAd9OF/logos.png "Node Typescript")


## Requirements

[Node.js](https://nodejs.org/en/)

### Getting Started


### Run the app locally

- git clone https://github.com/johaonet/trackchain-backend.git

- `npm install`
- `npm run start` - This will start the application and run on port 4004
- `npm run dev` - This will start the application in development mode


## Folder Structure

```
src
└───index.ts          # Application entry point
└───routes            # Application routes / endpoints
└───controllers       # Express route controllers for all the endpoints of the app
└───repositories      # All the database interaction logic is here
└───data              # data
└───handlers          # Common logic
└───logs              # application logs
└───models            # DB Models

```

## Features

- CRUD operations for boks 
- Error Logs
- Setup docs 

## Planned

- \[ ] JWT login
- \[ ] Unit Testing
- \[x] Postman collections
- \[ ] Improve request Object Validations
- \[ ] Improve Error Messages for request failures
- \[ ] Security
- \[ ] Hosting

## REST Services

The application exposes a few REST endpoints

`HTTP` `GET` /api/book

`HTTP` `GET` /api/book/:id

`HTTP` `PUT` /api/book/:id

`HTTP` `POST` /api/book


## Recommended / Preferred

[VSCode](https://code.visualstudio.com/download)


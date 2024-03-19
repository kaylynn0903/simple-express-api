# SIMPLE-EXPRESS-API DEMO

## Description

This is a express api demo, connected to PostgreSQL database.\
Please read `.env` file for PostgreSQL configuration.\
Please read and run `./database/init.sql` file for PostgreSQL initialization.

1. GET /message
2. POST /message
3. PATCH /message
4. DELETE /message

## Prerequisite

Node.js v16.16.0\
PostgreSQL v16.2

## How to run in dev mode

`npm run start`

## How to build production code

`npm run build`

## How to run production code

`node ./build/index.js`

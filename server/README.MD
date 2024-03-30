# API Docuemntation
Stoplight https://antonymaciel.stoplight.io/studio/personal-server

# Stack
-   Server: express
-   Database: postgres
-   Database migrations: db-migrate
-   ORM: sequilize https://sequelize.org/
-   Comands: TODO
-   Containerization: TODO
-   Code Formatter: TODO
-   Teting: TODO

# Node version
```shell
node 18.7.0
npm 8.18.0
```

# Setup
```shell
npm install
npm run db:migrate
TODO db:seed
npm start:debug
```

# Scripts
Run tests
```shell
npm test
```

# Migrations
Create migrations
```shell
db-migrate create {migration-name}
```
Execute migrations
```shell
db:migrate
```
Revert last migration
```shell
db:migrate:down
```

## Containerization

Create image: docker build -t personal-server .
Run image: docker  run  -p 3000:3000 -p 5432:5432  personal-server

## Code Formatter

Linter: Validator
Prettier: Formatter

# TODO
## Comands

Queue package for NodeJS
-   https://github.com/optimalbits/bull   
-   https://www.npmjs.com/package/bull

## Testing

Jest

## Deploy

AWS

## Cache

Redis

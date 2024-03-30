const dotenv = require('dotenv');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { init, getDbClient } = require('./shared/db');
// const { User } = require('./shared/models');
const routes = require('./server/routes');
const createInternalParams = require('./server/lib/middleware/createInternalParams/createInternalParams');

dotenv.config();
const app = express();
const port = process.env.APP_PORT;
init();

const dbClient = getDbClient();

dbClient.db
  .sync()
  .then(() => {
    console.info('Connection has been established successfully.'); // eslint-disable-line no-console
  })
  .catch(err => {
    console.error('Server failed to start due to error: %s', err); // eslint-disable-line no-console
  });

/* app.get('/', (req, res) => {
  const client = getDbClient();
  let query = `Select * from "Users"`;
  debugger;

  client.query(query, (err, result)=>{
      if(!err){
          console.log(result.rows);
          res.send(result.rows[0].id)
      } else{
          console.log(err.message)
      }
      client.end;
  })
}) */

// Enable Cross origin resource sharing and Pre-Flight requests
app.use(cors({ origin: ['https://localhost:3000'] }));
app.use(createInternalParams);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use((req, res, next) => {
  console.log('logg: method ', req.method);
  next();
});

app.get('/', async (req, res) => {
  try {
    await dbClient.db.authenticate();
    res.send('Connection has been established successfully REST.');
  } catch (error) {
    res.send('Unable to connect to the database:', error);
  }
});

app.get('/test', async (req, res) => {
  console.log(dbClient);
  const users = await dbClient.User.findAll();

  res.send(users[0].id);
});

app.get('/other-test', async (req, res, next) => {
  try {
    console.log(dbClient);
    const users = await dbClient.User.findAll();
    res.send(users[0].id);
  } catch (error) {
    console.log(error);
    next(new Error('system fail 2'));
  }
});

app.get('/hello', (req, res) => {
  res.send('Hiii!');
});

// test route
app.use(routes);

// eslint-disable-next-line no-unused-vars
app.use((error, req, res, next) => {
  console.log(`error message ${error?.message}`); // log the error msg
  console.log(`error status ${error?.status}`); // log the error status
  const status = error?.status || 500;
  res.status(status).json('Error test' + error.message + ' ' + error.stack);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

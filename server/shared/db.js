// const { Client } = require('pg');
const { Sequelize, DataTypes } = require('sequelize');
const fs = require('fs');
const path = require('path');

const schema = {};

const init = () => {
  /* client = new Client({
    host: "localhost",
    port : 5432,
    user: "uco",
    password: "",
    database: "personal_db"
  })

  client.connect(); */

  const db = new Sequelize(
    process.env.DB_DATABASE,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
      host: process.env.DB_HOST,
      dialect: 'postgres',
      logging: false,
      protocol: 'postgres',
      pool: { maxConnections: 5, maxIdleTime: 30 },
      language: 'en',
      sync: {
        force: false
      },
      define: {
        timestamps: false
      }
    }
  );

  const modelsDir = path.join(__dirname, path.join('models'));

  fs.readdirSync(modelsDir)
    .filter(
      file =>
        file.indexOf('.map') === -1 &&
        file.indexOf('.') !== 0 &&
        file !== 'index.js'
    )
    .forEach(file => {
      const modelPath = path.join(modelsDir, file);
      const model = require(modelPath)(db, DataTypes);
      schema[model.name] = model;
    });

  Object.keys(schema).forEach(modelName => {
    if ('associate' in schema[modelName]) {
      schema[modelName].associate(schema);
    }
  });

  schema.db = db;
  schema.Sequelize = Sequelize;
};

const getDbClient = () => schema;

module.exports = { init, getDbClient };

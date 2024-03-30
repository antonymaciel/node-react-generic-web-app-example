const { getDbClient } = require('../../../../shared/db');

const dbClient = getDbClient();

module.exports = async data => {
  return await dbClient.Page.create(data);
};

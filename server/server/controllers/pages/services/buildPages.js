const { getDbClient } = require('../../../../shared/db');

const dbClient = getDbClient();

module.exports = async () => {
  return await dbClient.Page.findAll({ include: 'sections' });
};

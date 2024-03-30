const { getDbClient } = require('../../../../shared/db');

const dbClient = getDbClient();

module.exports = async pageId => {
  return await dbClient.Section.findAll({ where: { pageId } });
};

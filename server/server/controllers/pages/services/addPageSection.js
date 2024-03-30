const { getDbClient } = require('../../../../shared/db');

const dbClient = getDbClient();

module.exports = async (pageId, data) => {
  return await dbClient.Section.create({ pageId, ...data });
};

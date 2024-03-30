const { getDbClient } = require('../../../../shared/db');

const dbClient = getDbClient();

module.exports = async sectionId => {
  return await dbClient.Section.destroy({ where: { id: sectionId } });
};

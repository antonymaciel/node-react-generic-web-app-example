const { getDbClient } = require('../../../../shared/db');

const dbClient = getDbClient();

module.exports = async email => {
  const user = await dbClient.User.findOne({ where: { email } });

  return user;
};

const { getDbClient } = require('../../../../shared/db');

const dbClient = getDbClient();

const findPage = async pageId => {
  return await dbClient.Page.findByPk(pageId);
};

module.exports = () => async (req, res, next) => {
  try {
    const pageId = req.params.pageId || req.internalParams.pageId;

    const page = await findPage(pageId);

    if (!page) {
      next(new Error('Page not exists'));
    }

    req.internalParams.page = page;

    next();
  } catch (error) {
    next(error);
  }
};

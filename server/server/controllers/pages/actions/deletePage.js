const { removePage } = require('../services');

module.exports = async (req, res, next) => {
  const {
    params: { pageId }
  } = req;

  try {
    await removePage(pageId);

    res.end();
  } catch (error) {
    next(error);
  }
};

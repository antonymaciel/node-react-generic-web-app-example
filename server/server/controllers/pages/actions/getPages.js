const { buildPages } = require('../services');

module.exports = async (req, res, next) => {
  try {
    const pages = await buildPages();

    res.send(pages);
  } catch (error) {
    next(error);
  }
};

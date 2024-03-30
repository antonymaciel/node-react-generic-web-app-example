const { buildSections } = require('../services');

module.exports = async (req, res, next) => {
  const {
    params: { pageId }
  } = req;

  try {
    const sections = await buildSections(pageId);

    res.send(sections);
  } catch (error) {
    next(error);
  }
};

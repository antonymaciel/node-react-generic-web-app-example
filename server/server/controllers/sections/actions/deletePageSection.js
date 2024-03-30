const { removeSection } = require('../services');

module.exports = async (req, res, next) => {
  const {
    params: { sectionId }
  } = req;

  try {
    await removeSection(sectionId);

    res.end();
  } catch (error) {
    next(error);
  }
};

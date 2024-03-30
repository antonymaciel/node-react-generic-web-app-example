const { patchAndFetchSection } = require('../services');

module.exports = async (req, res, next) => {
  const {
    body,
    internalParams: { section }
  } = req;

  try {
    const updatedSection = await patchAndFetchSection(section, body);

    res.send(updatedSection);
  } catch (error) {
    next(error);
  }
};

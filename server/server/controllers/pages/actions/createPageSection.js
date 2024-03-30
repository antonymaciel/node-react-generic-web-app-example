const { addPageSection } = require('../services');

module.exports = async (req, res, next) => {
  const {
    body,
    params: { pageId }
  } = req;

  try {
    const section = await addPageSection(pageId, body);

    res.send(section);
  } catch (error) {
    next(error);
  }
};

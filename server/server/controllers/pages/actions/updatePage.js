const { patchAndFetchPage } = require('../services');

module.exports = async (req, res, next) => {
  const {
    body,
    internalParams: { page }
  } = req;

  try {
    const updatedPage = await patchAndFetchPage(page, body);

    res.send(updatedPage);
  } catch (error) {
    next(error);
  }
};

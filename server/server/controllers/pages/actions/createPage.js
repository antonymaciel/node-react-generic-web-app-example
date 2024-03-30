const { addPage } = require('../services');

module.exports = async (req, res, next) => {
  const { body } = req;

  try {
    const page = await addPage(body);

    res.send(page);
  } catch (error) {
    next(error);
  }
};

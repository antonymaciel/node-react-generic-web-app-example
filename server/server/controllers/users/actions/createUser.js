const { addUser } = require('../services');

module.exports = async (req, res, next) => {
  const { body } = req;

  try {
    const user = await addUser(body);

    res.send(user); // TODO: not return password, etc
  } catch (error) {
    next(error);
  }
};

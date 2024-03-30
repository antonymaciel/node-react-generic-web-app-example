const { compare } = require('bcryptjs');
const { promisify } = require('util');
const jwt = require('jsonwebtoken');
const findUser = require('../services/findUser');

const comparePromise = promisify(compare);

module.exports = async (req, res, next) => {
  const { email, password } = req.body;

  try {
    const user = await findUser(email);

    if (!user) {
      res.status(404).send('User not found');

      return;
    }

    const isMatch = await comparePromise(password, user.password);

    if (!isMatch) {
      res.status(401).send('Invalid password');

      return;
    }

    const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, {
      expiresIn: '1h'
    });

    res.send({ token });
  } catch (error) {
    next(error);
  }
};

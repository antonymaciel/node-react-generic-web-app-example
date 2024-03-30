const jwt = require('jsonwebtoken');
const { promisify } = require('util');

const verifyPromise = promisify(jwt.verify);

module.exports = async (req, res, next) => {
  try {
    const token = req.headers.authorization?.split(' ')[1];

    if (!token) {
      return res
        .status(401)
        .send('Not Authorized - Missing Authorization token');
    }

    try {
      const tokenVerified = await verifyPromise(token, process.env.JWT_SECRET);
      req.internalParams.userId = tokenVerified.userId;

      next();
    } catch (error) {
      res.status(401).send('Not Authorized - Invalid token');
    }
  } catch (error) {
    next(error);
  }
};

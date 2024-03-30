module.exports = (req, res, next) => {
  req.internalParams = {};
  next();
};

const logger = require('../services/logger');

const errorHandler = (err, req, res, next) => {
  logger.error(err);
  res.status(500).send('Something broke!');
};

module.exports = errorHandler;
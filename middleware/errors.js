/* eslint-disable no-console */

function errors(error, req, res, next) {
  // if we've already started responding before the error
  // defer to the default Express handler so it can halt the response
  if (res.headersSent) {
    return next(error);
  }
  console.error(error);
  res.status(error.status || 500).json({ error: error.message });
}

module.exports = errors;

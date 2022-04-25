const fs = require("fs");

function requestLogger(req, res, next) {
  fs.appendFile(
    "request-logger.log",
    `${req.method} ${req.url} ${req.ip} ${req.protocol} ${req.hostname}\n`,
    (err) => {}
  );
  next();
}

module.exports = requestLogger;

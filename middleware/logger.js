/* eslint-disable no-console */

function logger(req, res, next) {
  const { method, url } = req;
  console.log(`︎\n⬇ ${method} ${url}`);

  res.on("finish", () => {
    console.log(`⬆︎ ${res.statusCode}`);
  });
  next();
}

module.exports = logger;

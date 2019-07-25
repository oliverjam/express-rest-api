class NotFound extends Error {
  constructor(error) {
    super(error);
    this.status = 404;
  }
}

module.exports = { NotFound };

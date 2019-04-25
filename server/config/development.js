module.exports = {
  // enabled logging for development
  logging: true,
  seed: true,
  db: {
    url: 'mongodb://app:app-pass@localhost:27017/nodeblog?authSource=admin'
  }
};

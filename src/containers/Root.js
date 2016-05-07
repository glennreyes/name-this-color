if (process.env.NODE_ENV === 'production') {
  // eslint-disable-next-line global-require
  module.exports = require('./Root.prod');
} else {
  // eslint-disable-next-line global-require
  module.exports = require('./Root.dev');
}

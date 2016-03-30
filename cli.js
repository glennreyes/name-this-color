var ntc = require('./lib/ntc');
var oneColor = require('onecolor');

/**
 * Command Line Interface
 * @param  {string} argv Color in HEX
 * @return {undefined}
 */
module.exports = function(argv) {
  if (typeof argv === 'string') {
    console.log(ntc.name(oneColor(argv).hex())[1]);
  }
}

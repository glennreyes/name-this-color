var changeCase = require('change-case');
var ntc = require('./lib/ntc');
var oneColor = require('onecolor');

/**
 * Name this color
 * @param  {string|array} opts Color in HEX
 * @return {array}             List of color objects
 */
module.exports = function nameThisColor(opts) {
  var colors = [];
  var i;

  var addColor = function addColor(color) {
    var hex = oneColor(color).hex();
    var title = ntc.name(hex)[1];

    return colors.push({
      hex: hex,
      title: ntc.name(hex)[1],
      match: ntc.name(hex)[2],
      name: changeCase.paramCase(title)
    });
  };

  if (typeof opts === 'string') {
    addColor(opts);
  } else if (Object.prototype.toString.call(opts) === '[object Array]') {
    for (i = 0; i < opts.length; i++) {
      addColor(opts[i]);
    }
  } else {
    throw new Error('You need to pass your color as {string} or {array} in an argument.');
  }

  return colors;
};

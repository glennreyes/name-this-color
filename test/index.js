const expect = require('expect');
const nameThisColor = require('../index');

describe('nameThisColor(\'\')', function () {
  it('#0088aa is approx. deep-cerulean', function () {
    expect(nameThisColor('#0088aa')).toEqual(
      [{ hex: '#0088aa', title: 'Deep Cerulean', match: false, name: 'deep-cerulean' }]
    );
  });
  it('\'rgb(255, 0, 0)\' is red', function() {
    expect(nameThisColor('rgb(255, 0, 0)')).toEqual(
      [{ hex: '#ff0000', title: 'Red', match: true, name: 'red' }]
    );
  });
});

describe('nameThisColor([])', function() {
  it('deep-cerulean, purple, pirate-gold and flirt', function() {
    expect(nameThisColor(['#0088aa', '#8800aa', '#aa8800', '#aa0088'])).toEqual([
      {
        hex: '#0088aa',
        title: 'Deep Cerulean',
        match: false,
        name: 'deep-cerulean'
      }, {
        hex: '#8800aa',
        title: 'Purple',
        match: false,
        name: 'purple'
      }, {
        hex: '#aa8800',
        title: 'Pirate Gold',
        match: false,
        name: 'pirate-gold'
      }, {
        hex: '#aa0088',
        title: 'Flirt',
        match: false,
        name: 'flirt'
      }
    ]);
  });
});

# Name this Color
Gives your colors a human-friendly name, inspired and powered by [Name that Color](http://chir.ag/projects/ntc) from [Chirag Mehta](http://chir.ag/about).

[![Build Status](https://travis-ci.org/glennreyes/name-this-color.svg?branch=master)](https://travis-ci.org/glennreyes/name-this-color)
[![Coverage Status](https://coveralls.io/repos/github/glennreyes/name-this-color/badge.svg?branch=master)](https://coveralls.io/github/glennreyes/name-this-color?branch=master)
[![Dependency Status](https://david-dm.org/glennreyes/name-this-color.svg)](https://david-dm.org/glennreyes/name-this-color)
[![npm version](https://badge.fury.io/js/name-this-color.svg)](https://badge.fury.io/js/name-this-color)

## Motivation
Name this Color is incredibly useful when you are structuring your color palettes, no matter if it is for your design tool or CSS. Especially for CSS pre-processors like [Sass](http://sass-lang.com/) or [Less](http://lesscss.org/), this module will help you to get a very well structure on naming your colors.

The biggest pain is when you are trying to get your exact shade for ```#eecd11``` by calling your [Sass variable](http://sass-lang.com/guide#topic-2) ```$a-bit-lighter-than-middle-light-orange``` for instance.
This module would provide you a smarter name like ```ripe-lemon```.


## Installation
```
npm install name-this-color --save-dev
```

## Usage
This module supports the [one-color](https://github.com/One-com/one-color#api-overview) API of how you pass the color. The method returns an array of color objects.
```js
var nameThisColor = require('name-this-color');

nameThisColor('#0088aa'); // or '#08a', '0088aa', '0088AA'
// => [{ hex: '#0088aa', title: 'Deep Cerulean', match: false, name: 'deep-cerulean' }]

nameThisColor('rgb(255, 0, 0)'); // or 'red', 'rgb(100%, 0%, 0%, .5)'
// => [{ hex: '#ff0000', title: 'Red', match: true, name: 'red' }]

nameThisColor(['#0088aa', '#8800aa', '#aa8800', '#aa0088']);
/** =>
 [{
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
 }]
 */
```

### Properties

#### hex
A transformation from the given color to a HEX.

#### title
The (approximate) title, referencing Wikipedia's [List of colors](https://en.wikipedia.org/wiki/Lists_of_colors)

#### match
Boolean of a match in the Wikipedia's [List of colors](https://en.wikipedia.org/wiki/Lists_of_colors)

#### name
The param-cased title


## License
This project is licensed under the MIT license, Copyright (c) 2016 Glenn Reyes. For more information check [```LICENSE```](LICENSE)

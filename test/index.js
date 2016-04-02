import expect from 'expect'
import nameThisColor from '../index'

describe('String', () => {
  it('#0088aa is approx. deep-cerulean', () => {
    expect(nameThisColor('#0088aa')).toEqual(
      [{ hex: '#0088aa', title: 'Deep Cerulean', match: false, name: 'deep-cerulean' }]
    )
  })
  it('\'rgb(255, 0, 0)\' is red', () => {
    expect(nameThisColor('rgb(255, 0, 0)')).toEqual(
      [{ hex: '#ff0000', title: 'Red', match: true, name: 'red' }]
    )
  })
})

describe('Arrays', () => {
  it('deep-cerulean, purple, pirate-gold and flirt', () => {
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
    ])
  })
})

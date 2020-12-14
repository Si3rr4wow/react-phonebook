import parseQueryObject from './parseQueryObject'

describe('parseQueryObject', () => {
  test('It should return an empty string given an empty object', () => {
    expect(parseQueryObject({})).toBe('')
  })
  test('It should return an empty string given undefined', () => {
    expect(parseQueryObject({})).toBe('')
  })

  test('It should return an query string given an object with 2 keys', () => {
    expect(parseQueryObject({ keyA: 'valueA', keyB: 'valueB', })).toBe('?keyA=valueA&keyB=valueB')
  })
})

import parseQueryString from './parseQueryString'

describe('parseQueryString', () => {
  test('It should return an empty object given an empty string', () => {
    expect(parseQueryString('')).toEqual({})
  })
  test('It should return an empty object given undefined', () => {
    expect(parseQueryString('')).toEqual({})
  })

  test('It should return an query string given an object with 2 keys', () => {
    expect(parseQueryString('?keyA=valueA&keyB=valueB')).toEqual({ keyA: 'valueA', keyB: 'valueB', })
  })
})

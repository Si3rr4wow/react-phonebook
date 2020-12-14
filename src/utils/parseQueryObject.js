const parseQueryObject = (queryObj = {}) => {
  return Object.entries(queryObj).reduce((acc, [key, value], i) => {
    if(i === 0) { return acc + `?${key}=${value}` }
    return acc + `&${key}=${value}`
  }, '')
}

export default parseQueryObject

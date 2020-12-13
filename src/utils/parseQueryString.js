const parseQueryString = queryStr => {
  if(!queryStr?.length) { return {} }
  const varArr = queryStr.substr(1).split('&')
  const varObj = varArr.reduce((acc, cur) => {
    const [key, value] = cur.split('=')
    acc[key] = value
    return acc
  }, {})
  return varObj
}

export default parseQueryString

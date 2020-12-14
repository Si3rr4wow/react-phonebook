import parseQueryObject from './parseQueryObject'

const apiCall = ({ apiUrl, method, body, query = {}, callback }) => {
  const url = apiUrl + parseQueryObject(query)
  fetch(url, {
    method,
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify(body)
  })
  .then(res =>
    res.status === 200 ? res.json() : callback(new Error(`Server responded with status code ${res.status}`))
  , err => callback(err))
  .then(res => {
    callback(null, res)
  })
}

export default apiCall

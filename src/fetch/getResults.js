import { apiCall } from '../utils'

const getResults = query => new Promise((resolve, reject) => {
  apiCall({
    apiUrl: process.env.NODE_ENV === "development" ? (
      "http://localhost:8080/contacts/"
    ) : (
      "https://www.WhereTheAPILives.com/contacts/"
    ),
    query,
    callback: (err, res) => {
      err ? reject(err) : resolve(res)
    },
    method: 'GET'
  })
})

export default getResults

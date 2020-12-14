import { apiCall } from '../utils'

const getResults = contactId => new Promise((resolve, reject) => {
  apiCall({
    apiUrl: process.env.NODE_ENV !== "production" ? (
      `http://localhost:8080/contact/${contactId}`
    ) : (
      `https://www.WhereTheAPILives.com/contact/${contactId}`
    ),
    callback: (err, res) => {
      err ? reject(err) : resolve(res)
    },
    method: 'GET'
  })
})

export default getResults

const data = require("./data");

module.exports = function (contactId) {
  return data.find(({ id }) => {
    return id === contactId
  })
}

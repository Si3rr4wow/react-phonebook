const express = require("express");
const app = express();

const contactData = require("./data");
function escapeRegExp(str) {
  return str.replace(/[-[\]/{}()*+?.\\^$|]/g, "\\$&");
}
function findContacts(str) {
  const expr = RegExp(".*" + escapeRegExp(str) + ".*", "i");

  return contactData.filter(function (item) {
    return expr.test(item.name);
  });
}

app.get("/contacts", (req, res) => {
  const { term } = req.query;
  if (!term || typeof term !== "string" || term.length < 3) {
    res
      .status(400)
      .json({
        error: "term query param required and of minumum of 3 chars",
      });
    return;
  }

  const decodedTerm = decodeURIComponent(term);
  res.json(findContacts(decodedTerm));
});

module.exports = app
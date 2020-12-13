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
function findContact(contactId) {
  return contactData.find(({ id }) => {
    return id === contactId
  })
}

const corsOrigin = process.env.NODE_ENV === "development" ? (
    "http://localhost:3000"
  ) : (
    "https://www.WhereTheUILives.com"
  )

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", corsOrigin);
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

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

app.get("/contact/:id", (req, res) => {
  const { id } = req.params
  if (!id || typeof id !== "string") {
    res
      .status(400)
      .json({
        error: "id param required",
      });
    return;
  }

  console.log('findContact(id)', findContact(id))
  res.json(findContact(id));
});

module.exports = app

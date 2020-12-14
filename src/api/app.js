const express = require("express");
const app = express();

const findContacts = require("./findContacts");
const findContact = require("./findContact");

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
  const decodedId = decodeURIComponent(id);
  const contact = findContact(decodedId);

  if (!contact) {
    res
      .status(404)
      .json({
        error: "No contact could be found with the given id",
      });
    return;
  }

  res.json(contact);
});

module.exports = app

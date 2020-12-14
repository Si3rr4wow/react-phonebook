const express = require("express");
const app = require("./src/api/app")
const port = 8080;

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

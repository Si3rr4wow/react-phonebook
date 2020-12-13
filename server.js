const express = require("express");
const app = require("./src/api/app")
const port = 6000;

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

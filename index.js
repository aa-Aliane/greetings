const express = require("express");

const API_URL = "/api/v1/";
const app = express();

app.get(API_URL + "greetings", (req, res) => {
  res.status(200).send("hello");
});

app.listen(5000);

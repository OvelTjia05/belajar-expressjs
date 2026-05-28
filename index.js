const express = require("express");
const app = express();
const port = 3000;
const routes = require("./routes");
const mongoose = require("mongoose");

//middleware
app.use(express.json());

//router
app.use(routes);

//server
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

//database
mongoose
  .connect("mongodb://localhost:27017/belajar_expressjs_db")
  .then(() => {
    console.log("connected to belajar_expressjs_db");
  })
  .catch((error) => {
    console.error("error connect db :", error);
  });

const express = require("express");
const mongoose = require("mongoose");
const app = express();
require("dotenv").config();

const port = 5000;
const DB = process.env.DB_URL.replace("<PASSWORD>", process.env.DB_PASSWORD);

// connection to mongodb using mongoose
mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() => {
    console.log("DB connected successfully");
  });

// routes
app.get("/", (req, res) => res.send("Hello World!"));

// listen to the app
app.listen(port, () => console.log(`Example app listening on port ${port}!`));

// Imports
require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const router = require("./routers/router");

const app = express();
const cors = require("cors");
const port = process.env.PORT || 3000;

app.use(cors());

//Config JSON response
app.use(express.json());

app.use(router);

//Credentials
const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASSWORD;

mongoose
  .connect(
    `mongodb+srv://${dbUser}:${dbPassword}@cluster0.eevro.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`
  )
  .then(() => {
    app.listen(port);
    console.log("Conectado no banco, rodando em http://localhost:3000");
  })
  .catch((err) => console.log(err));

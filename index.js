const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

const db = require("./models");

// middlewares
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use("/food", require("./routers/food-router"));

  app.listen(PORT, () => {
    console.log(`Listening to PORT ${PORT}`);
  })
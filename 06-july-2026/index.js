const express = require("express");
const fs = require("fs");
const user = require('./routes/user')
const app = express();
app.use(express.json());
app.use(user)
app.listen(3000, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("server is runing on 3000..");
  }
});

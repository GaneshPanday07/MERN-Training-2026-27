const express = require("express");
const users = require("./users.json");
const app = express();
app.use(express.json())

app.get("/", (req, res) => {
    res.end("<h1> welcome to our Server , we are ready to serve you....");
});
//localhost:3000/users
app.get('/users', (req, res)=> {
    res.json(users);
})
//localhost:3000/user/10
app.get('/user/:id', (req, res)=> {
    let id = req.params.id;
    let user = users.find((user)=> user.id == id)
    res.json(user)
})
// http://localhost:3000/add/user
app.post('/add/user', (req, res)=> {
  console.log(req.body);
  res.end("we are goind to add data.....")
})
app.listen(3000, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("server is runing on 3000..");
  }
});

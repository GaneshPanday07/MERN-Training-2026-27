const express = require('express')
const users = require("../users.json");
const router = express.Router()
router.get('/users', (req, res)=> {
    res.json(users)
})

//localhost:3000/user/10
router.get("/user/:id", (req, res) => {
  let id = req.params.id;
  let user = users.find((user) => user.id == id);
  res.json(user);
});

// http://localhost:3000/add/user
router.post("/add/user", (req, res) => {
  console.log(req.body);
  users.push(req.body);
  fs.writeFile("users.json", JSON.stringify(users), (err) => {
    if (err) {
      console.log("problem in written file....");
    } else {
      res.end("data has been added sucessfully.....");
    }
  })
})

//localhost:3000/edit/user/29
router.put('/edit/user/:id', (req, res)=> {
  let id = req.params.id;
  console.log(id)
  let index = users.findIndex((user) => user.id == id)
  console.log(index);
  users[index].email= "gp789gmail.com"
  fs.writeFile('users.json', JSON.stringify(users), (err)=> {
    if(err){
      console.log("Error in updating the file")
    }else{
      res.end("data has been updating successfully......")
    }
  })
})

// http://localhost:3000/delete/user/29
router.delete('/delete/user/:id', (req, res)=> {
  let id = req.params.id;
  console.log(id)
  let index = users.findIndex((user)=> user.id == id)
  console.log(index)
  users.splice(index, 1);
  fs.writeFile('users.json', JSON.stringify(users), (err)=> {
    if(err){
      console.log('data not delete')
    }else{
      res.end("data delete successfully.....")
    }
  })
})

module.exports = router


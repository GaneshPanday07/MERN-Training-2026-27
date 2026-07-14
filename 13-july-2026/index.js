const express = require('express')
const connect = require("./connection");
const app = express();
app.use(express.json());
//const student = require('./routes/student')
const mobile = require('./routes/mobile')
//app.use(student)
app.use(mobile);
connect()



app.listen(3000, (err)=> {
    if(err){
        console.log("err")
    }else{
        console.log("server is running on 3000....");
    }
})
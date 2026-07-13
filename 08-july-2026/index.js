const express = require('express');
const app = express()
app.use(express.json());
const fs = require('fs');
const student = require('./routes/student')
const book = require('./routes/book')
app.use(student);
//app.use(book);


app.listen(3000, (err)=> {
    if(err){
        console.log("problem in runing server...")
    }else{
        console.log("server is runing on 3000 ......")
    }
})
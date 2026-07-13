const express = require('express');
const books = require('../book.json')
const fs = require('fs')
const route = express.Router()

route.get('/books', (req, res)=> {
    res.json(books)
})

// get method = http://localhost:3000/book/4
route.get('/book/:bookId', (req, res)=> {
    let bookId = req.params.bookId
    let book = books.find((book)=> book.bookId == bookId)
    res.json(book)
})

// post method = http://localhost:3000/add/book
route.post('/add/book', (req, res)=> {
    books.push(req.body);
    console.log(req.body);
    fs.writeFile('book.json', JSON.stringify(books), (err)=> {
        if(err){
            console.log("can't add data")
        }else{
            res.end(" add data.........")
        }
    })
})

// put method = http://localhost:3000/edit/book/3
route.put('/edit/book/:bookId', (req, res)=> {
    let bookId = req.params.bookId
    console.log(bookId)
    let index = books.findIndex((book)=> book.bookId == bookId)
    books[index].bookName = "Goat";
    fs.writeFile('book.json', JSON.stringify(books), (err)=> {
        if(err){
            console.log("can't update new file")
        }else{
            res.end("update successfully......")
        }
    })
})

// delete method = http://localhost:3000/delete/book/5
route.delete('/delete/book/:bookId', (req, res)=> {
    let bookId = req.params.bookId
    let index = books.findIndex((book) => book.bookId == bookId)
    console.log(index)
    books.splice(index, 1)
    fs.writeFile('book.json', JSON.stringify(books), (err)=> {
        if(err){
            console.log("data has not been deleted")
        }else{
            res.end("data delete.......")
        }
    })
})

module.exports = route
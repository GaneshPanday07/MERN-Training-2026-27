const mongoose = require('mongoose')
async function connect() {
    try{
        await mongoose.connect('mongodb://localhost:27017/mern2026')
        console.log("Database connected successfully.....")
    } catch(err){
        console.log(err)
    }
}
module.exports = connect
const mongoose = require('mongoose')

const Schema = mongoose.Schema

const StudentSchema = new Schema({
    rollno: {type: String },
    studentName: {type: String },
    fatherName: {type: String },
    mobileno: {type: String }
})
module.exports = mongoose.model('Student', StudentSchema)

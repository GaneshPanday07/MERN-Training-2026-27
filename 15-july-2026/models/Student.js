const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const StudentSchema = new Schema({
  rollno: { type: String, reuire: true },
  studentName: { type: String, reuire: true },
  fatherName: { type: String, reuire: true },
  adharCardNo: { type: String, reuire: true },
  mobileNo: { type: String, reuire: true },
});

module.exports = mongoose.model('Student', StudentSchema)
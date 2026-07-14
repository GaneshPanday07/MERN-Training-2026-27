const mongoose = require('mongoose')

const Schema = mongoose.Schema

const MobileSchema = new Schema({
    modal: {type: String },
    brand: {type: String },
    price: {type: String },
    design: {type: String },
    screenSize: {type: string}
})
module.exports = mongoose.model('Mobile', MobileSchema)

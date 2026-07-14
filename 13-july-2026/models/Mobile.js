const mongoose = require('mongoose')

const Schema = mongoose.Schema

const MobileSchema = new Schema({
    mobileId: {type: String},
    modal: {type: String },
    brand: {type: String },
    price: {type: String },
    design: {type: String },
    screenSize: {type: String}
})
module.exports = mongoose.model('Mobile', MobileSchema)

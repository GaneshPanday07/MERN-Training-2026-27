const express = require('express')
const mobileController = require('../controllers/mobileController')
const router = express.Router()

//get method: http://localhost:3000/mobiles
router.get('/mobiles', (req, res)=>{
    mobileController.getmobiles(req, res)
})

//post method: http://localhost:3000/add/mobile
router.post('/add/mobile', (req,res)=>{
    mobileController.addmobile(req, res)
})

//get method: http://localhost:3000/mobile/101
router.get('/mobile/:mobileId', (req, res)=> {
    mobileController.getmobileById(req, res)
})

//put method: http://localhost:3000/edit/mobile/101
router.put('/edit/mobile/:mobileId', (req, res)=> {
    mobileController.editmobile(req, res)
})

//delete method: http://localhost:3000/delete/mobile/102
router.delete('delete/mobile/:mobileId', (req, res)=> {
    mobileController.deletemobile(req, res);
})
module.exports = router

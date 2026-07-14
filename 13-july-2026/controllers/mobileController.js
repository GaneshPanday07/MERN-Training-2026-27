const Mobile = require("../models/Mobile");

const getmobiles = async (req, res) => {
  try {
    let mobile = await Mobile.find({});
    console.log(mobile);
    res.send(mobile);
  } catch (err) {
    console.log(err);
  }
};

const addmobile = async (req, res) => {
  try {
    console.log("adding mobile..");
    console.log(req.body);
    let mobile = new Mobile(req.body);
    await mobile.save();
    res.end("we are process to add mobile data..");
  } catch (err) {
    console.log(err);
  }
};

const getmobileById = async (req, res) => {
  try {
    let id = req.params.mobileId;
    console.log(id);
    let mobile = await Mobile.findOne({});
    res.send(mobile);
  } catch (err) {
    console.log(err);
  }
};

const editmobile = async(req, res)=> {
    try{
        let id = req.params.mobileId;
        console.log(id)
        let mobile = await Mobile.findOne({mobileId: id})
        if(mobile){
            mobile.price = "19000"
            await mobile.save()
            res.end("update data successfully..")
        }else{
            console.log("mobile data is not found.")
        }
    } catch(err) {
        console.log(err)
    }
}

const deletemobile = async(req, res)=> {
    try{
        let id = req.params.mobileId;
        let mobile = await Mobile.deleteOne({mobileId: id})
        res.end("delete data successfully.....")
    } catch(err){
        console.log(err)
    }
}
module.exports = {
  getmobiles,
  addmobile,
  getmobileById,
  editmobile,
  deletemobile,
};

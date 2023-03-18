const carModels = require("../models/cars");
const cloudinary = require("../configs/cloudinary")

const Managercars = {
    addviolation : async(req,res)=>{
        try{
            const {urlimage} = req.body;
            const {licensePlate,date,speed} = req.body;
            console.log(req.body);
            const uploadResponse = await cloudinary.uploader.upload(urlimage, {});
            const cartemp ={
                "licensePlate" : licensePlate,
                "date" : date,
                "speed" : speed,
                "urlimage" : uploadResponse.url
            }
            const car = await carModels.create(cartemp);
            console.log(car);
            return res.status(200).json(car)    
        }catch(err){
            return res.status(500).json(err);
        }
    },
    getalldata: async (req,res)=>{
        try{
            const data = await carModels.find({},{ _id: 0 })
            return res.status(200).json({
                "listdata":data,
            })
        }catch(err){
            return res.status(500).json(err);
        }
    }
    
}

module.exports = Managercars;
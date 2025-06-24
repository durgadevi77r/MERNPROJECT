const user = require('../models/userModels');

exports.getRoute = async (req,res) => {
    const userData = await user.find();
    res.status(201).json({data:userData})
}

exports.getRouteById = async (req,res)=>{
    const userData = await user.findById(req.params.id);
    res.status(201).json({userData})
}

exports.postRoute = async (req,res) => {
    const {username,password} = req.body;
    const exist = await user.findOne({username,password});
    if(exist) return res.status(401).json({
        message:'User already exists'
    })
    const newUser = new user({username,password})
    await newUser.save();//saves data in mongodb
    res.status(201).json({user:newUser})
}

exports.putRoute = async (req,res) => {
    const {username,password} = req.body;
    const update = await user.findByIdAndUpdate(req.params.id,req.body)
    if(!update) return res.status(401).json({message:"User not exists"})
        res.status(201).json({update}) 
}
exports.deleteRoute = async (req,res) => {
    const {username,password} = req.body;
    const deleteuser = await user.findByIdAndDelete(req.params.id,req.body)
    if(!deleteuser) return res.status(401).json({message:"User not exists"})
        res.status(201).json({deleteuser}) 
    res.send('Delete route is working');
}
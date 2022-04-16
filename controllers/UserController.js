const userModel = require('../models/UserModel');

//using async/await function so i can assign to variable vs promise
//function is based on req.body having the required info
exports.createUser = async (req, res) => { //model is on side note -> 
    const user = await userModel.create(req.body); //req.body is in JSON format
    res.status('200').json(user); //returns OK status with added user
}

exports.getUsers = async (req, res) => {
    const users = await userModel.find();
    res.status('200').json(users); //returns list of all users
}

exports.deleteUser = async (req, res) => {
    const user = await userModel.deleteOne({"user": req.body.user, "pass": req.body.pass});
    //deletes user based on user and pass, have to match 
    res.status('200').json(user); // returns acknowledgement + how many deleted
}
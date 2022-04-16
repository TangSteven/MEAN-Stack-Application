const userModel = require('../models/UserModel');


exports.createUser = async (req, res) => { //model is on side note -> 
    const user = await userModel.create(req.body); //req.body is in JSON format
    res.status('200').json(user);
}

exports.getUsers = async (req, res) => {
    const users = await userModel.find();
    res.status('200').json(users);
}

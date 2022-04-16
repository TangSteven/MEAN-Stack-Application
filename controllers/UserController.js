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

exports.getFoods = async (req, res) => {
    const foods = await userModel.findOne({"user": req.params.user}, 'foods');
    //finds user based on req.params then it returns fields in the 2nd optional parameter named foods
    // for multiple fields it would be 'foods _id'
    res.status('200').json(foods);
    //returns the foods array with _id
}

exports.addFood = async (req, res) => {
    //adds a food item into the users food array
    const food = await userModel.findOneAndUpdate({"user": req.params.user}, {$push: {foods: req.body}});
    //finds the user with the req.param.user then pushes the req.body 
    //which should be the food item into its array
    res.status('200').json(food);
    //returns user before the push
}

exports.deleteFood = async (req, res) => {
    //uses req.params to find the user, then req.body to match the food name to delete
    const food = await userModel.findOneAndUpdate({"user": req.params.user}, {$pull: {"foods": {"name": req.body.name}}});
    //deletes food by using findONeandUpdate, queries for the user, then pulls from the array
    //within the array brace, there is another curly brace where it matches the food name
    res.status('200').send(food);
    //sends the user json before the delete
}

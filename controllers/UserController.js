const userModel = require('../models/UserModel');
const bcrypt = require('bcryptjs'); //adding bcrypt to encrypt password
//using async/await function so i can assign to variable vs promise
//function is based on req.body having the required info

const jwt = require('jsonwebtoken'); //to create  jsonwebtoken

//register for the user then redirect to login page
exports.createUser = async (req, res) => { //model is on side note -> 
    let hash =  bcrypt.hashSync(req.body.pass, 10); //encrypts password into a hash
    //the salt is 10, which is the amoutn of times its encrypted
    req.body.pass = hash; //replace the password with the hash
    const user = await userModel.create(req.body); //req.body is in JSON format
    res.status('200').json(user); //returns OK status with added user
}

//login function 
exports.loginUser = async (req, res) => {
    //finds the user with username

    const user = await userModel.findOne({"user": req.body.user});

    if (user != null) { //if this user does exist
        //using compare Sync version because hash was Syncd
        let found = bcrypt.compareSync(req.body.pass, user.pass);
        if (found) {
            //if the password is correct
            //create cookie 
            const token = jwt.sign({_id: user._id}, "topsecret", {expiresIn: "2 minutes"}); //to create a json web token so the front end can see
        
            res.cookie('token', token); //sends the cookie in the response

            res.status('200').json(found);
        }
        else { //if password wrong
            //dont tell which is wrong, so harder to hack

            console.log("Wrong username or password");
            res.status('200').json(found);
        }
    }
    else { //user wrong
        //dont tell which is wrong, so harder to hack
        console.log("Wrong username or password");
        res.status('200').json(false);
    }
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

exports.getFavorites = async (req, res) => {
    const foods = await userModel.findOne({"user": req.params.user}, 'foods');
    //finds user based on req.params then it returns fields in the 2nd optional parameter named foods
    // for multiple fields it would be 'foods _id'
    //console.log(foods.foods);
    let favorites = [];
    //array to hold favorites
    

    for (let i = 0; i < foods.foods.length; i++){
        if (foods.foods[i].favorite) {
            favorites.push(foods.foods[i]);
        }
    }
    //loop to go through all the foods and see if the favorite flag is true
    //append if true
    //console.log("favorites " + favorites);
    res.status('200').json(favorites);
    //returns the favorites array
}
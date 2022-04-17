const express = require('express');
const router = express.Router();
const uc = require('../controllers/UserController');


router.route('/login').post(uc.loginUser);

router.route('/register').post(uc.createUser);

router.route('/api/user').get(uc.getUsers).delete(uc.deleteUser);
// for the router '/api/user' depending on the method, it will use the respective 
//controller function

router.route('/api/user/:user').get(uc.getFoods).post(uc.addFood).delete(uc.deleteFood);

router.route('/api/user/:user/favorites').get(uc.getFavorites);


module.exports = router;
//export the router for use in app.js

const express = require('express');
const router = express.Router();
const uc = require('../controllers/UserController');



router.route('/api/user').get(uc.getUsers).post(uc.createUser).delete(uc.deleteUser);
// for the router '/api/user' depending on the method, it will use the respective 
//controller function

router.route('/api/user/:user').post(uc.addFood).delete(uc.deleteFood);


module.exports = router;
//export the router for use in app.js

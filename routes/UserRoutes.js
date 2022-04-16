const express = require('express');
const router = express.Router();
const uc = require('../controllers/UserController');



router.route('/api/user').post(uc.createUser).get(uc.getUsers).delete(uc.deleteUser);
// for the router '/api/user' depending on the method, it will use the respective 
//controller function


module.exports = router;
//export the router for use in app.js

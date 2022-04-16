const express = require('express');
const router = express.Router();
const uc = require('../controllers/UserController');



router.route('/api/user').post(uc.createUser).get(uc.getUsers);

module.exports = router;
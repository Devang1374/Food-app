const express = require('express');
const { registerController, loginController } = require('../controllers/authController');


const router = express.Router();

//routers
//Register ||post
router.post('/register', registerController);

//logi ||post
router.post('/login',loginController);

module.exports = router;
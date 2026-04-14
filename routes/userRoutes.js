const express = require('express');
const { testUserController } = require('../controllers/userController');

//router object
const router = express.Router()

//routers
router.get('/test-user', testUserController);

//export
module.exports = router;
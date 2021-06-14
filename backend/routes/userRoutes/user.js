const router = require("express").Router();

const authContoller = require('../../controllers/authController');

//Check for authentication
router.use(authContoller.protect);

//Common routes for all users

module.exports = router;

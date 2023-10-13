const express = require("express");
const router = express.Router();

const userController = require("../controllers/users.controller");
const verifyToken = require('../middleware/verifyToken');
// get all users
// register
// login
router.route("/").get(verifyToken, userController.getAllUsers);

router.route("/:userId").get(userController.getSingleUser);

router.route("/register").post(userController.register);

router.route("/login").post(userController.login);

module.exports = router;

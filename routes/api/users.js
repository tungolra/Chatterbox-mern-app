const express = require("express");
const router = express.Router();
const usersCtrl = require("../../controllers/api/users");
const user = require("../../models/user");
const ensureLoggedIn = require("../../config/ensureLoggedIn");

router.post("/register", usersCtrl.create);
router.post("/login", usersCtrl.login);
router.post("/update", usersCtrl.update)
router.post("/uploadPicture/:email", usersCtrl.uploadPicture)
router.get("/check-token", ensureLoggedIn, usersCtrl.checkToken);
//getAllUsers
router.get("/", usersCtrl.getAllUsers);
//getUser
router.get("/:userId", usersCtrl.getUser);

module.exports = router;

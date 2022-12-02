const express = require("express");
const router = express.Router();
const chatsCtrl = require("../../controllers/api/chats");

router.post("/", chatsCtrl.createChat);
router.get("/:userId", chatsCtrl.showChats);
router.get("/convo/:senderId/:receiverId", chatsCtrl.selectChat);

module.exports = router; 

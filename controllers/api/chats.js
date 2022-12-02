const Chat = require("../../models/chat");

//create chat
async function createChat(req, res) {
  // const newChat = new Chat({
  //     members: [req.body.senderId, req.body.receiverId]
  // })
  try {
    const result = await Chat.create({
      members: [req.body.senderId, req.body.receiverId],
    });
    res.status(200).json(result);
} catch (error) {
      console.log("hi", error)
    res.status(500).json(error);
  }
}

//show user's chats
async function showChats(req, res) {}

//select from chats
async function selectChat(req, res) {}

module.exports = {
  createChat,
  showChats,
  selectChat,
};

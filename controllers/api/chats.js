const Chat = require("../../models/chat");

//create chat
async function createChat(req, res) {
  try {
    const result = await Chat.create({
      members: [req.body.senderId, req.body.receiverId],
    });
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
}

//show user's chats
async function showChats(req, res) {
  try {
    const chats = await Chat.find({
      members: { $in: [req.params.userId] },
    });
    console.log(chats)
    res.status(200).json(chats);
  } catch (error) {
    res.status(500).json(error);
  }
}

//select from chats
async function selectChat(req, res) {
  try {
    const chat = await Chat.findOne({
      members: { $all: [req.params.firstId, req.params.secondId] },
    });
    res.status(200).json(chat);
  } catch (error) {
    res.status(500).json(error);
  }
}

module.exports = {
  createChat,
  showChats,
  selectChat,
};

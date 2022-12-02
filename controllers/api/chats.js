const Chat = require("../../models/chat");

//create chat
async function createChat(res, req) {
    const newChat = new Chat({
        members: [req.body.senderId, req.body.receiverId]
    })
    try {
        const result = await newChat.save() 
        res.status(200).json(result)
    } catch (error) {
        res.status(500).json(error)
    }
}

//show user's chats
async function showChats(res, req) {}

//select from chats
async function selectChat(req, res) {}

module.exports = {
  createChat,
  showChats,
  selectChat,
};

const Message = require("../../models/message");

//create message
async function createMessage(req, res) {
  
  console.log("hit createmessage ctrlr: ", req.body)
  const { chatId, senderId, text } = req.body;
  const message = new Message({
    chatId,
    senderId,
    text,
  });
  try {
    const result = await message.save();
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
}

//get messages in chat
async function getMessages(req, res) {
  const { chatId } = req.params;
  try {
    const result = await Message.find ({ chatId })
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
}

module.exports = {
  createMessage,
  getMessages,
};

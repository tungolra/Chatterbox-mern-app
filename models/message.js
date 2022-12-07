const mongoose = require("mongoose");

const MessageSchema = new mongoose.Schema(
    {
      chatId: {
        type: String,
      },
      senderId: {
        type: String,
      },
      text: {
        type: String,
        required: true,
      },
    },
    {
      timestamps: true,
    }
  );
  //add read property

  module.exports = mongoose.model("Message", MessageSchema);
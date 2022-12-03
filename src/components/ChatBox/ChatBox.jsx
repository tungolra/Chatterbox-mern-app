import React, { useEffect, useState } from "react";
import Messages from "../Messages/Messages";
import InputEmoji from "react-input-emoji";
import { format } from "timeago.js";
import axios from "axios";

export default function ChatBox({
  currentChat,
  currentUserId,
  setSendMessage,
  receivedMessage,
}) {
  const [userData, setUserData] = useState(null);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");

  // add received message to list of messages
  useEffect(() => {
    if (
      receivedMessage !== null &&
      receivedMessage?.chatId == currentChat?._id
    ) {
      setMessages([...messages, receivedMessage]);
    }
  }, [receivedMessage]);

  // get chat member data
  useEffect(() => {
    const userId = currentChat?.members?.find((id) => id !== currentUserId);
    setUserData(userId);
  }, [currentChat, currentUserId]);

  // get messages for chat
  useEffect(() => {
    const serverRoute = "api/messages";
    const getChatMessages = async () => {
      try {
        let response = await axios.get(`${serverRoute}/${currentChat._id}`);
        setMessages(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    if (currentChat !== null) getChatMessages();
  }, [currentChat]);

  function handleChange(e) {
    setNewMessage(newMessage);
  }
  async function handleSend(e) {
    e.preventDefault();
    const message = {
      senderId: currentUserId,
      text: newMessage,
      chatId: currentChat._id,
    };
    try {
      let newMessage = await axios.post(`api/messages`)
      setMessages([...messages, newMessage])
      setNewMessage("")
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <>
      {currentChat ? (
        <div style={{ border: "1px solid black" }}>
          This ChatBox will render the container for a conversation the user
          selects
          <hr />
          <Messages messages={messages} />
          <InputEmoji value={newMessage} onChange={handleChange} />
          <button onClick={handleSend}>Send</button>
        </div>
      ) : (
        <span>Click a Chat to Start Conversation</span>
      )}
    </>
  );
}

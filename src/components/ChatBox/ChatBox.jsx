import React, { useEffect, useState, useRef } from "react";
import Messages from "../Messages/Messages";
import InputEmoji from "react-input-emoji";
import axios from "axios";
import { io } from "socket.io-client";

export default function ChatBox({
  currentChat,
  currentUserId,
  setSendMessage,
  receivedMessage,
  remainingMessage,
}) {
  const socket = useRef();
  const [userData, setUserData] = useState(null);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [remainingMessages, setRemainingMessages] = useState([]);

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
        let { data } = await axios.get(`${serverRoute}/${currentChat._id}`);
        setMessages(data);
        setRemainingMessages(data) // =S
      } catch (error) {
        console.log(error);
      }
    };
    if (currentChat !== null) getChatMessages();
  }, [currentChat]);

  // send deleted message to socket server
  useEffect(() => {
    console.log("delete msg use effect hit")
    socket.current = io("http://localhost:8800");
    const receiverId = currentChat?.members?.find((id) => id !== currentUserId);
    socket.current.emit("delete-message", { messages, receiverId });
      // if (remainingMessage.length){
        setMessages(remainingMessages)
      // }
      console.log(remainingMessage.length)
    // setMessages(remaining);
  }, [messages.length, remainingMessages.length]);

  //receive deleted message!
// useEffect(() => { 
//   socket.current.on('deleted', () => {
//     console.log("delete msg notif fired!")
//   })
// }, [])

  //handle functions

  function handleChange(inputText) {
    setNewMessage(inputText);
  }
  async function handleSend(e) {
    e.preventDefault();
    const message = {
      chatId: currentChat._id,
      senderId: currentUserId,
      text: newMessage,
    };
    try {
      let newMessage = await axios.post(`api/messages`, message);
      setMessages([...messages, newMessage.data]);
      setNewMessage("");
    } catch (error) {
      console.log(error);
    }
    const receiverId = currentChat.members.find((id) => id !== currentUserId);
    setSendMessage({ ...message, receiverId });
  }

  async function handleDelete() {}

  return (
    <>
      {currentChat ? (
        <div style={{ border: "1px solid black" }}>
          This ChatBox will render the container for a conversation the user
          selects
          <hr />
          <Messages messages={messages} setMessages={setMessages} />
          <InputEmoji value={newMessage} onChange={handleChange} />
          <button onClick={handleSend}>Send</button>
        </div>
      ) : (
        <span>Click a Chat to Start Conversation</span>
      )}
    </>
  );
}

import React, { useEffect, useState } from "react";
import Messages from "../Messages/Messages";
import InputEmoji from "react-input-emoji";
import { format } from "timeago.js";

export default function ChatBox({
  currentChat,
  userId,
  setSendMessage,
  receivedMessage,
}) {
  const [userData, setUserData] = useState(null);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");

  // add received message to list of messages
  // useEffect(() => { 
  //   if (receivedMessage !== null && receivedMessage?.chatId == currentChat?._id){
  //     setMessages([...messages, receivedMessage])
  //   }
  // }, [receivedMessage])

  // get chat member data

  function handleChange(e) {}
  async function handleSend(e) {}
  return (
    <>
      <div style={{ border: "1px solid black" }}>
        This ChatBox will render the container for a conversation the user
        selects
        <hr />
        <Messages />
        <InputEmoji value="" onChange={handleChange} />
      </div>
    </>
  );
}

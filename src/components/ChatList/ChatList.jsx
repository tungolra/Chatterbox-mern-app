import React, { useEffect, useState } from "react";
import ChatBox from "../ChatBox/ChatBox";
import * as chatsService from "../../utilities/ChatRequests/chat-service";
import axios from "axios";

export default function ChatList({ user }) {
  const [chats, setChats] = useState([]);
  // const [onlineUsers, setOnlineUsers] = useState([]);
  const [currentChat, setCurrentChat] = useState(null);
  const [sendMessage, setSendMessage] = useState(null);
  const [receivedMessage, setReceivedMessage] = useState(null);

  //get chat
  useEffect(() => {
    const getUserChats = async () => {
      try {
        let response = await axios.get(`/api/chats/${user._id}`);
        // console.log("Response", response)
        // if (!response.ok) throw new Error("No response received")
        let chatsData = response;
        setChats(chatsData.data);
      } catch (error) {
        console.log(error);
      }
    };
    getUserChats();
  }, [user._id]);

  return (
    <>
      <div style={{ border: "1px solid black" }}>
        This ChatList gets data from DB of user's current convos
        <ul>
          {/* need to show name of person chatting to */}
          {chats.map((chat, idx) => (
            <li key={idx} onClick={() => setCurrentChat(chat)}>
              Chat member: {chat.members[1]}{" "}
            </li>
          ))}
          <li>Convo #2 </li>
          <li>Convo #3 </li>
          <li>Convo #... </li>
        </ul>
      </div>
      <div> Convo selected ? show Chatbox : ""</div>
      <ChatBox
        currentChat={currentChat}
        userId={user._id}
        setSendMessage={setSendMessage}
        receivedMessage={receivedMessage}
      />
    </>
  );
}

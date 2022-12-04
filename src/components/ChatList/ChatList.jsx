import React, { useEffect, useRef, useState } from "react";
import ChatBox from "../ChatBox/ChatBox";
// import * as chatsService from "../../utilities/ChatRequests/chat-service";
import axios from "axios";
import { io } from "socket.io-client"
import Conversation from "../Conversation/Conversation";

export default function ChatList({ user }) {
  const socket = useRef()
  const [chats, setChats] = useState([]);
  const [onlineUsers, setOnlineUsers] = useState([]);
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

  //connect to socket.io
  useEffect(() => {
    socket.current = io("http://localhost:8800");
    //to subscribe to specific event, we have to write emit
    socket.current.emit("new-user-add", user._id);
    socket.current.on("get-users", (users) => {
      setOnlineUsers(users);
    });
  }, [user]);


   // send message to socket server
   useEffect(() => {
    if (sendMessage !== null) {
      socket.current.emit("send-message", sendMessage);
    }
  }, [sendMessage]);

  //receive message from socket server
  useEffect(() => {
    socket.current.on("receive-message", (data) => {
      console.log(data)
      setReceivedMessage(data);
    });
  }, []);



  return (
    <>
      <div style={{ border: "1px solid black" }}>
        This ChatList gets data from DB of user's current convos
          {/* need to show name of person chatting to */}
          {chats.map((chat, idx) => (
            <div style={{border: "1px solid red"}} key={idx} onClick={() => setCurrentChat(chat)}>
              <Conversation currentUserId={user._id} chat={chat}/>
              placeholder for select chat: {chat._id} (replace with Conversation component)
            </div>
          ))}
        <ul>
          <li>Convo #2 </li>
          <li>Convo #3 </li>
          <li>Convo #... </li>
        </ul>
      </div>
      <ChatBox
        currentChat={currentChat}
        currentUserId={user._id}
        setSendMessage={setSendMessage}
        receivedMessage={receivedMessage}
      />
    </>
  );
}

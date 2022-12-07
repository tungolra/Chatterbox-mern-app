import React, { useEffect, useRef, useState } from "react";
import ChatBox from "../ChatBox/ChatBox";
import axios from "axios";
import { io } from "socket.io-client";
import Conversation from "../Conversation/Conversation";
import { Input, Grid, TextField, Box } from "@mui/material";
import { Container } from "react-bootstrap";

export default function ChatList({ user }) {
  const socket = useRef();
  const [chats, setChats] = useState([]);
  const [onlineUsers, setOnlineUsers] = useState([]);
  const [currentChat, setCurrentChat] = useState(null);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [allUsers, setAllUsers] = useState([]);
  //state for chats with unread messages

  //get chat
  useEffect(() => {
    const getUserChats = async () => {
      try {
        let payload = await axios.get(`/api/chats/${user._id}`);
        if (!payload.status === 200) throw new Error("No response received");
        setChats(payload.data);
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
  }, [user]);

  //listen on get users, receive, deleted...
  useEffect(() => {
    socket.current.on("receive-message", (data) => {
      setMessages((messages) => [...messages, data]);
    });
    socket.current.on("deleted", (data) => {
      const { messageId } = data;
      setMessages((messages) =>
        messages.filter((message) => message._id !== messageId)
      );
    });
    socket.current.on("get-users", (users) => {
      setOnlineUsers(users);
    });
    return () => {
      socket.current.off("receive-message");
      socket.current.off("deleted");
      socket.current.off("get-users");
      socket.current.disconnect();
    };
  }, []);

  // get messages for chat
  useEffect(() => {
    const serverRoute = "api/messages";
    const getChatMessages = async () => {
      try {
        let { data } = await axios.get(`${serverRoute}/${currentChat._id}`);
        setMessages(data);
      } catch (error) {
        console.log(error);
      }
    };
    if (currentChat !== null) getChatMessages();
  }, [currentChat]);
  // function to get chat messages and setMessages

  //set all users
  useEffect(() => {
    const getAllUsers = async () => {
      try {
        let { data } = await axios.get(`api/users`);
        // do not include logged in user
        data = data.filter((users) => users._id != user._id);
        // do not include users with already active chats
        setAllUsers(data);
      } catch (error) {
        console.log(error);
      }
    };
    getAllUsers();
  }, []);

  //start chat
  async function startChat(friendId) {
    try {
      await axios.post(`api/chats/create/${user._id}/${friendId}`);
    } catch (error) {
      console.log(error);
    }
  }

  //check who is online
  function isOnline(chat) {
    const chatMember = chat.members.find((member) => member !== user._id);
    const online = onlineUsers.find((user) => user.userId === chatMember);
    return online ? true : false;
  }

  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <TextField
            sx={{ width: "25vw", border: "2px solid #2f15d1", margin: "10px" }}
            className="outlined-basic"
            variant="outlined"
            type="text"
            placeholder="Search for a User"
          ></TextField>
          <div style={{ border: "1px solid black" }}>
            {/* All existing Users in DB (not including logged in user) (To be
            replaced with search box to find specific user): */}
            {allUsers.map((friend, idx) => (
              <div key={idx} onClick={() => startChat(friend._id)}>
                {friend.firstname} {friend.lastname}
              </div>
            ))}
          </div>

          <div style={{ border: "1px solid black" }}>
            Active Chats:
            {chats.map((chat, idx) => (
              <div
                style={{
                  border: "3px solid #2f15d1",
                  borderRadius:"15px",
                  margin: "5px",
                  alignItems: "center",
                }}
                key={idx}
                onClick={() => setCurrentChat(chat)}
              >
                <Conversation
                  currentUserId={user._id}
                  chat={chat}
                  online={isOnline(chat)}
                  user={user}
                />
              </div>
            ))}
          </div>
        </Grid>
        <Grid
          item
          xs={8}
          sx={{
            justifyContent: "center",
            height: "50px",
          }}
        >
          <Container
            sx={{
              justifyContent: "bottom",
              position: "fixed",
              maxWidth: "100vw",
            }}
          >
            <ChatBox
              currentChat={currentChat}
              currentUserId={user._id}
              setMessages={setMessages}
              setNewMessage={setNewMessage}
              messages={messages}
              newMessage={newMessage}
              socket={socket}
            />
          </Container>
        </Grid>
      </Grid>
    </>
  );
}

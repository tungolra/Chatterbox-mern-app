import React, { useEffect, useRef, useState } from "react";
import ChatBox from "../ChatBox/ChatBox";
import Messages from "../Messages/Messages";
import axios from "axios";
import { io } from "socket.io-client";
import Conversation from "../Conversation/Conversation";
import { Input, Grid, TextField, Box, Avatar, Menu } from "@mui/material";
import { Container, Stack } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function ChatList({ user }) {
  const socket = useRef();
  const [chats, setChats] = useState([]);
  const [onlineUsers, setOnlineUsers] = useState([]);
  const [currentChat, setCurrentChat] = useState(null);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [allUsers, setAllUsers] = useState([]);
  //state for chats with unread messages
  // console.log("currentChat: ", currentChat)
  // console.log("messages: ", messages)

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
    socket.current = io();
    socket.current.emit("new-user-add", user._id);
  }, [user]);

  useEffect(() => {
    socket.current.on("receive-message", (data) => {
      if (data.chatId == currentChat?._id) {
        setMessages((messages) => [...messages, data]);
      }
    });
    return () => {
      socket.current.off("receive-message");
    };
  }, [currentChat]);

  useEffect(() => {
    //listen on get users, deleted...
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

  // get all chats

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
          <Box
            sx={{
              justifyContent: "center",
              border: "3px solid red",
              borderRadius: "25px",
            }}
          >
            {/* All existing Users in DB (not including logged in user) (To be
            replaced with search box to find specific user): */}
            {allUsers.map((friend, idx) => (
              <div key={idx} onClick={() => startChat(friend._id)}>
                <p style={{ color: "#2f15d1" }}>
                  {friend.firstname}&nbsp;{friend.lastname}
                </p>
              </div>
            ))}

            <p className="section-heading">
              Find a Friend to Start Conversation
            </p>
            <FormControl
              fullWidth
              sx={{ border: "3px solid blue", borderRadius: "50px" }}
            >
              <InputLabel id="demo-simple-select-label">
                Find Friends
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                // below is for user
                value=""
                label="Age"
                // below is for setting action.
                onChange=""
              >
                <MenuItem value={""}>
                  <TextField
                    sx={{
                      width: "25vw",
                      border: "3px solid #2f15d1",
                      margin: "10px",
                    }}
                    className="outlined-basic"
                    type="text"
                    placeholder="Search for a User"
                  ></TextField>
                </MenuItem>
                <MenuItem value={""}></MenuItem>
                <MenuItem value={""}></MenuItem>
              </Select>
            </FormControl>
            <div>
              <p className="section-heading">Active Chats:</p>
              {chats.map((chat, idx) => (
                <div
                  style={{
                    // width:"25vw",
                    margin: "5px",
                    alignItems: "center",
                    justifyContent: "center",
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
          </Box>
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

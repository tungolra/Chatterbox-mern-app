import React, { useEffect, useRef, useState } from "react";
import Conversation from "../Conversation/Conversation";
import NavBar from "../NavBar/NavBar";
import { Box } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import "./ChatList.css";

export default function ChatList({
  user,
  setUser,
  startChat,
  setChat,
  isOnline,
  setNewMessage,
  messages,
  newMessage,
  chats,
  allUsers,
  setAllUsers,
  currentChat,
}) {
  return (
    <div className="chatlist-container">
      <div>
        <NavBar user={user} setUser={setUser} />
      </div>
      <p className="find-friend-header">Search or start a new chat...</p>
      <FormControl
        variant="standard"
        InputProps={{
          disableUnderline: true,
        }}
      >
        <Select className="find-friend-searchbar">
          <InputLabel
            sx={{ border: "none", textAlign: "centre", width: "80%" }}
          >
            Search or start a new chat...
          </InputLabel>
          {allUsers.map((friend, idx) => (
            <MenuItem key={idx} onClick={() => startChat(friend._id)}>
              {friend?.firstname} {friend?.lastname}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <Box className="friendlist-container">
        {chats.map((chat, idx) => (
          <div
            style={{
              alignItems: "center",
              justifyContent: "center",
            }}
            key={idx}
            onClick={() => setChat(chat)}
          >
            <Conversation
              currentChat={currentChat}
              currentUserId={user._id}
              chat={chat}
              online={isOnline(chat)}
              user={user}
            />
          </div>
        ))}
      </Box>
    </div>
  );
}

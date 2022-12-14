import React, { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import "./Conversation.css";
import axios from "axios";
import { Badge } from "@mui/material";
import MailOutlineIcon from "@mui/icons-material/MailOutline";

export default function Conversation({
  currentUserId,
  chat,
  online,
  currentChat,
  messages,
}) {
  const [userData, setUserData] = useState(null);
  const [unreadMessages, setUnreadMessages] = useState(null);

  //find all users but the current user
  useEffect(() => {
    const friendId = chat.members.find((id) => id !== currentUserId);
    async function getUserData() {
      try {
        const { data } = await axios.get(`api/users/${friendId}`);
        setUserData(data);
      } catch (error) {
        console.log(error);
      }
    }
    getUserData();
  }, []);

  //still working on this
  useEffect(() => {
    const countUnreadMessages = async () => {
      try {
        let count = 0;
        let { data } = await axios.get(`api/messages/${chat._id}`);
        data.forEach((message) => {
          if (message.readStatus === null) {
            count++;
          }
        });
        setUnreadMessages(count);
      } catch (error) {
        console.log(error);
      }
    };
    countUnreadMessages();
  }, [unreadMessages]);
  // console.log(messages[messages.length-1].text)
  return (
    <div className="conversation-container" 
    >
      {online ? (
        <img
          className="profileImg"
          src={
            userData?.profilePicture === ""
              ? "./logo192.png"
              : userData?.profilePicture
          }
          style={{ border: "4px solid limegreen" }}
        />
      ) : (
        <img
          className="profileImg"
          src={
            userData?.profilePicture === ""
              ? "./logo192.png"
              : userData?.profilePicture
          }
        />
      )}
      <div className="chatmember-lastmessage">
        <span className="chatlist-name">
          {`${userData?.firstname} ${userData?.lastname}`}
        </span>
        {/* <span className="last-message">
          placeholder last message
        </span> */}
      </div>
      {unreadMessages === 0 ? (
        <MailOutlineIcon color="primary"></MailOutlineIcon>
      ) : (
        <Badge
          className="badge"
          color="secondary"
          badgeContent={unreadMessages}
        >
          <MailOutlineIcon color="primary"></MailOutlineIcon>
        </Badge>
      )}
    </div>
  );
}

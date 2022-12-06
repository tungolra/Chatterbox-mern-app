import React, { useEffect, useState } from "react";
import { Input, Grid, TextField } from "@mui/material";
import './Conversation.css';
import axios from "axios";

export default function Conversation({ currentUserId, chat, online }) {
  const [userData, setUserData] = useState(null);

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

  return (

    <Grid container justify="flex-end" spacing={2}>     
      
      <Grid item xs={1}><img className="profileImg" src={null ? "https://ga-chatterbox.s3.ca-central-1.amazonaws.com/user.png" : userData?.profilePicture} /></Grid>
      <Grid item xs={8}><div>{userData?.firstname}</div></Grid>
      <Grid item xs={3}><img className="statusIcon" src={online ? "https://ga-chatterbox.s3.ca-central-1.amazonaws.com/online-icon.png" : "https://ga-chatterbox.s3.ca-central-1.amazonaws.com/busy-icon.png"} /></Grid>
      
      <Grid item xs={1}><img className="profileImg" src={null ? "https://ga-chatterbox.s3.ca-central-1.amazonaws.com/user.png" : userData?.profilePicture} /></Grid>
      <Grid item xs={8}><div>{userData?.firstname}</div></Grid>
      <Grid item xs={3}><img className="statusIcon" src={online ? "https://ga-chatterbox.s3.ca-central-1.amazonaws.com/online.png" : "https://ga-chatterbox.s3.ca-central-1.amazonaws.com/offline.png"} /></Grid>
     
      <Grid item xs={4}>Chat Member is: {online ? "online" : "offline"}</Grid>      
    </Grid>    
  );
}

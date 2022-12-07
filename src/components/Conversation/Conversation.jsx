import React, { useEffect, useState } from "react";
import axios from "axios";
import { Grid, Avatar, Badge } from "@mui/material";
import Stack from "@mui/material/Stack";
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
    <Grid
      container
      spacing={2}
      sx={{ width:"25vw",padding: "5px", justifyContent: "center", alignItems: "center" }}
    >
      <Grid item xs={2}>
        <Avatar sx={{ margin: "auto", backgroundColor: "#A378FF",border: "3px solid #2f15d1" }}></Avatar>
      </Grid>
      <Grid item xs={6}>
        <span>{userData?.firstname}</span>
      </Grid>
      <Grid item xs={3}>
        Chat Member is: {online ? "online" : "offline"}
      </Grid>
    </Grid>
  );
}

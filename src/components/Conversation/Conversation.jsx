import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container, Grid } from "@mui/material";
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
    <Grid container spacing={3}>
      <div>
        <br />
        <Grid item xs={1}>
          Image here
        </Grid>
        <Grid item xs={1}>
          <span>{userData?.firstname}</span>
        </Grid>
        <Grid item xs={1}>
          <br />
          Chat Member is: {online ? "online" : "offline"}
        </Grid>
      </div>
    </Grid>
  );
}

import React, { useEffect, useState } from "react";
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
    <div>
      <br />
      <span>
        {userData?.firstname}
        <br />
        Chat Member is: {online ? "online" : "offline"}
      </span>
    </div>
  );
}

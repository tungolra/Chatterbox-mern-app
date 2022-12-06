import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Conversation({ currentUserId, chat, online }) {
  const [userData, setUserData] = useState(null); //needed?

  //find all users but the current user
  useEffect(() => { 
    const userId = chat.members.find((id) => id !== currentUserId);//needed?
    async function getUserData() {
      try {
        await axios.get(`api/users/`);
      } catch (error) {
        console.log(error);
      }
    }
    getUserData();
  }, []);
  return (
    <div>
      Conversation Component: lists all of user's open chats
      <br />
      <span>
        Placeholder for selected chat (replace user's name): {chat._id}
        <br/>
        Chat Member is: {online ? "online" : "offline"}
      </span>
    </div>
  );
}

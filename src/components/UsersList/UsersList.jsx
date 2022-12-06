import axios from "axios";
import React, { useEffect, useState } from "react";

export default function UsersList({ user }) {
  const [allUsers, setAllUsers] = useState([]);

  useEffect(() => {
    const getAllUsers = async () => {
      try {
        let { data } = await axios.get(`api/users`);
        data = data.filter((users) => users._id != user._id);
        setAllUsers(data);
      } catch (error) {
        console.log(error);
      }
    };
    getAllUsers();
  }, []);

  async function handleClick(friendId) {
    console.log(user._id, friendId);
    try {
      await axios.post(`api/chats/create/${user._id}/${friendId}` );
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <div style={{ border: "1px solid black" }}>
        This UsersList gets data from DB of all users
        {allUsers.map((friend, idx) => (
          <div key={idx} onClick={() => handleClick(friend._id)}>
            {friend.firstname} {friend.lastname}
          </div>
        ))}
      </div>
    </>
  );
}

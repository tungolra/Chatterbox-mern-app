import axios from "axios";
import React, { useEffect, useState } from "react";

export default function UsersList({ user }) {

  // //set all users
  // useEffect(() => {
  //   const getAllUsers = async () => {
  //     try {
  //       let { data } = await axios.get(`api/users`);
  //       // do not include logged in user
  //       data = data.filter((users) => users._id != user._id);
  //       // do not include users with already active chats
  //       setAllUsers(data);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  //   getAllUsers();
  // }, []);


  // async function startChat(friendId) {
  //   try {
  //     await axios.post(`api/chats/create/${user._id}/${friendId}` );
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  return (
    <>
      <div style={{ border: "1px solid black" }}>
        This UsersList gets data from DB of all users

      </div>
    </>
  );
}

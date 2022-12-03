import React, { useEffect, useState } from 'react'
import axios from "axios"

export default function Conversation({currentUserId, chat}) {
    const [userData, setUserData] = useState(null);
    
    //find all users but the current user


    useEffect(()=>{
        const userId = chat.members.find((id) => id !== currentUserId)
        async function getUserData() { 
            try {
                //axios call
                let response = await axios.get(`api/users/`)

            } catch (error) {
                console.log(error)
            }
        }

    })
  return (
    <div>
        Conversation Component: lists all of user's open chats
        <br/>
        <span>Convo 1...</span>
    </div>
  )
}
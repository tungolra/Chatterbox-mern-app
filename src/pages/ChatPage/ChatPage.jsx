import React from "react";
import ChatList from "../../components/ChatList/ChatList";

export default function ChatPage({user}) {
  return (
    <>
      <div>
        This Chat Page will contain the ChatList Component
      </div>
      <div>
        <ChatList user={user}/>
      </div>
    </>
  );
}

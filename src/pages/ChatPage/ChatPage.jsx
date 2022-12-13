import React from "react";
import ChatList from "../../components/ChatList/ChatList";
import "./ChatPage.css"

export default function ChatPage({ user, setUser }) {
  return (
    <>
      <div className="chatpage-container">
        <ChatList user={user} setUser={setUser} />
      </div>
    </>
  );
}

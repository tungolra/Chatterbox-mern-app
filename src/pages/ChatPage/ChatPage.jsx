import React from "react";
import ChatList from "../../components/ChatList/ChatList";
import UsersList from "../../components/UsersList/UsersList";

export default function ChatPage() {
  return (
    <>
      <div>
        This Chat Page will contain the ChatList and UsersList Components
      </div>
      <div>
        <UsersList />
      </div>
      <div>
        <ChatList />
      </div>
    </>
  );
}

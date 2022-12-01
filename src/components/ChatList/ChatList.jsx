import React from "react";
import ChatBox from "../ChatBox/ChatBox";

export default function ChatList() {
  return (
    <>
      <div style={{border: "1px solid black"}}>
        This ChatList gets data from DB of user's current convos
        <ul>
          <li>Convo #1 </li>
          <li>Convo #2 </li>
          <li>Convo #3 </li>
          <li>Convo #... </li>
        </ul>
      </div>
      <div> Convo selected ? show Chatbox : ""</div>
      <ChatBox/>
    </>
  );
}

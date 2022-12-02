import React from "react";
import Messages from "../Messages/Messages";
import InputEmoji from "react-input-emoji";

export default function ChatBox() {
  function handleChange(e) {}
  async function handleSend(e) {}
  return (
    <>
      <div style={{ border: "1px solid black" }}>
        This ChatBox will render the container for a conversation the user
        selects
        <hr />
        <Messages />
        <InputEmoji value="" onChange={handleChange} />
      </div>
    </>
  );
}

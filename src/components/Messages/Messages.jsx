import React, { useEffect, useRef, useState } from "react";
import { format } from "timeago.js";
import DeleteMessageModal from "../DeleteMessageModal/DeleteMessageModal";
import "./Messages.css";
// import datetime from datetime

export default function Messages({
  messages,
  setMessages,
  socket,
  currentChat,
  currentUserId,
}) {
  const scroll = useRef();
  const [modalOpened, setModalOpened] = useState(false);
  const [messageId, setMessageId] = useState(null);

  const time = (t) => {
    console.log(t);
  };

  time((t) => {
    console.log(t);
  });
  // scroll to last message
  useEffect(() => {
    scroll.current?.scrollIntoView({ behaviour: "smooth" });
  }, [messages]);

  return (
    <>
      <div className="messages-container">
        {messages.map((message, idx) => (
          <p
            className={
              message.senderId === currentUserId ? "message own" : "message"
            }
            ref={scroll}
            key={idx}
            onClick={() => {
              console.log("onclick msg id: ", message._id);
              setMessageId(message._id);
              setModalOpened(true);
            }}
          >
            {console.log(message)}
            {message.text} - {message._id}
            <br />
            Sent: {message.createdAt.slice(0, -5)}
            <br />
            Sent by: (sender variable goes here)
          </p>
        ))}
        {/* take out T using for loop */}
        {/* second slice formatted w time to hopefully not get military time*/}

        <DeleteMessageModal
          modalOpened={modalOpened}
          setModalOpened={setModalOpened}
          setMessages={setMessages}
          messageId={messageId}
          socket={socket}
          currentChat={currentChat}
          currentUserId={currentUserId}
        />
      </div>
    </>
  );
}

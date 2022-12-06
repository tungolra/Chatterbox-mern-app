import React, { useEffect, useRef, useState } from "react";
import { format } from "timeago.js";
import DeleteMessageModal from "../DeleteMessageModal/DeleteMessageModal";
import "./Messages.css"

export default function Messages({
  messages,
  setMessages,
  socket,
  currentChat,
  currentUserId,
}) {
  const scroll = useRef();
  const [modalOpened, setModalOpened] = useState(false);

  // scroll to last message
  useEffect(() => {
    scroll.current?.scrollIntoView({ behaviour: "smooth" });
  }, [messages]);

  return (
    <>
      <div className="messages-container">
        {messages.map((message, idx) => (
          <p
            className={message.senderId === currentUserId ? "message own" : "message"}
            ref={scroll}
            key={idx}
            onClick={() => setModalOpened(true)}
          >
            <DeleteMessageModal
              modalOpened={modalOpened}
              setModalOpened={setModalOpened}
              setMessages={setMessages}
              messageId={message._id}
              messages={messages}
              socket={socket}
              currentChat={currentChat}
              currentUserId={currentUserId}
            />
            {message.text}
            <br />
            Sent: {format(message.createdAt)}
            <br />
            Sent by: (sender variable goes here)
          </p>
        ))}
      </div>
    </>
  );
}

import React, { useEffect, useRef, useState } from "react";
import { format } from "timeago.js";
import DeleteMessageModal from "../DeleteMessageModal/DeleteMessageModal";
import "./Messages.css";
import Linkify from 'react-linkify';

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
            <Linkify>{message.text}</Linkify>
            <br />
            Sent: {format(message.createdAt)}
            <br />
            Sent by: (sender variable goes here)
          </p>
        ))}
        <DeleteMessageModal
          modalOpened={modalOpened}
          setModalOpened={setModalOpened}
          messages={messages}
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

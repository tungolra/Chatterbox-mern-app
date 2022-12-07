import React, { useEffect, useRef, useState } from "react";
import { format } from "timeago.js";
import DeleteMessageModal from "../DeleteMessageModal/DeleteMessageModal";
import "./Messages.css";
import Linkify from "react-linkify";
import { Button } from "@mui/material";

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
      <div className="message-data">
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
              <span className="sender-text">sender variable goes here</span>
              <br />
              <Linkify>{message.text}</Linkify>
              <br />
              Sent: {format(message.createdAt)}
              <br />
            </p>
          ))}
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
      </div>
    </>
  );
}

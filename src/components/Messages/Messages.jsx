import React, { useEffect, useRef, useState } from "react";
import DeleteMessageModal from "../DeleteMessageModal/DeleteMessageModal";
import "./Messages.css";
import Linkify from "react-linkify";
import moment from "moment";

export default function Messages({
  messages,
  setMessages,
  socket,
  currentChat,
  currentUserId,
  user,
  receiverData,
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
      {messages.map((message, idx) => (
        <p
          className={
            message.senderId === currentUserId ? "message own" : "message"
          }
          ref={scroll}
          key={idx}
          onClick={() => {
            setMessageId(message._id);
            setModalOpened(true);
          }}
        >
          <div className="message-contents">
            <span className="sender-text">
              {user._id === message.senderId
                ? ""
                : receiverData?.firstname}
            </span>
            <Linkify>{message.text}</Linkify>
            <span
              className={
                message.senderId === currentUserId
                  ? "timestamp-own"
                  : "timestamp"
              }
            >
              {moment(message.createdAt).format("LLL").slice(0)}
            </span>
          </div>
        </p>
      ))}

      <DeleteMessageModal
        modalOpened={modalOpened}
        setModalOpened={setModalOpened}
        setMessages={setMessages}
        messageId={messageId}
        messages={messages}
        socket={socket}
        currentChat={currentChat}
        currentUserId={currentUserId}
      />
    </>
  );
}

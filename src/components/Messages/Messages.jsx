import React, { useEffect, useRef, useState } from "react";
import { format } from "timeago.js";
import DeleteMessageModal from "../DeleteMessageModal/DeleteMessageModal";

export default function Messages({ messages }) {
  const scroll = useRef();
  const [modalOpened, setModalOpened] = useState(false);

  // const sender = messages.find((message)=> {
  // getUser call to server
  // })

  // scroll to last message
  useEffect(() => {
    scroll.current?.scrollIntoView({ behaviour: "smooth" });
  }, [messages]);

  function handleClick(e) {}

  return (
    <>
      <div>
        {messages.map((message, idx) => (
          <p ref={scroll} key={idx} onClick={() => setModalOpened(true)}>
            <DeleteMessageModal
              modalOpened={modalOpened}
              setModalOpened={setModalOpened}
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

import React, { useEffect, useRef } from "react";
import { format } from "timeago.js";

export default function Messages({ messages }) {
  const scroll = useRef();
  console.log(scroll);
  // const sender = messages.find((message)=> {
  // getUser call to server
  // })

  // scroll to last message
  useEffect(() => {
    scroll.current?.scrollIntoView({ behaviour: "smooth" });
  }, [messages]);
  return (
    <>
      <div>
        {messages.map((message, idx) => (
          <p ref={scroll} key={idx}>
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

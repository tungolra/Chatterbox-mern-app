import React from "react";
import { format } from "timeago.js";

export default function Messages({messages}) {

// const sender = messages.find((message)=> {
  // getUser call to server
// })
  return (
    <>
      <div>
        {messages.map((message, idx) => 
        
        <p key={idx}>{message.text}
        <br/>
        Sent: {format(message.createdAt)}
        <br/>
        Sent by: (sender variable goes here)
        </p>

        
        )}
        
      </div>
    </>
  );
}

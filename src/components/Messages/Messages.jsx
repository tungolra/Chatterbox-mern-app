import React from "react";

export default function Messages({messages}) {
  

  return (
    <>
      <div>
        {messages.map((message, idx) => 
        <p key={idx}>{message.text}</p>
        )}
        
      </div>
    </>
  );
}

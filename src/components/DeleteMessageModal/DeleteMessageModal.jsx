import React, { useState } from "react";
import { Modal, useMantineTheme } from "@mantine/core";
import axios from "axios"

export default function DeleteMessageModal({
  modalOpened,
  setModalOpened,
  setMessages,
  messageId,
  messages, 
  socket,
  currentChat,
  currentUserId

}) {
  const theme = useMantineTheme();

  function handleDelete() {
    const receiverId = currentChat?.members?.find((id) => id !== currentUserId)
    socket.current.emit("delete-message", { messages, receiverId, messageId})
    axios.delete(`/api/messages/${messageId}`)
    setModalOpened(false)
    // handleUpdate(setMessages)
  }

  return (
    <Modal
      overlayColor={
        theme.colorScheme === "dark"
          ? theme.colors.dark[9]
          : theme.colors.gray[2]
      }
      overlayOpacity={0.55}
      overlayBlur={3}
      opened={modalOpened}
      onClose={() => setModalOpened(false)}
    >
        <p>Delete Message?</p>
        <button onClick={() => handleDelete(messageId)}>Delete</button>
    </Modal>
  );
}

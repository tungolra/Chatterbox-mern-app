import React, { useState } from "react";
import { Modal, useMantineTheme } from "@mantine/core";
import axios from "axios"

export default function DeleteMessageModal({
  modalOpened,
  setModalOpened,
  setMessages,
  messageId,
  messages,
}) {
  const theme = useMantineTheme();


  function handleDelete() {
    setMessages(messages.filter((message) => message._id !== messageId))
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

import React, { useState } from "react";
import { Modal, useMantineTheme } from "@mantine/core";

export default function DeleteMessageModal({ modalOpened, setModalOpened }) {
  const theme = useMantineTheme();

  function handleChange(e) {}

  function handleSubmit(e) {}

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
      <form onSubmit={handleSubmit}>
        <p>Delete Message?</p>
        <button type="submit">Delete</button>
      </form>
    </Modal>
  );
}

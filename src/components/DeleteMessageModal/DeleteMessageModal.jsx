import { Modal, useMantineTheme } from "@mantine/core";
import axios from "axios";

export default function DeleteMessageModal({
  modalOpened,
  setModalOpened,
  setMessages,
  messageId,
  messages,
  socket,
  currentChat,
  currentUserId,
}) {
  const theme = useMantineTheme();

  async function handleDelete() {
    const receiverId = currentChat?.members?.find((id) => id !== currentUserId);
    socket.current.emit("delete-message", {
      messages,
      receiverId,
      messageId,
      currentUserId,
    });
    try {
      await axios.delete(`/api/messages/${messageId}`);
    } catch (error) {
      console.log(error);
    }
    setMessages(messages.filter(msg => msg._id !== messageId))
    setModalOpened(false);
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

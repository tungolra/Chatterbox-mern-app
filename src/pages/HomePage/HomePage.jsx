import React, { useState } from "react";
import UpdateUserModal from "../../components/UpdateUserModal/UpdateUserModal";
import { Button } from "@mui/material";

export default function Home({ user, setUser }) {
  const [modalOpened, setModalOpened] = useState(false);

  return (
    <>
      <div>
        <Button onClick={() => setModalOpened(true)}>Edit Profile</Button>
        <UpdateUserModal
          modalOpened={modalOpened}
          setModalOpened={setModalOpened}
          user={user}
          setUser={setUser}
        />
      </div>
    </>
  );
}

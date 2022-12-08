import React, { useState } from "react";
import UpdateUserModal from "../../components/UpdateUserModal/UpdateUserModal";
import { Input, Grid, Button } from "@mui/material";

export default function ProfilePage({ user, setUser }) {
  const [modalOpened, setModalOpened] = useState(false);

  return (
    <>
      <div>Profile Page</div>
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

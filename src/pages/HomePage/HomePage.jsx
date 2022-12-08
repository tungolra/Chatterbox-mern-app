import React, { useState } from "react";
import UpdateUserModal from "../../components/UpdateUserModal/UpdateUserModal";
import { Button } from "@mui/material";
import { Stack } from "react-bootstrap";

export default function Home({ user, setUser }) {
  const [modalOpened, setModalOpened] = useState(false);
  console.log(user);
  return (
    <>
      <div>
        <Stack>
          <div>{user?.firstname}</div>
          <div>{user?.lastname}</div>
          <div>{user?.email}</div>
          <div>{user?.profilePicture} PROFILE PICTURE HERE</div>
          <div>{user?.bio} BIO HERE</div>
        </Stack>
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

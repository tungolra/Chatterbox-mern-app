import React, { useState } from "react";
import UpdateUserModal from "../../components/UpdateUserModal/UpdateUserModal";
import { Input, Grid } from "@mui/material";

export default function ProfilePage({user,setUser}) {
  const [modalOpened, setModalOpened] = useState(false);
 
  return (
    <>
      <div>Profile Page</div>
      <div>
        <button onClick={() => setModalOpened(true)}>Edit Profile</button>
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

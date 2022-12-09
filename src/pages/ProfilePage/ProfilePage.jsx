import { useState } from "react";
import UpdateUserModal from "../../components/UpdateUserModal/UpdateUserModal";
import { Button, IconButton, Link } from "@mui/material";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import Stack from "@mui/material/Stack";
import ProfilePageDetails from "../../components/ProfilePageDetails/ProfilePageDetails"

export default function ProfilePage({user,setUser}) {
  const [modalOpened, setModalOpened] = useState(false);
  return (
    <>
      <ProfilePageDetails user={user}/>
      
        <IconButton>
          <Link onClick={() => setModalOpened(true)}>
            <SettingsOutlinedIcon color="primary"></SettingsOutlinedIcon>
          </Link>
        </IconButton>
        <UpdateUserModal
          modalOpened={modalOpened}
          setModalOpened={setModalOpened}
          user={user}
          setUser={setUser}
          />
    </>
  );
}

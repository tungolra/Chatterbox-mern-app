import { useState } from "react";
import UpdateUserModal from "../../components/UpdateUserModal/UpdateUserModal";
import { Button, Link, Grid } from "@mui/material";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import ProfileCard from "../../components/ProfileCard/ProfileCard";
import NavBar from "../../components/NavBar/NavBar";

export default function ProfilePage({ user, setUser }) {
  const [modalOpened, setModalOpened] = useState(false);
  return (
    <>
      <div>
        <NavBar user={user} setUser={setUser} />
      </div>
      <Button
        sx={{
          justifyContent: "right",
          alignContent: "right",
        }}
      ></Button>
      <div
        style={{
          margin: "10px",
          alignContent: "center",
        }}
      >
        <ProfileCard user={user} />
      </div>
      <UpdateUserModal
        modalOpened={modalOpened}
        setModalOpened={setModalOpened}
        user={user}
        setUser={setUser}
      />
      <Link>
        <SettingsOutlinedIcon
          color="primary"
          onClick={() => setModalOpened(true)}
        ></SettingsOutlinedIcon>
      </Link>
      <div>Edit Profile</div>
    </>
  );
}

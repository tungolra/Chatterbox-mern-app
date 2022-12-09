import React from "react";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import Stack from "@mui/material/Stack";
import { Button, IconButton, Link } from "@mui/material";

export default function ProfileCard({ user }) {
  return (
    <>
      <div className="user-info">
        <img
          className="profileImg"
          style={{
            margin: "auto",
            height: "200px",
            width: "200px",
          }}
          src={
            user?.profilePicture === "" ? "./logo192.png" : user?.profilePicture
          }
        />
        <div className="text-name">
          {user?.firstname}&nbsp;{user?.lastname}
        </div>
        <div className="text-secondary email">
          <strong>Email:&nbsp;</strong>
          {user?.email}
          <br />
          <strong>Username:&nbsp;</strong>@{user?.username}
        </div>
        <div className="bio-text">
          <strong>
            Bio:
            <br />
          </strong>
          {user?.about}
        </div>
      </div>
    </>
  );
}

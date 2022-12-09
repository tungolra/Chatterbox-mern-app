import React from "react";
import Stack from "@mui/material/Stack";
import ChatList from "../../components/ChatList/ChatList";
import { Grid, Card } from "@mui/material";

export default function ProfilePageDetails({ user }) {
  return (
    <>
      {/* <Grid container spacing={2}> */}
      {/* Left Side Start */}
      {/* <ChatList/> */}
      {/* Left Side End */}

      {/* Right Side Start */}
      <Grid item xs={4}>
        <div>
          <Stack>
            <div>
              <img
                alt="Profile Image"
                src={
                  user?.profilePicture === ""
                    ? "./logo192.png"
                    : user?.profilePicture
                }
              />
            </div>
            <Card>
              <div
                style={{
                  margin: "5px",
                  alignItems: "center",
                  justifyContent: "center",
                  paddingTop: "5px",
                  fontSize: "22px",
                  backgroundColor: "#2f15d1",
                }}
              >
                <div
                  style={{
                    margin: "5px",
                    alignItems: "center",
                    justifyContent: "center",
                    paddingTop: "5px",
                  }}
                >
                  {user?.firstname}
                </div>
                <div
                  style={{
                    margin: "5px",
                    alignItems: "center",
                    justifyContent: "center",
                    paddingTop: "5px",
                  }}
                >
                  {user?.lastname}
                </div>
                <div
                  style={{
                    margin: "5px",
                    alignItems: "center",
                    justifyContent: "center",
                    paddingTop: "5px",
                  }}
                >
                  {user?.email}
                </div>
                <div
                  style={{
                    margin: "5px",
                    alignItems: "center",
                    justifyContent: "center",
                    paddingTop: "5px",
                  }}
                >
                  {user?.bio} BIO HERE
                </div>
              </div>
            </Card>
          </Stack>
        </div>
      </Grid>
      {/* Right Side End */}
      {/* </Grid> */}
      <Grid item xs={2}></Grid>
    </>
  );
}

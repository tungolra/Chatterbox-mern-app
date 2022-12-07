// LoginForm.jsx

import { useState } from "react";
import * as usersService from "../../utilities/UserRequests/users-service";
// mui below
import Button from "@mui/material/Button";
import { Box, Input, TextField, Link, Container } from "@mui/material";

export default function LogInForm({ setUser, showSignUp, setShowSignUp }) {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  function handleChange(evt) {
    setCredentials({ ...credentials, [evt.target.name]: evt.target.value });
    setError("");
  }

  async function handleSubmit(evt) {
    // Prevent form from being submitted to the server
    evt.preventDefault();
    try {
      // The promise returned by the signUp service method
      // will resolve to the user object included in the
      // payload of the JSON Web Token (JWT)
      const user = await usersService.logIn(credentials);
      // how does this work again...?
      setUser(user);
    } catch {
      setError("Log In Failed - Try Again");
    }
  }

  return (
    <div>
      <Container component="main" sx={{ height: "100vh" }}>
        <h1 className="logo">chatter[box]</h1>
        <Box
          component="form"
          autoComplete="off"
          onSubmit={handleSubmit}
          sx={{ display: "flex", flexDirection: "column" }}
        >
          <Input
            className="outlined-basic"
            variant="outlined"
            type="text"
            name="email"
            value={credentials.email}
            onChange={handleChange}
            placeholder="Email"
            margin="normal"
            fullWidth
            required
            autoFocus
            disableUnderline
          />

          <Input
            className="outlined-basic"
            variant="outlined"
            type="password"
            name="password"
            value={credentials.password}
            onChange={handleChange}
            placeholder="Password"
            margin="normal"
            fullWidth
            required
            autoFocus
            disableUnderline
          />

          <Link variant="contained" onClick={() => setShowSignUp(!showSignUp)}>
            {showSignUp
              ? "Been here before? Log In!"
              : "New around here? Sign Up!"}
          </Link>
          <Box>
            <Button variant="contained" type="submit" fullWidth autoFocus>
              LOG IN
            </Button>
          </Box>
        </Box>
      </Container>
      <p className="error-message">&nbsp;{error}</p>
    </div>
  );
}
